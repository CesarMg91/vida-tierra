import assert from "node:assert/strict";
import test from "node:test";
import nextConfig from "../next.config.mjs";
import { sanitizeAnalyticsEvent, stripUrlQuery } from "../lib/privacy.ts";
import { createPageMetadata, serializeJsonLd, SITE_URL } from "../lib/site.ts";

test("la analítica elimina consultas y fragmentos sin perder la ruta", () => {
  assert.equal(
    stripUrlQuery("https://vida-tierra.vercel.app/explorar?q=arqueologia&coleccion=Vida#resultados"),
    "https://vida-tierra.vercel.app/explorar",
  );
  assert.equal(stripUrlQuery("/evidencia?tipo=claims&id=CLAIM-001#registro"), "/evidencia");

  const event = sanitizeAnalyticsEvent({
    url: "https://vida-tierra.vercel.app/civilizaciones/comparar?casos=andes,indo",
    name: "pageview",
  });
  assert.deepEqual(event, {
    url: "https://vida-tierra.vercel.app/civilizaciones/comparar",
    name: "pageview",
  });
});

test("los metadatos públicos usan canonical absoluto y tarjeta editorial", () => {
  const metadata = createPageMetadata({
    title: "Cronología",
    description: "Muchos relojes.",
    pathname: "/cronologia",
  });
  assert.equal(metadata.alternates?.canonical, `${SITE_URL}/cronologia`);
  assert.equal(metadata.openGraph?.url, `${SITE_URL}/cronologia`);
  assert.equal((metadata.twitter as { card?: string } | undefined)?.card, "summary_large_image");
});

test("JSON-LD no permite cerrar el script desde contenido editorial", () => {
  const json = serializeJsonLd({ headline: "Pasado </script><script>alert(1)</script>" });
  assert.doesNotMatch(json, /</);
  assert.match(json, /\\u003c\/script>/);
});

test("las cabeceras globales cubren tipo, referencia, permisos y aislamiento", async () => {
  assert.ok(nextConfig.headers);
  const rules = await nextConfig.headers();
  const headers = new Map(rules[0].headers.map(({ key, value }) => [key, value]));
  assert.equal(headers.get("X-Content-Type-Options"), "nosniff");
  assert.equal(headers.get("Referrer-Policy"), "strict-origin-when-cross-origin");
  assert.match(headers.get("Permissions-Policy") ?? "", /camera=\(\)/);
  assert.equal(headers.get("Cross-Origin-Opener-Policy"), "same-origin");
});
