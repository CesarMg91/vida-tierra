import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "anesthesia-antisepsis-evidence.json"), "utf8"));
const research = fs.readFileSync(path.join(ROOT, "15_medicina", "INVESTIGACION_MED_021_ANESTESIA_ANALGESIA_ANTISEPSIA.md"), "utf8");
const expectedKinds = ["problem", "testimony", "demonstration", "series", "comparison", "mechanism", "adoption"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

test("MED-021 conserva diez casos y siete capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 10);
  assert.equal(new Set(data.cases.map((item: { id: string }) => item.id)).size, 10);
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

test("MED-021 sólo enlaza registros canónicos", () => {
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
  const declared = [...research.matchAll(/^  - (CLAIM-MED-ANES-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  assert.ok(declared.length >= 50);
  for (const id of declared) assert.ok(claims.has(id), id);
  const used = new Set(data.cases.flatMap((item: { layers: { claimIds: string[] }[] }) => item.layers.flatMap((layer) => layer.claimIds)));
  for (const id of used) assert.ok(declared.includes(id as string), `${id} no está declarado en el expediente`);
});

test("Lister conserva la cifra y sus límites", () => {
  const item = byId("lister-glasgow-1867-1890");
  assert.ok(item);
  assert.match(item.layers[4].observed, /16 muertes en 35.*6 en 40/);
  assert.match(item.layers[4].limit, /control histórico/i);
  assert.match(item.layers[3].observed, /cuatro de ellos niños/i);
  assert.match(item.layers[5].observed, /3 muertes en 100/);
});

test("el cloroformo separa numerador, tasa y mecanismo", () => {
  const item = byId("chloroform-1847-1891");
  assert.ok(item);
  assert.match(item.layers[2].observed, /28 de enero de 1848/);
  assert.match(item.layers[3].limit, /numerador, no una tasa/i);
  assert.match(item.layers[5].limit, /no zanja el humano/i);
});

test("Wells y el éter no convierten una demostración en tasa ni en prioridad", () => {
  const nitrous = byId("nitrous-oxide-1800-1845");
  const ether = byId("ether-1842-1849");
  assert.ok(nitrous && ether);
  assert.match(nitrous.layers[4].limit, /no estima una tasa/i);
  assert.match(ether.layers[6].limit, /prioridad no es aportar la evidencia/i);
  assert.match(ether.layers[4].observed, /Betsey Magoun/);
});

test("la asepsia no se presenta como probada por desenlaces ni las cifras dudosas como verificadas", () => {
  const item = byId("asepsis-gloves-1881-1900");
  assert.ok(item);
  assert.match(item.layers[3].limit, /no verificadas/i);
  assert.match(item.layers[5].limit, /no es la antisepsia perfeccionada/i);
  assert.match(item.layers[6].limit, /no implica más beneficio/i);
});

test("MED-021 no contiene dosis, técnicas de uso ni recomendaciones clínicas", () => {
  const text = `${research}\n${JSON.stringify(data)}`;
  assert.doesNotMatch(text, /\b\d+(?:[.,]\d+)?\s?(?:mg|ml|mL|cc|µg|mcg|gramos?|granos?|gotas|minims?)\b/);
  assert.doesNotMatch(text, /\b(?:se recomienda|recomendamos|debe administrarse|administre|dosis recomendada)\b/i);
  assert.match(research, /no contiene recomendaciones clínicas, dosis ni técnicas de uso/);
});
