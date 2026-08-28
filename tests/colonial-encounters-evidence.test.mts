import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "colonial-encounters-evidence.json"), "utf8"));
const expectedKinds = ["exposure", "violence", "labor", "nutrition", "classification", "response", "survival"];

test("MED-015 conserva siete casos y siete capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 7);
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

test("MED-015 sólo enlaza registros canónicos", () => {
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

test("La Española separa conexión, mecanismos y denominador", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "hispaniola-1492-1518");
  assert.ok(item);
  assert.match(item.layers[0].limit, /no diagnostica/i);
  assert.match(item.layers[4].limit, /no son denominadores intercambiables/i);
  assert.match(item.layers[6].limit, /no decide identidad comunitaria/i);
});

test("Teposcolula conserva agente local, dieta adversaria y continuidad limitada", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "teposcolula-1545-1550");
  assert.ok(item);
  assert.match(item.layers[0].limit, /no convierte todo cocoliztli/i);
  assert.match(item.layers[3].inference, /no hubo una sustitución dietaria simple/i);
  assert.match(item.layers[6].limit, /no significa inmovilidad/i);
});

test("Huancavelica distingue emisión, dosis y régimen laboral", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "huancavelica-potosi-1564-1810");
  assert.ok(item);
  assert.match(item.layers[0].limit, /no equivale.*dosis individual/i);
  assert.match(item.layers[2].limit, /no especifica tarea/i);
  assert.match(item.layers[6].limit, /no reconstruyen dosis/i);
});

test("Los controles adversarios impiden inmunidad, benevolencia y crédito heredados", () => {
  const philippines = data.cases.find((entry: { id: string }) => entry.id === "philippines-1565-1650");
  const atlantic = data.cases.find((entry: { id: string }) => entry.id === "atlantic-slavery-newton");
  const botany = data.cases.find((entry: { id: string }) => entry.id === "guayases-cinchona");
  assert.ok(philippines && atlantic && botany);
  assert.match(philippines.layers[0].limit, /no es una historia inmunológica uniforme/i);
  assert.match(atlantic.layers[2].limit, /no demuestra consentimiento/i);
  assert.match(botany.layers[6].inference, /apropiación y silenciamiento/i);
});

test("California mantiene distinto contacto previo, asentamiento y persistencia", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "alta-california-missions");
  assert.ok(item);
  assert.match(item.layers[0].inference, /más que el mero primer contacto/i);
  assert.match(item.layers[3].limit, /no demuestra ración individual/i);
  assert.match(item.layers[6].inference, /no equivale a desaparición histórica/i);
});
