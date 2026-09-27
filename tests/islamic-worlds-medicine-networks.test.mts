import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "islamic-worlds-medicine-networks.json"), "utf8"));
const expectedKinds = ["witness", "version", "operation", "institution", "scope", "consequence"];

test("MED-011 conserva seis redes y seis capas ordenadas", () => {
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

test("MED-011 sólo enlaza registros canónicos", () => {
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

test("Hunayn separa traducción, revisión y uso", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "hunayn-galen");
  assert.ok(item);
  assert.match(item.layers[1].observed, /cotejo|siríaco|árabe/i);
  assert.match(item.layers[2].observed, /Hubaysh|revisión/i);
  assert.match(item.layers[5].limit, /aplicación clínica|exactitud|beneficio/i);
});

test("Canon no se presenta como ensayo clínico ejecutado", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "canon-commentary");
  assert.ok(item);
  assert.match(item.layers[2].observed, /siete condiciones/i);
  assert.match(item.layers[2].limit, /no demostrado|aleatorizado|control/i);
  assert.match(item.layers[4].inference, /crítica|pasiva/i);
});

test("bimaristan separa waqf, operación y cobertura", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "bimaristans");
  assert.ok(item);
  assert.match(item.layers[2].limit, /norma|ocupación|atención diaria/i);
  assert.match(item.layers[4].observed, /Gundeshapur/i);
  assert.match(item.layers[5].limit, /cobertura universal|calidad/i);
});

test("Geniza e hisba no heredan dispensación ni licencia universal", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "genizah-regulation");
  assert.ok(item);
  assert.match(item.layers[2].limit, /no demostrado|preparación|administración/i);
  assert.match(item.layers[3].limit, /manual|universal/i);
  assert.match(item.layers[4].observed, /860|excepciones/i);
});
