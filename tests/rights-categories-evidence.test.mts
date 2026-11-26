import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "rights-categories-evidence.json"), "utf8"));
const research = fs.readFileSync(path.join(ROOT, "15_medicina", "INVESTIGACION_MED_030_REPRODUCCION_DISCAPACIDAD_SALUD_MENTAL_DERECHOS.md"), "utf8");
const expectedKinds = ["category", "diagnosis", "institution", "intervention", "consent", "movement", "harm"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

function known() {
  const rows = registryRows();
  return {
    claims: new Set(rows.claims.map((row) => row.id)),
    evidence: new Set(rows.evidence.map((row) => row.id)),
    sources: new Set(rows.sources.map((row) => row.id)),
  };
}

test("MED-030 conserva doce casos y siete capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 12);
  assert.equal(new Set(data.cases.map((item: { id: string }) => item.id)).size, 12);
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

test("MED-030 sólo enlaza registros canónicos", () => {
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
  const declared = [...research.matchAll(/^  - (CLAIM-MED-RIGHTS-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  const declaredSources = [...research.matchAll(/^  - (SRC-MED-RIGHTS-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  assert.ok(declared.length >= 90);
  assert.equal(new Set(declared).size, declared.length);
  for (const id of declared) assert.ok(claims.has(id), id);
  for (const id of declaredSources) assert.ok(sources.has(id), id);
  const used = new Set(data.cases.flatMap((item: { layers: { claimIds: string[] }[] }) => item.layers.flatMap((layer) => layer.claimIds)));
  for (const id of used) assert.ok(declared.includes(id as string), `${id} no está declarado en el expediente`);
  const referenced = new Set([...research.matchAll(/`(CLAIM-MED-RIGHTS-[A-Z0-9-]+)`/g)].map((match) => match[1]));
  for (const id of referenced) assert.ok(declared.includes(id), `${id} se cita pero no se declara`);
});

test("Buck v. Bell conserva la sentencia, el expediente construido y que no se revocó", () => {
  const item = byId("eugenics-democracies-1907-2002");
  assert.ok(item);
  assert.match(item.layers[2].observed, /8 a 1 en 1927/);
  assert.match(item.layers[1].observed, /se construyó para el litigio/);
  assert.match(item.layers[5].limit, /nunca se revocó expresamente/);
  assert.match(item.layers[3].observed, /63 000/);
});

test("T4 distingue recuento interno de estimación total", () => {
  const item = byId("nazi-sterilization-t4-1933-1945");
  assert.ok(item);
  assert.match(item.layers[3].observed, /70 273/);
  assert.match(item.layers[3].limit, /sólo la fase centralizada/);
  assert.match(item.layers[6].limit, /no un censo/);
});

test("las esterilizaciones de los setenta separan firma, coerción e intención", () => {
  const item = byId("us-sterilization-1970s");
  assert.ok(item);
  assert.match(item.layers[3].observed, /3406/);
  assert.match(item.layers[4].limit, /no evaluó si hubo coerción/);
  assert.match(item.layers[6].limit, /Daño e intención son capas distintas/);
});

test("Perú registra el orden de magnitud sin convertirlo en recuento de forzadas", () => {
  const item = byId("peru-sterilization-1996-2024");
  assert.ok(item);
  assert.match(item.layers[3].limit, /no es un recuento auditado/i);
  assert.match(item.layers[5].observed, /30 de octubre de 2024/);
});

test("Rosenhan conserva el artículo, la auditoría y la pregunta que sobrevive", () => {
  const item = byId("rosenhan-1973-2023");
  assert.ok(item);
  assert.match(item.layers[1].observed, /ocho seudopacientes en doce hospitales/);
  assert.match(item.layers[3].observed, /dos seudopacientes/);
  assert.match(item.layers[6].limit, /sobrevive/);
});

test("el DSM separa confiabilidad, voto y validez", () => {
  const item = byId("dsm-reliability-homosexuality-1952-2017");
  assert.ok(item);
  assert.match(item.layers[5].observed, /58 % de unos 10 000/);
  assert.match(item.layers[5].limit, /Ni el voto fue la prueba/);
  assert.match(item.layers[6].limit, /Confiabilidad no es validez/);
});

test("la desinstitucionalización no se convierte en causa de la prevalencia en prisión", () => {
  const item = byId("asylums-deinstitutionalization-1955-2012");
  assert.ok(item);
  assert.match(item.layers[2].observed, /559 000.*57 151/);
  assert.match(item.layers[6].limit, /No prueba que la desinstitucionalización/);
});

test("MED-030 no contiene dosis prescriptivas ni recomendaciones clínicas", () => {
  const text = `${research}\n${JSON.stringify(data)}`;
  assert.doesNotMatch(text, /\b\d+(?:[.,]\d+)?\s?(?:mg|ml|mL|cc|µg|mcg|gramos?|granos?|gotas|minims?|UI|unidades)\b/);
  assert.doesNotMatch(text, /\b(?:se recomienda|recomendamos|debe administrarse|administre|dosis recomendada|hágase)\b/i);
  assert.match(research, /no contiene recomendaciones clínicas, indicaciones ni dosis/);
});
