// Genera las visuales de CON-008 (sueños y sueño lúcido) de forma determinista: misma semilla, mismo archivo.
// Uso: node scripts/generate-con-008-visuals.mjs [--png]
//   --png rasteriza la portada con sharp (ya instalado) a 1672 × 941.
// No usa modelos de imagen ni servicios externos. Los textos se parten en líneas aquí,
// sin foreignObject, para que el SVG se lea igual en cualquier visor.
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
const HERO = "hero-con-008-suenos";
const CHAIN = "cadena-modelo-prueba-con-008.svg";
const LAYERS = "capas-informe-funcion-con-008.svg";

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
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Parte un texto en líneas de como máximo `max` caracteres, sin cortar palabras. */
function wrap(text, max) {
  const lines = [];
  let line = "";
  for (const word of text.split(/\s+/)) {
    if (line && (line + " " + word).length > max) {
      lines.push(line);
      line = word;
    } else line = line ? `${line} ${word}` : word;
  }
  if (line) lines.push(line);
  return lines;
}

function textBlock(x, y, text, { max, size, lh, color, family = "Arial, sans-serif", weight = "400" }) {
  return wrap(text, max)
    .map((line, i) => `<text x="${x}" y="${f(y + i * lh)}" fill="${color}" font-family="${family}" font-size="${size}" font-weight="${weight}">${esc(line)}</text>`)
    .join("\n  ");
}

// Portada: bandas horizontales que ondulan e interrumpen su trazo, como el registro de una noche;
// una sola banda, a la derecha, se aclara y se ordena. No representa un hipnograma real ni un dato.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(8008);
  const palette = ["#3c5a7a", "#4f6f94", "#5d7fa6", "#2f4a66", "#6b8db5"];
  const parts = [];
  const bands = 23;
  for (let b = 0; b < bands; b += 1) {
    const y0 = 70 + b * ((H - 140) / (bands - 1));
    const lucid = b === 14;
    const amp = lucid ? 5 : 10 + rand() * 26;
    const freq = 0.004 + rand() * 0.006;
    const phase = rand() * Math.PI * 2;
    const color = lucid ? "#efe6d2" : palette[Math.floor(rand() * palette.length)];
    let x = W * 0.3 + rand() * 120;
    while (x < W) {
      const len = lucid ? 260 + rand() * 200 : 60 + rand() * 240;
      const end = Math.min(W, x + len);
      const pts = [];
      for (let px = x; px <= end; px += 12) {
        const drift = lucid ? (px / W) * 0.6 : 1;
        pts.push(`${f(px)},${f(y0 + Math.sin(px * freq + phase) * amp * drift + (lucid ? 0 : (rand() - 0.5) * 3))}`);
      }
      const opacity = lucid ? 0.55 + (x / W) * 0.4 : 0.25 + rand() * 0.45;
      parts.push(`<polyline points="${pts.join(" ")}" fill="none" stroke="${color}" stroke-opacity="${f(opacity)}" stroke-width="${lucid ? 3.2 : f(1.4 + rand() * 1.8)}" stroke-linecap="round"/>`);
      x = end + (lucid ? 18 + rand() * 20 : 20 + rand() * 120);
    }
  }
  // Puntos tenues dispersos: ruido de fondo sin forma reconocible.
  for (let i = 0; i < 180; i += 1) {
    const x = W * 0.35 + rand() * W * 0.65;
    const y = rand() * H;
    parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(0.8 + rand() * 1.8)}" fill="#c9d6e6" fill-opacity="${f(0.15 + rand() * 0.35)}"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Bandas horizontales en tonos de noche que ondulan y se interrumpen; una se aclara y se ordena</title>
  <desc id="desc">Composición generativa abstracta: a la derecha, bandas azules onduladas y entrecortadas sobre un fondo oscuro; una de ellas, de color claro, se vuelve más continua y estable hacia el borde. No representa un registro de sueño, un cerebro, una experiencia ni un dato.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0d1420"/><stop offset=".55" stop-color="#121c2c"/><stop offset="1" stop-color="#0a101a"/></linearGradient>
    <radialGradient id="glow" cx=".72" cy=".62" r=".5"><stop stop-color="#33507a" stop-opacity=".35"/><stop offset="1" stop-color="#33507a" stop-opacity="0"/></radialGradient>
    <linearGradient id="fadeL" x1="0" y1="0" x2="1" y2="0"><stop offset=".28" stop-color="#0d1420"/><stop offset=".5" stop-color="#0d1420" stop-opacity="0"/></linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
  <rect width="${W}" height="${H}" fill="url(#fadeL)"/>
</svg>
`;
}

function chain() {
  const steps = [
    ["Informe", "lo que se cuenta al despertar o se señala durante el sueño"],
    ["Correlato", "qué cambia en el cerebro cuando hay informe"],
    ["Alcance", "fase, población y método que lo sostienen"],
    ["Mecanismo", "qué produciría la experiencia y su forma"],
    ["Función", "para qué serviría soñar"],
    ["Prueba", "intervención o predicción que separaría rivales"],
  ];
  const firewalls = ["≠ registro", "≠ causa", "≠ todo dormir", "≠ función", "≠ demostrada"];
  const x0 = 92;
  const w = 222;
  const gap = 18;
  const cards = steps
    .map(([title, text], i) => {
      const x = x0 + i * (w + gap);
      const fill = i < 3 ? "#e8f1ee" : i < 5 ? "#f3e6cf" : "#e6ecf5";
      return `<rect x="${x}" y="300" width="${w}" height="250" rx="18" fill="${fill}"/>
  <text x="${x + 22}" y="350" fill="#2f5f7a" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="2">${String(i + 1).padStart(2, "0")}</text>
  <text x="${x + 22}" y="392" fill="#14201f" font-family="Georgia, serif" font-size="22" font-weight="700">${title}</text>
  ${textBlock(x + 22, 430, text, { max: 17, size: 19, lh: 26, color: "#34403e" })}`;
    })
    .join("\n  ");
  const walls = firewalls
    .map((label, i) => {
      const x = x0 + (i + 1) * (w + gap) - gap / 2;
      return `<line x1="${x}" y1="580" x2="${x}" y2="640" stroke="#d9785b" stroke-width="3"/>
  <text x="${x}" y="676" text-anchor="middle" fill="#f0b39c" font-family="Arial, sans-serif" font-size="19">${esc(label)}</text>`;
    })
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Cadena desde un informe al despertar hasta una tesis sobre la función de soñar</title>
  <desc id="desc">Seis capas: informe, correlato, alcance, mecanismo, función y prueba. Entre cada par hay un cortafuegos: un informe no es un registro, un correlato no es una causa, un estudio no vale para todo dormir, un mecanismo no es una función y una función propuesta no está demostrada.</desc>
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0d1420"/><stop offset="1" stop-color="#16222f"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="92" y="92" fill="#9cc1e6" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">CON-008 · CADENA DE INFERENCIA</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="46" font-weight="700">Un informe no es un registro, ni un correlato una causa</text>
  <text x="92" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="24">Cada paso añade supuestos; la confianza de un paso no viaja sola al siguiente.</text>
  ${cards}
  ${walls}
  <text x="92" y="790" fill="#9fb0ab" font-family="Arial, sans-serif" font-size="20">Verde: lo que se informa o se mide. Ocre: lo que se propone. Azul: lo que podría decidirlo.</text>
  <text x="92" y="822" fill="#9fb0ab" font-family="Arial, sans-serif" font-size="20">Síntesis del expediente; no es una guía de inducción ni de interpretación de sueños.</text>
</svg>
`;
}

function layers() {
  const rows = [
    ["Informe", "REM y no-REM producen informes; 34 % frente a 77 % con despertares en serie", "que el informe registre la experiencia sin pérdida", "A", "ok"],
    ["Correlato", "PET del REM; zona caliente posterior que predice el informe; 6 de 36 respondieron en tiempo real", "que la zona sea la sede ni la causa de la experiencia", "B", "partial"],
    ["Mecanismo", "activación-síntesis frente a prosencéfalo, dos generadores y red por defecto", "que una teoría haya vencido: falta la prueba discriminante", "C", "partial"],
    ["Función", "más amenazas soñadas tras el trauma; soñar la tarea se asocia a mejora", "que soñar, y no dormir, cause el beneficio", "C", "partial"],
    ["Metafísica", "relatos de sueños vívidos, premonitorios o con mensajes", "que revelen otra realidad o información que la persona no podía conocer", "E", "fail"],
  ];
  const fills = { ok: "#e8f1ee", partial: "#f3e6cf", fail: "#f3d6c8" };
  const y0 = 262;
  const rh = 104;
  const body = rows
    .map(([name, measured, notFollow, grade, kind], i) => {
      const y = y0 + i * rh;
      return `<text x="92" y="${y + 50}" fill="#f4f1e8" font-family="Georgia, serif" font-size="25" font-weight="700">${name}</text>
  <text x="92" y="${y + 80}" fill="#9cc1e6" font-family="Arial, sans-serif" font-size="18" font-weight="700">confianza ${grade}</text>
  <rect x="300" y="${y + 8}" width="600" height="${rh - 16}" rx="12" fill="${fills[kind]}"/>
  ${textBlock(320, y + 42, measured, { max: 56, size: 19, lh: 25, color: "#22302e" })}
  <rect x="920" y="${y + 8}" width="588" height="${rh - 16}" rx="12" fill="#e6ecf5"/>
  ${textBlock(940, y + 42, notFollow, { max: 54, size: 19, lh: 25, color: "#22302e" })}`;
    })
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Cuatro capas: informe, correlato, mecanismo y función; qué se midió en cada una y qué no se sigue</title>
  <desc id="desc">Tabla de cinco filas. Informe: hay informes en REM y no-REM, pero no registran la experiencia sin pérdida. Correlato: PET, zona caliente posterior y comunicación en tiempo real, pero un correlato no es la sede ni la causa. Mecanismo: activación-síntesis frente a teorías prosencefálicas y cognitivas, sin prueba discriminante. Función: amenazas y memoria, sin separar soñar de dormir. Metafísica: sin datos a favor.</desc>
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0d1420"/><stop offset="1" stop-color="#16222f"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="92" y="92" fill="#9cc1e6" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">CON-008 · CUATRO CAPAS</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="44" font-weight="700">Lo que se midió y lo que no se sigue</text>
  <text x="320" y="236" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="20" font-weight="700">Qué se midió</text>
  <text x="940" y="236" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="20" font-weight="700">Qué no se sigue</text>
  ${body}
  <text x="92" y="850" fill="#9fb0ab" font-family="Arial, sans-serif" font-size="19">Verde: sólido. Ocre: medido o propuesto con límites serios. Rojo claro: sin datos a favor. No es una guía de inducción ni de interpretación de sueños.</text>
</svg>
`;
}

fs.mkdirSync(OUT, { recursive: true });
const heroSvg = hero();
fs.writeFileSync(path.join(OUT, `${HERO}.svg`), heroSvg);
fs.writeFileSync(path.join(OUT, CHAIN), chain());
fs.writeFileSync(path.join(OUT, LAYERS), layers());

if (process.argv.includes("--png")) {
  const { default: sharp } = await import("sharp");
  await sharp(Buffer.from(heroSvg), { density: 72 })
    .resize(1672, 941)
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, `${HERO}.png`));
}
console.log("Visuales de CON-008 generadas en assets/visuales");
