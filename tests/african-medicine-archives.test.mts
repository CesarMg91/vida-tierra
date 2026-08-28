import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "african-medicine-archives.json"), "utf8"));
const expectedKinds = ["archive", "provenance", "signal", "inference", "contrast", "limit"];

test("MED-009 conserva seis casos y seis capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 6);
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

test("MED-009 sólo enlaza registros canónicos", () => {
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

test("Kerma conserva diferencial y no hereda tratamiento", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "kerma-k317");
  assert.ok(item);
  assert.match(item.layers[3].limit, /no demostrado/i);
  assert.match(item.layers[4].observed, /trauma|patológica/i);
  assert.match(item.layers[5].limit, /dato ausente/i);
});

test("Aksum separa monumentalidad, cuerpo y manuscrito tardío", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "aksum-preservation");
  assert.ok(item);
  assert.match(item.layers[2].limit, /n humano = 1/i);
  assert.match(item.layers[4].limit, /testigos intermedios/i);
  assert.match(item.layers[5].limit, /no demostrado/i);
});

test("Jenne-jeno diferencia no demostrado de ausencia", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "jenne-jeno");
  assert.ok(item);
  assert.match(item.layers[3].limit, /no demostrado/i);
  assert.match(item.layers[5].inference, /distinto de ausencia/i);
});

test("Tombuctú y Tong Hills no heredan práctica o eficacia", () => {
  const timbuktu = data.cases.find((entry: { id: string }) => entry.id === "timbuktu-manuscript");
  const tong = data.cases.find((entry: { id: string }) => entry.id === "tong-hills-pots");
  assert.ok(timbuktu && tong);
  assert.match(timbuktu.layers[3].limit, /no demostrado/i);
  assert.match(tong.layers[5].limit, /no demostrado|eficacia/i);
});
