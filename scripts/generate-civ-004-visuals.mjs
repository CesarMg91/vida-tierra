// Genera las visuales de CIV-004 (valle del Nilo y África nororiental) de forma determinista:
// misma semilla, mismo archivo. Sin modelos de imagen ni servicios externos.
// Uso: node scripts/generate-civ-004-visuals.mjs [--png]
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

// Portada: seis bandejas de archivo no coetáneas sobre un fondo de estratos de limo.
// Ninguna forma es un mapa, un monumento, un signo o una persona; no hay texto.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(4004);
  const parts = [];

  // Estratos aluviales: bandas onduladas horizontales (sedimento, no río ni frontera).
  for (let i = 0; i < 26; i += 1) {
    const y0 = 40 + i * 35 + rand() * 8;
    const amp = 4 + rand() * 9;
    const phase = rand() * Math.PI * 2;
    let d = `M0 ${f(y0)}`;
    for (let x = 0; x <= W; x += 48) d += ` L${x} ${f(y0 + Math.sin(x / 190 + phase) * amp)}`;
    const tone = ["#2a241b", "#30291e", "#252a22", "#2d2519"][i % 4];
    parts.push(`<path d="${d} L${W} ${H} L0 ${H}Z" fill="${tone}" fill-opacity=".22"/>`);
  }

  // Bandejas: seis rectángulos separados, sin eje temporal común.
  const trays = [
    { x: 760, y: 120, w: 250, h: 170, kind: "grains" },
    { x: 1060, y: 96, w: 250, h: 190, kind: "rings" },
    { x: 1360, y: 140, w: 230, h: 160, kind: "sherds" },
    { x: 800, y: 370, w: 270, h: 180, kind: "ribbon" },
    { x: 1120, y: 360, w: 240, h: 200, kind: "bones" },
    { x: 1400, y: 390, w: 200, h: 170, kind: "empty" },
  ];
  const palette = ["#d9b46b", "#9fbf9a", "#c98a5e", "#b9c7c1", "#e7dcc6"];
  for (const t of trays) {
    parts.push(`<rect x="${t.x}" y="${t.y}" width="${t.w}" height="${t.h}" fill="#12100d" fill-opacity=".78" stroke="#7d6646" stroke-width="1.4"/>`);
    const cx = t.x + t.w / 2;
    const cy = t.y + t.h / 2;
    if (t.kind === "grains") {
      for (let k = 0; k < 70; k += 1) {
        const gx = t.x + 18 + rand() * (t.w - 36);
        const gy = t.y + 18 + rand() * (t.h - 36);
        parts.push(`<ellipse cx="${f(gx)}" cy="${f(gy)}" rx="${f(2 + rand() * 3)}" ry="${f(1.2 + rand() * 1.6)}" transform="rotate(${f(rand() * 180)} ${f(gx)} ${f(gy)})" fill="#1d1a15" stroke="${palette[0]}" stroke-opacity=".55" stroke-width=".8"/>`);
      }
    } else if (t.kind === "rings") {
      for (let r = 8; r < 78; r += 5 + rand() * 4) parts.push(`<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(r)}" fill="none" stroke="${palette[0]}" stroke-opacity="${f(0.2 + rand() * 0.35)}" stroke-width="${f(0.8 + rand() * 1.2)}"/>`);
    } else if (t.kind === "sherds") {
      for (let k = 0; k < 7; k += 1) {
        const sx = t.x + 30 + rand() * (t.w - 80);
        const sy = t.y + 30 + rand() * (t.h - 70);
        const pts = Array.from({ length: 5 }, (_, j) => {
          const a = (j / 5) * Math.PI * 2 + rand() * 0.6;
          const rr = 14 + rand() * 16;
          return `${f(sx + Math.cos(a) * rr)},${f(sy + Math.sin(a) * rr)}`;
        }).join(" ");
        parts.push(`<polygon points="${pts}" fill="${k % 2 ? "#7a3f2a" : "#3a2d22"}" fill-opacity=".85" stroke="${palette[2]}" stroke-opacity=".5"/>`);
      }
    } else if (t.kind === "ribbon") {
      for (let b = 0; b < 3; b += 1) {
        let d = "";
        for (let x = 0; x <= t.w - 40; x += 6) {
          const y = cy + (b - 1) * 34 - Math.exp(-(((x - (t.w * (0.3 + b * 0.18))) / 38) ** 2)) * (34 + b * 8);
          d += `${x === 0 ? "M" : "L"}${f(t.x + 20 + x)} ${f(y)}`;
        }
        parts.push(`<path d="${d}" fill="none" stroke="${palette[1 + b]}" stroke-opacity=".7" stroke-width="2.2"/>`);
      }
    } else if (t.kind === "bones") {
      for (let k = 0; k < 9; k += 1) {
        const bx = t.x + 30 + rand() * (t.w - 60);
        const by = t.y + 30 + rand() * (t.h - 60);
        const len = 26 + rand() * 40;
        const ang = rand() * 180;
        parts.push(`<g transform="rotate(${f(ang)} ${f(bx)} ${f(by)})"><rect x="${f(bx - len / 2)}" y="${f(by - 3)}" width="${f(len)}" height="6" rx="3" fill="${palette[4]}" fill-opacity=".55"/><circle cx="${f(bx - len / 2)}" cy="${f(by)}" r="5" fill="${palette[4]}" fill-opacity=".55"/><circle cx="${f(bx + len / 2)}" cy="${f(by)}" r="5" fill="${palette[4]}" fill-opacity=".55"/></g>`);
      }
    } else {
      parts.push(`<rect x="${t.x + 16}" y="${t.y + 16}" width="${t.w - 32}" height="${t.h - 32}" fill="none" stroke="#7d6646" stroke-opacity=".5" stroke-dasharray="6 7"/>`);
    }
  }

  // Polvo de ocupación: puntos que se aclaran hacia la izquierda (presencia de fechas, no personas).
  for (let k = 0; k < 520; k += 1) {
    const x = rand() * W * 0.6;
    const y = 60 + rand() * (H - 120);
    const a = Math.max(0.05, 0.6 - (x / (W * 0.6)) * 0.55) * rand();
    parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(0.8 + rand() * 1.8)}" fill="#e2c48c" fill-opacity="${f(a)}"/>`);
  }
  // Hilo de trazabilidad editorial: une bandejas sin orden temporal.
  const order = [0, 3, 1, 4, 2, 5];
  let thread = "";
  order.forEach((i, j) => {
    const t = trays[i];
    thread += `${j === 0 ? "M" : "L"}${f(t.x + t.w / 2)} ${f(t.y + t.h + 14)}`;
  });
  parts.push(`<path d="${thread}" fill="none" stroke="#b8743f" stroke-opacity=".45" stroke-width="1.4" stroke-dasharray="3 6"/>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Seis bandejas de archivo sobre estratos de limo</title>
  <desc id="desc">Composición generativa abstracta para CIV-004: semillas, anillos, fragmentos cerámicos, bandas de probabilidad, huesos y una bandeja vacía, separados y no coetáneos, sobre bandas de sedimento. No representa un sitio, un mapa, un monumento, una escritura ni una secuencia; la bandeja vacía señala archivo faltante.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0d0c0a"/><stop offset=".6" stop-color="#16130e"/><stop offset="1" stop-color="#0b0d0c"/></linearGradient>
    <radialGradient id="glow" cx=".68" cy=".38" r=".5"><stop stop-color="#5a4524" stop-opacity=".45"/><stop offset="1" stop-color="#5a4524" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

const STYLE = `.k{font:19px Consolas,monospace;letter-spacing:2px;fill:#c39456}.h{font:27px Georgia,serif;fill:#efe3d1}.t{font:19px Arial,sans-serif;fill:#c9c2b8}.l{font:17px Arial,sans-serif;fill:#d6a27b}.small{font:15px Consolas,monospace;fill:#91ad92}.lane{fill:#141a19;stroke:#6f5a3c;stroke-width:1}.node{fill:#27352d;stroke:#779176;stroke-width:1}.rule{stroke:#8b6a43;stroke-width:2}.dash{stroke:#a96545;stroke-width:2;stroke-dasharray:8 8;fill:none}`;

function lanes() {
  const rows = [
    ["01 · SAHARA ORIENTAL Y CENTRAL", "Nabta Playa · Bir Kiseiba · Takarkori", ["agua", "ganado", "leche"], "no éxodo fundador"],
    ["02 · OASIS, FAYUM Y DELTA", "Fayum · Maadi · Buto · Tell el-Farkha", ["pesca", "domésticos", "comercio"], "no «Norte vencido»"],
    ["03 · ALTO EGIPTO", "Badari · Naqada · Hieracómpolis · Abydos", ["cementerio", "élite", "signos"], "no año de unificación"],
    ["04 · BAJA NUBIA", "Nag el-Qarmila · Grupo A · Qustul", ["frontera difusa", "polity", "imagen"], "ni periferia ni cuna"],
    ["05 · ÁFRICA ORIENTAL", "Lothagam North, lago Turkana", ["pastores", "monumento", "sin jerarquía"], "no «atraso» frente a Egipto"],
  ];
  const groups = rows.map(([k, h, nodes, limit], i) => {
    const y = 200 + i * 128;
    const xs = [700, 880, 1060];
    return `  <g transform="translate(80 ${y})">
    <rect class="lane" width="1440" height="112"/>
    <text x="28" y="38" class="k">${esc(k)}</text><text x="28" y="80" class="h">${esc(h)}</text>
    ${xs.map((x) => `<circle class="node" cx="${x}" cy="52" r="13"/>`).join("")}
    <path class="rule" d="M713 52H867M893 52H1047"/>
    ${nodes.map((n, j) => `<text x="${xs[j] - 40}" y="92" class="small">${esc(n)}</text>`).join("")}
    <text x="1190" y="44" class="l">Límite</text><text x="1190" y="76" class="t">${esc(limit)}</text>
  </g>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Cinco carriles del Nilo y África nororiental</title>
  <desc id="desc">Diagrama que separa Sahara oriental y central, oasis y Delta, Alto Egipto, Baja Nubia y África oriental. Cada carril muestra archivos observados y un límite; la alineación no indica prioridad, difusión ni avance hacia Egipto.</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#0b1011"/><stop offset="1" stop-color="#171512"/></linearGradient>
    <style>${STYLE}</style>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="80" y="76" class="k">CIV-004 · ARCHIVOS REGIONALES</text>
  <text x="80" y="124" font-family="Georgia,serif" font-size="42" fill="#f2e7d6">Varios polos, ninguna periferia</text>
  <text x="80" y="160" class="t">La alineación facilita comparar; no indica prioridad, difusión ni una marcha hacia la «unificación».</text>
${groups.join("\n")}
</svg>
`;
}

function chain() {
  const steps = [
    ["Objeto", "tumba, hueso, vasija,", "etiqueta, paleta"],
    ["Contexto", "procedencia y", "deposición"],
    ["Orden", "seriación, estratos,", "14C + Bayes"],
    ["Fase", "bloque Naqada o", "intervalo modelado"],
    ["Distribución", "prácticas compartidas", "entre sitios"],
    ["Proceso", "interacción,", "apropiación, dominio"],
  ];
  const leaps = ["≠ pueblo", "≠ año", "≠ rey", "≠ conquista", "≠ «unificación»"];
  const boxes = steps.map(([h, a, b], i) => {
    const x = 80 + i * 245;
    return `  <g transform="translate(${x} 300)"><rect width="215" height="150" fill="#141a19" stroke="#779176"/><text x="18" y="48" class="h">${esc(h)}</text><text x="18" y="88" class="small">${esc(a)}</text><text x="18" y="112" class="small">${esc(b)}</text></g>`;
  });
  const arrows = steps.slice(0, -1).map((_, i) => {
    const x = 80 + i * 245 + 215;
    return `  <path class="rule" d="M${x + 4} 375H${x + 26}"/><path d="M${x + 26} 369L${x + 30} 375L${x + 26} 381" fill="none" stroke="#8b6a43" stroke-width="2"/>`;
  });
  const jumps = leaps.map((l, i) => {
    const x = 80 + i * 245 + 107;
    return `  <path class="dash" d="M${x} 455C${x + 40} 560 ${x + 200} 560 ${x + 245} 455"/><text x="${x + 70}" y="600" class="l">${esc(l)}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Del objeto a la «unificación»: operaciones y saltos</title>
  <desc id="desc">Seis cajas conectadas por líneas continuas (operaciones auditadas) desde el objeto hasta el proceso; debajo, arcos discontinuos marcan los saltos que exigen otro archivo: pueblo, año, rey, conquista y «unificación».</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#0b1011"/><stop offset="1" stop-color="#171512"/></linearGradient>
    <style>${STYLE}</style>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="80" y="96" class="k">CIV-004 · CADENA INFERENCIAL</text>
  <text x="80" y="150" font-family="Georgia,serif" font-size="42" fill="#f2e7d6">Una imagen real no es un acontecimiento</text>
  <text x="80" y="190" class="t">Línea continua: operación auditada. Línea discontinua: salto que exige un archivo independiente.</text>
${boxes.join("\n")}
${arrows.join("\n")}
${jumps.join("\n")}
  <text x="80" y="760" class="t">El modelo bayesiano fecha fases y reinados con incertidumbre; ninguna caja fecha una unificación.</text>
</svg>
`;
}

const heroSvg = hero();
fs.writeFileSync(path.join(OUT, "hero-civ-004-nilo-africa-nororiental.svg"), heroSvg);
fs.writeFileSync(path.join(OUT, "carriles-nilo-africa-nororiental-civ-004.svg"), lanes());
fs.writeFileSync(path.join(OUT, "cadena-objeto-unificacion-civ-004.svg"), chain());

if (process.argv.includes("--png")) {
  const { default: sharp } = await import("sharp");
  await sharp(Buffer.from(heroSvg)).png({ compressionLevel: 9 }).toFile(path.join(OUT, "hero-civ-004-nilo-africa-nororiental.png"));
}
console.log("CIV-004: visuales escritas en assets/visuales");
