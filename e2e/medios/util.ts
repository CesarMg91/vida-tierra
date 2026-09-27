import fs from "node:fs";
import path from "node:path";

/** Carpeta de entrega. Se puede mover con MEDIOS_SALIDA. */
export const SALIDA =
  process.env.MEDIOS_SALIDA ?? path.resolve("D:/Proyectos/amia-medios/vida-tierra");

export const BASE_URL = process.env.MEDIOS_URL ?? "http://localhost:3287";

export function prepararCarpetas(rutas: string[]) {
  for (const r of rutas) fs.mkdirSync(r, { recursive: true });
}

/** Posición de scroll que deja el elemento justo bajo la cabecera fija. */
export async function yDeAncla(page: import("@playwright/test").Page, selector: string) {
  return page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) throw new Error(`no existe el ancla «${sel}»`);
    const cabecera = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 64;
    return Math.max(0, el.getBoundingClientRect().top + window.scrollY - cabecera - 8);
  }, selector);
}

export async function llevarAncla(page: import("@playwright/test").Page, selector: string) {
  const y = await yDeAncla(page, selector);
  await page.evaluate((v) => window.scrollTo(0, v), y);
}

/** Problemas visuales o pasos que no se pudieron ejecutar, para el reporte. */
const INCIDENCIAS = path.join(SALIDA, "INCIDENCIAS.log");

export function anotarIncidencia(texto: string) {
  fs.mkdirSync(SALIDA, { recursive: true });
  fs.appendFileSync(INCIDENCIAS, `${new Date().toISOString()}  ${texto}\n`, "utf8");
}
