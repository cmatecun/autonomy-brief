/**
 * Gmail to GitHub — Autonomy Brief Email Extractor
 *
 * This Google Apps Script reads emails labeled "Claude-Digest" in Gmail,
 * extracts the content, and pushes it to the autonomy-brief GitHub repo.
 *
 * Setup:
 * 1. Go to https://script.google.com and create a new project
 * 2. Paste this entire file
 * 3. Set your GitHub token in Script Properties (see setGitHubToken function)
 * 4. Run setGitHubToken() once to store your token
 * 5. Run extractAndPush() manually to test
 * 6. Set up a daily trigger via createDailyTrigger()
 */

// ============================================================
// CONFIGURATION
// ============================================================

const CONFIG = {
  GMAIL_LABEL: "Claude-Digest",
  GITHUB_REPO: "cmatecun/autonomy-brief",
  GITHUB_BRANCH: "main",
  INBOX_PATH: "inbox",
  PROCESSED_LABEL: "Claude-Digest/Processed",
  MAX_EMAILS_PER_RUN: 50,
  LOOKBACK_DAYS: 7
};

// ============================================================
// MAIN FUNCTION
// ============================================================

/**
 * Main entry point. Reads unprocessed Claude-Digest emails,
 * extracts content, and pushes to GitHub.
 */
function extractAndPush() {
  const token = getGitHubToken();
  if (!token) {
    Logger.log("ERROR: No GitHub token found. Run setGitHubToken() first.");
    return;
  }

  // Get or create the processed label
  let processedLabel = GmailApp.getUserLabelByName(CONFIG.PROCESSED_LABEL);
  if (!processedLabel) {
    processedLabel = GmailApp.createLabel(CONFIG.PROCESSED_LABEL);
    Logger.log("Created label: " + CONFIG.PROCESSED_LABEL);
  }

  // Get the source label
  const sourceLabel = GmailApp.getUserLabelByName(CONFIG.GMAIL_LABEL);
  if (!sourceLabel) {
    Logger.log("ERROR: Label '" + CONFIG.GMAIL_LABEL + "' not found in Gmail.");
    return;
  }

  // Find unprocessed threads
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - CONFIG.LOOKBACK_DAYS);

  const threads = sourceLabel.getThreads(0, CONFIG.MAX_EMAILS_PER_RUN);
  let processed = 0;
  let skipped = 0;

  for (const thread of threads) {
    // Skip if already processed
    const labels = thread.getLabels().map(l => l.getName());
    if (labels.includes(CONFIG.PROCESSED_LABEL)) {
      skipped++;
      continue;
    }

    const messages = thread.getMessages();
    for (const message of messages) {
      const messageDate = message.getDate();

      // Skip old messages
      if (messageDate < cutoffDate) continue;

      const extracted = extractMessage(message);
      const success = pushToGitHub(token, extracted);

      if (success) {
        processed++;
        Logger.log("Pushed: " + extracted.subject);
      } else {
        Logger.log("FAILED: " + extracted.subject);
      }
    }

    // Mark thread as processed
    thread.addLabel(processedLabel);
  }

  Logger.log("Done. Pushed: " + processed + ", Skipped (already processed): " + skipped);
}

// ============================================================
// EMAIL EXTRACTION
// ============================================================

/**
 * Extract structured content from a Gmail message.
 */
function extractMessage(message) {
  const from = message.getFrom();
  const subject = message.getSubject();
  const date = message.getDate();
  const body = message.getPlainBody();
  const htmlBody = message.getBody();

  // Extract links from HTML body
  const links = extractLinks(htmlBody);

  // Identify the source based on sender
  const sourceName = identifySource(from);

  // Format the date for file naming
  const dateStr = Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy-MM-dd");
  const timeStr = Utilities.formatDate(date, Session.getScriptTimeZone(), "HHmmss");

  return {
    from: from,
    sourceName: sourceName,
    subject: subject,
    date: date,
    dateStr: dateStr,
    timeStr: timeStr,
    body: body,
    links: links
  };
}

/**
 * Extract all URLs from an HTML email body.
 */
function extractLinks(html) {
  if (!html) return [];
  const linkRegex = /href="(https?:\/\/[^"]+)"/gi;
  const links = [];
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    const url = match[1];
    // Filter out unsubscribe, tracking, and email client links
    if (!url.includes("unsubscribe") &&
        !url.includes("tracking") &&
        !url.includes("mailto:") &&
        !url.includes("list-manage.com") &&
        !url.includes("email.mg.") &&
        !url.includes("/open?") &&
        !url.includes("/click?")) {
      links.push(url);
    }
  }
  // Deduplicate
  return [...new Set(links)];
}

/**
 * Map sender email to a human-readable source name.
 */
function identifySource(from) {
  const sourceMap = {
    "avmarketstrategist@substack.com": "av-market-strategist",
    "thedriverlessdigest@substack.com": "driverless-digest",
    "platformaeronaut@substack.com": "platform-aeronaut",
    "notboring@substack.com": "not-boring",
    "email@stratechery.com": "stratechery",
    "astralcodexten@substack.com": "astral-codex-ten",
    "s@wlessin.com": "swl-week-in-review",
    "connie@strictlyvc.com": "strictlyvc",
    "tbpn@substack.com": "tbpn",
    "list@ben-evans.com": "ben-evans"
  };

  for (const [email, name] of Object.entries(sourceMap)) {
    if (from.toLowerCase().includes(email.toLowerCase())) {
      return name;
    }
  }

  // Fallback: slugify the sender
  return from.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase().substring(0, 40);
}

// ============================================================
// GITHUB INTEGRATION
// ============================================================

/**
 * Push extracted email content to GitHub as a markdown file.
 */
function pushToGitHub(token, extracted) {
  const fileName = extracted.sourceName + "--" + extracted.timeStr + ".md";
  const filePath = CONFIG.INBOX_PATH + "/" + extracted.dateStr + "/" + fileName;

  // Build markdown content
  const content = buildMarkdown(extracted);

  // Base64 encode the content
  const encoded = Utilities.base64Encode(content, Utilities.Charset.UTF_8);

  // Check if file already exists (to get SHA for update)
  const existingSha = getFileSha(token, filePath);

  // Push to GitHub
  const url = "https://api.github.com/repos/" + CONFIG.GITHUB_REPO + "/contents/" + filePath;
  const payload = {
    message: "Add " + extracted.sourceName + " - " + extracted.dateStr,
    content: encoded,
    branch: CONFIG.GITHUB_BRANCH
  };

  if (existingSha) {
    payload.sha = existingSha;
  }

  const options = {
    method: "put",
    headers: {
      "Authorization": "Bearer " + token,
      "Accept": "application/vnd.github.v3+json",
      "X-GitHub-Api-Version": "2022-11-28"
    },
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(url, options);
  const code = response.getResponseCode();

  if (code === 200 || code === 201) {
    return true;
  } else {
    Logger.log("GitHub API error (" + code + "): " + response.getContentText());
    return false;
  }
}

/**
 * Get the SHA of an existing file (needed for updates).
 */
function getFileSha(token, filePath) {
  const url = "https://api.github.com/repos/" + CONFIG.GITHUB_REPO + "/contents/" + filePath + "?ref=" + CONFIG.GITHUB_BRANCH;
  const options = {
    method: "get",
    headers: {
      "Authorization": "Bearer " + token,
      "Accept": "application/vnd.github.v3+json",
      "X-GitHub-Api-Version": "2022-11-28"
    },
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(url, options);
  if (response.getResponseCode() === 200) {
    const data = JSON.parse(response.getContentText());
    return data.sha;
  }
  return null;
}

/**
 * Build a markdown file from extracted email content.
 */
function buildMarkdown(extracted) {
  let md = "---\n";
  md += "source: " + extracted.sourceName + "\n";
  md += "from: " + extracted.from.replace(/"/g, '\\"') + "\n";
  md += "subject: \"" + extracted.subject.replace(/"/g, '\\"') + "\"\n";
  md += "date: " + extracted.date.toISOString() + "\n";
  md += "extracted: " + new Date().toISOString() + "\n";
  md += "---\n\n";
  md += "# " + extracted.subject + "\n\n";
  md += "**From:** " + extracted.from + "  \n";
  md += "**Date:** " + extracted.date.toISOString() + "\n\n";
  md += "---\n\n";
  md += extracted.body + "\n";

  if (extracted.links.length > 0) {
    md += "\n---\n\n";
    md += "## Links found in email\n\n";
    for (const link of extracted.links.slice(0, 30)) {
      md += "- " + link + "\n";
    }
  }

  return md;
}

// ============================================================
// SETUP & TOKEN MANAGEMENT
// ============================================================

/**
 * Store your GitHub token securely in Script Properties.
 * Run this once after pasting your token below.
 */
function setGitHubToken() {
  // PASTE YOUR TOKEN HERE, run this function once, then delete the token from this line
  const token = "PASTE_YOUR_TOKEN_HERE";

  if (token === "PASTE_YOUR_TOKEN_HERE") {
    Logger.log("ERROR: Replace PASTE_YOUR_TOKEN_HERE with your actual GitHub token, then run again.");
    return;
  }

  PropertiesService.getScriptProperties().setProperty("GITHUB_TOKEN", token);
  Logger.log("Token stored successfully. Now delete the token from the source code for security.");
}

/**
 * Retrieve the stored GitHub token.
 */
function getGitHubToken() {
  return PropertiesService.getScriptProperties().getProperty("GITHUB_TOKEN");
}

/**
 * Set up a daily trigger to run the extraction automatically.
 * Run this once to create the trigger.
 */
function createDailyTrigger() {
  // Delete any existing triggers for this function
  const triggers = ScriptApp.getProjectTriggers();
  for (const trigger of triggers) {
    if (trigger.getHandlerFunction() === "extractAndPush") {
      ScriptApp.deleteTrigger(trigger);
    }
  }

  // Create a new daily trigger (runs between 6-7 AM in your timezone)
  ScriptApp.newTrigger("extractAndPush")
    .timeBased()
    .everyDays(1)
    .atHour(6)
    .create();

  Logger.log("Daily trigger created. extractAndPush() will run every day between 6-7 AM.");
}

/**
 * Remove the daily trigger.
 */
function removeDailyTrigger() {
  const triggers = ScriptApp.getProjectTriggers();
  for (const trigger of triggers) {
    if (trigger.getHandlerFunction() === "extractAndPush") {
      ScriptApp.deleteTrigger(trigger);
      Logger.log("Trigger removed.");
    }
  }
}
