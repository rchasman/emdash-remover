// Simple icon generator using canvas
// Creates 16x16, 48x48, and 128x128 PNG icons

const sizes = [16, 48, 128];
const bgColor = "#a23b67"; // Pink/burgundy color matching T3Chat button
const symbol = "—"; // Em-dash with strikethrough concept
const strikethrough = true;

async function generateIcon(size: number) {
  // Create canvas
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  // Background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, size, size);

  // Draw em-dash symbol
  ctx.fillStyle = "#ffffff";
  ctx.font = `bold ${size * 0.4}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Draw em-dash
  ctx.fillText(symbol, size / 2, size / 2);

  // Draw red strikethrough line over it
  if (strikethrough) {
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = Math.max(2, size * 0.08);
    ctx.beginPath();
    ctx.moveTo(size * 0.2, size / 2);
    ctx.lineTo(size * 0.8, size / 2);
    ctx.stroke();
  }

  return canvas;
}

console.log("This script needs to run in a browser environment.");
console.log("Alternative: Use an online icon generator or design tool.");
console.log("\nRecommended pragmatic approach:");
console.log("1. Go to https://www.favicon-generator.org/");
console.log("2. Upload any image with an em-dash crossed out");
console.log("3. Generate and download all sizes");
console.log("\nOR use the emoji approach - create text files that Chrome can render");
