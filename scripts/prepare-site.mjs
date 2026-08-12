// Copia assets/ a public/assets/ para que Next.js los sirva como estaticos.
// Se ejecuta antes de `next dev` y `next build`.
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "assets");
const DEST = path.join(ROOT, "public", "assets");

if (!fs.existsSync(SRC)) {
  console.log("prepare-site: no existe assets/, nada que copiar.");
  process.exit(0);
}

let copied = 0;
let skipped = 0;

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d);
      continue;
    }
    // Solo recopia si cambio el tamano o la fecha: mantiene `dev` rapido.
    const ss = fs.statSync(s);
    if (fs.existsSync(d)) {
      const ds = fs.statSync(d);
      if (ds.size === ss.size && ds.mtimeMs >= ss.mtimeMs) {
        skipped++;
        continue;
      }
    }
    fs.copyFileSync(s, d);
    copied++;
  }
}

copyDir(SRC, DEST);
console.log(`prepare-site: ${copied} archivos copiados, ${skipped} sin cambios -> public/assets/`);
