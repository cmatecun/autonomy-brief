# Autonomy Brief

Personal intelligence briefing system. Synthesizes newsletters, blogs, RSS feeds, Reddit, and live PM job listings into a weekly chief-of-staff-style markdown brief on autonomous vehicles and adjacent industries.

## Architecture

```
Gmail (newsletters)
  │
  └─► Google Apps Script (gmail-to-github.gs, runs daily)
        │
        └─► commits to inbox/YYYY-MM-DD/*.md
              │
              ▼
GitHub Actions (weekly-digest.yml, runs Mondays 8am ET)
  │
  ├─► scripts/generate_digest.py
  │     reads inbox/ + RSS feeds + jobs APIs
  │     calls Anthropic API for synthesis
  │     writes digests/weekly-av/YYYY-MM-DD.md
  │     writes data/jobs.json
  │
  └─► commits + pushes back to repo
        │
        ▼
Google Apps Script (email-digest.gs, runs every 2 hours)
  │
  └─► detects new digest, emails it
```

## Repo layout

- `inbox/` — newsletter content extracted from Gmail (one file per email)
- `digests/weekly-av/` — generated weekly briefs
- `data/jobs.json` — previous week's job snapshot, used to flag NEW roles
- `config/sources.yaml` — content source list
- `config/jobs-companies.yaml` — job scraping configuration
- `scripts/generate_digest.py` — Python digest generator
- `scripts/gmail-to-github.gs` — Apps Script: Gmail → repo
- `scripts/email-digest.gs` — Apps Script: repo → email
- `.github/workflows/weekly-digest.yml` — GitHub Actions schedule

## Required GitHub Secret

- `ANTHROPIC_API_KEY` — set in repo Settings → Secrets and variables → Actions

## Running manually

In the GitHub Actions tab, find "Weekly AV Digest" and click "Run workflow". Optionally set the `force` input to `true` to bypass the skip guard.

## Skip guard

The script won't generate a new digest if one exists from within the last 5 days. Override with `FORCE_RUN=1` (locally) or the workflow input.
