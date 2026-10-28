import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "agents-particles-evidence.json"), "utf8"));
const expectedKinds = ["system", "result", "scope", "interpretation", "leap", "test"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

test("CON-005 conserva ocho casos y seis capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 8);
  for (const item of data.cases) {
    assert.ok(item.title.trim() && item.product.trim() && item.stance.trim());
    assert.deepEqual(item.layers.map((layer: { kind: string }) => layer.kind), expectedKinds);
    for (const layer of item.layers) {
      assert.ok(layer.observed.trim());
      assert.ok(layer.inference.trim());
      assert.ok(layer.limit.trim());
      assert.ok(layer.claimIds.length && layer.evidenceIds.length && layer.sourceIds.length);
    }
  }
});

test("CON-005 sólo enlaza registros canónicos", () => {
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

test("el laboratorio conserva la errata y el colapso del mapa", () => {
  assert.match(byId("errata-17").layers[1].observed, /17 permutaciones distintas; la tabla del apéndice y la reproducción dan 14/);
  assert.match(byId("errata-17").layers[2].observed, /16 permutaciones decoradas posibles/);
  assert.match(byId("solo-el-grafo").layers[1].observed, /343 patrones de transición posibles caen en 14 permutaciones/);
});

test("una permutación no se presenta como amplitud ni como derivación", () => {
  assert.match(byId("permutacion-no-amplitud").layers[4].limit, /no se sigue que basten para calcular una amplitud/i);
  assert.match(byId("mapa-markov-2023").layers[4].limit, /no se sigue una derivación de la física/i);
});

test("ningún caso promueve una tesis a resultado", () => {
  for (const item of data.cases) {
    const leap = item.layers[4];
    assert.doesNotMatch(leap.inference, /demuestra que/i, item.id);
    assert.match(leap.limit, /no se sigue/i, item.id);
  }
});

test("CON-005 está auditado y CON-006 sigue planeado", () => {
  const editorial = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "catalog-editorial.json"), "utf8"));
  assert.equal(editorial.records["CON-005"].status, "AUDITADO");
  const record = buildPublicData().catalog.find((entry) => entry.key === "CON-005");
  assert.ok(record);
  assert.equal(record.status, "AUDITADO");
  const program = fs.readFileSync(path.join(ROOT, "26_conciencia", "PROGRAMA_CONCIENCIA.md"), "utf8");
  assert.match(program, /\| CON-005 \|[^\n]*\*\*AUDITADO\*\* \|/);
  assert.match(program, /\| CON-006 \|[^\n]*planeado \|/);
});
