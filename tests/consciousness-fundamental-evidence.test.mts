import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "consciousness-fundamental-evidence.json"), "utf8"));
const expectedKinds = ["system", "result", "scope", "interpretation", "leap", "test"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

test("CON-003 conserva ocho casos y seis capas ordenadas", () => {
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

test("CON-003 sólo enlaza registros canónicos", () => {
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

test("la dependencia cerebral no se convierte en metafísica", () => {
  const item = byId("dependencia-cerebral");
  assert.ok(item);
  assert.match(item.layers[3].limit, /dependencia no es identidad ni producción/i);
  assert.match(item.layers[5].limit, /no deciden entre fisicalismo, panpsiquismo e idealismo/i);
});

test("la prueba adversarial conserva que ninguna teoría salió confirmada", () => {
  const item = byId("prueba-adversarial-2025");
  assert.ok(item);
  assert.match(item.layers[0].observed, /256 participantes/);
  assert.match(item.layers[1].inference, /las dos teorías quedaron cuestionados/i);
  assert.match(item.layers[5].limit, /la pregunta metafísica seguiría abierta/i);
});

test("cada postura metafísica declara su deuda", () => {
  assert.match(byId("panpsiquismo").layers[2].inference, /combinación/i);
  assert.match(byId("idealismo-analitico").layers[2].inference, /regularidad/i);
  assert.match(byId("agentes-conscientes").layers[5].observed, /no se ha publicado una predicción física nueva/i);
});

test("el atajo cuántico queda como control: los observadores son fotones", () => {
  const item = byId("atajo-cuantico");
  assert.ok(item);
  assert.match(item.layers[0].limit, /fotones/i);
  assert.match(item.layers[4].limit, /ningún experimento citado usa un observador consciente/i);
});

test("ningún caso promueve una tesis metafísica a resultado", () => {
  for (const item of data.cases) {
    const leap = item.layers[4];
    assert.doesNotMatch(leap.inference, /demuestra que (la realidad|la conciencia|todo)/i, item.id);
    assert.match(leap.limit, /no se sigue/i, item.id);
  }
});

test("CON-003 está auditado en el catálogo y en el programa de la serie", () => {
  const editorial = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "catalog-editorial.json"), "utf8"));
  assert.equal(editorial.records["CON-003"].status, "AUDITADO");
  const record = buildPublicData().catalog.find((entry) => entry.key === "CON-003");
  assert.ok(record);
  assert.equal(record.status, "AUDITADO");
  const program = fs.readFileSync(path.join(ROOT, "26_conciencia", "PROGRAMA_CONCIENCIA.md"), "utf8");
  assert.match(program, /\| CON-003 \|[^\n]*\*\*AUDITADO\*\* \|/);
});
