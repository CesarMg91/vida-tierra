import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "pharmacology-resistance-evidence.json"), "utf8"));
const research = fs.readFileSync(path.join(ROOT, "15_medicina", "INVESTIGACION_MED_024_FARMACOLOGIA_ANTIBIOTICOS_RESISTENCIA.md"), "utf8");
const expectedKinds = ["substance", "dose", "series", "comparison", "regulation", "surveillance", "ecology"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

test("MED-024 conserva once casos y siete capas ordenadas", () => {
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

test("MED-024 sólo enlaza registros canónicos", () => {
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
  const declared = [...research.matchAll(/^  - (CLAIM-MED-PHARM-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  assert.ok(declared.length >= 70);
  assert.equal(new Set(declared).size, declared.length);
  for (const id of declared) assert.ok(claims.has(id), id);
  const used = new Set(data.cases.flatMap((item: { layers: { claimIds: string[] }[] }) => item.layers.flatMap((layer) => layer.claimIds)));
  for (const id of used) assert.ok(declared.includes(id as string), `${id} no está declarado en el expediente`);
});

test("el ensayo del MRC conserva cifras, asignación y resistencia", () => {
  const item = byId("streptomycin-mrc-1944-1952");
  assert.ok(item);
  assert.match(item.layers[3].observed, /4 muertes en 55 frente a 14 en 52/);
  assert.match(item.layers[3].observed, /sobres cerrados/);
  assert.match(item.layers[3].limit, /no fue el primer uso del azar/);
  assert.match(item.layers[5].observed, /resistencia tras el cuarto mes/);
});

test("la penicilina separa placa, caso y producción", () => {
  const item = byId("penicillin-1928-1945");
  assert.ok(item);
  assert.match(item.layers[0].limit, /no es un tratamiento/);
  assert.match(item.layers[2].observed, /15 de marzo/);
  assert.match(item.layers[2].limit, /no es una tasa/);
  assert.match(item.layers[3].limit, /no es probar/);
});

test("las sulfonamidas conservan el control histórico y el daño de formulación", () => {
  const item = byId("sulfonamides-1932-1938");
  assert.ok(item);
  assert.match(item.layers[3].observed, /8 muertes en 64.*19 en 76/);
  assert.match(item.layers[3].limit, /histórico/);
  assert.match(item.layers[5].limit, /formulación/);
});

test("las cifras globales llevan contrafactual, intervalo y límite de modelo", () => {
  const item = byId("global-burden-2014-2025");
  assert.ok(item);
  assert.match(item.layers[2].observed, /0\.911–1\.71/);
  assert.match(item.layers[3].observed, /Atribuible.*asociada/);
  assert.match(item.layers[6].limit, /no un hecho/);
  assert.match(item.layers[5].limit, /a quién se cultiva/);
});

test("MED-024 no contiene dosis prescriptivas ni recomendaciones clínicas", () => {
  const text = `${research}\n${JSON.stringify(data)}`;
  assert.doesNotMatch(text, /\b\d+(?:[.,]\d+)?\s?(?:mg|ml|mL|cc|µg|mcg|gramos?|granos?|gotas|minims?|UI|unidades)\b/);
  assert.doesNotMatch(text, /\b(?:se recomienda|recomendamos|debe administrarse|administre|dosis recomendada)\b/i);
  assert.match(research, /no contiene recomendaciones clínicas ni dosis prescriptivas/);
});
