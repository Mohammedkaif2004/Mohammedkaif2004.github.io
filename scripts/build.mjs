import { cp, mkdir, rm } from "node:fs/promises";

const output = new URL("../out/", import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await Promise.all([
  cp(new URL("../index.html", import.meta.url), new URL("index.html", output)),
  cp(new URL("../styles.css", import.meta.url), new URL("styles.css", output)),
  cp(new URL("../script.js", import.meta.url), new URL("script.js", output)),
  cp(new URL("../public/", import.meta.url), new URL("public/", output), { recursive: true }),
]);
console.log("Static GitHub Pages bundle created in out/");
