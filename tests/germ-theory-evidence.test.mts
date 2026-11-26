import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "germ-theory-evidence.json"), "utf8"));
const research = fs.readFileSync(path.join(ROOT, "15_medicina", "INVESTIGACION_MED_022_TEORIA_MICROBIANA_LABORATORIO.md"), "utf8");
const expectedKinds = ["observation", "isolation", "culture", "experiment", "epidemiology", "mechanism", "attribution"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

test("MED-022 conserva diez casos y siete capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 10);
  assert.equal(new Set(data.cases.map((item: { id: string }) => item.id)).size, 10);
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

test("MED-022 sólo enlaza registros canónicos", () => {
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
  const declared = [...research.matchAll(/^  - (CLAIM-MED-GERM-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  assert.ok(declared.length >= 60);
  for (const id of declared) assert.ok(claims.has(id), id);
  const used = new Set(data.cases.flatMap((item: { layers: { claimIds: string[] }[] }) => item.layers.flatMap((layer) => layer.claimIds)));
  for (const id of used) assert.ok(declared.includes(id as string), `${id} no está declarado en el expediente`);
});

test("los postulados se presentan como texto variable y no como canon de Koch", () => {
  const item = byId("postulates-1878-1905");
  assert.ok(item);
  assert.match(item.layers[0].observed, /entre 1878 y 1884/);
  assert.match(item.layers[1].observed, /Klebs/);
  assert.match(item.layers[3].inference, /necesidad/i);
  assert.match(item.layers[6].limit, /anécdota/i);
});

test("el autoexperimento de Pettenkofer conserva sus límites", () => {
  const miasma = byId("henle-miasma-1840-1892");
  const cholera = byId("cholera-1854-1892");
  assert.ok(miasma && cholera);
  assert.match(miasma.layers[3].observed, /7 de octubre de 1892/);
  assert.match(miasma.layers[3].limit, /no estima una tasa/i);
  assert.match(cholera.layers[3].limit, /discípulos/i);
});

test("Pasteur separa cuaderno y publicación", () => {
  const item = byId("pasteur-1857-1885");
  assert.ok(item);
  assert.match(item.layers[3].observed, /25 ovejas vacunadas/);
  assert.match(item.layers[3].limit, /bicromato/i);
  assert.match(item.layers[4].limit, /no ensayado en animales/i);
});

test("las cifras modernas conservan denominador y dirección", () => {
  const item = byId("late-attributions-1983-2026");
  assert.ok(item);
  assert.match(item.layers[1].observed, /58/);
  assert.match(item.layers[3].limit, /gastritis, no úlcera/i);
  assert.match(item.layers[4].observed, /4012/);
  assert.match(item.layers[4].observed, /32 veces/);
  assert.match(item.layers[6].limit, /Detectar no es atribuir/i);
});

test("virus y priones rompen el eslabón del cultivo", () => {
  const item = byId("viruses-prions-1892-1982");
  assert.ok(item);
  assert.match(item.layers[2].inference, /deja de aplicarse/i);
  assert.match(item.layers[6].observed, /prion/i);
});

test("MED-022 no contiene dosis, técnicas de uso ni recomendaciones clínicas", () => {
  const text = `${research}\n${JSON.stringify(data)}`;
  assert.doesNotMatch(text, /\b\d+(?:[.,]\d+)?\s?(?:mg|ml|mL|cc|µg|mcg|gramos?|granos?|gotas|minims?)\b/);
  assert.doesNotMatch(text, /\b(?:se recomienda|recomendamos|debe administrarse|administre|dosis recomendada)\b/i);
  assert.match(research, /no contiene recomendaciones clínicas, dosis ni técnicas de uso/);
});
