import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "epidemics-quarantine-evidence.json"), "utf8"));
const expectedKinds = ["testimony", "agent", "magnitude", "response", "compliance", "inequality"];

test("MED-014 conserva seis casos y seis capas ordenadas", () => {
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

test("MED-014 sólo enlaza registros canónicos", () => {
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

test("Jerash separa fosa, agente y población", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "jerash-first-pandemic");
  assert.ok(item);
  assert.match(item.layers[0].limit, /no es una muestra de toda la población/i);
  assert.match(item.layers[1].limit, /no asigna causa de muerte/i);
  assert.match(item.layers[2].limit, /denominadores distintos/i);
});

test("la Peste Negra no hereda una magnitud continental uniforme", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "black-death-evidence-scales");
  assert.ok(item);
  assert.match(item.layers[2].inference, /no fueron uniformes/i);
  assert.match(item.layers[2].limit, /proxy/i);
  assert.match(item.layers[5].limit, /proxies inconmensurables/i);
});

test("las cuarentenas separan norma, ejecución, efecto y carga", () => {
  const ragusa = data.cases.find((entry: { id: string }) => entry.id === "ragusa-venice-quarantine");
  const bristol = data.cases.find((entry: { id: string }) => entry.id === "bristol-household-quarantine");
  assert.ok(ragusa && bristol);
  assert.match(ragusa.layers[4].inference, /selectivo, no automático/i);
  assert.match(bristol.layers[5].limit, /balance.*permanece abierto/i);
});

test("Londres y Marsella conservan denominadores y causalidad abiertos", () => {
  const london = data.cases.find((entry: { id: string }) => entry.id === "london-1665-bills-orders");
  const marseille = data.cases.find((entry: { id: string }) => entry.id === "marseille-1720");
  assert.ok(london && marseille);
  assert.match(london.layers[2].limit, /no son la misma cantidad/i);
  assert.match(marseille.layers[3].limit, /atribuir el descenso a una sola/i);
  assert.match(marseille.layers[5].limit, /sin denominadores comparables/i);
});
