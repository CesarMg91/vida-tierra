import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "trials-evidence.json"), "utf8"));
const research = fs.readFileSync(path.join(ROOT, "15_medicina", "INVESTIGACION_MED_029_ENSAYOS_REGULACION_EVIDENCIA.md"), "utf8");
const expectedKinds = ["design", "allocation", "consent", "registration", "publication", "synthesis", "decision"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

function known() {
  const rows = registryRows();
  return {
    claims: new Set(rows.claims.map((row) => row.id)),
    evidence: new Set(rows.evidence.map((row) => row.id)),
    sources: new Set(rows.sources.map((row) => row.id)),
  };
}

test("MED-029 conserva doce casos y siete capas ordenadas", () => {
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

test("MED-029 sólo enlaza registros canónicos", () => {
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
  const declared = [...research.matchAll(/^  - (CLAIM-MED-EBM-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  const declaredSources = [...research.matchAll(/^  - (SRC-MED-EBM-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  assert.ok(declared.length >= 100);
  assert.equal(new Set(declared).size, declared.length);
  for (const id of declared) assert.ok(claims.has(id), id);
  for (const id of declaredSources) assert.ok(sources.has(id), id);
  const used = new Set(data.cases.flatMap((item: { layers: { claimIds: string[] }[] }) => item.layers.flatMap((layer) => layer.claimIds)));
  for (const id of used) assert.ok(declared.includes(id as string), `${id} no está declarado en el expediente`);
});

test("Lind conserva el límite del texto y la duda sobre su historicidad", () => {
  const item = byId("lind-scurvy-1747");
  assert.ok(item);
  assert.match(item.layers[1].observed, /no dice cómo se asignó/);
  assert.match(item.layers[3].limit, /historicidad queda abierta/);
  assert.match(item.layers[6].limit, /mito del héroe/);
});

test("Fibiger conserva cifras, exclusiones y asignación cuasialeatoria", () => {
  const item = byId("fibiger-diphtheria-1896");
  assert.ok(item);
  assert.match(item.layers[1].observed, /8 muertes en 239 tratados y 30 en 245/);
  assert.match(item.layers[1].limit, /cuasialeatorio/);
  assert.match(item.layers[3].observed, /1004.*493/);
});

test("Tuskegee distingue tratamiento negado de inoculación", () => {
  const item = byId("beecher-tuskegee-1932-1997");
  assert.ok(item);
  assert.match(item.layers[1].observed, /No se infectó a nadie en Tuskegee/);
  assert.match(item.layers[0].observed, /399 con sífilis y 201 sin ella/);
  assert.match(item.layers[5].limit, /no se contradicen por necesidad/);
});

test("el sesgo de publicación conserva denominador y límite", () => {
  const item = byId("publication-registration-1986-2020");
  assert.ok(item);
  assert.match(item.layers[4].observed, /94 % positiva frente a 51 %/);
  assert.match(item.layers[4].limit, /autores o de editores/);
  assert.match(item.layers[3].observed, /40\.9 % de 4209/);
});

test("el meta-análisis acumulativo conserva razón, intervalo y lectura retrospectiva", () => {
  const item = byId("cumulative-meta-analysis-1992");
  assert.ok(item);
  assert.match(item.layers[5].observed, /OR 0\.74; 0\.59–0\.92/);
  assert.match(item.layers[5].limit, /retrospectiva/);
});

test("RECOVERY conserva intervalos y heterogeneidad sin volverse indicación", () => {
  const item = byId("replication-platform-2005-2026");
  assert.ok(item);
  assert.match(item.layers[6].observed, /1\.09; 0\.97–1\.23/);
  assert.match(item.layers[6].observed, /0\.83 \(0\.75–0\.93\)/);
  assert.match(item.layers[6].limit, /no indicación de tratamiento/);
});

test("MED-029 no contiene dosis prescriptivas ni recomendaciones clínicas", () => {
  const text = `${research}\n${JSON.stringify(data)}`;
  assert.doesNotMatch(text, /\b\d+(?:[.,]\d+)?\s?(?:mg|ml|mL|cc|µg|mcg|gramos?|granos?|gotas|minims?|UI|unidades)\b/);
  assert.doesNotMatch(text, /\b(?:se recomienda|recomendamos|debe administrarse|administre|dosis recomendada|hágase)\b/i);
  assert.match(research, /no contiene recomendaciones clínicas, indicaciones ni dosis/);
});
