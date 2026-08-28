import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "roman-byzantine-medicine-evidence.json"), "utf8"));
const expectedKinds = ["trace", "identification", "function", "operation", "access", "consequence"];

test("MED-008 conserva cinco casos y seis capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 5);
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

test("MED-008 sólo enlaza registros canónicos", () => {
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

test("el valetudinarium no hereda cobertura ni resultado", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "legionary-valetudinarium");
  assert.ok(item);
  assert.match(item.layers[1].limit, /otros usos|cambiar de función/i);
  assert.match(item.layers[4].limit, /población civil|cobertura/i);
  assert.match(item.layers[5].limit, /no demostrado/i);
});

test("la infraestructura urbana conserva evidencia contraria", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "roman-water-sanitation");
  assert.ok(item);
  assert.match(item.layers[2].limit, /intención sanitaria|acceso/i);
  assert.match(item.layers[5].limit, /evidencia contraria/i);
});

test("Galeno y los compiladores no heredan uniformidad o eficacia", () => {
  const galen = data.cases.find((entry: { id: string }) => entry.id === "galen-in-rome");
  const compilers = data.cases.find((entry: { id: string }) => entry.id === "late-antique-compilers");
  assert.ok(galen && compilers);
  assert.match(galen.layers[5].limit, /práctica romana uniforme|eficacia/i);
  assert.match(compilers.layers[5].limit, /progreso continuo|efecto terapéutico/i);
});

test("el Pantocrátor conserva norma, acceso y resultados separados", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "byzantine-xenon");
  assert.ok(item);
  assert.match(item.layers[3].limit, /prescripción|cumplimiento/i);
  assert.match(item.layers[4].limit, /no demostrado/i);
  assert.match(item.layers[5].limit, /nacimiento único|sistema universal/i);
});
