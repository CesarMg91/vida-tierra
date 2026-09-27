import fs from "node:fs";
import path from "node:path";

/** Carpeta de entrega. Se puede mover con MEDIOS_SALIDA. */
export const SALIDA =
  process.env.MEDIOS_SALIDA ?? path.resolve("D:/Proyectos/amia-medios/vida-tierra");

export const BASE_URL = process.env.MEDIOS_URL ?? "http://localhost:3287";

export function prepararCarpetas(rutas: string[]) {
  for (const r of rutas) fs.mkdirSync(r, { recursive: true });
}

/** Problemas visuales o pasos que no se pudieron ejecutar, para el reporte. */
const INCIDENCIAS = path.join(SALIDA, "INCIDENCIAS.log");

export function anotarIncidencia(texto: string) {
  fs.mkdirSync(SALIDA, { recursive: true });
  fs.appendFileSync(INCIDENCIAS, `${new Date().toISOString()}  ${texto}\n`, "utf8");
}
