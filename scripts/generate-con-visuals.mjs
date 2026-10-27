// Genera las visuales de la serie CON de forma determinista: misma semilla, mismo archivo.
// Uso: node scripts/generate-con-visuals.mjs [--png]
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const f = (n) => Number(n.toFixed(1));

function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(2610);
  const palette = ["#e9b65c", "#5fb3a1", "#d9785b", "#9cb7d8", "#efe6d2"];
  const parts = [];
  // Estructura subyacente: red de nodos que no coincide con la cuadrícula de íconos.
  const nodes = [];
  for (let i = 0; i < 230; i += 1) {
    const x = W * 0.34 + rand() * W * 0.7;
    const y = rand() * H;
    nodes.push([x, y]);
  }
  for (let i = 0; i < nodes.length; i += 1) {
    const [x1, y1] = nodes[i];
    const near = nodes
      .map(([x, y], j) => [Math.hypot(x - x1, y - y1), j])
      .filter(([d, j]) => j > i && d < 120)
      .slice(0, 3);
    for (const [d, j] of near) {
      const [x2, y2] = nodes[j];
      parts.push(`<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="#4fa79a" stroke-opacity="${f(0.55 - d / 300)}" stroke-width="1.2"/>`);
    }
  }
  for (const [x, y] of nodes) {
    parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(1.6 + rand() * 2.6)}" fill="#8fd3c6" fill-opacity="${f(0.45 + rand() * 0.5)}"/>`);
  }
  // Interfaz: íconos limpios que se deshacen en partículas al cruzar la franja.
  const cell = 104;
  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 9; col += 1) {
      const x = 70 + col * cell;
      const y = 40 + row * cell + (col % 2) * 8;
      const seam = 0.38 + row * 0.022;
      const t = x / W;
      const color = palette[Math.floor(rand() * palette.length)];
      if (t < seam - 0.08) {
        const shape = rand();
        parts.push(`<rect x="${x}" y="${y}" width="64" height="64" rx="16" fill="${color}" fill-opacity=".92"/>`);
        if (shape < 0.35) parts.push(`<rect x="${x + 16}" y="${y + 20}" width="32" height="24" rx="4" fill="#17242a" fill-opacity=".55"/>`);
        else if (shape < 0.7) parts.push(`<circle cx="${x + 32}" cy="${y + 32}" r="14" fill="#17242a" fill-opacity=".5"/>`);
        else parts.push(`<path d="M${x + 18} ${y + 44}L${x + 32} ${y + 18}L${x + 46} ${y + 44}Z" fill="#17242a" fill-opacity=".5"/>`);
      } else if (t < seam + 0.1) {
        const k = (t - (seam - 0.08)) / 0.18;
        for (let p = 0; p < 26; p += 1) {
          const px = x + rand() * 64 + k * rand() * 120;
          const py = y + rand() * 64 + (rand() - 0.5) * k * 60;
          parts.push(`<rect x="${f(px)}" y="${f(py)}" width="${f(5 + rand() * 8 * (1 - k))}" height="${f(5 + rand() * 8 * (1 - k))}" rx="2" fill="${color}" fill-opacity="${f(0.85 - k * 0.6)}"/>`);
        }
      }
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Una interfaz de íconos sobre una estructura que no se le parece</title>
  <desc id="desc">Composición generativa abstracta: a la derecha, íconos limpios en cuadrícula; en el centro se deshacen en partículas; a la izquierda, una red de nodos con otra geometría. No representa un resultado ni un dato.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101a1f"/><stop offset=".55" stop-color="#13262a"/><stop offset="1" stop-color="#0c1517"/></linearGradient>
    <radialGradient id="glow" cx=".62" cy=".45" r=".55"><stop stop-color="#2c6d64" stop-opacity=".55"/><stop offset="1" stop-color="#2c6d64" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <g transform="translate(${W} 0) scale(-1 1)">
  ${parts.join("\n  ")}
  </g>
</svg>
`;
}

function chain() {
  const steps = [
    ["Modelo", "mundo, percepciones y pagos supuestos"],
    ["Resultado", "teorema o simulación dentro del modelo"],
    ["Alcance", "condiciones bajo las que vale"],
    ["Interpretación", "lectura como teoría de la percepción"],
    ["Salto", "tesis sobre qué existe"],
    ["Prueba", "observación que separaría rivales"],
  ];
  const firewalls = ["≠ organismo", "≠ todos los mundos", "≠ percepción falsa", "≠ metafísica", "≠ confirmación"];
  const x0 = 92;
  const w = 222;
  const gap = 18;
  const cards = steps
    .map(([title, text], i) => {
      const x = x0 + i * (w + gap);
      const fill = i < 3 ? "#e8f1ee" : i < 5 ? "#f3e6cf" : "#e6ecf5";
      return `<g filter="url(#shadow)"><rect x="${x}" y="300" width="${w}" height="250" rx="18" fill="${fill}"/></g>
  <text x="${x + 22}" y="350" fill="#2f6f66" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="2">${String(i + 1).padStart(2, "0")}</text>
  <text x="${x + 22}" y="392" fill="#14201f" font-family="Georgia, serif" font-size="21" font-weight="700">${title}</text>
  <foreignObject x="${x + 22}" y="410" width="${w - 44}" height="120"><p xmlns="http://www.w3.org/1999/xhtml" style="margin:0;font:20px/1.35 Arial,sans-serif;color:#34403e">${text}</p></foreignObject>`;
    })
    .join("\n  ");
  const walls = firewalls
    .map((label, i) => {
      const x = x0 + (i + 1) * (w + gap) - gap / 2;
      return `<line x1="${x}" y1="580" x2="${x}" y2="640" stroke="#d9785b" stroke-width="3"/>
  <text x="${x}" y="676" text-anchor="middle" fill="#f0b39c" font-family="Arial, sans-serif" font-size="19">${label}</text>`;
    })
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Cadena desde un modelo evolutivo hasta una tesis sobre la realidad</title>
  <desc id="desc">Seis capas: modelo, resultado, alcance, interpretación, salto metafísico y prueba. Entre cada par hay un cortafuegos que impide heredar la confianza de la capa anterior.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101a1f"/><stop offset="1" stop-color="#16282b"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000" flood-opacity=".3"/></filter>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="92" y="92" fill="#8fd3c6" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">CON-001 · CADENA DE INFERENCIA</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="46" font-weight="700">Un teorema sobre pagos no es una tesis sobre lo que existe</text>
  <text x="92" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="24">Cada paso añade supuestos; la confianza de un paso no viaja sola al siguiente.</text>
  ${cards}
  ${walls}
  <text x="92" y="790" fill="#9fb0ab" font-family="Arial, sans-serif" font-size="20">Verde: lo que se demuestra o simula. Ocre: lo que se interpreta o afirma. Azul: lo que podría decidirlo.</text>
</svg>
`;
}

fs.mkdirSync(OUT, { recursive: true });
const heroSvg = hero();
fs.writeFileSync(path.join(OUT, "hero-con-001-percepcion-interfaz.svg"), heroSvg);
fs.writeFileSync(path.join(OUT, "cadena-modelo-prueba-con-001.svg"), chain());

if (process.argv.includes("--png")) {
  const { chromium } = await import("@playwright/test");
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1672, height: 941 } });
  await page.setContent(`<html><body style="margin:0">${heroSvg}</body></html>`);
  await page.screenshot({ path: path.join(OUT, "hero-con-001-percepcion-interfaz.png") });
  await browser.close();
}
console.log("Visuales CON generadas en assets/visuales");
