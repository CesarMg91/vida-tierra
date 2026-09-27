import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "south-asian-medicine-evidence.json"), "utf8"));
const expectedKinds = ["testimony", "reading", "stratum", "circulation", "practice", "consequence"];

test("el módulo de Asia meridional conserva cinco casos y seis capas ordenadas", () => {
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

test("el módulo de Asia meridional sólo enlaza registros canónicos", () => {
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

test("KL 699 fecha una copia y no la composición completa", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "susruta-kl699");
  assert.ok(item);
  assert.match(item.layers[0].limit, /testigo|cada procedimiento/i);
  assert.match(item.layers[2].limit, /600 a\. e\. c\./i);
  assert.match(item.layers[5].limit, /no demostrado/i);
});

test("Aśoka no se presenta como una red observada de hospitales", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "ashoka-edict");
  assert.ok(item);
  assert.match(item.layers[1].limit, /no menciona hospital/i);
  assert.match(item.layers[4].limit, /no informa cuántas/i);
  assert.match(item.layers[5].limit, /no demostrado/i);
});

test("Tirumukkūḍal conserva capacidad local sin heredar cobertura ni eficacia", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "tirumukkudal-hospital");
  assert.ok(item);
  assert.match(item.layers[0].limit, /no representa toda Asia meridional/i);
  assert.match(item.layers[5].limit, /cobertura|beneficio/i);
});
