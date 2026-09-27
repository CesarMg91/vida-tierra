/**
 * Cifras del proyecto leídas de los registros, no escritas a mano.
 *
 * Los títulos del catálogo y el calendario usan marcadores como
 * `{afirmaciones}`; aquí se rellenan con lo que dice `public/data`, que genera
 * `npm run generate:data` (y `npm run build`) desde los registros maestros.
 * Así una pieza no puede publicar un número que el sitio ya no sostiene.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

let memo = null;

export function cifras() {
  if (memo) return memo;
  const leer = (rel) => {
    const abs = path.join(RAIZ, rel);
    if (!fs.existsSync(abs)) {
      throw new Error(`falta ${rel}: corre npm run generate:data antes del kit`);
    }
    return JSON.parse(fs.readFileSync(abs, "utf8"));
  };
  // Solo las filas del registro de fuentes que enlazan un DOI real.
  const filas = fs
    .readFileSync(path.join(RAIZ, "SOURCES.md"), "utf8")
    .split("\n")
    .filter((l) => /^\| *`SRC-/.test(l));
  const catalogo = leer("public/data/catalog.json");
  memo = {
    investigaciones: catalogo.length,
    expedientesMed: catalogo.filter((r) => String(r.key).startsWith("MED-")).length,
    afirmaciones: leer("public/data/knowledge/claims.json").length,
    evidencias: leer("public/data/knowledge/evidence.json").length,
    fuentes: leer("public/data/knowledge/sources.json").length,
    fuentesConDoi: filas.filter((l) => /doi\.org\/10\./i.test(l)).length,
    controversias: leer("public/data/knowledge/controversies.json").length,
    errores: leer("public/data/knowledge/errors.json").length,
  };
  return memo;
}

/** Sustituye `{clave}` por su cifra. Un marcador desconocido es un error:
 *  mejor fallar que publicar la llave literal. */
export function rellenar(texto) {
  const c = cifras();
  return texto.replace(/\{(\w+)\}/g, (_, clave) => {
    if (!(clave in c)) throw new Error(`cifra desconocida en el kit: {${clave}}`);
    return String(c[clave]);
  });
}
