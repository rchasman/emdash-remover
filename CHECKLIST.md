# Publishing Checklist - Realistic November 2025 Edition

## Phase 1: Create Icons (15 minutes)

### Option A: Quick SVG to PNG Conversion
- [ ] Open `icon.svg` in this repo
- [ ] Go to https://cloudconvert.com/svg-to-png
- [ ] Convert to 128px → save as `icon128.png`
- [ ] Convert to 48px → save as `icon48.png`
- [ ] Convert to 16px → save as `icon16.png`
- [ ] Create folder `src/icons/`
- [ ] Move all 3 PNGs into `src/icons/`

### Option B: Use macOS Preview
- [ ] Open `icon.svg` in Preview
- [ ] File → Export → PNG, 128px → `src/icons/icon128.png`
- [ ] Repeat for 48px and 16px

### Option C: Nuclear Option
- [ ] Find ANY 3 PNG images temporarily
- [ ] Rename them icon16.png, icon48.png, icon128.png
- [ ] Put in `src/icons/`
- [ ] Ship it, fix later

---

## Phase 2: Test & Package (10 minutes)

- [ ] Run `bun run build` - should succeed
- [ ] Check `dist/` folder has icons
- [ ] Load extension in Chrome (`chrome://extensions/`)
- [ ] Test on Claude.ai - verify "NO EMDASHES" appears
- [ ] Test on ChatGPT.com - verify "NO EMDASHES" appears
- [ ] Test on T3Chat.com - verify "NO EMDASHES" appears
- [ ] Run `bun run package`
- [ ] Verify `emdash-remover.zip` created
- [ ] Extract ZIP to temp folder and verify structure:
  ```
  manifest.json (at root!)
  content.js
  popup.js
  popup.html
  icons/
    icon16.png
    icon48.png
    icon128.png
  ```

---

## Phase 3: Chrome Web Store Setup (15 minutes)

### First Time
- [ ] Go to https://chrome.google.com/webstore/devconsole
- [ ] Pay $5 developer fee (one-time)
- [ ] Set up developer account

### Submission
- [ ] Click "New Item"
- [ ] Upload `emdash-remover.zip`
- [ ] Wait for upload to process

---

## Phase 4: Fill Out Store Listing (15 minutes)

### Basic Info
- [ ] **Short description:** Copy from `STORE_LISTING.md`
- [ ] **Detailed description:** Copy from `STORE_LISTING.md`
- [ ] **Category:** Productivity
- [ ] **Language:** English

### Privacy
- [ ] **Privacy policy:** Choose "Host on your site" or paste text
- [ ] Use content from `PRIVACY.md`
- [ ] OR host on GitHub Pages
- [ ] OR paste full text into Web Store field

### Screenshots (MINIMUM 1 REQUIRED)
- [ ] Take screenshot showing input with "NO EMDASHES" appended
- [ ] Size: 1280x800 or 640x400
- [ ] Upload at least 1 screenshot
- [ ] (Optional) Add 2 more screenshots if you want

### Optional but Nice
- [ ] Support URL: Your GitHub repo issues page
- [ ] Website: Your GitHub repo
- [ ] YouTube video (skip this)
- [ ] Promotional tiles (skip this)

---

## Phase 5: Submit & Wait

- [ ] Review everything one last time
- [ ] Select "Public" (or "Unlisted" if you prefer)
- [ ] Click "Submit for Review"
- [ ] Wait 1-3 days for approval

---

## The Bare Minimum to Ship TODAY

If you want to publish in the next hour:

**Must Have:**
1. ✅ 3 icon files in `src/icons/` (ANY PNGs work temporarily)
2. ✅ Manifest updated (already done!)
3. ✅ Valid ZIP package (run `bun run package`)
4. ✅ 1 screenshot (just take one!)
5. ✅ Privacy statement (use PRIVACY.md)
6. ✅ Short + detailed description (use STORE_LISTING.md)

**Can Skip:**
- Multiple screenshots
- Promotional images
- Fancy icon design (use placeholders)
- Support website
- Perfect polish

**Time Investment:** ~1 hour total

---

## After Approval

- [ ] Test install from Chrome Web Store
- [ ] Add store link to README.md
- [ ] Update icon.svg if you used placeholders
- [ ] Respond to any user reviews
- [ ] Monitor GitHub issues

---

## Common Rejection Reasons & Fixes

| Rejection Reason | Fix |
|-----------------|-----|
| "Functionality unclear" | Add better screenshots showing it working |
| "Privacy policy missing" | Add PRIVACY.md content to listing |
| "Misleading content" | Make description more accurate/specific |
| "Single purpose violation" | Extension does one thing (✓), you're fine |
| "Manifest errors" | Check JSON is valid, no comments |
| "Icons missing" | Ensure all 3 sizes in ZIP |

Just fix and resubmit. Usually faster second time.

---

## Reality Check

**Expected Timeline:**
- Icons: 15 min
- Testing: 10 min
- Packaging: 5 min
- Store listing: 15 min
- Screenshots: 10 min
- Submit: 5 min

**Total: ~1 hour of work**

**Review time: 1-3 days**

You can literally publish this extension today if you want to.

---

## Pro Tips

1. **Don't overthink the icons** - Simple is fine, you can update later
2. **One good screenshot > no screenshots** - Just show it working
3. **Privacy policy can be simple** - We collect nothing, say that clearly
4. **Version 1.0.0 is fine** - Don't start at 0.0.1
5. **Done > Perfect** - Ship it, iterate based on real feedback

---

## Current Status

✅ Code works (tested on T3Chat)
✅ Manifest ready
✅ Build system ready
✅ Privacy policy written
✅ Store listing copy written
✅ Publishing guide created

**YOU NEED:**
- [ ] Create 3 icon files
- [ ] Take 1 screenshot
- [ ] Run `bun run package`
- [ ] Submit to Web Store

You're literally one hour away from publishing.
