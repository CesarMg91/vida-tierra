/**
 * Capturas 9:16 del sitio público, en dos versiones:
 *   capturas/crudas/  la pantalla sola, tal cual la ve el visitante
 *   capturas/redes/   la misma pantalla montada en el lienzo 1080x1920
 *
 * No hay datos privados que simular: el sitio es público y estático.
 */
import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import { CAPTURAS, CANVAS, type Captura } from "./catalogo";
import { html } from "./lienzo";
import { rellenar } from "./cifras.mjs";
import { SALIDA, prepararCarpetas, anotarIncidencia, llevarAncla } from "./util";

const CRUDAS = path.join(SALIDA, "capturas", "crudas");
const REDES = path.join(SALIDA, "capturas", "redes");

test.beforeAll(() => prepararCarpetas([CRUDAS, REDES]));

for (const pieza of CAPTURAS) {
  test(`captura ${pieza.id}`, async ({ page, browser }) => {
    await aplicarTema(page, pieza);
    await page.goto(pieza.ruta, { waitUntil: "networkidle" });

    // Sin animaciones: dos corridas seguidas deben dar el mismo PNG.
    await page.addStyleTag({
      content: `*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}`,
    });

    if (pieza.scroll) {
      await page.evaluate((y) => window.scrollTo(0, y), pieza.scroll);
    }
    if (pieza.ancla) {
      await llevarAncla(page, pieza.ancla);
    }
    if (pieza.columna) {
      await mostrarColumna(page, pieza.columna);
    }
    await page.waitForTimeout(pieza.espera ?? 450);

    const crudo = path.join(CRUDAS, `${pieza.id}.png`);
    await page.screenshot({ path: crudo });
    expect(fs.existsSync(crudo)).toBe(true);

    await montarEnLienzo(browser, pieza, crudo);
  });
}

async function aplicarTema(page: import("@playwright/test").Page, pieza: Captura) {
  const valor = pieza.tema === "claro" ? "light" : "dark";
  await page.addInitScript((v) => {
    try {
      localStorage.setItem("vt-theme", v);
    } catch {
      /* el lienzo no depende de esto */
    }
  }, valor);
}

/** Desliza la primera tabla ancha hasta que la columna pedida cierre por la
 *  derecha: así se ve junto a la anterior, como la vería quien desliza. */
async function mostrarColumna(page: import("@playwright/test").Page, columna: string) {
  const ok = await page.evaluate((nombre) => {
    for (const caja of document.querySelectorAll<HTMLElement>(".table-scroll")) {
      const th = [...caja.querySelectorAll<HTMLElement>("th")].find(
        (c) => c.textContent?.trim() === nombre,
      );
      if (!th) continue;
      caja.scrollLeft = th.offsetLeft + th.offsetWidth - caja.clientWidth;
      return true;
    }
    return false;
  }, columna);
  if (!ok) throw new Error(`no hay una tabla con la columna «${columna}»`);
}

/** Fotografía el lienzo HTML con la captura ya dentro. */
async function montarEnLienzo(
  browser: import("@playwright/test").Browser,
  pieza: Captura,
  crudo: string,
) {
  const lienzo = await browser.newPage({
    viewport: { width: CANVAS.ancho, height: CANVAS.alto },
    deviceScaleFactor: 1,
    // Sin esto hereda isMobile de la config y el lienzo se maqueta como teléfono.
    isMobile: false,
    hasTouch: false,
  });
  try {
    const opciones = { titulo: rellenar(pieza.titulo), pie: pieza.pie, tema: pieza.tema, captura: crudo };
    await lienzo.setContent(html(opciones), {
      waitUntil: "load",
    });
    // Las fuentes locales deben estar listas antes del disparo.
    await lienzo.evaluate(() => document.fonts.ready);
    await lienzo.waitForTimeout(250);
    await lienzo.screenshot({ path: path.join(REDES, `${pieza.id}.png`) });
  } catch (err) {
    anotarIncidencia(`lienzo de ${pieza.id}: ${(err as Error).message}`);
    throw err;
  } finally {
    await lienzo.close();
  }
}
