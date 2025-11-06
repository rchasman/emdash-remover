import { getSiteHandler } from "./site-handlers";

// Track if extension is enabled
let isEnabled = true;

// Load settings
chrome.storage.sync.get(["enabled"], (result) => {
  isEnabled = result.enabled !== false; // Default to true
});

// Listen for settings changes
chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled) {
    isEnabled = changes.enabled.newValue;
    console.log(`[Em-Dash Remover] Extension ${isEnabled ? "enabled" : "disabled"}`);
  }
});

function setupSubmitInterception() {
  const handler = getSiteHandler();

  if (!handler) {
    console.log("[Em-Dash Remover] No handler found for this site");
    return;
  }

  console.log(`[Em-Dash Remover] Initialized for ${handler.name}`);

  // Function to intercept and modify submission
  function interceptSubmit() {
    const submitButton = handler.getSubmitButton();

    if (!submitButton) {
      // Button not found yet, retry
      setTimeout(interceptSubmit, 1000);
      return;
    }

    console.log("[Em-Dash Remover] Submit button found, attaching listener");

    // Attach click listener to submit button
    submitButton.addEventListener("click", (e) => {
      if (!isEnabled) {
        return; // Don't modify if disabled
      }

      const input = handler.getInputElement();

      if (!input) {
        console.log("[Em-Dash Remover] Input element not found");
        return;
      }

      const currentText = handler.getText(input).trim();

      if (!currentText) {
        // Empty message, don't modify
        return;
      }

      // Check if "NO EMDASHES" is already in the message
      if (currentText.includes("NO EMDASHES")) {
        console.log("[Em-Dash Remover] Message already contains NO EMDASHES, skipping");
        return;
      }

      // Append NO EMDASHES to the message
      const newText = currentText + "\nNO EMDASHES";
      handler.setText(input, newText);

      console.log("[Em-Dash Remover] Appended NO EMDASHES to message");
    }, true); // Use capture phase to run before other handlers

    // Also watch for Enter key press in the input
    const checkAndAttachInputListener = () => {
      const input = handler.getInputElement();

      if (input) {
        input.addEventListener("keydown", (e) => {
          if (!isEnabled) {
            return;
          }

          // Check if Enter was pressed (and not Shift+Enter for new line)
          if (e.key === "Enter" && !e.shiftKey) {
            const currentText = handler.getText(input).trim();

            if (currentText && !currentText.includes("NO EMDASHES")) {
              const newText = currentText + "\nNO EMDASHES";
              handler.setText(input, newText);
              console.log("[Em-Dash Remover] Appended NO EMDASHES to message (Enter key)");
            }
          }
        }, true);

        console.log("[Em-Dash Remover] Input listener attached");
      } else {
        setTimeout(checkAndAttachInputListener, 1000);
      }
    };

    checkAndAttachInputListener();

    // Set up a MutationObserver to handle dynamic button replacements
    const observer = new MutationObserver(() => {
      const newButton = handler.getSubmitButton();
      if (newButton && newButton !== submitButton) {
        // Button was replaced, re-attach listener
        console.log("[Em-Dash Remover] Submit button replaced, re-attaching listener");
        interceptSubmit();
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  interceptSubmit();
}

// Start when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupSubmitInterception);
} else {
  // Wait a bit for the page to initialize
  setTimeout(setupSubmitInterception, 1000);
}
