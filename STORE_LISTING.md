# Chrome Web Store Listing

## Short Description (132 characters max)
```
Automatically appends "NO EMDASHES" to your LLM messages, preventing em-dashes (—) in AI responses on Claude, ChatGPT, and T3Chat.
```

Character count: 131 ✓

---

## Detailed Description

```
# Em-Dash Remover

Stop getting em-dashes (—) in your AI chat responses!

This extension automatically appends "NO EMDASHES" to every message you send to Claude, ChatGPT, and T3Chat. It works transparently - just chat normally and the AI will avoid using em-dashes.

## Supported Platforms
✓ Claude (claude.ai)
✓ ChatGPT (chatgpt.com)
✓ T3Chat (t3.chat)

## Features
• Automatic injection on every message
• Works with both Enter key and Send button clicks
• Prevents duplicate injections if already present
• Simple on/off toggle in popup
• Zero data collection - runs entirely locally
• Open source

## How It Works
The extension detects when you're about to send a message on supported chat platforms and automatically appends "\n\nNO EMDASHES" before submission. The AI sees this instruction and avoids em-dashes in its response.

You'll briefly see "NO EMDASHES" appear in your input field before the message sends - this is normal and expected behavior.

## Privacy
This extension respects your privacy:
• Does NOT collect any data
• Does NOT send data to external servers
• Does NOT track your usage
• Only modifies text you're about to send
• Runs entirely locally in your browser
• Stores only one preference (on/off toggle) locally

## Requirements
• Chrome browser
• Active internet connection to use chat platforms
• That's it!

## Support & Feedback
Having issues or want to request a feature?
• Report bugs on GitHub: [your GitHub repo URL]
• Source code: [your GitHub repo URL]
• Email: [your email]

## Open Source
This extension is open source! View the code, contribute, or fork it:
[your GitHub repo URL]

---

Made with pragmatism for people who prefer hyphens.
```

---

## Category
**Productivity**

---

## Language
**English**

---

## Website (optional)
`https://github.com/[your-username]/emdash-remover`

---

## Support URL (optional)
`https://github.com/[your-username]/emdash-remover/issues`

---

## Screenshots Needed

### Screenshot 1: Extension in Action (Required)
**What to show:** Chat input with message + "NO EMDASHES" appended
**Size:** 1280x800 or 640x400
**Caption:** "The extension automatically appends NO EMDASHES to your messages"

### Screenshot 2: Before/After (Recommended)
**What to show:** Split screen showing AI response with/without em-dashes
**Size:** 1280x800 or 640x400
**Caption:** "AI responses without em-dashes (right) vs with em-dashes (left)"

### Screenshot 3: Settings Popup (Optional)
**What to show:** The simple toggle in the extension popup
**Size:** 640x400 (smaller is fine for popup)
**Caption:** "Simple on/off toggle - that's it!"

---

## Promotional Images (Optional but Recommended)

### Small Tile (440x280)
Simple graphic showing:
- Extension icon
- Text: "No More Em-Dashes"
- Supported platforms logos

### Large Tile (920x680)
Similar to small tile but with more detail

### Marquee (1400x560)
Hero image for featured placement (if Chrome decides to feature you)

**Reality Check:** You can skip promotional images for initial launch and add them later.

---

## Manifest Fields to Double-Check

Ensure your `manifest.json` has:
```json
{
  "name": "Em-Dash Remover",
  "version": "1.0.0",
  "description": "Automatically appends NO EMDASHES to LLM messages to prevent em-dashes in responses",
  "icons": {
    "16": "icons/icon16.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
}
```

---

## Pre-Submission Checklist

- [ ] All 3 icon sizes created and in `src/icons/`
- [ ] Icons added to manifest.json
- [ ] Tested extension locally on all 3 platforms
- [ ] `bun run package` creates valid ZIP
- [ ] ZIP contains manifest.json at root level
- [ ] Short description under 132 characters
- [ ] Detailed description written
- [ ] Privacy policy created (PRIVACY.md)
- [ ] At least 1 screenshot prepared
- [ ] Developer account created ($5 fee paid)
- [ ] GitHub repo is public (for support URL)

---

## Quick Test Before Submitting

1. Extract your ZIP to a temp folder
2. Load as unpacked extension in Chrome
3. Test on all 3 platforms
4. Verify console logs show proper initialization
5. Verify "NO EMDASHES" appears when sending messages
6. Toggle on/off in popup works

If all that works, you're ready to submit!

---

## Post-Submission

**Expected timeline:**
- Review usually takes 1-3 days
- Sometimes up to a week
- You'll get email when approved or rejected

**If approved:**
- Test install from Web Store
- Share the link!
- Monitor reviews
- Respond to user feedback

**If rejected:**
- Read the rejection reason carefully
- Fix the issue
- Resubmit (usually faster second time)
- Common issues: unclear description, missing privacy policy, icon problems

---

## The Bare Minimum

If you're in a hurry, you ONLY truly need:
1. ✓ Icons (3 sizes)
2. ✓ Short description
3. ✓ 1 screenshot
4. ✓ Privacy statement
5. ✓ Valid ZIP with manifest at root

Everything else is nice-to-have. Ship first, improve later.
