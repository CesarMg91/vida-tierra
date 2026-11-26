import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "imaging-laboratory-evidence.json"), "utf8"));
const research = fs.readFileSync(path.join(ROOT, "15_medicina", "INVESTIGACION_MED_025_IMAGEN_LABORATORIO_CLASIFICACION.md"), "utf8");
const expectedKinds = ["signal", "instrument", "reading", "threshold", "category", "accuracy", "consequence"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

function known() {
  const rows = registryRows();
  return {
    claims: new Set(rows.claims.map((row) => row.id)),
    evidence: new Set(rows.evidence.map((row) => row.id)),
    sources: new Set(rows.sources.map((row) => row.id)),
  };
}

test("MED-025 conserva doce casos y siete capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 12);
  assert.equal(new Set(data.cases.map((item: { id: string }) => item.id)).size, 12);
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

test("MED-025 sólo enlaza registros canónicos", () => {
  const { claims, evidence, sources } = known();
  const slugs = new Set(buildPublicData().catalog.map((record) => record.slug));
  assert.ok(slugs.has(data.researchSlug));
  for (const item of data.cases) for (const layer of item.layers) {
    for (const id of layer.claimIds) assert.ok(claims.has(id), id);
    for (const id of layer.evidenceIds) assert.ok(evidence.has(id), id);
    for (const id of layer.sourceIds) assert.ok(sources.has(id), id);
  }
});

test("los claims y fuentes del expediente coinciden con los del módulo y existen", () => {
  const { claims, sources } = known();
  const declared = [...research.matchAll(/^  - (CLAIM-MED-IMG-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  const declaredSources = [...research.matchAll(/^  - (SRC-MED-IMG-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  assert.ok(declared.length >= 75);
  assert.equal(new Set(declared).size, declared.length);
  for (const id of declared) assert.ok(claims.has(id), id);
  for (const id of declaredSources) assert.ok(sources.has(id), id);
  const used = new Set(data.cases.flatMap((item: { layers: { claimIds: string[] }[] }) => item.layers.flatMap((layer) => layer.claimIds)));
  for (const id of used) assert.ok(declared.includes(id as string), `${id} no está declarado en el expediente`);
});

test("el estudio de 1947 conserva el desacuerdo y su procedencia", () => {
  const item = byId("observer-variability-1947-1960");
  assert.ok(item);
  assert.match(item.layers[2].observed, /30 %.*20 %/);
  assert.match(item.layers[2].limit, /no leídos completos/);
  assert.match(item.layers[4].limit, /simplificación/);
});

test("la troponina separa prueba, categoría y desenlace", () => {
  const item = byId("troponin-2000-2018");
  assert.ok(item);
  assert.match(item.layers[5].observed, /538 infartos frente a 327/);
  assert.match(item.layers[5].limit, /refleja la prueba, no la población/);
  assert.match(item.layers[6].observed, /1\.10; 0\.75–1\.61/);
});

test("el umbral de hipertensión crea prevalencia sin cambiar mediciones", () => {
  const item = byId("classification-1893-2022");
  assert.ok(item);
  assert.match(item.layers[3].observed, /31\.9 % a 45\.6 %/);
  assert.match(item.layers[3].limit, /cambió la definición/);
});

test("la IA conserva métrica, intervalo y límite de no inferioridad", () => {
  const item = byId("ai-imaging-2018-2026");
  assert.ok(item);
  assert.match(item.layers[6].observed, /0\.88 \(0\.65–1\.18\)/);
  assert.match(item.layers[6].limit, /no un hecho sobre la mortalidad/);
  assert.match(item.layers[5].observed, /34 de 36/);
});

test("MED-025 no contiene dosis prescriptivas ni recomendaciones clínicas", () => {
  const text = `${research}\n${JSON.stringify(data)}`;
  assert.doesNotMatch(text, /\b\d+(?:[.,]\d+)?\s?(?:mg|ml|mL|cc|µg|mcg|gramos?|granos?|gotas|minims?|UI|unidades)\b/);
  assert.doesNotMatch(text, /\b(?:se recomienda|recomendamos|debe administrarse|administre|dosis recomendada|debe hacerse la prueba|hágase)\b/i);
  assert.match(research, /no contiene recomendaciones clínicas ni indica pruebas, cribados o tratamientos/);
});
