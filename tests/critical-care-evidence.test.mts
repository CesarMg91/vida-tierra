import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "critical-care-evidence.json"), "utf8"));
const research = fs.readFileSync(path.join(ROOT, "15_medicina", "INVESTIGACION_MED_026_TRANSFUSION_TRAUMA_CUIDADOS_CRITICOS.md"), "utf8");
const expectedKinds = ["infrastructure", "procedure", "series", "comparison", "protocol", "outcome", "harm"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

const registry = () => {
  const rows = registryRows();
  return {
    claims: new Set(rows.claims.map((row) => row.id)),
    evidence: new Set(rows.evidence.map((row) => row.id)),
    sources: new Set(rows.sources.map((row) => row.id)),
  };
};

test("MED-026 conserva doce casos y siete capas ordenadas", () => {
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

test("MED-026 sólo enlaza registros canónicos", () => {
  const { claims, evidence, sources } = registry();
  const slugs = new Set(buildPublicData().catalog.map((record) => record.slug));
  assert.ok(slugs.has(data.researchSlug), data.researchSlug);
  for (const item of data.cases) for (const layer of item.layers) {
    for (const id of layer.claimIds) assert.ok(claims.has(id), id);
    for (const id of layer.evidenceIds) assert.ok(evidence.has(id), id);
    for (const id of layer.sourceIds) assert.ok(sources.has(id), id);
  }
});

test("los claims y fuentes del expediente coinciden con el módulo y existen", () => {
  const { claims, sources } = registry();
  const declared = [...research.matchAll(/^  - (CLAIM-MED-CRIT-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  const declaredSources = [...research.matchAll(/^  - (SRC-MED-CRIT-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  assert.ok(declared.length >= 80);
  assert.equal(new Set(declared).size, declared.length);
  for (const id of declared) assert.ok(claims.has(id), id);
  for (const id of declaredSources) assert.ok(sources.has(id), id);
  const used = new Set(data.cases.flatMap((item: { layers: { claimIds: string[] }[] }) => item.layers.flatMap((layer) => layer.claimIds)));
  for (const id of used) assert.ok(declared.includes(id as string), `${id} no está declarado en el expediente`);
});

test("las primeras transfusiones separan procedimiento y prohibición", () => {
  const item = byId("early-transfusion-1666-1668");
  assert.ok(item);
  assert.match(item.layers[1].observed, /15 de junio de 1667/);
  assert.match(item.layers[1].limit, /no demuestra que convenga/);
  assert.match(item.layers[4].observed, /17 de abril de 1668/);
  assert.match(item.layers[4].limit, /no juzgó la eficacia/);
});

test("la guerra como laboratorio conserva el sesgo de supervivencia y el ensayo", () => {
  const item = byId("war-laboratory-2001-2015");
  assert.ok(item);
  assert.match(item.layers[3].observed, /65 %, 34 % y 19 %/);
  assert.match(item.layers[3].limit, /sesgada por la supervivencia/);
  assert.match(item.layers[5].observed, /12\.7 % y 17\.0 %/);
  assert.match(item.layers[4].limit, /Adoptado no es probado/);
});

test("Copenhague no adopta cifras irreconciliables", () => {
  const item = byId("copenhagen-icu-1929-1953");
  assert.ok(item);
  assert.match(item.layers[3].observed, /345 pacientes.*144 \(41\.6 %\)/);
  assert.match(item.layers[3].limit, /no se reconcilian/);
  assert.match(item.layers[6].observed, /114 de 115 autopsias/);
  assert.match(research, /no se verificaron contra el informe de Lassen de 1953/);
});

test("la sangre contaminada se lee como regulación y estimación", () => {
  const item = byId("contaminated-blood-1943-2024");
  assert.ok(item);
  assert.match(item.layers[2].observed, /mediana de 14 donantes/);
  assert.match(item.layers[4].observed, /julio de 1983/);
  assert.match(item.layers[5].limit, /estimaciones/);
});

test("los ensayos separan meta fisiológica y desenlace", () => {
  const item = byId("trial-reversals-2000-2017");
  assert.ok(item);
  assert.match(item.layers[3].observed, /24\.9 % frente a 25\.4 %/);
  assert.match(item.layers[4].limit, /no una prueba/);
  assert.match(item.layers[6].limit, /Meta fisiológica no es desenlace/);
});

test("la hora de oro queda separada del sistema", () => {
  const item = byId("trauma-systems-1966-2010");
  assert.ok(item);
  assert.match(item.layers[4].observed, /no halló su respaldo/);
  assert.match(item.layers[5].inference, /Sistema y reloj son hipótesis distintas/);
});

test("MED-026 no contiene dosis, umbrales prescriptivos ni recomendaciones clínicas", () => {
  const text = `${research}\n${JSON.stringify(data)}`;
  assert.doesNotMatch(text, /\b\d+(?:[.,]\d+)?\s?(?:mg|ml|mL|cc|µg|mcg|g\/dL|mmHg|mm Hg|gramos?|granos?|gotas|minims?|UI|unidades|onzas|pintas)\b/);
  assert.doesNotMatch(text, /\b(?:se recomienda|recomendamos|debe administrarse|administre|dosis recomendada|umbral recomendado|transfunda)\b/i);
  assert.match(research, /no contiene recomendaciones clínicas, umbrales de tratamiento ni dosis/);
});
