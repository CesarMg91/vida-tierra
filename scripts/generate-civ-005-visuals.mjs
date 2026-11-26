// Genera las visuales de CIV-005 (nombres e identidades) de forma determinista:
// misma semilla, mismo archivo. Sin modelos de imagen ni servicios externos.
// Uso: node scripts/generate-civ-005-visuals.mjs [--png]
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
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

// Portada: siete bandejas en escalera, de lo más material a lo más inferido.
// Las primeras están llenas; las últimas se vacían. Ninguna forma es un mapa,
// un rostro, una bandera, una escritura ni una persona; no hay texto.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(5005);
  const parts = [];

  // Fondo: retícula tenue de clasificación (fichas de inventario), no un territorio.
  for (let x = 40; x < W; x += 56) parts.push(`<path d="M${x} 0V${H}" stroke="#3a3324" stroke-opacity=".18" stroke-width="1"/>`);
  for (let y = 30; y < H; y += 56) parts.push(`<path d="M0 ${y}H${W}" stroke="#3a3324" stroke-opacity=".14" stroke-width="1"/>`);

  const trays = [];
  for (let i = 0; i < 7; i += 1) {
    trays.push({ x: 120 + i * 210, y: 560 - i * 62, w: 180, h: 200, i });
  }
  const ink = "#d9b46b";
  const sage = "#9fbf9a";
  const clay = "#c98a5e";

  const sherd = (cx, cy, r, rot, stroke, op = 0.8) => {
    const a = (Math.PI * 2) / 5;
    let d = "";
    for (let k = 0; k < 5; k += 1) {
      const rr = r * (0.65 + rand() * 0.45);
      const px = cx + Math.cos(k * a + rot) * rr;
      const py = cy + Math.sin(k * a + rot) * rr * 0.8;
      d += `${k === 0 ? "M" : "L"}${f(px)} ${f(py)}`;
    }
    return `<path d="${d}Z" fill="#1d1813" stroke="${stroke}" stroke-opacity="${op}" stroke-width="1.2"/>`;
  };

  for (const t of trays) {
    const filled = 1 - t.i / 7;
    parts.push(`<rect x="${t.x}" y="${t.y}" width="${t.w}" height="${t.h}" fill="#12100d" fill-opacity="${f(0.55 + filled * 0.35)}" stroke="#7d6646" stroke-width="1.4"${t.i >= 5 ? ' stroke-dasharray="6 6"' : ""}/>`);
    const cx = t.x + t.w / 2;
    const cy = t.y + t.h / 2;
    if (t.i === 0) {
      // objeto: un solo fragmento con su etiqueta de procedencia (rectángulo sin texto)
      parts.push(sherd(cx, cy - 8, 46, 0.4, ink, 0.9));
      parts.push(`<rect x="${f(cx - 30)}" y="${f(t.y + t.h - 38)}" width="60" height="16" fill="none" stroke="${ink}" stroke-opacity=".5"/>`);
    } else if (t.i === 1) {
      // conjunto: varios fragmentos asociados
      for (let k = 0; k < 9; k += 1) parts.push(sherd(t.x + 30 + rand() * 120, t.y + 30 + rand() * 140, 14 + rand() * 10, rand() * 6, ink, 0.7));
    } else if (t.i === 2) {
      // estilo: el mismo motivo repetido en bandas
      for (let r = 0; r < 5; r += 1) {
        let d = "";
        for (let x = 0; x <= 140; x += 14) d += `${x === 0 ? "M" : "L"}${t.x + 20 + x} ${t.y + 40 + r * 30 + (x / 14) % 2 * 12}`;
        parts.push(`<path d="${d}" fill="none" stroke="${clay}" stroke-opacity=".75" stroke-width="1.6"/>`);
      }
    } else if (t.i === 3) {
      // práctica: arcos concéntricos de un gesto repetido
      for (let k = 0; k < 6; k += 1) parts.push(`<path d="M${f(cx - 70 + k * 6)} ${f(cy + 50)}A${70 - k * 9} ${70 - k * 9} 0 0 1 ${f(cx + 70 - k * 6)} ${f(cy + 50)}" fill="none" stroke="${sage}" stroke-opacity="${f(0.8 - k * 0.1)}" stroke-width="1.4"/>`);
    } else if (t.i === 4) {
      // grupo: red de puntos con enlaces parciales
      const pts = Array.from({ length: 14 }, () => [t.x + 22 + rand() * 136, t.y + 22 + rand() * 156]);
      for (let k = 0; k < pts.length; k += 1) {
        const j = (k * 5 + 3) % pts.length;
        if (rand() > 0.35) parts.push(`<path d="M${f(pts[k][0])} ${f(pts[k][1])}L${f(pts[j][0])} ${f(pts[j][1])}" stroke="${sage}" stroke-opacity=".35" stroke-width="1"/>`);
      }
      for (const [px, py] of pts) parts.push(`<circle cx="${f(px)}" cy="${f(py)}" r="3.6" fill="${sage}" fill-opacity=".75"/>`);
    } else if (t.i === 5) {
      // nombre: una etiqueta colgante en blanco, escrita por otro
      parts.push(`<path d="M${cx} ${t.y + 30}L${cx} ${t.y + 70}" stroke="${ink}" stroke-opacity=".5"/>`);
      parts.push(`<rect x="${cx - 50}" y="${t.y + 70}" width="100" height="56" rx="4" fill="none" stroke="${ink}" stroke-opacity=".6" stroke-width="1.4"/>`);
      for (let k = 0; k < 3; k += 1) parts.push(`<path d="M${cx - 36} ${t.y + 88 + k * 12}H${f(cx - 36 + 40 + rand() * 30)}" stroke="${ink}" stroke-opacity=".25" stroke-width="2"/>`);
    } else {
      // identidad: bandeja vacía; sólo un círculo punteado
      parts.push(`<circle cx="${cx}" cy="${cy}" r="48" fill="none" stroke="#b8743f" stroke-opacity=".45" stroke-width="1.4" stroke-dasharray="3 7"/>`);
    }
  }

  // Hilo de trazabilidad: continuo entre las primeras bandejas, discontinuo y tenue hacia las últimas.
  for (let i = 0; i < 6; i += 1) {
    const a = trays[i];
    const b = trays[i + 1];
    const x1 = a.x + a.w;
    const y1 = a.y + 30;
    const x2 = b.x;
    const y2 = b.y + 30;
    const op = f(0.75 - i * 0.1);
    parts.push(`<path d="M${x1 + 4} ${y1}C${x1 + 18} ${y1} ${x2 - 18} ${y2} ${x2 - 4} ${y2}" fill="none" stroke="#b8743f" stroke-opacity="${op}" stroke-width="1.6"${i >= 2 ? ' stroke-dasharray="4 6"' : ""}/>`);
  }

  // Polvo de inventario
  for (let k = 0; k < 260; k += 1) {
    const x = rand() * W;
    const y = rand() * H;
    parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(0.6 + rand() * 1.4)}" fill="#e2c48c" fill-opacity="${f(rand() * 0.35)}"/>`);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Siete bandejas del objeto a la identidad</title>
  <desc id="desc">Composición generativa abstracta para CIV-005: siete bandejas en escalera —un fragmento, un conjunto, un motivo repetido, arcos de un gesto, una red de puntos, una etiqueta en blanco y una bandeja vacía— unidas por un hilo que se vuelve discontinuo. No representa un pueblo, un mapa, una bandera, una escritura ni una persona; la bandeja vacía señala que la identidad casi nunca se observa.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0d0c0a"/><stop offset=".6" stop-color="#15130f"/><stop offset="1" stop-color="#0b0d0c"/></linearGradient>
    <radialGradient id="glow" cx=".3" cy=".7" r=".55"><stop stop-color="#5a4524" stop-opacity=".45"/><stop offset="1" stop-color="#5a4524" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

const STYLE = `.k{font:19px Consolas,monospace;letter-spacing:2px;fill:#c39456}.h{font:25px Georgia,serif;fill:#efe3d1}.t{font:19px Arial,sans-serif;fill:#c9c2b8}.l{font:17px Arial,sans-serif;fill:#d6a27b}.small{font:14px Consolas,monospace;fill:#91ad92}.cell{font:15px Arial,sans-serif;fill:#cfc7bb}.head{font:14px Consolas,monospace;letter-spacing:1px;fill:#c39456}.rule{stroke:#8b6a43;stroke-width:2}.dash{stroke:#a96545;stroke-width:2;stroke-dasharray:8 8;fill:none}`;

function chain() {
  const steps = [
    ["Objeto", "procedencia,", "contexto, fecha"],
    ["Conjunto", "asociación", "recurrente"],
    ["Estilo", "regularidad", "formal compartida"],
    ["Práctica", "forma de hacer", "transmitida"],
    ["Grupo", "interacción en", "escala demostrada"],
    ["Nombre", "fuente con autor,", "lengua y fecha"],
    ["Identidad", "autoadscripción", "y contraste"],
  ];
  const leaps = ["≠ uso", "≠ pueblo", "≠ autor", "≠ etnia", "≠ lengua", "≠ endónimo"];
  const boxes = steps.map(([h, a, b], i) => {
    const x = 70 + i * 212;
    const dashed = i >= 5 ? ' stroke-dasharray="6 6"' : "";
    return `  <g transform="translate(${x} 300)"><rect width="186" height="150" fill="#141a19" stroke="#779176"${dashed}/><text x="16" y="46" class="h">${esc(h)}</text><text x="16" y="86" class="small">${esc(a)}</text><text x="16" y="108" class="small">${esc(b)}</text></g>`;
  });
  const arrows = steps.slice(0, -1).map((_, i) => {
    const x = 70 + i * 212 + 186;
    return `  <path class="rule" d="M${x + 3} 375H${x + 21}"/><path d="M${x + 21} 369L${x + 25} 375L${x + 21} 381" fill="none" stroke="#8b6a43" stroke-width="2"/>`;
  });
  const jumps = leaps.map((l, i) => {
    const x = 70 + i * 212 + 93;
    return `  <path class="dash" d="M${x} 455C${x + 40} 555 ${x + 172} 555 ${x + 212} 455"/><text x="${x + 52}" y="594" class="l">${esc(l)}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Del objeto a la identidad: siete niveles y sus saltos</title>
  <desc id="desc">Siete cajas conectadas por líneas continuas desde el objeto hasta la identidad; las dos últimas tienen borde discontinuo porque casi nunca se observan en prehistoria. Debajo, arcos discontinuos marcan lo que cada paso no hereda del anterior: uso, pueblo, autor, etnia, lengua y endónimo. Un componente genómico se señala aparte como prueba de contacto, no como caja de la cadena.</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#0b1011"/><stop offset="1" stop-color="#171512"/></linearGradient>
    <style>${STYLE}</style>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="70" y="96" class="k">CIV-005 · CADENA INFERENCIAL</text>
  <text x="70" y="150" font-family="Georgia,serif" font-size="42" fill="#f2e7d6">Un componente no es un pueblo</text>
  <text x="70" y="190" class="t">Línea continua: puente que se puede auditar. Arco discontinuo: lo que el paso siguiente no hereda sin otro archivo.</text>
${boxes.join("\n")}
${arrows.join("\n")}
${jumps.join("\n")}
  <text x="70" y="740" class="t">Una cadena puede detenerse en cualquier caja. Detenerse en «estilo» o en «componente» es el límite correcto del archivo.</text>
  <text x="70" y="776" class="t">Un componente genómico entra de lado: prueba contacto y mezcla de personas, no ocupa ninguna de estas cajas.</text>
  <text x="70" y="812" class="t">Fechado de cada objeto y muestra: CIV-002.</text>
</svg>
`;
}

function matrix() {
  const cols = [
    ["ARCHIVO", 70, 210],
    ["UNIDAD", 290, 230],
    ["CÓMO SE OBTIENE", 530, 290],
    ["NO DEMUESTRA", 830, 300],
    ["CASO QUE LO ROMPE", 1140, 390],
  ];
  const rows = [
    ["Cultura material", ["tipo, estilo,", "horizonte"], ["clasificación politética,", "seriación, procedencia"], ["pueblo, lengua,", "ascendencia"], ["campaniforme Iberia–Europa", "central: estilo sin migración"]],
    ["Genoma", ["componente o", "proporción de mezcla"], ["ADMIXTURE, estadísticos f,", "qpAdm con proxies"], ["etnia, lengua,", "autodenominación"], ["Vanuatu: ascendencia papú", "con lenguas austronesias"]],
    ["Lengua", ["nodo de un árbol", "fechado"], ["cognados, calibración,", "filogenia bayesiana"], ["ascendencia, cerámica,", "patria única"], ["Shum Laka: patria bantú sin", "ancestros de sus hablantes"]],
    ["Texto", ["etnónimo", "(casi siempre exónimo)"], ["autor, lengua, género,", "distancia y propósito"], ["autoadscripción ni", "referente arqueológico"], ["«olmeca»: nombre náhuatl", "tardío para un estilo antiguo"]],
  ];
  const head = cols.map(([h, x]) => `<text x="${x + 14}" y="262" class="head">${esc(h)}</text>`).join("");
  const body = rows.map(([name, ...cells], r) => {
    const y = 290 + r * 128;
    const rects = cols.map(([, x, w]) => `<rect x="${x}" y="${y}" width="${w - 8}" height="112" fill="${r % 2 ? "#141a19" : "#11171a"}" stroke="#4f4a3c"/>`).join("");
    const first = `<text x="${cols[0][1] + 14}" y="${y + 62}" class="h">${esc(name)}</text>`;
    const rest = cells.map((lines, c) => lines.map((line, j) => `<text x="${cols[c + 1][1] + 14}" y="${y + 46 + j * 26}" class="${c === 3 ? "l" : "cell"}">${esc(line)}</text>`).join("")).join("");
    return `  <g>${rects}${first}${rest}</g>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Cuatro archivos de identidad y lo que cada uno no demuestra</title>
  <desc id="desc">Matriz de cuatro filas —cultura material, genoma, lengua y texto— y cuatro columnas: unidad, cómo se obtiene, qué no demuestra y un caso auditado que rompe la equivalencia automática con los otros archivos (campaniforme, Vanuatu, Shum Laka y el nombre «olmeca»).</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#0b1011"/><stop offset="1" stop-color="#171512"/></linearGradient>
    <style>${STYLE}</style>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="70" y="96" class="k">CIV-005 · MATRIZ DE ARCHIVOS</text>
  <text x="70" y="150" font-family="Georgia,serif" font-size="42" fill="#f2e7d6">Cuatro archivos, cuatro relojes</text>
  <text x="70" y="190" class="t">Su coincidencia es un resultado de cada caso, no un supuesto. La última columna es el falsador histórico de la equivalencia.</text>
  ${head}
${body.join("\n")}
  <text x="70" y="830" class="t">El acoplamiento existe —la expansión bantú lo muestra— pero se prueba caso por caso con archivos independientes.</text>
</svg>
`;
}

const heroSvg = hero();
fs.writeFileSync(path.join(OUT, "hero-civ-005-nombres-identidades.svg"), heroSvg);
fs.writeFileSync(path.join(OUT, "cadena-objeto-identidad-civ-005.svg"), chain());
fs.writeFileSync(path.join(OUT, "matriz-archivos-identidad-civ-005.svg"), matrix());

if (process.argv.includes("--png")) {
  const { default: sharp } = await import("sharp");
  await sharp(Buffer.from(heroSvg)).png({ compressionLevel: 9 }).toFile(path.join(OUT, "hero-civ-005-nombres-identidades.png"));
}
console.log("CIV-005: visuales escritas en assets/visuales");
