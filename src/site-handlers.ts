export interface SiteHandler {
  name: string;
  getInputElement: () => HTMLElement | null;
  getSubmitButton: () => HTMLElement | null;
  getText: (input: HTMLElement) => string;
  setText: (input: HTMLElement, text: string) => void;
}

// Claude (claude.ai) handler
const claudeHandler: SiteHandler = {
  name: "Claude",
  getInputElement: () => {
    return document.querySelector('div[data-testid="chat-input"]') as HTMLElement;
  },
  getSubmitButton: () => {
    return document.querySelector('button[aria-label="Send message"]') as HTMLElement;
  },
  getText: (input: HTMLElement) => {
    return input.textContent || "";
  },
  setText: (input: HTMLElement, text: string) => {
    input.textContent = text;
    // Trigger input event so the UI updates
    input.dispatchEvent(new Event("input", { bubbles: true }));
  },
};

// ChatGPT (chat.openai.com) handler
const chatgptHandler: SiteHandler = {
  name: "ChatGPT",
  getInputElement: () => {
    return document.querySelector('#prompt-textarea') as HTMLElement;
  },
  getSubmitButton: () => {
    return document.querySelector('#composer-submit-button') as HTMLElement;
  },
  getText: (input: HTMLElement) => {
    if (input instanceof HTMLTextAreaElement) {
      return input.value;
    }
    return input.textContent || "";
  },
  setText: (input: HTMLElement, text: string) => {
    if (input instanceof HTMLTextAreaElement) {
      input.value = text;
    } else {
      input.textContent = text;
    }
    input.dispatchEvent(new Event("input", { bubbles: true }));
  },
};

// T3Chat (t3.chat) handler
const t3chatHandler: SiteHandler = {
  name: "T3Chat",
  getInputElement: () => {
    return document.querySelector('#chat-input') as HTMLElement;
  },
  getSubmitButton: () => {
    return document.querySelector('button[type="submit"][aria-label="Send message"]') as HTMLElement;
  },
  getText: (input: HTMLElement) => {
    if (input instanceof HTMLTextAreaElement || input instanceof HTMLInputElement) {
      return input.value;
    }
    return input.textContent || "";
  },
  setText: (input: HTMLElement, text: string) => {
    if (input instanceof HTMLTextAreaElement || input instanceof HTMLInputElement) {
      input.value = text;
    } else {
      input.textContent = text;
    }
    input.dispatchEvent(new Event("input", { bubbles: true }));
  },
};

// Detect which site we're on and return the appropriate handler
export function getSiteHandler(): SiteHandler | null {
  const hostname = window.location.hostname;

  if (hostname.includes("claude.ai")) {
    return claudeHandler;
  } else if (hostname.includes("openai.com") || hostname.includes("chatgpt.com")) {
    return chatgptHandler;
  } else if (hostname.includes("t3.chat")) {
    return t3chatHandler;
  }

  return null;
}
