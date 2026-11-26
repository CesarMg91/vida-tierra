// Genera las visuales de CIV-006 (domesticaciones y aldeas por archivos regionales)
// de forma determinista: misma semilla, mismo archivo. Sin modelos de imagen ni
// servicios externos. La matriz se construye desde content/civilization-domestications.json
// para que el visual y el módulo público no se separen.
// Uso: node scripts/generate-civ-006-visuals.mjs [--png]
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "assets", "visuales");
const DATA = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-domestications.json"), "utf8"));
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

// Portada: seis bandejas de archivo sobre estratos que no se alinean. Cada bandeja
// guarda una clase genérica de resto (granos, espiguillas, fitolitos, almidones,
// tubérculos, semillas) y un hilo de fecha que cae a una altura distinta del estrato.
// No hay mapas, plantas reconocibles de una región, personas, aldeas ni texto.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(6006);
  const parts = [];
  const ink = "#d9b46b";
  const sage = "#9fbf9a";
  const clay = "#c98a5e";
  const ash = "#b8743f";

  // Estratos: bandas onduladas, cada una con su propio grosor; no son un territorio.
  let y0 = 610;
  for (let k = 0; k < 7; k += 1) {
    const h = 34 + rand() * 30;
    let top = `M0 ${f(y0)}`;
    let bottom = "";
    for (let x = 0; x <= W; x += 76) {
      const dy = Math.sin(x / 190 + k) * 7 + (rand() - 0.5) * 6;
      top += `L${x} ${f(y0 + dy)}`;
      bottom = `L${x} ${f(y0 + h + dy * 0.6)}` + bottom;
    }
    const tone = ["#1c1712", "#221b14", "#191612", "#241d15", "#1a1813", "#201a13", "#17140f"][k];
    parts.push(`<path d="${top}L${W} ${f(y0 + h)}${bottom.replace(/^L/, "L")}L0 ${f(y0 + h)}Z" fill="${tone}" stroke="#5b4a33" stroke-opacity=".35" stroke-width="1"/>`);
    y0 += h;
  }

  const trays = Array.from({ length: 6 }, (_, i) => ({ x: 110 + i * 250, y: 150 + (i % 2) * 70, w: 200, h: 240, i }));
  const grain = (cx, cy, rx, ry, rot, stroke, op) => `<ellipse cx="${f(cx)}" cy="${f(cy)}" rx="${f(rx)}" ry="${f(ry)}" transform="rotate(${f(rot)} ${f(cx)} ${f(cy)})" fill="#1d1813" stroke="${stroke}" stroke-opacity="${f(op)}" stroke-width="1.3"/>`;

  for (const t of trays) {
    parts.push(`<rect x="${t.x}" y="${t.y}" width="${t.w}" height="${t.h}" fill="#12100d" fill-opacity=".82" stroke="#7d6646" stroke-width="1.4"${t.i === 4 ? ' stroke-dasharray="6 6"' : ""}/>`);
    const cx = t.x + t.w / 2;
    const cy = t.y + t.h / 2;
    if (t.i === 0) {
      // granos alargados
      for (let k = 0; k < 16; k += 1) parts.push(grain(t.x + 30 + rand() * 140, t.y + 30 + rand() * 180, 11, 5, rand() * 180, ink, 0.8));
    } else if (t.i === 1) {
      // bases de espiguilla: medias lunas abiertas y cerradas
      for (let k = 0; k < 12; k += 1) {
        const px = t.x + 34 + (k % 4) * 44;
        const py = t.y + 48 + Math.floor(k / 4) * 66;
        const open = rand() > 0.45;
        parts.push(`<path d="M${px - 12} ${py}A12 12 0 0 1 ${px + 12} ${py}${open ? "" : "Z"}" fill="none" stroke="${clay}" stroke-opacity=".8" stroke-width="1.6"/>`);
      }
    } else if (t.i === 2) {
      // fitolitos: abanicos con borde festoneado
      for (let k = 0; k < 7; k += 1) {
        const px = t.x + 40 + rand() * 120;
        const py = t.y + 40 + rand() * 160;
        let d = `M${f(px)} ${f(py + 16)}`;
        for (let a = 0; a <= 6; a += 1) {
          const ang = Math.PI + (a / 6) * Math.PI;
          d += `L${f(px + Math.cos(ang) * 16)} ${f(py + Math.sin(ang) * 16 + (a % 2) * 3)}`;
        }
        parts.push(`<path d="${d}Z" fill="none" stroke="${sage}" stroke-opacity=".8" stroke-width="1.3"/>`);
      }
    } else if (t.i === 3) {
      // almidones: círculos con cruz de extinción
      for (let k = 0; k < 14; k += 1) {
        const px = t.x + 26 + rand() * 148;
        const py = t.y + 26 + rand() * 188;
        const r = 5 + rand() * 7;
        parts.push(`<circle cx="${f(px)}" cy="${f(py)}" r="${f(r)}" fill="none" stroke="${ink}" stroke-opacity=".55"/><path d="M${f(px - r * 0.7)} ${f(py)}H${f(px + r * 0.7)}M${f(px)} ${f(py - r * 0.7)}V${f(py + r * 0.7)}" stroke="${ink}" stroke-opacity=".35"/>`);
      }
    } else if (t.i === 4) {
      // tubérculo: un solo contorno punteado, casi vacío (silencio de preservación)
      parts.push(`<path d="M${cx - 50} ${cy}C${cx - 48} ${cy - 46} ${cx + 30} ${cy - 54} ${cx + 52} ${cy - 8}C${cx + 66} ${cy + 30} ${cx - 10} ${cy + 58} ${cx - 50} ${cy}Z" fill="none" stroke="${ash}" stroke-opacity=".5" stroke-width="1.4" stroke-dasharray="3 7"/>`);
    } else {
      // semillas: gotas de testa gruesa y delgada
      for (let k = 0; k < 12; k += 1) {
        const px = t.x + 34 + (k % 4) * 44;
        const py = t.y + 52 + Math.floor(k / 4) * 64;
        const thin = rand() > 0.5;
        parts.push(`<circle cx="${px}" cy="${py}" r="13" fill="#1d1813" stroke="${sage}" stroke-opacity=".75" stroke-width="${thin ? 1 : 3.2}"/>`);
      }
    }
    // Hilo de fecha: baja hasta un estrato distinto en cada bandeja.
    const drop = 640 + rand() * 230;
    parts.push(`<path d="M${cx} ${t.y + t.h + 4}V${f(drop)}" stroke="${ash}" stroke-opacity=".55" stroke-width="1.4" stroke-dasharray="${t.i % 2 ? "4 6" : "none"}"/>`);
    parts.push(`<circle cx="${cx}" cy="${f(drop)}" r="5" fill="${ash}" fill-opacity=".8"/>`);
  }

  for (let k = 0; k < 220; k += 1) {
    parts.push(`<circle cx="${f(rand() * W)}" cy="${f(rand() * H)}" r="${f(0.6 + rand() * 1.3)}" fill="#e2c48c" fill-opacity="${f(rand() * 0.3)}"/>`);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Seis bandejas de archivo sobre estratos que no se alinean</title>
  <desc id="desc">Composición generativa abstracta para CIV-006: seis bandejas con granos, bases de espiguilla abiertas y cerradas, fitolitos en abanico, almidones con cruz, un contorno punteado casi vacío y semillas de testa gruesa y delgada. De cada bandeja baja un hilo de fecha hasta un estrato distinto. No representa un mapa, una aldea, una planta de una región concreta ni a personas; la bandeja casi vacía señala el silencio de preservación de los tubérculos.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0d0c0a"/><stop offset=".6" stop-color="#15130f"/><stop offset="1" stop-color="#0b0d0c"/></linearGradient>
    <radialGradient id="glow" cx=".55" cy=".3" r=".6"><stop stop-color="#4f5a3a" stop-opacity=".4"/><stop offset="1" stop-color="#4f5a3a" stop-opacity="0"/></radialGradient>
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
    ["Planta o animal", "identificación:", "resto, fitolito, ADN"],
    ["Rasgo", "serie de espiga,", "grano o testa"],
    ["Cultivo o manejo", "malezas, canales,", "fuego, herramientas"],
    ["Aldea", "casas, pozos,", "cerámica"],
    ["Fecha", "qué objeto", "y con qué reloj"],
    ["Difusión", "restos lejos", "+ genomas"],
  ];
  const leaps = ["≠ domesticado", "≠ cultivado aquí", "≠ aldea", "≠ agricultura", "≠ origen"];
  const boxes = steps.map(([h, a, b], i) => {
    const x = 70 + i * 248;
    return `  <g transform="translate(${x} 300)"><rect width="218" height="150" fill="#141a19" stroke="#779176"/><text x="16" y="46" class="h">${esc(h)}</text><text x="16" y="86" class="small">${esc(a)}</text><text x="16" y="108" class="small">${esc(b)}</text></g>`;
  });
  const arrows = steps.slice(0, -1).map((_, i) => {
    const x = 70 + i * 248 + 218;
    return `  <path class="rule" d="M${x + 4} 375H${x + 24}"/><path d="M${x + 24} 369L${x + 28} 375L${x + 24} 381" fill="none" stroke="#8b6a43" stroke-width="2"/>`;
  });
  const jumps = leaps.map((l, i) => {
    const x = 70 + i * 248 + 109;
    return `  <path class="dash" d="M${x} 455C${x + 50} 555 ${x + 198} 555 ${x + 248} 455"/><text x="${x + 62}" y="594" class="l">${esc(l)}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Una semilla no es una aldea: seis campos y sus saltos</title>
  <desc id="desc">Seis cajas —planta o animal, rasgo, cultivo o manejo, aldea, fecha y difusión— unidas por líneas que indican el orden de lectura, no una herencia. Debajo, arcos discontinuos marcan lo que cada campo no hereda del anterior: estar domesticado, haberse cultivado ahí, la aldea, la agricultura y el origen. La fecha se lee siempre como objeto fechado (CIV-002).</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#0b1011"/><stop offset="1" stop-color="#171512"/></linearGradient>
    <style>${STYLE}</style>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="70" y="96" class="k">CIV-006 · SEIS CAMPOS</text>
  <text x="70" y="150" font-family="Georgia,serif" font-size="42" fill="#f2e7d6">Una semilla no es una aldea</text>
  <text x="70" y="190" class="t">Cada archivo regional se registra en seis campos. Un caso puede estar sostenido en uno y vacío en otro.</text>
${boxes.join("\n")}
${arrows.join("\n")}
${jumps.join("\n")}
  <text x="70" y="700" class="t">Shangshan tuvo aldea antes del rasgo domesticado; Kuk tuvo manejo sin aldea; Guilá Naquitz, calabaza domesticada en una cueva.</text>
  <text x="70" y="736" class="t">El maíz y el mijo perla viajaron antes de terminar su domesticación. El ñame tiene genoma y casi ningún resto.</text>
  <text x="70" y="772" class="t">Un fitolito no es una espiga, un genoma actual no es un sitio y un silencio de preservación no es una ausencia.</text>
</svg>
`;
}

const STATUS_FILL = { sostenido: "#a9c1a7", condicionado: "#d9bd8d", "no-demostrado": "#d79a70", "dato-ausente": "#6f6a62" };
const STATUS_LABEL = { sostenido: "sostenido", condicionado: "condicionado", "no-demostrado": "no demostrado", "dato-ausente": "dato ausente" };

function matrix() {
  const fields = ["PLANTA/ANIMAL", "RASGO", "CULTIVO/MANEJO", "ALDEA", "FECHA", "DIFUSIÓN"];
  const x0 = 430;
  const cw = 182;
  const y0 = 250;
  const rh = 62;
  const head = fields.map((h, c) => `<text x="${x0 + c * cw + 10}" y="${y0 - 14}" class="head">${esc(h)}</text>`).join("");
  const rows = DATA.cases.map((item, r) => {
    const y = y0 + r * rh;
    const label = `<text x="70" y="${y + 26}" class="row">${esc(item.title)}</text><text x="70" y="${y + 46}" class="small">${esc(item.region)}</text>`;
    const cells = item.steps.map((step, c) => `<rect x="${x0 + c * cw}" y="${y}" width="${cw - 8}" height="${rh - 8}" fill="${STATUS_FILL[step.status]}" fill-opacity=".9" stroke="#2c2720"/><text x="${x0 + c * cw + 10}" y="${y + 32}" class="cell"${step.status === "dato-ausente" ? ' fill="#e6dccd"' : ""}>${esc(STATUS_LABEL[step.status])}</text>`).join("");
    return `  <g>${label}${cells}</g>`;
  });
  const legend = Object.entries(STATUS_LABEL).map(([key, label], i) => `<rect x="${70 + i * 230}" y="808" width="22" height="22" fill="${STATUS_FILL[key]}"/><text x="${102 + i * 230}" y="825" class="t">${esc(label)}</text>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Ocho archivos regionales por seis campos</title>
  <desc id="desc">Matriz de ${DATA.cases.length} archivos regionales (arroz del bajo Yangtsé, mijo del norte de China, Kuk, sorgo y mijo perla, ñame y palma de aceite, Mesoamérica, complejo agrícola del Este, Andes y Amazonía) por seis campos: planta o animal, rasgo, cultivo o manejo, aldea, fecha y difusión. Cada celda indica el estado del campo en el módulo público: sostenido, condicionado, no demostrado o dato ausente. Ninguna fila está completa en verde.</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#0b1011"/><stop offset="1" stop-color="#171512"/></linearGradient>
    <style>${STYLE}</style>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="70" y="96" class="k">CIV-006 · MATRIZ DE ARCHIVOS</text>
  <text x="70" y="150" font-family="Georgia,serif" font-size="42" fill="#f2e7d6">Ninguna fila está completa</text>
  <text x="70" y="190" class="t">El estado es el de cada campo del archivo, no una calificación de la región. «Dato ausente» no es ausencia de cultivo.</text>
  ${head}
${rows.join("\n")}
  ${legend}
</svg>
`;
}

const heroSvg = hero();
fs.writeFileSync(path.join(OUT, "hero-civ-006-domesticaciones-aldeas.svg"), heroSvg);
fs.writeFileSync(path.join(OUT, "cadena-semilla-aldea-civ-006.svg"), chain());
fs.writeFileSync(path.join(OUT, "matriz-regiones-campos-civ-006.svg"), matrix());

if (process.argv.includes("--png")) {
  const { default: sharp } = await import("sharp");
  await sharp(Buffer.from(heroSvg)).png({ compressionLevel: 9 }).toFile(path.join(OUT, "hero-civ-006-domesticaciones-aldeas.png"));
}
console.log("CIV-006: visuales escritas en assets/visuales");
