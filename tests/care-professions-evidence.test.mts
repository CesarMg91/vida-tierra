import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "care-professions-evidence.json"), "utf8"));
const research = fs.readFileSync(path.join(ROOT, "15_medicina", "INVESTIGACION_MED_023_ENFERMERIA_SALUD_PUBLICA_PROFESIONES.md"), "utf8");
const expectedKinds = ["care", "testimony", "institution", "regulation", "credential", "practice", "outcome"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

test("MED-023 conserva once casos y siete capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 11);
  assert.equal(new Set(data.cases.map((item: { id: string }) => item.id)).size, 11);
  for (const item of data.cases) {
    assert.deepEqual(item.layers.map((layer: { kind: string }) => layer.kind), expectedKinds);
    for (const layer of item.layers) {
      assert.ok(layer.observed.trim());
      assert.ok(layer.inference.trim());
      assert.ok(layer.limit.trim());
      assert.ok(layer.claimIds.length && layer.evidenceIds.length && layer.sourceIds.length);
    }
  }
});

test("MED-023 sólo enlaza registros canónicos", () => {
  const rows = registryRows();
  const claims = new Set(rows.claims.map((row) => row.id));
  const evidence = new Set(rows.evidence.map((row) => row.id));
  const sources = new Set(rows.sources.map((row) => row.id));
  const slugs = new Set(buildPublicData().catalog.map((record) => record.slug));
  assert.ok(slugs.has(data.researchSlug));
  for (const item of data.cases) for (const layer of item.layers) {
    for (const id of layer.claimIds) assert.ok(claims.has(id), id);
    for (const id of layer.evidenceIds) assert.ok(evidence.has(id), id);
    for (const id of layer.sourceIds) assert.ok(sources.has(id), id);
  }
});

test("los claims del expediente coinciden con los del módulo y existen", () => {
  const rows = registryRows();
  const claims = new Set(rows.claims.map((row) => row.id));
  const declared = [...research.matchAll(/^  - (CLAIM-MED-CARE-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  assert.ok(declared.length >= 70);
  for (const id of declared) assert.ok(claims.has(id), id);
  const used = new Set(data.cases.flatMap((item: { layers: { claimIds: string[] }[] }) => item.layers.flatMap((layer) => layer.claimIds)));
  for (const id of used) assert.ok(declared.includes(id as string), `${id} no está declarado en el expediente`);
});

test("Scutari separa la llegada de Nightingale de la caída de la mortalidad", () => {
  const item = byId("nightingale-scutari-1854-1859");
  assert.ok(item);
  assert.match(item.layers[2].observed, /17 de marzo de 1855/);
  assert.match(item.layers[2].limit, /no fue pedida por Nightingale/i);
  assert.match(item.layers[6].limit, /no separan/i);
  assert.match(research, /no se repite/);
});

test("Kaiserswerth conserva su propia admisión sobre los resultados", () => {
  const item = byId("kaiserswerth-1833-1851");
  assert.ok(item);
  assert.match(item.layers[2].observed, /116 diaconisas/);
  assert.match(item.layers[6].observed, /menos brillante/);
  assert.match(item.layers[6].limit, /sin comparación/i);
});

test("registro y credencial no se leen como práctica ni resultado", () => {
  const registration = byId("registration-1887-1919");
  const segregation = byId("segregation-us-1879-1951");
  const midwives = byId("midwives-1902-mexico");
  assert.ok(registration && segregation && midwives);
  assert.match(registration.layers[3].limit, /no es cambiar la práctica/i);
  assert.match(segregation.layers[4].observed, /una estudiante negra por clase/);
  assert.match(midwives.layers[6].observed, /médicos los peores/);
});

test("la dotación moderna conserva sus límites causales y no se proyecta al pasado", () => {
  const item = byId("staffing-outcomes-2002-2026");
  assert.ok(item);
  assert.match(item.layers[2].limit, /transversal/i);
  assert.match(item.layers[4].limit, /no se proyecta al siglo XIX/i);
  assert.match(item.layers[6].observed, /17 con sesgo serio o crítico/);
  assert.match(item.layers[1].limit, /no es un conteo/i);
});

test("MED-023 no contiene dosis ni recomendaciones clínicas o de dotación", () => {
  const text = `${research}\n${JSON.stringify(data)}`;
  assert.doesNotMatch(text, /\b\d+(?:[.,]\d+)?\s?(?:mg|ml|mL|cc|µg|mcg|gramos?|granos?|gotas|minims?)\b/);
  assert.doesNotMatch(text, /\b(?:se recomienda|recomendamos|debe administrarse|administre|dosis recomendada|deberían contratar)\b/i);
  assert.match(research, /no contiene recomendaciones clínicas ni recomendaciones de política de dotación/);
});
