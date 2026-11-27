import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "genomics-evidence.json"), "utf8"));
const research = fs.readFileSync(path.join(ROOT, "15_medicina", "INVESTIGACION_MED_031_GENETICA_GENOMICA_MEDICINA_PRECISION.md"), "utf8");
const expectedKinds = ["inheritance", "variant", "association", "penetrance", "prediction", "transfer", "classification", "governance"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

function known() {
  const rows = registryRows();
  const sets = {
    claims: new Set(rows.claims.map((row) => row.id)),
    evidence: new Set(rows.evidence.map((row) => row.id)),
    sources: new Set(rows.sources.map((row) => row.id)),
  };
  return sets;
}

test("MED-031 conserva once casos y ocho capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 11);
  assert.equal(new Set(data.cases.map((item: { id: string }) => item.id)).size, 11);
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

test("MED-031 sólo enlaza registros canónicos", () => {
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
  const declared = [...research.matchAll(/^  - (CLAIM-MED-GEN-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  const declaredSources = [...research.matchAll(/^  - (SRC-MED-GEN-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  assert.equal(declared.length, 82);
  assert.equal(declaredSources.length, 59);
  assert.equal(new Set(declared).size, declared.length);
  for (const id of declared) assert.ok(claims.has(id), id);
  for (const id of declaredSources) assert.ok(sources.has(id), id);
  const used = new Set(data.cases.flatMap((item: { layers: { claimIds: string[] }[] }) => item.layers.flatMap((layer) => layer.claimIds)));
  for (const id of used) assert.ok(declared.includes(id as string), `${id} no está declarado en el expediente`);
  const referenced = new Set([...research.matchAll(/`(CLAIM-MED-GEN-[A-Z0-9-]+)`/g)].map((match) => match[1]));
  for (const id of referenced) assert.ok(declared.includes(id), `${id} se cita pero no se declara`);
  for (const id of declared) assert.ok(referenced.has(id), `${id} se declara pero no se cita en el texto`);
});

test("los claims ajenos que cita MED-031 existen en el registro canónico", () => {
  const { claims } = known();
  for (const id of ["CLAIM-MED-DX-PREDICTION-001", "CLAIM-MED-DX-PREVALENCE-001", "CLAIM-MED-AI-RACE-REMOVAL-NOT-EQUITY-001", "CLAIM-MED-AI-LABEL-IS-CHOICE-001", "CLAIM-MTDNA-EVE-LIMIT-001", "CLAIM-MED-RIGHTS-BUCK-1927-001", "CLAIM-MED-RIGHTS-EUGENICS-NOT-NAZI-ONLY-001"]) {
    assert.ok(claims.has(id), id);
    assert.match(research, new RegExp(id));
  }
});

test("Mendel separa la disputa sobre los datos de la ley de segregación", () => {
  const item = byId("mendel-garrod-fisher-1866-2007");
  assert.ok(item);
  assert.match(item.layers[6].observed, /1936.*2007/);
  assert.match(item.layers[6].limit, /no se decide/);
  assert.match(research, /no afecta a la ley de segregación/);
});

test("BRCA separa la penetrancia de familias y la de biobancos", () => {
  const item = byId("brca1-1990-2022");
  assert.ok(item);
  assert.match(item.layers[3].observed, /72 %.*38 %/);
  assert.match(item.layers[3].limit, /No existe un único riesgo/);
  assert.match(research, /6036 portadoras de BRCA1/);
});

test("la heredabilidad se conserva como parámetro de población", () => {
  const item = byId("gwas-heritability-2005-2022");
  assert.ok(item);
  assert.match(item.layers[2].observed, /12 111 SNP.*40 %/);
  assert.match(item.layers[5].observed, /10–20 %/);
  assert.match(item.layers[6].observed, /Lewontin/);
  assert.match(research, /no dice que 80 % de la estatura de alguien venga de sus genes/);
});

test("los puntajes poligénicos conservan detección baja y pérdida fuera del origen", () => {
  const item = byId("polygenic-scores-2018-2023");
  assert.ok(item);
  assert.match(item.layers[2].observed, /8\.0 %/);
  assert.match(item.layers[4].observed, /926 puntajes.*11 %/);
  assert.match(item.layers[5].observed, /−0\.95/);
  assert.match(research, /tasa de detección mediana fue 11 % \(8–18 %\)/);
});

test("las variantes inciertas conservan la reclasificación medida", () => {
  const item = byId("vus-reclassification-2015-2018");
  assert.ok(item);
  assert.match(item.layers[6].observed, /7\.7 %.*91\.2 %.*24\.9 %/);
  assert.match(item.layers[5].observed, /pocas personas negras/);
});

test("la penetrancia poblacional y la representación conservan sus cifras", () => {
  const penetrance = byId("population-penetrance-2013-2022");
  assert.ok(penetrance);
  assert.match(penetrance.layers[3].observed, /6\.9 %.*0\.85 %/);
  const representation = byId("representation-mexico-2009-2024");
  assert.ok(representation);
  assert.match(representation.layers[0].observed, /menos de 4 %/);
  assert.match(representation.layers[5].observed, /6057 personas.*UK Biobank/);
});

test("la gobernanza declara lo que no se verificó en texto completo", () => {
  const item = byId("governance-havasupai-23andme-2008-2025");
  assert.ok(item);
  assert.match(item.layers[0].limit, /sin verificar en texto completo/);
  assert.match(item.layers[7].limit, /venta posterior de los activos queda sin verificar en texto completo/);
  for (const name of ["Mello y Wolf", "Annas y Elias", "Gautier y Harper", "H3Africa"]) {
    assert.match(research, new RegExp(`B-COND.*${name}`, "s"));
  }
});

test("MED-031 deja fuera la farmacogenómica, la edición génica y las técnicas de laboratorio", () => {
  const text = `${research}\n${JSON.stringify(data)}`;
  assert.doesNotMatch(text, /farmacogen|fármaco|medicamento|metaboliza|warfarina|abacavir|carbamazepina|debrisoquina|CYP2|HLA-B|CRISPR|Cas9|edición de bases/i);
  assert.equal([...research.matchAll(/edición génica/g)].length, 1, "la edición génica sólo aparece en la exclusión del alcance");
  assert.doesNotMatch(JSON.stringify(data), /edición génica|terapia génica|línea germinal/);
});

test("MED-031 no contiene dosis, umbrales prescriptivos ni recomendaciones clínicas o de pruebas", () => {
  const text = `${research}\n${JSON.stringify(data)}`;
  assert.doesNotMatch(text, /\b\d+(?:[.,]\d+)?\s?(?:mg|ml|mL|cc|µg|mcg|g\/dL|mmHg|mm Hg|gramos?|granos?|gotas|UI|unidades|onzas|pintas)\b/);
  assert.doesNotMatch(text, /\bdosis\b/i);
  assert.doesNotMatch(text, /\b(?:se recomienda|recomendamos|debe administrarse|administre|debería hacerse la prueba|hágase la prueba|umbral recomendado)\b/i);
  assert.match(research, /no contiene recomendaciones clínicas ni orientación sobre pruebas genéticas/);
});
