# Chrome Web Store Submission - Required Justifications

Copy-paste these into the Privacy practices tab.

---

## Single Purpose Description

```
This extension has one single purpose: automatically append "NO EMDASHES" to messages sent on AI chat platforms (Claude, ChatGPT, T3Chat) to prevent em-dashes in AI responses.
```

---

## Permission Justifications

### 1. activeTab Permission

**Justification:**
```
The activeTab permission is required to read and modify the text input fields on supported AI chat websites (Claude.ai, ChatGPT.com, T3Chat.com). The extension needs to:
- Read the user's message before they send it
- Append "NO EMDASHES" to the message text
- Monitor for the send button click or Enter key press

This permission only activates when the user is on one of the supported websites and only modifies text the user is about to send.
```

---

### 2. Host Permission (Specific URLs)

**Host permissions requested:**
- `https://claude.ai/*`
- `https://chat.openai.com/*`
- `https://chatgpt.com/*`
- `https://t3.chat/*`
- `https://*.t3.chat/*`

**Justification:**
```
Host permissions are required to inject content scripts into specific AI chat websites. The extension only works on these five domains:
1. claude.ai - Anthropic's Claude AI chat interface
2. chat.openai.com and chatgpt.com - OpenAI's ChatGPT interface
3. t3.chat - T3Chat AI chat interface

These permissions allow the extension to:
- Monitor the chat input field for user-submitted messages
- Detect when the user clicks the send button or presses Enter
- Modify the message text by appending "NO EMDASHES" before submission

The extension does not access any other websites and does not collect, transmit, or store any user data from these sites.
```

---

### 3. Storage Permission

**Justification:**
```
The storage permission is used to save a single user preference: whether the extension is enabled or disabled (on/off toggle).

Storage details:
- Only stores one boolean value (true/false) for the enabled/disabled state
- Data is stored locally using chrome.storage.sync
- No personal information, messages, or browsing data is stored
- User can toggle this setting via the extension popup
- Data never leaves the user's device
```

---

### 4. Remote Code Execution

**Does your extension execute remote code?**
```
NO
```

**If asked for justification:**
```
This extension does NOT execute any remote code. All code is bundled with the extension package and runs locally in the browser. The extension does not:
- Download or execute code from external servers
- Use eval() or similar dynamic code execution
- Load scripts from CDNs or external sources
- Communicate with any external APIs

All functionality is self-contained within the extension package.
```

---

## Data Usage Disclosure

### Does your extension collect user data?

**Answer: NO**

### Data handling certification

Check the following boxes:
- ✅ This item does not collect user data
- ✅ This item complies with the Developer Program Policies

**Statement:**
```
This extension collects NO user data whatsoever. It:
- Does not track users
- Does not collect personal information
- Does not transmit data to external servers
- Does not use analytics or telemetry
- Only stores a single on/off preference locally
- Runs entirely locally in the user's browser
```

---

## Contact Information

### Email Setup
1. Go to Account tab
2. Enter your email address
3. Verify your email (check inbox for verification link)
4. Return to item listing

**Recommended:** Use a dedicated email or GitHub email for support

---

## Screenshot Requirements

### Minimum: 1 screenshot required
**Recommended size:** 1280x800 or 640x400

### Screenshot Ideas:

**Screenshot 1: Extension in Action (Required)**
- Show a chat interface with message typed
- Show "NO EMDASHES" appended at the bottom of the message
- Caption: "Automatically appends NO EMDASHES to your messages"

**Screenshot 2: Before/After (Optional but good)**
- Side-by-side comparison
- Left: AI response with em-dashes
- Right: AI response without em-dashes
- Caption: "Prevents em-dashes in AI responses"

**Screenshot 3: Settings (Optional)**
- Show the extension popup with the on/off toggle
- Caption: "Simple toggle to enable/disable"

---

## Quick Submission Checklist

Before submitting:
- [ ] Email address added to Account tab
- [ ] Email verified (check inbox)
- [ ] Single purpose description entered
- [ ] All permission justifications entered
- [ ] Data usage certification completed (check "does not collect user data")
- [ ] At least 1 screenshot uploaded
- [ ] Short description (from STORE_LISTING.md)
- [ ] Detailed description (from STORE_LISTING.md)
- [ ] Privacy policy added (paste PRIVACY.md content or link to GitHub)
- [ ] Category selected: Productivity
- [ ] Language: English

---

## Copy-Paste Summary

Use these condensed versions if character limits are strict:

**Single Purpose (short):**
Appends "NO EMDASHES" to AI chat messages to prevent em-dashes in responses.

**activeTab (short):**
Needed to read and modify chat input fields on Claude, ChatGPT, and T3Chat to append "NO EMDASHES" to user messages.

**Host Permissions (short):**
Required to access chat interfaces on claude.ai, chatgpt.com, and t3.chat to modify messages before sending.

**Storage (short):**
Stores only one preference: extension enabled/disabled toggle. No user data collected.

**Remote Code:**
NO - All code is bundled with extension, no external code execution.

**Data Collection:**
NO - Extension collects zero user data. Runs entirely locally.

---

## If You Get Stuck

**Common issues:**
1. **Email not verified** - Check spam folder for verification email
2. **Screenshot rejected** - Make sure it's 1280x800 or 640x400, PNG or JPEG
3. **Justification too short** - Use the full versions above, not the condensed ones
4. **Single purpose unclear** - Use the exact wording provided above

**Need help?** Check PUBLISHING.md for detailed guidance.
