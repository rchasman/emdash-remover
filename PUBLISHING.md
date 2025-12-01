# Publishing to Chrome Web Store - Realistic Guide

## Quick Start (Pragmatic Path)

### Step 1: Create Icons (15 minutes)

**Easiest Method - Use CloudConvert:**
1. Open `icon.svg` in this repo
2. Go to https://cloudconvert.com/svg-to-png
3. Upload `icon.svg`
4. Set width to 128, convert → save as `icon128.png`
5. Repeat for 48px → `icon48.png`
6. Repeat for 16px → `icon16.png`
7. Put all three in `src/icons/` folder

**Alternative - Use macOS Preview:**
1. Open `icon.svg` in Preview
2. File → Export → PNG
3. Set size to 128px → save as icon128.png
4. Repeat for other sizes

**Nuclear Option - Use Placeholder:**
Just use any 3 PNG files for now, publish, iterate later

---

### Step 2: Update Manifest (2 minutes)

Add to `src/manifest.json`:
```json
"icons": {
  "16": "icons/icon16.png",
  "48": "icons/icon48.png",
  "128": "icons/icon128.png"
}
```

Update build script to copy icons folder.

---

### Step 3: Store Listing Content (10 minutes)

**Short Description** (132 chars max):
```
Automatically appends "NO EMDASHES" to your LLM messages, preventing em-dashes (—) in AI responses on Claude, ChatGPT, and T3Chat.
```

**Detailed Description:**
```
# Em-Dash Remover

Stop getting em-dashes (—) in your AI chat responses!

This extension automatically appends "NO EMDASHES" to every message you send to Claude, ChatGPT, and T3Chat. It works transparently - just chat normally and the AI will avoid using em-dashes.

## Features
- Works on Claude (claude.ai)
- Works on ChatGPT (chatgpt.com)
- Works on T3Chat (t3.chat)
- Automatic injection on every message
- Works with both Enter key and Send button
- Simple on/off toggle
- Zero data collection
- Open source

## How It Works
The extension detects when you're about to send a message and automatically appends "\n\nNO EMDASHES" before submission. The AI sees this instruction and avoids em-dashes in its response.

## Privacy
This extension:
- Does NOT collect any data
- Does NOT send data to external servers
- Does NOT track your usage
- Only modifies text you're about to send
- Runs entirely locally in your browser

## Support
Report issues: [your GitHub URL]
Source code: [your GitHub URL]
```

---

### Step 4: Screenshots (10 minutes)

**You need at least 1, recommend 3:**

1. **Before/After comparison** - Show a response with em-dashes vs without
2. **Extension in action** - Show the input field with "NO EMDASHES" appended
3. **Settings popup** - Show the simple on/off toggle

**How to take them:**
- Reload extension, test on Claude/ChatGPT/T3Chat
- Use Cmd+Shift+4 on macOS (or Windows Snip tool)
- Chrome Web Store requires:
  - 1280x800 or 640x400 pixels
  - PNG or JPEG
  - Max 16:9 aspect ratio

**Realistic approach:** Just take 1-2 screenshots showing it works. Perfect is the enemy of shipped.

---

### Step 5: Privacy Policy (5 minutes)

Create `PRIVACY.md`:

```markdown
# Privacy Policy for Em-Dash Remover

Last updated: [Date]

## Data Collection
This extension collects ZERO data. Period.

## What We Don't Do
- We don't collect, store, or transmit any personal information
- We don't track your browsing
- We don't track your messages
- We don't use analytics
- We don't use cookies
- We don't communicate with external servers

## What The Extension Does
- Reads the text you type in chat interfaces (locally only)
- Appends "NO EMDASHES" to your messages before you send them
- Stores your on/off preference in Chrome's local storage (never leaves your device)

## Permissions Explained
- `storage`: Stores your on/off preference locally
- `activeTab`: Reads and modifies text on chat websites when you're actively using them

## Changes to This Policy
If we ever change this (we won't), we'll update the "Last updated" date.

## Contact
Questions? [Your email or GitHub]
```

Host this on GitHub Pages or just paste it in the Web Store field.

---

### Step 6: Package for Upload (5 minutes)

Update `package.json`:
```json
"scripts": {
  "build": "bun run build.ts",
  "dev": "bun run build.ts --watch",
  "clean": "rm -rf dist",
  "package": "bun run build && cd dist && zip -r ../emdash-remover.zip ."
}
```

Run:
```bash
bun run package
```

This creates `emdash-remover.zip` ready for upload.

---

### Step 7: Submit to Chrome Web Store

**First Time Setup:**
1. Go to https://chrome.google.com/webstore/devconsole
2. Pay $5 developer fee (one-time, yes it's annoying)
3. Set up your developer account

**Upload:**
1. Click "New Item"
2. Upload `emdash-remover.zip`
3. Fill in:
   - Short description (from Step 3)
   - Detailed description (from Step 3)
   - Category: Productivity
   - Language: English
4. Upload screenshots
5. Add privacy policy URL or paste text
6. Select "Public" or "Unlisted"
7. Submit for review

**Review Time:** Usually 1-3 days (sometimes up to a week)

---

## Realistic Timeline

- **Icons:** 15 min
- **Manifest update:** 2 min
- **Store listing copy:** 10 min
- **Screenshots:** 10 min
- **Privacy policy:** 5 min
- **Package:** 5 min
- **Submit:** 10 min

**Total: ~1 hour of actual work**

---

## Post-Publishing

Once approved:
1. Test install from Web Store
2. Add store link to README.md
3. Tweet about it (if that's your thing)
4. Monitor reviews and bug reports
5. Iterate based on feedback

---

## Common Pitfalls to Avoid

1. **Manifest errors** - JSON must be valid (no comments!)
2. **Missing icons** - All 3 sizes required
3. **Vague descriptions** - Be specific about what it does
4. **No privacy policy** - Required if you have ANY permissions
5. **Wrong ZIP structure** - manifest.json must be at root level
6. **Screenshots too small** - Min 640x400 or 1280x800

---

## If You Get Rejected

Common reasons and fixes:
- **"Functionality unclear"** → Add better screenshots
- **"Privacy policy missing"** → Add the one from Step 5
- **"Misleading content"** → Make description more accurate
- **"Spam"** → Your extension is fine, just resubmit with clearer description

Just fix it and resubmit. It happens. Don't stress.

---

## The Bare Minimum to Ship

If you're in a hurry, you ONLY need:
1. Icons (use any 3 PNGs temporarily)
2. Short description
3. 1 screenshot
4. Privacy statement ("We collect nothing")
5. ZIP file with manifest in root

Everything else can be improved post-launch. **Done is better than perfect.**
