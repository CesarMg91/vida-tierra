import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "hospital-bedside-evidence.json"), "utf8"));
const expectedKinds = ["institution", "admission", "encounter", "examination", "record", "comparison", "decision"];

test("MED-019 conserva ocho casos y siete capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 8);
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

test("MED-019 sólo enlaza registros canónicos", () => {
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

test("Leiden conserva escala limitada y fundador distribuido", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "padua-leiden-1658-1738");
  assert.ok(item);
  assert.match(item.layers[1].limit, /denominador completo/i);
  assert.match(item.layers[6].limit, /invención individual/i);
});

test("París conserva selección, mediación del signo y límite terapéutico", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "paris-clinic-1801-1830s");
  assert.ok(item);
  assert.match(item.layers[1].observed, /22 000.*50 000/i);
  assert.match(item.layers[3].limit, /no contiene por sí solo una lesión/i);
  assert.match(item.layers[6].limit, /no demuestra.*tratamiento eficaz/i);
});

test("Estambul y Japón no convierten reforma en sustitución o superioridad", () => {
  const istanbul = data.cases.find((entry: { id: string }) => entry.id === "istanbul-reform-1827-1900");
  const japan = data.cases.find((entry: { id: string }) => entry.id === "meiji-japan-1874-1900");
  assert.ok(istanbul && japan);
  assert.match(istanbul.layers[0].limit, /no implica ruptura total/i);
  assert.match(japan.layers[3].limit, /no implica.*superioridad nacional/i);
});

test("México y Calcuta conservan poder, selección y límites de representación", () => {
  const mexico = data.cases.find((entry: { id: string }) => entry.id === "mexico-san-andres-1806-1900");
  const calcutta = data.cases.find((entry: { id: string }) => entry.id === "calcutta-medical-college-1835-1900");
  assert.ok(mexico && calcutta);
  assert.match(mexico.layers[1].limit, /no representan a toda la ciudad/i);
  assert.match(calcutta.layers[1].observed, /pobreza, raza/i);
});

test("el expediente conserva voz distribuida sin equivaler a la persona", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "medical-record-standardization");
  assert.ok(item);
  assert.match(item.layers[2].observed, /familias, enfermería, intérpretes/i);
  assert.match(item.layers[4].limit, /no contiene persona, conversación o cuidado completos/i);
  assert.match(item.layers[6].limit, /no prueban exactitud, beneficio, consentimiento o justicia/i);
});
