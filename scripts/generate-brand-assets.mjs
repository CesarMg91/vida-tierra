import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const source = path.join(root, "assets", "marca", "logo-mark-master.svg");
const publicDir = path.join(root, "public", "brand");
const appDir = path.join(root, "app");
const svg = await readFile(source);

await mkdir(publicDir, { recursive: true });

function monochrome(color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="¿Cómo sabemos lo que sabemos?">
  <g fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="32" cy="32" r="28" stroke-width="3.25"/>
    <path d="M13.5 30.5C17.7 20.1 24 15 32 15s14.3 5.1 18.5 15.5" stroke-width="3.5"/>
    <path d="M17.5 37C21.3 28.8 26.1 25 32 25s10.7 3.8 14.5 12" stroke-width="3.5"/>
    <path d="M22 43.25C24.9 37.8 28.1 35.5 32 35.5s7.1 2.3 10 7.75" stroke-width="3.5"/>
    <path d="M32 11.75V49" stroke-width="2.4"/>
  </g>
  <g fill="${color}">
    <circle cx="32" cy="15" r="3.1"/>
    <circle cx="32" cy="25" r="3.1"/>
    <circle cx="32" cy="35.5" r="3.1"/>
    <circle cx="32" cy="48" r="6.25"/>
  </g>
</svg>\n`;
}

function lockup({ primary, secondary }) {
  const embedded = svg
    .toString("utf8")
    .replace(/<\?xml[^>]*>/g, "")
    .replace(/<(title|desc)[^>]*>[\s\S]*?<\/\1>/g, "")
    .replace(/^\s+$/gm, "");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 160" role="img" aria-labelledby="title desc">
  <title id="title">¿Cómo sabemos lo que sabemos?</title>
  <desc id="desc">Identidad de la plataforma de historia profunda y evidencia abierta.</desc>
  <svg x="12" y="12" width="136" height="136" viewBox="0 0 64 64">${embedded.replace(/^<svg[^>]*>|<\/svg>\s*$/g, "")}</svg>
  <text x="174" y="74" fill="${primary}" font-family="Georgia, 'Times New Roman', serif" font-size="34" font-weight="600">¿Cómo sabemos lo que sabemos?</text>
  <text x="176" y="109" fill="${secondary}" font-family="Arial, sans-serif" font-size="14" letter-spacing="2.6">HISTORIA PROFUNDA · EVIDENCIA ABIERTA</text>
</svg>\n`;
}

async function renderTransparent(size, target) {
  await sharp(svg, { density: 768 })
    .resize(size, size, { fit: "contain" })
    .png({ compressionLevel: 9 })
    .toFile(target);
}

async function renderSquare(size, target, inset) {
  const mark = await sharp(svg, { density: 768 })
    .resize(size - inset * 2, size - inset * 2, { fit: "contain" })
    .png()
    .toBuffer();
  await sharp({
    create: { width: size, height: size, channels: 4, background: "#0B0D0E" },
  })
    .composite([{ input: mark, left: inset, top: inset }])
    .png({ compressionLevel: 9 })
    .toFile(target);
}

function pngIco(png, size) {
  const directory = Buffer.alloc(22);
  directory.writeUInt16LE(0, 0);
  directory.writeUInt16LE(1, 2);
  directory.writeUInt16LE(1, 4);
  directory[6] = size === 256 ? 0 : size;
  directory[7] = size === 256 ? 0 : size;
  directory[8] = 0;
  directory[9] = 0;
  directory.writeUInt16LE(1, 10);
  directory.writeUInt16LE(32, 12);
  directory.writeUInt32LE(png.length, 14);
  directory.writeUInt32LE(22, 18);
  return Buffer.concat([directory, png]);
}

await copyFile(source, path.join(publicDir, "logo-mark.svg"));
await copyFile(source, path.join(appDir, "icon.svg"));
await writeFile(path.join(publicDir, "logo-mark-mono-ink.svg"), monochrome("#211F1A"));
await writeFile(path.join(publicDir, "logo-mark-mono-parchment.svg"), monochrome("#F2EADB"));
const darkLockup = Buffer.from(lockup({ primary: "#F2EADB", secondary: "#B8AE9F" }));
const lightLockup = Buffer.from(lockup({ primary: "#211F1A", secondary: "#686157" }));
await writeFile(path.join(publicDir, "logo-lockup-horizontal.svg"), darkLockup);
await writeFile(path.join(publicDir, "logo-lockup-dark.svg"), darkLockup);
await writeFile(path.join(publicDir, "logo-lockup-light.svg"), lightLockup);
await sharp(darkLockup, { density: 384 })
  .resize(1520, 320)
  .flatten({ background: "#0B0D0E" })
  .png({ compressionLevel: 9 })
  .toFile(path.join(publicDir, "logo-lockup-dark-1520.png"));
await sharp(lightLockup, { density: 384 })
  .resize(1520, 320)
  .flatten({ background: "#F2EADB" })
  .png({ compressionLevel: 9 })
  .toFile(path.join(publicDir, "logo-lockup-light-1520.png"));

await renderTransparent(1024, path.join(publicDir, "logo-mark-1024.png"));
await renderTransparent(512, path.join(publicDir, "icon-512.png"));
await renderTransparent(192, path.join(publicDir, "icon-192.png"));
await renderTransparent(32, path.join(publicDir, "favicon-32.png"));
await renderTransparent(16, path.join(publicDir, "favicon-16.png"));
await renderSquare(512, path.join(publicDir, "icon-maskable-512.png"), 96);
await renderSquare(1024, path.join(publicDir, "avatar-social-1024.png"), 176);
await renderSquare(180, path.join(appDir, "apple-icon.png"), 24);

const faviconPng = await sharp(svg, { density: 768 })
  .resize(64, 64, { fit: "contain" })
  .png({ compressionLevel: 9 })
  .toBuffer();
await writeFile(path.join(appDir, "favicon.ico"), pngIco(faviconPng, 64));

console.log("Brand assets generated in public/brand and app metadata routes.");
