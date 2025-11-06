# Em-Dash Remover

A Chrome extension that automatically appends "NO EMDASHES" to every message you send to LLMs, instructing them to avoid using em-dashes (—) in their responses.

## Supported Sites

- **Claude** (claude.ai)
- **ChatGPT** (chatgpt.com)
- **T3Chat** (t3.chat)

## Features

- Automatically appends "NO EMDASHES" to every message you send
- Works with button clicks and Enter key submissions
- Prevents duplicate injections if already present
- Simple toggle to enable/disable functionality
- Works across multiple LLM platforms

## Installation

### Prerequisites

- [Bun](https://bun.sh/) runtime installed

### Build from Source

1. Clone or download this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Build the extension:
   ```bash
   bun run build
   ```

4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the `dist` folder from this project

## Development

### Watch Mode

For active development with automatic rebuilding:

```bash
bun run dev
```

This will watch for changes in the `src` directory and automatically rebuild.

### Clean Build

To remove the dist folder and start fresh:

```bash
bun run clean
bun run build
```

## Usage

1. Install the extension following the instructions above
2. Navigate to any supported LLM chat interface (Claude, ChatGPT, or T3Chat)
3. Type your message as normal
4. When you click Send or press Enter, the extension will:
   - Automatically append "\n\nNO EMDASHES" to your message
   - Let the message submit normally
   - The LLM will see your message with the instruction included

The extension works transparently - you'll see "NO EMDASHES" appear briefly in the input before submission.

### Settings

Click the extension icon in your Chrome toolbar to access settings:

- **Enable NO EMDASHES injection**: Toggle the automatic injection feature on/off

## How It Works

The extension uses:

1. **Submit button interception**: Attaches event listeners to the Send button
2. **Keyboard monitoring**: Detects Enter key presses in the input field
3. **Site-specific handlers**: Custom logic for each platform's input and submit elements
4. **Text injection**: Appends "NO EMDASHES" to your message before submission
5. **Duplicate prevention**: Checks if the instruction is already present to avoid repetition

## Project Structure

```
emdash-remover/
├── src/
│   ├── content.ts         # Main detection and coordination logic
│   ├── site-handlers.ts   # Platform-specific DOM handlers
│   ├── popup.ts          # Settings UI logic
│   ├── popup.html        # Settings UI
│   └── manifest.json     # Chrome extension manifest
├── dist/                 # Built extension (generated)
├── build.ts             # Bun build script
├── package.json
├── tsconfig.json
└── README.md
```

## Technical Details

### Injection Method

The extension intercepts message submissions using:
- Click event listeners on submit buttons (capture phase)
- Keydown event listeners for Enter key presses
- MutationObserver to handle dynamic UI changes

### Duplicate Prevention

Before injecting, the extension checks if "NO EMDASHES" is already present in the message to avoid duplicate instructions.

### Platform Support

Each platform has a dedicated handler in `site-handlers.ts` that defines:
- Input element selectors (textarea, contenteditable divs, etc.)
- Submit button selectors
- Text getter/setter methods for different input types

## Troubleshooting

### Extension not working

1. Check the browser console for logs (prefix: `[Em-Dash Remover]`)
2. Ensure the extension is enabled in settings
3. Verify you're on a supported site (claude.ai, chat.openai.com, or t3.chat)
4. Reload the page after installing/updating the extension

### Text not being injected

1. Check console for "Submit button found" and "Input listener attached" messages
2. Verify the submit button and input field are visible on the page
3. Try both clicking Send and pressing Enter
4. If the UI has changed, the selectors may need updating

## Contributing

Contributions welcome! Areas for improvement:

- Add support for more LLM platforms
- Improve DOM selector reliability as sites update
- Add customizable instruction text (not just "NO EMDASHES")
- Add option to hide the injected text from the user
- Add statistics tracking (messages sent, etc.)

## License

MIT
