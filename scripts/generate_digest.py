#!/usr/bin/env python3
"""
Weekly AV/Autonomy Digest Generator

Reads inbox emails, fetches RSS feeds, scrapes PM job listings, then uses
Claude to synthesize everything into a chief-of-staff-style markdown brief.

Runs in GitHub Actions weekly. Designed to be idempotent within a week
(won't generate two digests for the same period).

Usage:
    python scripts/generate_digest.py

Required env vars:
    ANTHROPIC_API_KEY - Anthropic API key with Claude Sonnet 4.5+ access

Optional env vars:
    SKIP_GUARD_DAYS - skip if digest exists within N days (default: 5)
    FORCE_RUN - if "1", bypass skip guard and always generate
"""

from __future__ import annotations

import json
import os
import re
import sys
import time
from dataclasses import dataclass, field
from datetime import datetime, timezone, timedelta
from pathlib import Path
from typing import Any

import feedparser
import requests
from anthropic import Anthropic


# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

REPO_ROOT = Path(__file__).resolve().parent.parent
INBOX_DIR = REPO_ROOT / "inbox"
DIGEST_DIR = REPO_ROOT / "digests" / "weekly-av"
DATA_DIR = REPO_ROOT / "data"
JOBS_STATE_FILE = DATA_DIR / "jobs.json"

LOOKBACK_DAYS = 7
SKIP_GUARD_DAYS = int(os.environ.get("SKIP_GUARD_DAYS", "5"))
FORCE_RUN = os.environ.get("FORCE_RUN") == "1"

MODEL_ID = "claude-sonnet-4-5"
MAX_OUTPUT_TOKENS = 16000

RSS_FEEDS = {
    "AV Market Strategist": "https://avmarketstrategist.substack.com/feed",
    "Driverless Digest": "https://www.thedriverlessdigest.com/feed",
    "Road to Autonomy": "https://www.roadtoautonomy.com/feed/",
    "Platform Aeronaut": "https://www.platformaeronaut.com/feed",
    "r/SelfDrivingCars": "https://www.reddit.com/r/SelfDrivingCars/top.rss?t=week",
    "r/waymo": "https://www.reddit.com/r/waymo/top.rss?t=week",
}

# Companies with clean public APIs (the ~80% coverage)
GREENHOUSE_COMPANIES = {
    "Waymo": "waymo",
    "Nuro": "nuro",
    "DoorDash": "doordashusa",
    "Applied Intuition": "appliedintuition",
    "Kodiak Robotics": "kodiak",
    "Anduril": "andurilindustries",
}

LEVER_COMPANIES = {
    "Zoox": "zoox",
    "WeRide": "weride",
}

# Companies that block public access — we'll note them but skip scraping
# (Tesla, Uber, Rivian, NVIDIA, Joby — can layer in browser-based scraping later)
SKIPPED_COMPANIES = ["Tesla", "Uber", "Rivian", "NVIDIA", "Joby Aviation"]

PM_INCLUDE_KEYWORDS = [
    "product manager",
    "director of product",
    "director, product",
    "vp of product",
    "vp, product",
    "head of product",
    "chief product officer",
    "product lead",
    "group product manager",
    "principal product",
    "staff product",
    "senior product",
    "lead product",
]

PM_EXCLUDE_KEYWORDS = [
    "program manager",
    "tpm",
    "project manager",
    "product marketing",
    "product designer",
    "product design",
    "product operations",
    "product specialist",
    "product analyst",
]


# ---------------------------------------------------------------------------
# Data types
# ---------------------------------------------------------------------------


@dataclass
class Job:
    company: str
    title: str
    location: str
    url: str
    job_id: str
    is_new: bool = False

    def stable_key(self) -> str:
        return f"{self.company}::{self.job_id or self.url}"

    def to_state_dict(self) -> dict[str, str]:
        return {
            "id": self.job_id,
            "company": self.company,
            "title": self.title,
            "location": self.location,
            "url": self.url,
        }


@dataclass
class FeedItem:
    source: str
    title: str
    link: str
    published: str
    summary: str


@dataclass
class InboxItem:
    source: str
    subject: str
    date: str
    path: str
    body: str


@dataclass
class CollectedContent:
    inbox: list[InboxItem] = field(default_factory=list)
    feeds: list[FeedItem] = field(default_factory=list)
    jobs: list[Job] = field(default_factory=list)
    unable_companies: list[str] = field(default_factory=list)


# ---------------------------------------------------------------------------
# Skip guard
# ---------------------------------------------------------------------------


def should_skip() -> tuple[bool, str]:
    """Check if a recent digest already exists; if so, skip."""
    if FORCE_RUN:
        return False, "FORCE_RUN=1, bypassing skip guard"

    if not DIGEST_DIR.exists():
        return False, "No digest directory yet"

    digests = sorted(
        (p for p in DIGEST_DIR.glob("*.md") if re.match(r"\d{4}-\d{2}-\d{2}\.md", p.name)),
        reverse=True,
    )
    if not digests:
        return False, "No prior digests found"

    latest = digests[0]
    latest_date_str = latest.stem
    try:
        latest_date = datetime.strptime(latest_date_str, "%Y-%m-%d").date()
    except ValueError:
        return False, f"Could not parse date from {latest.name}"

    age = (datetime.now(timezone.utc).date() - latest_date).days
    if age < SKIP_GUARD_DAYS:
        return True, f"Most recent digest {latest_date_str} is {age} days old (< {SKIP_GUARD_DAYS})"

    return False, f"Most recent digest {latest_date_str} is {age} days old, generating new one"


# ---------------------------------------------------------------------------
# Inbox reading
# ---------------------------------------------------------------------------


def read_inbox() -> list[InboxItem]:
    """Read all inbox markdown files from the last LOOKBACK_DAYS."""
    cutoff = datetime.now(timezone.utc).date() - timedelta(days=LOOKBACK_DAYS)
    items: list[InboxItem] = []

    if not INBOX_DIR.exists():
        return items

    for date_dir in sorted(INBOX_DIR.iterdir()):
        if not date_dir.is_dir():
            continue
        # Directory names are YYYY-MM-DD
        try:
            dir_date = datetime.strptime(date_dir.name, "%Y-%m-%d").date()
        except ValueError:
            continue
        if dir_date < cutoff:
            continue

        for md_file in sorted(date_dir.glob("*.md")):
            try:
                text = md_file.read_text(encoding="utf-8")
            except Exception as e:
                print(f"  ! Could not read {md_file}: {e}", file=sys.stderr)
                continue

            # Parse YAML-ish frontmatter loosely
            source = md_file.stem.split("--")[0]
            subject = ""
            date_str = date_dir.name
            if text.startswith("---"):
                end = text.find("---", 3)
                if end != -1:
                    frontmatter = text[3:end]
                    for line in frontmatter.splitlines():
                        if line.startswith("source:"):
                            source = line.split(":", 1)[1].strip()
                        elif line.startswith("subject:"):
                            subject = line.split(":", 1)[1].strip().strip('"')
                        elif line.startswith("date:"):
                            date_str = line.split(":", 1)[1].strip()
                    text = text[end + 3 :]

            # Truncate very long bodies to keep prompt size manageable
            body = text.strip()
            if len(body) > 8000:
                body = body[:8000] + "\n\n[...truncated for length...]"

            items.append(
                InboxItem(
                    source=source,
                    subject=subject,
                    date=date_str,
                    path=str(md_file.relative_to(REPO_ROOT)),
                    body=body,
                )
            )

    return items


# ---------------------------------------------------------------------------
# RSS feeds
# ---------------------------------------------------------------------------


def fetch_feeds() -> list[FeedItem]:
    """Fetch RSS feeds; only keep items from the last LOOKBACK_DAYS."""
    cutoff = datetime.now(timezone.utc) - timedelta(days=LOOKBACK_DAYS)
    items: list[FeedItem] = []

    for source, url in RSS_FEEDS.items():
        try:
            parsed = feedparser.parse(url)
        except Exception as e:
            print(f"  ! Feed error for {source}: {e}", file=sys.stderr)
            continue

        for entry in parsed.entries[:25]:  # cap per-feed
            published_dt = None
            for attr in ("published_parsed", "updated_parsed"):
                struct = getattr(entry, attr, None)
                if struct:
                    published_dt = datetime(*struct[:6], tzinfo=timezone.utc)
                    break
            if published_dt and published_dt < cutoff:
                continue

            summary = getattr(entry, "summary", "") or getattr(entry, "description", "")
            # Strip HTML aggressively
            summary = re.sub(r"<[^>]+>", " ", summary)
            summary = re.sub(r"\s+", " ", summary).strip()
            if len(summary) > 2000:
                summary = summary[:2000] + "..."

            items.append(
                FeedItem(
                    source=source,
                    title=getattr(entry, "title", "(untitled)"),
                    link=getattr(entry, "link", ""),
                    published=published_dt.isoformat() if published_dt else "",
                    summary=summary,
                )
            )

    return items


# ---------------------------------------------------------------------------
# Jobs scraping
# ---------------------------------------------------------------------------


def title_is_pm(title: str) -> bool:
    t = title.lower()
    if any(ex in t for ex in PM_EXCLUDE_KEYWORDS):
        return False
    return any(inc in t for inc in PM_INCLUDE_KEYWORDS)


def fetch_greenhouse_jobs(company: str, slug: str) -> list[Job]:
    url = f"https://boards-api.greenhouse.io/v1/boards/{slug}/jobs"
    try:
        r = requests.get(url, timeout=20)
        r.raise_for_status()
        data = r.json()
    except Exception as e:
        print(f"  ! Greenhouse fetch failed for {company}: {e}", file=sys.stderr)
        return []

    jobs: list[Job] = []
    for j in data.get("jobs", []):
        title = j.get("title", "")
        if not title_is_pm(title):
            continue
        location = (j.get("location") or {}).get("name") or "—"
        jobs.append(
            Job(
                company=company,
                title=title,
                location=location,
                url=j.get("absolute_url", ""),
                job_id=str(j.get("id", "")),
            )
        )
    return jobs


def fetch_lever_jobs(company: str, slug: str) -> list[Job]:
    url = f"https://api.lever.co/v0/postings/{slug}?mode=json"
    try:
        r = requests.get(url, timeout=20)
        r.raise_for_status()
        data = r.json()
    except Exception as e:
        print(f"  ! Lever fetch failed for {company}: {e}", file=sys.stderr)
        return []

    jobs: list[Job] = []
    for j in data:
        title = j.get("text", "")
        if not title_is_pm(title):
            continue
        loc = ((j.get("categories") or {}).get("location")) or "—"
        jobs.append(
            Job(
                company=company,
                title=title,
                location=loc,
                url=j.get("hostedUrl", ""),
                job_id=str(j.get("id", "")),
            )
        )
    return jobs


def load_previous_jobs_state() -> set[str]:
    if not JOBS_STATE_FILE.exists():
        return set()
    try:
        data = json.loads(JOBS_STATE_FILE.read_text())
        return {f"{j['company']}::{j['id'] or j['url']}" for j in data.get("jobs", [])}
    except Exception as e:
        print(f"  ! Could not load previous jobs state: {e}", file=sys.stderr)
        return set()


def fetch_all_jobs() -> tuple[list[Job], list[str]]:
    all_jobs: list[Job] = []
    unable: list[str] = []

    for company, slug in GREENHOUSE_COMPANIES.items():
        all_jobs.extend(fetch_greenhouse_jobs(company, slug))

    for company, slug in LEVER_COMPANIES.items():
        all_jobs.extend(fetch_lever_jobs(company, slug))

    # Mark new jobs by comparing against previous state
    previous_keys = load_previous_jobs_state()
    for job in all_jobs:
        if job.stable_key() not in previous_keys:
            job.is_new = True

    unable.extend(SKIPPED_COMPANIES)
    return all_jobs, unable


def save_jobs_state(jobs: list[Job]) -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    state = {
        "last_updated": datetime.now(timezone.utc).isoformat(),
        "jobs": [j.to_state_dict() for j in jobs],
    }
    JOBS_STATE_FILE.write_text(json.dumps(state, indent=2))


# ---------------------------------------------------------------------------
# Prompt construction + Claude call
# ---------------------------------------------------------------------------


def build_prompt(content: CollectedContent, week_label: str) -> str:
    # Inbox section
    inbox_text = "\n\n".join(
        f"### {item.source} — {item.subject}\n*Date: {item.date}*\n\n{item.body}"
        for item in content.inbox
    )

    # Feeds section
    feeds_text = "\n\n".join(
        f"### {item.source} — {item.title}\n*Published: {item.published}*\nLink: {item.link}\n\n{item.summary}"
        for item in content.feeds
    )

    # Jobs section — present as structured data for Claude to format
    jobs_by_company: dict[str, list[Job]] = {}
    for job in content.jobs:
        jobs_by_company.setdefault(job.company, []).append(job)

    jobs_lines: list[str] = []
    for company in sorted(jobs_by_company.keys(), key=lambda c: -len(jobs_by_company[c])):
        jobs = jobs_by_company[company]
        # NEW first, then alpha
        jobs.sort(key=lambda j: (not j.is_new, j.title.lower()))
        jobs_lines.append(f"\n**{company}** ({len(jobs)} open roles):")
        for j in jobs:
            new_tag = " [NEW]" if j.is_new else ""
            jobs_lines.append(f"- {j.title} — {j.location} — {j.url}{new_tag}")

    companies_no_roles = [
        c for c in list(GREENHOUSE_COMPANIES) + list(LEVER_COMPANIES)
        if c not in jobs_by_company
    ]

    jobs_text = "\n".join(jobs_lines)
    no_roles_text = ", ".join(companies_no_roles) if companies_no_roles else "(none)"
    unable_text = ", ".join(content.unable_companies) if content.unable_companies else "(none)"

    return f"""You are writing "The Autonomy Brief" — a weekly chief-of-staff style intelligence brief for Chase, a product manager who wants to stay current on autonomous vehicles and the broader autonomy space, and is actively looking to return to the AV industry.

## Style
- Tone: Professional analyst briefing. Direct, confident, not breathless.
- Length: 5-7 minute read for the news sections
- Every news item must cite its source in parentheses, e.g. *(AV Market Strategist)*
- Include links to source material where possible
- Filter aggressively for AV/autonomy/robotics/transportation relevance — broader sources (Stratechery, Not Boring, Ben Evans, TBPN, StrictlyVC, Astral Codex Ten, SWL) should only appear when they touch on these topics
- Omit empty categories rather than leaving them blank
- Output ONLY the markdown digest — no preamble, no postscript, no meta-commentary

## Required output format

```markdown
# The Autonomy Brief
**Week of {week_label} | ~5-7 min read**

---

## Executive Summary
- 3-5 bullet points. One sentence each with source citation in parentheses.

---

## Key Developments

### Market Moves
- 1-2 sentences + source per item.

### Regulatory & Policy
[only if there's content]

### Technology & Product
[only if there's content]

### Capital & Financials
[only if there's content]

### Safety & Operations
[only if there's content]

---

## Strategic Takeaways
2-3 paragraphs connecting dots. Source citations included.

---

## Worth Your Time
2-3 specific pieces. One line + link each.

---

## On the Radar
3-5 early signals. One line + source each.

---

## Open Roles — Product Management

*Live PM openings from autonomy, mobility, and defense tech companies. New roles since last week marked with 🆕.*

[For each company that has roles, render as:]

### Company Name (N open roles)
- 🆕 **Title** — Location · [Apply →](url)
- **Title** — Location · [Apply →](url)

*Companies with no current PM openings: [list]*
*Unable to retrieve this week: [list]*

---

## Source Index

### Newsletters & Blogs
| Source | Relevant Content This Period |
|---|---|

### Reddit
| Source | Relevant Content This Period |
|---|---|

### Not Included
Sources with no AV-relevant content this period.

---

*Generated {datetime.now(timezone.utc).strftime("%B %d, %Y")}*
```

## Input content

### Newsletter emails from inbox (past 7 days)

{inbox_text if inbox_text else "(none)"}

---

### RSS feed items (past 7 days)

{feeds_text if feeds_text else "(none)"}

---

### Open PM roles (already filtered and tagged)

Companies with open roles:
{jobs_text if jobs_text else "(none)"}

Companies with no current PM roles: {no_roles_text}
Companies we couldn't retrieve this week: {unable_text}

For each job marked [NEW], render with 🆕 prefix. Sort companies by role count (most first). Within a company, list NEW first, then alphabetical by title.

---

Now generate the digest. Output ONLY the markdown, nothing else.
"""


def call_claude(prompt: str) -> str:
    client = Anthropic()  # reads ANTHROPIC_API_KEY from env

    print(f"  Calling Claude ({MODEL_ID}); prompt size: {len(prompt):,} chars")
    t0 = time.monotonic()

    response = client.messages.create(
        model=MODEL_ID,
        max_tokens=MAX_OUTPUT_TOKENS,
        messages=[{"role": "user", "content": prompt}],
    )

    elapsed = time.monotonic() - t0
    print(f"  Claude responded in {elapsed:.1f}s")
    print(f"  Usage: input={response.usage.input_tokens}, output={response.usage.output_tokens}")

    text_parts = [block.text for block in response.content if block.type == "text"]
    return "\n".join(text_parts).strip()


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------


def main() -> int:
    print("=" * 60)
    print("AV Weekly Digest Generator")
    print("=" * 60)

    if not os.environ.get("ANTHROPIC_API_KEY"):
        print("ERROR: ANTHROPIC_API_KEY not set", file=sys.stderr)
        return 1

    skip, reason = should_skip()
    print(f"\nSkip guard: {reason}")
    if skip:
        print("\nSkipping run — recent digest exists.")
        return 0

    today = datetime.now(timezone.utc).date()
    week_start = today - timedelta(days=LOOKBACK_DAYS - 1)
    week_label = f"{week_start.strftime('%B %d')}–{today.strftime('%B %d, %Y')}"

    print(f"\nGenerating digest for week of {week_label}")

    # 1. Read inbox
    print("\n[1/4] Reading inbox...")
    inbox_items = read_inbox()
    print(f"  Found {len(inbox_items)} emails in last {LOOKBACK_DAYS} days")

    # 2. Fetch RSS feeds
    print("\n[2/4] Fetching RSS feeds...")
    feed_items = fetch_feeds()
    print(f"  Got {len(feed_items)} feed items")

    # 3. Fetch jobs
    print("\n[3/4] Fetching PM job listings...")
    jobs, unable = fetch_all_jobs()
    new_count = sum(1 for j in jobs if j.is_new)
    print(f"  Found {len(jobs)} PM roles ({new_count} new); unable: {unable}")

    content = CollectedContent(
        inbox=inbox_items,
        feeds=feed_items,
        jobs=jobs,
        unable_companies=unable,
    )

    # 4. Call Claude
    print("\n[4/4] Synthesizing with Claude...")
    prompt = build_prompt(content, week_label)
    digest_md = call_claude(prompt)

    # Save digest
    DIGEST_DIR.mkdir(parents=True, exist_ok=True)
    digest_path = DIGEST_DIR / f"{today.isoformat()}.md"
    digest_path.write_text(digest_md + "\n")
    print(f"\n✓ Digest written: {digest_path.relative_to(REPO_ROOT)}")

    # Save jobs state for next week's NEW detection
    save_jobs_state(jobs)
    print(f"✓ Jobs state updated: {JOBS_STATE_FILE.relative_to(REPO_ROOT)}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
