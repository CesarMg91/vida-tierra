// Genera las visuales de CIV-009 (Estados e imperios: alcance desigual)
// de forma determinista: misma semilla, mismo archivo. Sin modelos de imagen ni
// servicios externos. La matriz se construye desde content/civilization-empires.json
// para que el visual y el módulo público no se separen.
// Uso: node scripts/generate-civ-009-visuals.mjs [--png]
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "assets", "visuales");
const DATA = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-empires.json"), "utf8"));
const f = (n) => Number(n.toFixed(1));

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

const esc = (text) => String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Portada: ocho manchas de un mismo tono, como territorios reclamados en un
// atlas, que al acercarse se deshacen: hilos de caminos, puntos de presencia y
// huecos sin trazo. Ninguna mancha es el contorno de un imperio real, ni hay
// texto ni personas.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(9009);
  const parts = [];
  const ink = "#d9b46b";
  const sage = "#9fbf9a";
  const clay = "#c98a5e";

  // Fondo: retícula de meridianos y paralelos genéricos, no una proyección real.
  for (let k = 0; k <= 16; k += 1) parts.push(`<path d="M${f((k * W) / 16)} 0V${H}" stroke="#3d3426" stroke-opacity=".45" stroke-width="1"/>`);
  for (let k = 0; k <= 9; k += 1) parts.push(`<path d="M0 ${f((k * H) / 9)}H${W}" stroke="#3d3426" stroke-opacity=".45" stroke-width="1"/>`);

  const blobs = Array.from({ length: 8 }, (_, i) => ({ cx: 230 + (i % 4) * 405 + (rand() - 0.5) * 60, cy: 250 + Math.floor(i / 4) * 430 + (rand() - 0.5) * 40, r: 115 + rand() * 35, i }));
  for (const b of blobs) {
    // Mancha reclamada: contorno irregular de relleno plano.
    let d = "";
    const n = 18;
    const radii = Array.from({ length: n }, () => b.r * (0.75 + rand() * 0.4));
    for (let k = 0; k < n; k += 1) {
      const a = (k / n) * Math.PI * 2;
      const x = b.cx + Math.cos(a) * radii[k] * 1.25;
      const y = b.cy + Math.sin(a) * radii[k] * 0.85;
      d += `${k === 0 ? "M" : "L"}${f(x)} ${f(y)}`;
    }
    parts.push(`<path d="${d}Z" fill="${clay}" fill-opacity=".14" stroke="${clay}" stroke-opacity=".55" stroke-width="1.4" stroke-dasharray="6 6"/>`);
    // Núcleo denso y caminos que salen y se cortan antes del borde.
    parts.push(`<circle cx="${f(b.cx)}" cy="${f(b.cy)}" r="9" fill="${ink}" fill-opacity=".9"/>`);
    const roads = 3 + (b.i % 3);
    for (let k = 0; k < roads; k += 1) {
      const a = rand() * Math.PI * 2;
      const len = b.r * (0.45 + rand() * 0.6);
      let rd = `M${f(b.cx)} ${f(b.cy)}`;
      for (let s = 1; s <= 5; s += 1) rd += `L${f(b.cx + (Math.cos(a) * len * s) / 5 + (rand() - 0.5) * 12)} ${f(b.cy + (Math.sin(a) * len * 0.7 * s) / 5 + (rand() - 0.5) * 12)}`;
      parts.push(`<path d="${rd}" fill="none" stroke="${ink}" stroke-opacity=".75" stroke-width="2"/>`);
      // Puntos de presencia a lo largo del camino.
      for (let s = 1; s <= 3; s += 1) parts.push(`<circle cx="${f(b.cx + (Math.cos(a) * len * s) / 3.4)}" cy="${f(b.cy + (Math.sin(a) * len * 0.7 * s) / 3.4)}" r="3.2" fill="${sage}" fill-opacity=".85"/>`);
    }
    // Huecos sin trazo dentro de la mancha.
    for (let k = 0; k < 2 + (b.i % 2); k += 1) {
      parts.push(`<circle cx="${f(b.cx + (rand() - 0.5) * b.r * 1.4)}" cy="${f(b.cy + (rand() - 0.5) * b.r * 0.9)}" r="${f(18 + rand() * 22)}" fill="#0d0c0a" fill-opacity=".85" stroke="#7d6646" stroke-opacity=".5" stroke-dasharray="2 5"/>`);
    }
  }

  for (let k = 0; k < 200; k += 1) {
    parts.push(`<circle cx="${f(rand() * W)}" cy="${f(rand() * H)}" r="${f(0.6 + rand() * 1.3)}" fill="#e2c48c" fill-opacity="${f(rand() * 0.3)}"/>`);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Ocho territorios reclamados que se deshacen en caminos y huecos</title>
  <desc id="desc">Composición generativa abstracta para CIV-009: sobre una retícula genérica de meridianos y paralelos, ocho manchas de contorno discontinuo y relleno plano, como territorios pintados en un atlas. Dentro de cada una, un núcleo denso del que salen caminos que se cortan antes del borde, puntos de presencia a lo largo de esos caminos y huecos oscuros sin trazo. Ninguna mancha reproduce el contorno de un imperio real; no hay mapas, personas ni texto.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0d0c0a"/><stop offset=".6" stop-color="#15130f"/><stop offset="1" stop-color="#0b0d0c"/></linearGradient>
    <radialGradient id="glow" cx=".5" cy=".4" r=".6"><stop stop-color="#5a4a30" stop-opacity=".34"/><stop offset="1" stop-color="#5a4a30" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

const STYLE = `.k{font:19px Consolas,monospace;letter-spacing:2px;fill:#c39456}.h{font:24px Georgia,serif;fill:#efe3d1}.t{font:19px Arial,sans-serif;fill:#c9c2b8}.l{font:16px Arial,sans-serif;fill:#d6a27b}.small{font:14px Consolas,monospace;fill:#91ad92}.cell{font:13px Arial,sans-serif;fill:#151310}.head{font:13px Consolas,monospace;letter-spacing:1px;fill:#c39456}.row{font:15px Arial,sans-serif;fill:#e6dccd}.rule{stroke:#8b6a43;stroke-width:2}.dash{stroke:#a96545;stroke-width:2;stroke-dasharray:8 8;fill:none}`;

function chain() {
  const steps = [
    ["Reclamación", "inscripciones,", "títulos, listas"],
    ["Presencia", "agentes, colonias,", "guarniciones"],
    ["Logística", "caminos, raciones,", "costo modelado"],
    ["Tributo", "exigido en lista;", "recibido en recibo"],
    ["Archivo", "lo registrado y", "lo conservado"],
    ["Negociación", "gobernantes locales,", "pactos, oralidad"],
    ["Control", "cambios medibles", "por lugar"],
  ];
  const leaps = ["≠ estar", "≠ abastecer", "≠ cobrar", "≠ entregar", "≠ alcanzar", "≠ obedecer"];
  const boxes = steps.map(([h, a, b], i) => {
    const x = 50 + i * 214;
    return `  <g transform="translate(${x} 300)"><rect width="190" height="150" fill="#141a19" stroke="#779176"/><text x="14" y="46" class="h">${esc(h)}</text><text x="14" y="86" class="small">${esc(a)}</text><text x="14" y="108" class="small">${esc(b)}</text></g>`;
  });
  const arrows = steps.slice(0, -1).map((_, i) => {
    const x = 50 + i * 214 + 190;
    return `  <path class="rule" d="M${x + 2} 375H${x + 20}"/><path d="M${x + 20} 369L${x + 24} 375L${x + 20} 381" fill="none" stroke="#8b6a43" stroke-width="2"/>`;
  });
  const jumps = leaps.map((l, i) => {
    const x = 50 + i * 214 + 95;
    return `  <path class="dash" d="M${x} 455C${x + 44} 555 ${x + 170} 555 ${x + 214} 455"/><text x="${x + 60}" y="594" class="l">${esc(l)}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Un mapa no es un dominio: siete dimensiones del alcance y sus saltos</title>
  <desc id="desc">Siete cajas —reclamación, presencia, logística, tributo, archivo, negociación y control efectivo— con el archivo que mide cada una, unidas por líneas que indican el orden de lectura, no una herencia. Debajo, arcos discontinuos marcan lo que cada dimensión no hereda de la anterior: reclamar no es estar, estar no es abastecer, abastecer no es cobrar, exigir no es recibir, registrar no es alcanzar y negociar no es obedecer.</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#0b1011"/><stop offset="1" stop-color="#171512"/></linearGradient>
    <style>${STYLE}</style>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="50" y="96" class="k">CIV-009 · SIETE DIMENSIONES DEL ALCANCE</text>
  <text x="50" y="150" font-family="Georgia,serif" font-size="42" fill="#f2e7d6">Un mapa no es un dominio</text>
  <text x="50" y="190" class="t">El alcance de un Estado se mide en siete dimensiones, cada una con su archivo y sus supuestos.</text>
${boxes.join("\n")}
${arrows.join("\n")}
${jumps.join("\n")}
  <text x="50" y="700" class="t">Puzriš-Dagan dejó más de 13 500 tablillas: miden el centro que recibe, no la periferia que paga.</text>
  <text x="50" y="736" class="t">La Matrícula de Tributos registra lo exigido; el Qhapaq Ñan mide caminos, no obediencia.</text>
  <text x="50" y="772" class="t">En costo, el valle del Po estaba tan lejos de Roma como la costa de Britania.</text>
</svg>
`;
}

const STATUS_FILL = { sostenido: "#a9c1a7", condicionado: "#d9bd8d", "no-demostrado": "#d79a70", "dato-ausente": "#6f6a62" };
const STATUS_LABEL = { sostenido: "sostenido", condicionado: "condicionado", "no-demostrado": "no demostrado", "dato-ausente": "dato ausente" };

function matrix() {
  const fields = ["RECLAMA", "PRESENCIA", "LOGÍSTICA", "TRIBUTO", "ARCHIVO", "NEGOCIA", "CONTROL"];
  const x0 = 420;
  const cw = 160;
  const y0 = 250;
  const rh = 62;
  const head = fields.map((h, c) => `<text x="${x0 + c * cw + 10}" y="${y0 - 14}" class="head">${esc(h)}</text>`).join("");
  const rows = DATA.cases.map((item, r) => {
    const y = y0 + r * rh;
    const label = `<text x="70" y="${y + 26}" class="row">${esc(item.title)}</text><text x="70" y="${y + 46}" class="small">${esc(item.region)}</text>`;
    const cells = item.steps.map((step, c) => `<rect x="${x0 + c * cw}" y="${y}" width="${cw - 8}" height="${rh - 8}" fill="${STATUS_FILL[step.status]}" fill-opacity=".9" stroke="#2c2720"/><text x="${x0 + c * cw + 10}" y="${y + 33}" class="cell"${step.status === "dato-ausente" ? ' fill="#e6dccd"' : ""}>${esc(STATUS_LABEL[step.status])}</text>`).join("");
    return `  <g>${label}${cells}</g>`;
  });
  const legend = Object.entries(STATUS_LABEL).map(([key, label], i) => `<rect x="${70 + i * 230}" y="808" width="22" height="22" fill="${STATUS_FILL[key]}"/><text x="${102 + i * 230}" y="825" class="t">${esc(label)}</text>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Ocho Estados e imperios por siete dimensiones de alcance</title>
  <desc id="desc">Matriz de ${DATA.cases.length} casos (Acadia y Ur III, imperio neoasirio, imperio aqueménida, Qin y Han, imperio romano, Tawantinsuyu, Triple Alianza mexica, Mali y Songhai) por siete dimensiones: reclamación, presencia, logística, tributo, archivo, negociación y control efectivo. Cada celda indica el estado de la dimensión en el módulo público: sostenido, condicionado, no demostrado o dato ausente. Ninguna fila tiene el control efectivo sostenido.</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#0b1011"/><stop offset="1" stop-color="#171512"/></linearGradient>
    <style>${STYLE}</style>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="70" y="96" class="k">CIV-009 · MATRIZ DE ALCANCE</text>
  <text x="70" y="150" font-family="Georgia,serif" font-size="42" fill="#f2e7d6">Ninguna columna de control está completa</text>
  <text x="70" y="190" class="t">El estado es el del archivo de cada dimensión, no una calificación del imperio. «Dato ausente» no es debilidad ni autonomía.</text>
  ${head}
${rows.join("\n")}
  ${legend}
</svg>
`;
}

const heroSvg = hero();
fs.writeFileSync(path.join(OUT, "hero-civ-009-estados-imperios.svg"), heroSvg);
fs.writeFileSync(path.join(OUT, "cadena-alcance-estatal-civ-009.svg"), chain());
fs.writeFileSync(path.join(OUT, "matriz-imperios-dimensiones-civ-009.svg"), matrix());

if (process.argv.includes("--png")) {
  const { default: sharp } = await import("sharp");
  await sharp(Buffer.from(heroSvg)).png({ compressionLevel: 9 }).toFile(path.join(OUT, "hero-civ-009-estados-imperios.png"));
}
console.log("CIV-009: visuales escritas en assets/visuales");
