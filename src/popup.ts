// Load current settings
chrome.storage.sync.get(["enabled"], (result) => {
  const checkbox = document.getElementById("enabled") as HTMLInputElement;
  if (checkbox) {
    checkbox.checked = result.enabled !== false; // Default to true
  }
});

// Save settings when changed
const checkbox = document.getElementById("enabled") as HTMLInputElement;
if (checkbox) {
  checkbox.addEventListener("change", () => {
    chrome.storage.sync.set({ enabled: checkbox.checked });
    console.log(`Extension ${checkbox.checked ? "enabled" : "disabled"}`);
  });
}
