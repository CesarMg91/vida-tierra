// Genera las visuales de CIV-010 (transformaciones, fragmentaciones y persistencias)
// de forma determinista: misma semilla, mismo archivo. Sin modelos de imagen ni
// servicios externos. La matriz se construye desde content/civilization-transformations.json
// para que el visual y el módulo público no se separen.
// Uso: node scripts/generate-civ-010-visuals.mjs [--png]
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "assets", "visuales");
const DATA = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-transformations.json"), "utf8"));
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

// Portada: siete hilos horizontales de grosor variable que cruzan el lienzo.
// En algún tramo cada hilo se adelgaza, se corta o se desvía, y siempre sigue en
// otra altura o con otro grosor. Arriba, una franja ondulante de «señal» que no
// toca los hilos: la coincidencia en el tiempo no es contacto. Sin texto,
// personas, mapas ni contornos reconocibles.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(10010);
  const parts = [];
  const ink = "#d9b46b";
  const sage = "#9fbf9a";
  const clay = "#c98a5e";
  const signal = "#7fa7b8";

  for (let k = 0; k <= 20; k += 1) parts.push(`<path d="M${f((k * W) / 20)} 0V${H}" stroke="#3d3426" stroke-opacity=".35" stroke-width="1"/>`);

  // Franja de señal: dos ondas suaves en la parte alta.
  for (let band = 0; band < 2; band += 1) {
    let d = "";
    for (let x = 0; x <= W; x += 8) {
      const y = 120 + band * 26 + Math.sin(x / 70 + band) * 18 + Math.sin(x / 23) * 6 + (rand() - 0.5) * 3;
      d += `${x === 0 ? "M" : "L"}${x} ${f(y)}`;
    }
    parts.push(`<path d="${d}" fill="none" stroke="${signal}" stroke-opacity="${band ? 0.45 : 0.7}" stroke-width="${band ? 1.5 : 2.4}"/>`);
  }

  const colors = [ink, sage, clay, ink, sage, clay, ink];
  for (let i = 0; i < 7; i += 1) {
    const y0 = 260 + i * 92;
    const cut = 360 + rand() * 900;
    const gap = 40 + rand() * 90;
    const shift = (rand() - 0.5) * 70;
    const w0 = 3 + rand() * 6;
    const w1 = 1 + rand() * 4;
    let d1 = "";
    for (let x = 40; x <= cut; x += 12) {
      const y = y0 + Math.sin(x / (90 + i * 7)) * 8 + (rand() - 0.5) * 2;
      d1 += `${x === 40 ? "M" : "L"}${x} ${f(y)}`;
    }
    parts.push(`<path d="${d1}" fill="none" stroke="${colors[i]}" stroke-opacity=".85" stroke-width="${f(w0)}" stroke-linecap="round"/>`);
    // Tramo de transición: puntos dispersos que no se unen.
    for (let k = 0; k < 9; k += 1) {
      const x = cut + (gap * k) / 9;
      parts.push(`<circle cx="${f(x)}" cy="${f(y0 + (shift * k) / 9 + (rand() - 0.5) * 14)}" r="${f(1 + rand() * 2.2)}" fill="${colors[i]}" fill-opacity=".7"/>`);
    }
    let d2 = "";
    for (let x = cut + gap; x <= W - 40; x += 12) {
      const y = y0 + shift + Math.sin(x / (80 + i * 5)) * 8 + (rand() - 0.5) * 2;
      d2 += `${d2 === "" ? "M" : "L"}${f(x)} ${f(y)}`;
    }
    parts.push(`<path d="${d2}" fill="none" stroke="${colors[i]}" stroke-opacity=".85" stroke-width="${f(w1)}" stroke-linecap="round"/>`);
    // Ramas: el hilo continúa también por otro camino.
    if (i % 2 === 0) {
      const bx = cut + gap + 60 + rand() * 120;
      parts.push(`<path d="M${f(bx)} ${f(y0 + shift)}C${f(bx + 60)} ${f(y0 + shift + 30)} ${f(bx + 140)} ${f(y0 + shift + 40)} ${f(bx + 260)} ${f(y0 + shift + 44)}" fill="none" stroke="${colors[i]}" stroke-opacity=".55" stroke-width="${f(w1 * 0.8)}"/>`);
    }
  }

  for (let k = 0; k < 220; k += 1) {
    parts.push(`<circle cx="${f(rand() * W)}" cy="${f(rand() * H)}" r="${f(0.6 + rand() * 1.3)}" fill="#e2c48c" fill-opacity="${f(rand() * 0.28)}"/>`);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Siete hilos que se adelgazan, se cortan y siguen en otro lugar</title>
  <desc id="desc">Composición generativa abstracta para CIV-010: siete hilos horizontales de distinto color y grosor cruzan el lienzo; en algún tramo cada uno se deshace en puntos dispersos y continúa más delgado, a otra altura o con una rama nueva. En la parte superior, una franja ondulante azulada representa una señal climática que no toca los hilos. No hay texto, personas, mapas ni contornos reconocibles.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0d0c0a"/><stop offset=".6" stop-color="#15130f"/><stop offset="1" stop-color="#0b0d0c"/></linearGradient>
    <radialGradient id="glow" cx=".5" cy=".55" r=".6"><stop stop-color="#5a4a30" stop-opacity=".3"/><stop offset="1" stop-color="#5a4a30" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

const STYLE = `.k{font:19px Consolas,monospace;letter-spacing:2px;fill:#c39456}.h{font:22px Georgia,serif;fill:#efe3d1}.t{font:19px Arial,sans-serif;fill:#c9c2b8}.l{font:16px Arial,sans-serif;fill:#d6a27b}.small{font:14px Consolas,monospace;fill:#91ad92}.cell{font:13px Arial,sans-serif;fill:#151310}.head{font:13px Consolas,monospace;letter-spacing:1px;fill:#c39456}.row{font:15px Arial,sans-serif;fill:#e6dccd}.rule{stroke:#8b6a43;stroke-width:2}.dash{stroke:#a96545;stroke-width:2;stroke-dasharray:8 8;fill:none}`;

function chain() {
  const steps = [
    ["Señal", "isótopos, polen,", "anillos, plomo"],
    ["Cronología", "radiocarbono,", "dendro, Cuenta Larga"],
    ["Despoblamiento", "prospección, LiDAR,", "estanoles, genomas"],
    ["Instituciones", "palacios, archivos,", "monumentos, moneda"],
    ["Continuidad", "lenguas, genomas,", "reocupaciones"],
    ["Atribución", "lugar + intervalo +", "mecanismo + alternativa"],
  ];
  const leaps = ["≠ fecha", "≠ pérdida", "≠ ruptura", "≠ desaparición", "≠ causa"];
  const boxes = steps.map(([h, a, b], i) => {
    const x = 50 + i * 252;
    return `  <g transform="translate(${x} 300)"><rect width="226" height="150" fill="#141a19" stroke="#779176"/><text x="14" y="46" class="h">${esc(h)}</text><text x="14" y="86" class="small">${esc(a)}</text><text x="14" y="108" class="small">${esc(b)}</text></g>`;
  });
  const arrows = steps.slice(0, -1).map((_, i) => {
    const x = 50 + i * 252 + 226;
    return `  <path class="rule" d="M${x + 2} 375H${x + 22}"/><path d="M${x + 22} 369L${x + 26} 375L${x + 22} 381" fill="none" stroke="#8b6a43" stroke-width="2"/>`;
  });
  const jumps = leaps.map((l, i) => {
    const x = 50 + i * 252 + 113;
    return `  <path class="dash" d="M${x} 455C${x + 52} 555 ${x + 200} 555 ${x + 252} 455"/><text x="${x + 80}" y="594" class="l">${esc(l)}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Lo que se rompe y lo que sigue: seis niveles de un «colapso»</title>
  <desc id="desc">Seis cajas —señal climática o ambiental, cronología fina, despoblamiento, cambio institucional, continuidad poblacional o cultural y atribución causal— con el instrumento que mide cada una, unidas por líneas que indican el orden de lectura, no una herencia. Debajo, arcos discontinuos marcan lo que cada nivel no hereda del anterior: una señal no es una fecha, una fecha no es una pérdida, una pérdida no es una ruptura institucional, una ruptura no es una desaparición y la continuidad no dice la causa.</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#0b1011"/><stop offset="1" stop-color="#171512"/></linearGradient>
    <style>${STYLE}</style>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="50" y="96" class="k">CIV-010 · SEIS NIVELES DE UN «COLAPSO»</text>
  <text x="50" y="150" font-family="Georgia,serif" font-size="42" fill="#f2e7d6">Coincidir en el tiempo no es causar</text>
  <text x="50" y="190" class="t">Cada caso se mide en seis niveles, cada uno con su instrumento y sus supuestos.</text>
${boxes.join("\n")}
${arrows.join("\n")}
${jumps.join("\n")}
  <text x="50" y="700" class="t">El yeso de Chichancanab mide una caída de lluvia de 41–54 %; Mayapán, Nojpetén y 20 agrupaciones lingüísticas mayas siguen.</text>
  <text x="50" y="736" class="t">El foso de Angkor Thom dejó de mantenerse un siglo antes de la invasión que «marca el fin».</text>
  <text x="50" y="772" class="t">Quince genomas rapanui rechazan el cuello de botella que exige el «ecocidio».</text>
</svg>
`;
}

const STATUS_FILL = { sostenido: "#a9c1a7", condicionado: "#d9bd8d", "no-demostrado": "#d79a70", "dato-ausente": "#6f6a62" };
const STATUS_LABEL = { sostenido: "sostenido", condicionado: "condicionado", "no-demostrado": "no demostrado", "dato-ausente": "dato ausente" };

function matrix() {
  const fields = ["SEÑAL", "CRONOLOGÍA", "DESPOBLAM.", "INSTITUC.", "CONTINUIDAD", "ATRIBUCIÓN"];
  const x0 = 520;
  const cw = 172;
  const y0 = 250;
  const rh = 70;
  const head = fields.map((h, c) => `<text x="${x0 + c * cw + 10}" y="${y0 - 14}" class="head">${esc(h)}</text>`).join("");
  const rows = DATA.cases.map((item, r) => {
    const y = y0 + r * rh;
    const label = `<text x="70" y="${y + 28}" class="row">${esc(item.title)}</text><text x="70" y="${y + 50}" class="small">${esc(item.window)}</text>`;
    const cells = item.steps.map((step, c) => `<rect x="${x0 + c * cw}" y="${y}" width="${cw - 8}" height="${rh - 8}" fill="${STATUS_FILL[step.status]}" fill-opacity=".9" stroke="#2c2720"/><text x="${x0 + c * cw + 10}" y="${y + 37}" class="cell"${step.status === "dato-ausente" ? ' fill="#e6dccd"' : ""}>${esc(STATUS_LABEL[step.status])}</text>`).join("");
    return `  <g>${label}${cells}</g>`;
  });
  const legend = Object.entries(STATUS_LABEL).map(([key, label], i) => `<rect x="${70 + i * 230}" y="808" width="22" height="22" fill="${STATUS_FILL[key]}"/><text x="${102 + i * 230}" y="825" class="t">${esc(label)}</text>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Siete casos de «colapso» por seis niveles</title>
  <desc id="desc">Matriz de ${DATA.cases.length} casos (fin del Bronce en el Mediterráneo oriental, desurbanización del Indo, mayas clásicos del sur, Angkor, Rapa Nui, Cahokia y Roma en Occidente) por seis niveles: señal climática o ambiental, cronología fina, despoblamiento, cambio institucional, continuidad y atribución causal. Cada celda indica el estado del nivel en el módulo público: sostenido, condicionado, no demostrado o dato ausente. Ninguna fila tiene la atribución causal sostenida y todas tienen alguna continuidad.</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#0b1011"/><stop offset="1" stop-color="#171512"/></linearGradient>
    <style>${STYLE}</style>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="70" y="96" class="k">CIV-010 · MATRIZ DE NIVELES</text>
  <text x="70" y="150" font-family="Georgia,serif" font-size="42" fill="#f2e7d6">Ninguna atribución causal está sostenida</text>
  <text x="70" y="190" class="t">El estado es el del archivo de cada nivel, no una calificación de la sociedad. «Dato ausente» no es colapso.</text>
  ${head}
${rows.join("\n")}
  ${legend}
</svg>
`;
}

const heroSvg = hero();
fs.writeFileSync(path.join(OUT, "hero-civ-010-transformaciones-persistencias.svg"), heroSvg);
fs.writeFileSync(path.join(OUT, "cadena-niveles-colapso-civ-010.svg"), chain());
fs.writeFileSync(path.join(OUT, "matriz-casos-niveles-civ-010.svg"), matrix());

if (process.argv.includes("--png")) {
  const { default: sharp } = await import("sharp");
  await sharp(Buffer.from(heroSvg)).png({ compressionLevel: 9 }).toFile(path.join(OUT, "hero-civ-010-transformaciones-persistencias.png"));
}
console.log("CIV-010: visuales escritas en assets/visuales");
