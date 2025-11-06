import { watch } from "fs";
import { cp, mkdir, rm } from "fs/promises";

const isWatch = process.argv.includes("--watch");

async function build() {
  console.log("Building extension...");

  // Clean dist directory
  await rm("dist", { recursive: true, force: true });
  await mkdir("dist", { recursive: true });

  // Build content script
  await Bun.build({
    entrypoints: ["./src/content.ts"],
    outdir: "./dist",
    target: "browser",
    minify: !isWatch,
    sourcemap: isWatch ? "inline" : "none",
  });

  // Build popup script
  await Bun.build({
    entrypoints: ["./src/popup.ts"],
    outdir: "./dist",
    target: "browser",
    minify: !isWatch,
    sourcemap: isWatch ? "inline" : "none",
  });

  // Copy static files
  await cp("./src/manifest.json", "./dist/manifest.json");
  await cp("./src/popup.html", "./dist/popup.html");

  console.log("✓ Build complete!");
}

if (isWatch) {
  console.log("Watching for changes...");

  watch("./src", { recursive: true }, async (event, filename) => {
    console.log(`\nFile changed: ${filename}`);
    await build();
  });
}

await build();
