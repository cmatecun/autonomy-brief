/**
 * Email Digest Delivery
 *
 * Add this code to your existing Apps Script project (the same one with gmail-to-github.gs).
 * It fetches the latest digest from the GitHub repo and emails it to you.
 *
 * Setup:
 * 1. Paste this into a NEW file in your existing Apps Script project
 *    (click + next to "Files" in the left sidebar → Script → name it "EmailDigest")
 * 2. Run sendLatestDigest() manually to test
 * 3. The scheduled task will trigger this after generating each digest
 */

// ============================================================
// CONFIGURATION
// ============================================================

const EMAIL_CONFIG = {
  RECIPIENT: Session.getActiveUser().getEmail(), // sends to your own Gmail
  GITHUB_REPO: "cmatecun/autonomy-brief",
  DIGEST_PATH: "digests/weekly-av",
  SUBJECT_PREFIX: "The Autonomy Brief"
};

// ============================================================
// MAIN FUNCTION
// ============================================================

/**
 * Fetch the latest digest from GitHub and email it.
 */
function sendLatestDigest() {
  const token = getGitHubToken();
  if (!token) {
    Logger.log("ERROR: No GitHub token found.");
    return;
  }

  // List files in the digest directory
  const files = listDigestFiles(token);
  if (!files || files.length === 0) {
    Logger.log("No digest files found.");
    return;
  }

  // Sort by name (dates) descending to get the latest
  files.sort((a, b) => b.name.localeCompare(a.name));
  const latest = files[0];

  // Check if we already emailed this one
  const lastEmailed = PropertiesService.getScriptProperties().getProperty("LAST_EMAILED_DIGEST");
  if (lastEmailed === latest.name) {
    Logger.log("Already emailed: " + latest.name + ". Skipping.");
    return;
  }

  // Fetch the digest content
  const content = fetchFileContent(token, latest.path);
  if (!content) {
    Logger.log("ERROR: Could not fetch digest content.");
    return;
  }

  // Convert markdown to HTML for the email
  const htmlBody = markdownToHtml(content);

  // Extract date from filename for subject line
  const dateStr = latest.name.replace(".md", "");

  // Send the email
  GmailApp.sendEmail(
    EMAIL_CONFIG.RECIPIENT,
    EMAIL_CONFIG.SUBJECT_PREFIX + " — " + dateStr,
    content, // plain text fallback
    {
      htmlBody: htmlBody,
      name: "The Autonomy Brief"
    }
  );

  // Record that we emailed this one
  PropertiesService.getScriptProperties().setProperty("LAST_EMAILED_DIGEST", latest.name);
  Logger.log("Emailed digest: " + latest.name + " to " + EMAIL_CONFIG.RECIPIENT);
}

/**
 * Check for new digests and email if found.
 * This is designed to run on a schedule (e.g., every hour on Mon/Thu).
 */
function checkAndEmailDigest() {
  sendLatestDigest();
}

// ============================================================
// GITHUB API
// ============================================================

/**
 * List files in the digest directory.
 */
function listDigestFiles(token) {
  const url = "https://api.github.com/repos/" + EMAIL_CONFIG.GITHUB_REPO +
              "/contents/" + EMAIL_CONFIG.DIGEST_PATH + "?ref=main";

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
  if (response.getResponseCode() !== 200) {
    Logger.log("GitHub API error: " + response.getContentText());
    return null;
  }

  const items = JSON.parse(response.getContentText());
  // Filter to only .md files (exclude .gitkeep)
  return items.filter(item => item.name.endsWith(".md"));
}

/**
 * Fetch the content of a file from GitHub.
 */
function fetchFileContent(token, filePath) {
  const url = "https://api.github.com/repos/" + EMAIL_CONFIG.GITHUB_REPO +
              "/contents/" + filePath + "?ref=main";

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
  if (response.getResponseCode() !== 200) {
    Logger.log("GitHub API error: " + response.getContentText());
    return null;
  }

  const data = JSON.parse(response.getContentText());
  // Content is base64 encoded
  const decoded = Utilities.newBlob(Utilities.base64Decode(data.content)).getDataAsString();
  return decoded;
}

// ============================================================
// MARKDOWN TO HTML CONVERTER
// ============================================================

/**
 * Simple markdown to HTML converter for email rendering.
 */
function markdownToHtml(md) {
  let html = md;

  // Wrap in styled container
  const style = `
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1a1a1a; line-height: 1.6; max-width: 680px; margin: 0 auto; padding: 20px; }
      h1 { font-size: 24px; border-bottom: 2px solid #1a1a1a; padding-bottom: 8px; }
      h2 { font-size: 18px; color: #333; margin-top: 28px; border-bottom: 1px solid #ddd; padding-bottom: 4px; }
      h3 { font-size: 15px; color: #555; margin-top: 20px; }
      hr { border: none; border-top: 1px solid #ddd; margin: 24px 0; }
      ul { padding-left: 20px; }
      li { margin-bottom: 8px; }
      strong { color: #1a1a1a; }
      em { color: #666; }
      a { color: #0066cc; }
      table { border-collapse: collapse; width: 100%; margin: 12px 0; }
      th, td { border: 1px solid #ddd; padding: 8px; text-align: left; font-size: 14px; }
      th { background: #f5f5f5; }
      blockquote { border-left: 3px solid #ddd; margin: 12px 0; padding: 4px 16px; color: #666; }
    </style>
  `;

  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr>');
  html = html.replace(/^\*\*\*$/gm, '<hr>');

  // Tables (simple conversion)
  html = html.replace(/^\|(.+)\|$/gm, function(match, content) {
    const cells = content.split('|').map(c => c.trim());
    // Check if this is a separator row
    if (cells.every(c => /^[-:]+$/.test(c))) {
      return ''; // skip separator rows
    }
    const cellTag = 'td';
    const row = cells.map(c => '<' + cellTag + '>' + c + '</' + cellTag + '>').join('');
    return '<tr>' + row + '</tr>';
  });

  // Wrap table rows in table tags
  html = html.replace(/((?:<tr>.*<\/tr>\n?)+)/g, '<table>$1</table>');

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

  // Paragraphs (lines that aren't already tagged)
  html = html.replace(/^(?!<[a-z])((?!<\/?\w).+)$/gm, '<p>$1</p>');

  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');

  return '<html><head>' + style + '</head><body>' + html + '</body></html>';
}

// ============================================================
// TRIGGER SETUP
// ============================================================

/**
 * Create a trigger that checks for new digests every 2 hours on Mon and Thu.
 * Since we can't do day-specific triggers easily, we run frequently but
 * the sendLatestDigest() function skips if already sent.
 */
function createDigestEmailTrigger() {
  // Delete any existing triggers for this function
  const triggers = ScriptApp.getProjectTriggers();
  for (const trigger of triggers) {
    if (trigger.getHandlerFunction() === "checkAndEmailDigest") {
      ScriptApp.deleteTrigger(trigger);
    }
  }

  // Check every 2 hours — the function itself prevents duplicate sends
  ScriptApp.newTrigger("checkAndEmailDigest")
    .timeBased()
    .everyHours(2)
    .create();

  Logger.log("Digest email trigger created. Will check every 2 hours for new digests.");
}

/**
 * Remove the email trigger.
 */
function removeDigestEmailTrigger() {
  const triggers = ScriptApp.getProjectTriggers();
  for (const trigger of triggers) {
    if (trigger.getHandlerFunction() === "checkAndEmailDigest") {
      ScriptApp.deleteTrigger(trigger);
      Logger.log("Email trigger removed.");
    }
  }
}
