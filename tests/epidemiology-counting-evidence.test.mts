import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "epidemiology-counting-evidence.json"), "utf8"));
const expectedKinds = ["population", "exposure", "denominator", "comparison", "effect", "implementation", "inequality"];
type Layer = { kind: string; observed: string; inference: string; limit: string; claimIds: string[]; evidenceIds: string[]; sourceIds: string[] };
type Case = { id: string; layers: Layer[] };
const byId = (id: string): Case => {
  const item = data.cases.find((entry: Case) => entry.id === id);
  assert.ok(item, id);
  return item;
};

test("MED-020 conserva doce casos y siete capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 12);
  for (const item of data.cases as Case[]) {
    assert.deepEqual(item.layers.map((layer) => layer.kind), expectedKinds);
    for (const layer of item.layers) {
      assert.ok(layer.observed.trim());
      assert.ok(layer.inference.trim());
      assert.ok(layer.limit.trim());
      assert.ok(layer.claimIds.length && layer.evidenceIds.length && layer.sourceIds.length);
    }
  }
});

test("MED-020 sólo enlaza registros canónicos", () => {
  const rows = registryRows();
  const claims = new Set(rows.claims.map((row) => row.id));
  const evidence = new Set(rows.evidence.map((row) => row.id));
  const sources = new Set(rows.sources.map((row) => row.id));
  const slugs = new Set(buildPublicData().catalog.map((record) => record.slug));
  assert.ok(slugs.has(data.researchSlug));
  for (const item of data.cases as Case[]) for (const layer of item.layers) {
    for (const id of layer.claimIds) assert.ok(claims.has(id), id);
    for (const id of layer.evidenceIds) assert.ok(evidence.has(id), id);
    for (const id of layer.sourceIds) assert.ok(sources.has(id), id);
  }
});

test("la inoculación conserva selección por clase y denominador dependiente de clasificación", () => {
  const item = byId("inoculation-1714-1766");
  assert.match(item.layers[2].observed, /17 muertes entre 897.*17 entre 858/);
  assert.match(item.layers[3].limit, /clase alta/);
  assert.match(item.layers[4].limit, /modelo con supuestos, no una medición/);
});

test("Viena y Snow conservan la regla de asignación, la cifra y el límite del mecanismo", () => {
  const vienna = byId("semmelweis-vienna-1847");
  const snow = byId("london-cholera-1849-1855");
  assert.match(vienna.layers[3].observed, /días alternos/);
  assert.match(vienna.layers[4].limit, /no identifica el agente/);
  assert.match(snow.layers[3].observed, /315 frente a 37/);
  assert.match(snow.layers[2].limit, /Casas no son personas/);
});

test("Salk separa placebo, voluntarios y producción", () => {
  const item = byId("salk-field-trial-1954");
  assert.match(item.layers[4].observed, /16 frente a 57 por 100 000/);
  assert.match(item.layers[3].limit, /no es un control neutral/);
  assert.match(item.layers[5].limit, /no garantiza cada lote/);
});

test("Hill no se convierte en lista de verificación", () => {
  const item = byId("tobacco-1950-1965");
  assert.match(item.layers[3].limit, /ningún punto es indispensable/);
});

test("el cierre contemporáneo separa evidencia, política y recomendación", () => {
  const item = byId("present-2006-2026");
  assert.match(item.layers[3].observed, /0\.39 antes de la temporada/);
  assert.match(item.layers[5].limit, /no es por sí mismo evidencia nueva/);
});

test("MED-020 no contiene recomendaciones ni dosis", () => {
  const text = JSON.stringify(data).toLowerCase();
  for (const forbidden of [/\brecomendamos\b/, /\bdebe vacunarse\b/, /\bdebes\b/, /\bmg\/kg\b/, /\bdosis recomendada\b/]) {
    assert.doesNotMatch(text, forbidden);
  }
  const research = fs.readFileSync(path.join(ROOT, "15_medicina", "INVESTIGACION_MED_020_ESTADISTICA_VACUNACION_EPIDEMIOLOGIA.md"), "utf8");
  assert.match(research, /no contiene recomendaciones clínicas, de vacunación ni de salud pública/);
});
