import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "global-health-evidence.json"), "utf8"));
const research = fs.readFileSync(path.join(ROOT, "15_medicina", "INVESTIGACION_MED_032_SALUD_GLOBAL_DETERMINANTES_PANDEMIAS.md"), "utf8");
const expectedKinds = ["biology", "exposure", "inequality", "system", "intervention", "measurement", "cooperation"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

function known() {
  const rows = registryRows();
  return {
    claims: new Set(rows.claims.map((row) => row.id)),
    evidence: new Set(rows.evidence.map((row) => row.id)),
    sources: new Set(rows.sources.map((row) => row.id)),
  };
}

test("MED-032 conserva trece casos y siete capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 13);
  assert.equal(new Set(data.cases.map((item: { id: string }) => item.id)).size, 13);
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

test("MED-032 sólo enlaza registros canónicos", () => {
  const { claims, evidence, sources } = known();
  const slugs = new Set(buildPublicData().catalog.map((record) => record.slug));
  assert.ok(slugs.has(data.researchSlug) || fs.existsSync(path.join(ROOT, `${data.researchSlug}.md`)));
  for (const item of data.cases) for (const layer of item.layers) {
    for (const id of layer.claimIds) assert.ok(claims.has(id), id);
    for (const id of layer.evidenceIds) assert.ok(evidence.has(id), id);
    for (const id of layer.sourceIds) assert.ok(sources.has(id), id);
  }
});

test("los claims y fuentes del expediente coinciden con los del módulo y existen", () => {
  const { claims, sources } = known();
  const declared = [...research.matchAll(/^  - (CLAIM-MED-GLOBAL-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  const declaredSources = [...research.matchAll(/^  - (SRC-MED-GLOBAL-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  assert.ok(declared.length >= 100);
  assert.equal(new Set(declared).size, declared.length);
  for (const id of declared) assert.ok(claims.has(id), id);
  for (const id of declaredSources) assert.ok(sources.has(id), id);
  const used = new Set(data.cases.flatMap((item: { layers: { claimIds: string[] }[] }) => item.layers.flatMap((layer) => layer.claimIds)));
  for (const id of used) assert.ok(declared.includes(id as string), `${id} no está declarado en el expediente`);
  const referenced = new Set([...research.matchAll(/`(CLAIM-MED-GLOBAL-[A-Z0-9-]+)`/g)].map((match) => match[1]));
  for (const id of referenced) assert.ok(declared.includes(id), `${id} se cita pero no se declara`);
  for (const id of declared) assert.ok(referenced.has(id), `${id} se declara pero no se cita en el texto`);
});

test("los claims ajenos que cita MED-032 existen en el registro canónico", () => {
  const { claims } = known();
  for (const id of ["CLAIM-MED-COL-MODEL-001", "CLAIM-MED-COL-ATL-RACEMED-001", "CLAIM-MED-COUNT-ERADICATION-STRATEGY-001", "CLAIM-MED-COUNT-ERADICATION-INDIA-001", "CLAIM-MED-CARE-SANITARY-PLURAL-001", "CLAIM-MED-EPID-QUARANTINE-EFFICACY-001", "CLAIM-MED-PHARM-ONE-HEALTH-2022-001"]) {
    assert.ok(claims.has(id), id);
    assert.match(research, new RegExp(id));
  }
});

test("la medicina tropical conserva el legado colonial como asociación medida", () => {
  const item = byId("tropical-medicine-1877-1956");
  assert.ok(item);
  assert.match(item.layers[4].observed, /1921–1956/);
  assert.match(item.layers[5].observed, /menos vacunación/);
  assert.match(item.layers[5].limit, /no un mecanismo completo/);
});

test("la malaria conserva el resurgimiento de Sri Lanka y su causa abierta", () => {
  const item = byId("malaria-eradication-1955-1969");
  assert.ok(item);
  assert.match(item.layers[5].observed, /17 casos en 1963.*medio millón en 1969/);
  assert.match(item.layers[1].limit, /no está establecida/);
  assert.match(item.layers[6].observed, /85 %/);
});

test("Sudáfrica distingue contrafactual de recuento", () => {
  const item = byId("south-africa-arv-1999-2008");
  assert.ok(item);
  assert.match(item.layers[5].observed, /330 000.*343 000/);
  assert.match(item.layers[5].limit, /no recuentos/);
  assert.match(item.layers[2].observed, /85 %.*71 %.*23 %/);
});

test("el ébola separa proyección condicional y recuento final", () => {
  const item = byId("ebola-west-africa-2013-2016");
  assert.ok(item);
  assert.match(item.layers[5].observed, /1\.4 millones.*28 652 casos y 11 325 muertes/);
  assert.match(item.layers[5].limit, /no es predicción fallida/);
});

test("el exceso de mortalidad conserva cuatro cifras y su dependencia del método", () => {
  const item = byId("covid-excess-covax-2020-2024");
  assert.ok(item);
  assert.match(item.layers[5].observed, /14\.83, 15\.9, 18\.0 y 18\.2 millones/);
  assert.match(item.layers[5].limit, /Ninguna cifra es la verdadera/);
  assert.match(item.layers[0].limit, /no dice cuántas causó el virus/);
});

test("el Acuerdo sobre Pandemias queda como texto sin entrega", () => {
  const item = byId("one-health-agreement-2008-2026");
  assert.ok(item);
  assert.match(item.layers[4].observed, /20 %.*10 % donado/);
  assert.match(item.layers[6].observed, /sin abrirse a la firma al 25 de noviembre de 2026/);
  assert.match(item.layers[6].limit, /no es una dosis entregada/);
  assert.match(research, /no estaba abierto a la firma/);
});

test("MED-032 no cita MED-031 como expediente existente", () => {
  assert.doesNotMatch(`${research}\n${JSON.stringify(data)}`, /MED-031/);
});

test("MED-032 no contiene dosis, umbrales prescriptivos ni recomendaciones clínicas", () => {
  const text = `${research}\n${JSON.stringify(data)}`;
  assert.doesNotMatch(text, /\b\d+(?:[.,]\d+)?\s?(?:mg|ml|mL|cc|µg|mcg|g\/dL|mmHg|mm Hg|gramos?|granos?|gotas|UI|unidades|onzas|pintas)\b/);
  assert.doesNotMatch(text, /\b(?:se recomienda|recomendamos|debe administrarse|administre|dosis recomendada|umbral recomendado)\b/i);
  assert.match(research, /no contiene recomendaciones clínicas, indicaciones, dosis ni orientación de política sanitaria/);
});
