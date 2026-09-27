import { defineConfig } from "@playwright/test";
import { BASE_URL, SALIDA } from "./util";
import { TELEFONO } from "./catalogo";
import path from "node:path";

/**
 * Configuración exclusiva del kit de medios.
 *
 * No participa en `npm test` ni en CI: solo corre con MEDIOS=1 y contra un
 * servidor local. Si MEDIOS no está puesta, la corrida se detiene.
 */
if (!process.env.MEDIOS) {
  throw new Error(
    "El kit de medios solo corre con MEDIOS=1. Usa: npm run medios",
  );
}

// Nunca contra producción: solo localhost.
const host = new URL(BASE_URL).hostname;
if (!["localhost", "127.0.0.1", "::1"].includes(host)) {
  throw new Error(`MEDIOS_URL debe ser local. Recibido: ${BASE_URL}`);
}

export default defineConfig({
  testDir: path.resolve(import.meta.dirname),
  testMatch: /.*\.medios\.ts/,
  outputDir: path.join(SALIDA, ".playwright"),
  fullyParallel: false,
  workers: 1,
  retries: 0,
  timeout: 180_000, // grabar ~15 s y componer el vertical con ffmpeg tarda menos de un minuto
  reporter: [["list"]],
  use: {
    baseURL: BASE_URL,
    viewport: { width: TELEFONO.ancho, height: TELEFONO.alto },
    deviceScaleFactor: TELEFONO.escala,
    isMobile: true,
    hasTouch: true,
    locale: "es-MX",
    timezoneId: "America/Mexico_City",
    colorScheme: "dark",
  },
  projects: [{ name: "medios", use: { browserName: "chromium" } }],
});
