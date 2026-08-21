import fs from "node:fs";
import path from "node:path";
import {
  ROOT,
  PUBLIC_STATUSES,
  buildPublicData,
  readEditorialCatalog,
  thematicResearchOrder,
} from "./public-data-core.mjs";

const data = buildPublicData();
const editorial = readEditorialCatalog();
const errors = [];

function check(condition, message) {
  if (!condition) errors.push(message);
}

function duplicates(values) {
  const seen = new Set();
  return values.filter((value) => (seen.has(value) ? true : (seen.add(value), false)));
}

const numeric = data.catalog.filter((record) => record.order !== null);
const orders = numeric.map((record) => record.order);
check(numeric.length === 52, `se esperaban 52 investigaciones numeradas y se encontraron ${numeric.length}`);
check(duplicates(orders).length === 0, `órdenes duplicados: ${duplicates(orders).join(", ")}`);
for (let order = 1; order <= 52; order += 1) {
  check(orders.includes(order), `falta la Investigación ${String(order).padStart(3, "0")}`);
}

const thematic = data.catalog.filter((record) => record.order === null);
const thematicOrders = thematic.map((record) => thematicResearchOrder(record.key));
check(thematic.length > 0, "falta la línea temática CIV");
check(thematicOrders.every((order) => order !== null), "hay una investigación sin orden que no usa una clave CIV-NNN");
check(duplicates(thematicOrders).length === 0, `órdenes CIV duplicados: ${duplicates(thematicOrders).join(", ")}`);
const lastThematicOrder = Math.max(0, ...thematicOrders.filter((order) => order !== null));
for (let order = 1; order <= lastThematicOrder; order += 1) {
  check(thematicOrders.includes(order), `falta la investigación temática CIV-${String(order).padStart(3, "0")}`);
}

check(data.catalog.length === Object.keys(editorial.records).length, "el catálogo público y el catálogo editorial tienen tamaños distintos");
check(duplicates(data.catalog.map((record) => record.key)).length === 0, "hay claves de investigación duplicadas");
check(duplicates(data.catalog.map((record) => record.id)).length === 0, "hay IDs de investigación duplicados");
check(duplicates(data.catalog.map((record) => record.slug)).length === 0, "hay slugs de investigación duplicados");

for (const record of data.catalog) {
  const expected = editorial.records[record.key];
  check(Boolean(expected), `falta enriquecimiento editorial para ${record.key}`);
  check(Boolean(record.id), `${record.key} no declara id en frontmatter`);
  check(PUBLIC_STATUSES.has(record.status), `${record.key} usa un estado público no permitido: ${record.status || "vacío"}`);
  check(record.status === expected?.status, `${record.key} contradice el catálogo: documento=${record.status}, catálogo=${expected?.status}`);
  check(Boolean(record.updatedAt), `${record.key} no declara ultima_revision`);
  check(Boolean(record.summary), `${record.key} no tiene una sección Respuesta breve extraíble`);
  check(Boolean(record.hero), `${record.key} no tiene portada PNG`);
  if (record.hero) {
    const asset = path.join(ROOT, record.hero.replace(/^\//, ""));
    check(fs.existsSync(asset), `${record.key} apunta a una portada inexistente: ${record.hero}`);
  }
  check(fs.existsSync(path.join(ROOT, record.file)), `${record.key} apunta a una ruta inexistente: ${record.file}`);
}

const catalogKeys = new Set(data.catalog.map((record) => record.key));
for (const key of Object.keys(editorial.records)) {
  check(catalogKeys.has(key), `el catálogo contiene una investigación inexistente: ${key}`);
}

const claimIds = new Set(data.knowledge.claims.map((record) => record.id));
const evidenceIds = new Set(data.knowledge.evidence.map((record) => record.id));
const sourceIds = new Set(data.knowledge.sources.map((record) => record.id));
const researchIds = new Set(data.catalog.map((record) => record.id));
const researchSlugs = new Set(data.catalog.map((record) => record.slug));

const datingData = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-dating.json"), "utf8"));
const datingKinds = ["sample", "measurement", "calendar", "context", "phase", "event"];
check(datingData.schemaVersion === 1, "el módulo de fechado usa una versión de esquema desconocida");
check(researchSlugs.has(datingData.researchSlug), `el módulo de fechado apunta a un expediente inexistente: ${datingData.researchSlug}`);
check(Array.isArray(datingData.cases) && datingData.cases.length > 0, "el módulo de fechado no contiene casos");
check(duplicates(datingData.cases.map((record) => record.id)).length === 0, "el módulo de fechado contiene casos duplicados");
for (const datingCase of datingData.cases) {
  check(Boolean(datingCase.title) && Boolean(datingCase.region), `${datingCase.id} no declara título o región`);
  check(Array.isArray(datingCase.methods) && datingCase.methods.length > 0, `${datingCase.id} no declara métodos`);
  check(Array.isArray(datingCase.layers), `${datingCase.id} no declara capas`);
  check(
    JSON.stringify(datingCase.layers?.map((layer) => layer.kind)) === JSON.stringify(datingKinds),
    `${datingCase.id} no conserva las seis capas canónicas en orden`,
  );
  for (const layer of datingCase.layers ?? []) {
    check(Boolean(layer.observed) && Boolean(layer.inference) && Boolean(layer.limit), `${datingCase.id}/${layer.kind} tiene un estado vacío`);
    check(layer.claimIds?.length > 0, `${datingCase.id}/${layer.kind} no enlaza claims`);
    check(layer.evidenceIds?.length > 0, `${datingCase.id}/${layer.kind} no enlaza evidencias`);
    check(layer.sourceIds?.length > 0, `${datingCase.id}/${layer.kind} no enlaza fuentes`);
    for (const id of layer.claimIds ?? []) check(claimIds.has(id), `${datingCase.id}/${layer.kind} enlaza un claim inexistente: ${id}`);
    for (const id of layer.evidenceIds ?? []) check(evidenceIds.has(id), `${datingCase.id}/${layer.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of layer.sourceIds ?? []) check(sourceIds.has(id), `${datingCase.id}/${layer.kind} enlaza una fuente inexistente: ${id}`);
  }
}

for (const record of data.catalog) {
  for (const id of record.claimIds) check(claimIds.has(id), `${record.key} enlaza un claim inexistente: ${id}`);
  for (const id of record.sourceIds) check(sourceIds.has(id), `${record.key} enlaza una fuente inexistente: ${id}`);
}

for (const claim of data.knowledge.claims) {
  check(claim.evidenceIds.length > 0, `${claim.id} no enlaza ninguna evidencia`);
  check(claim.sourceIds.length > 0, `${claim.id} no llega a ninguna fuente mediante su evidencia`);
  for (const id of claim.evidenceIds) check(evidenceIds.has(id), `${claim.id} enlaza una evidencia inexistente: ${id}`);
  for (const id of claim.researchIds) check(researchIds.has(id), `${claim.id} enlaza una investigación inexistente: ${id}`);
}

for (const evidence of data.knowledge.evidence) {
  check(evidence.sourceIds.length > 0, `${evidence.id} no enlaza ninguna fuente`);
  for (const id of evidence.claimIds) check(claimIds.has(id), `${evidence.id} enlaza un claim inexistente: ${id}`);
  for (const id of evidence.sourceIds) check(sourceIds.has(id), `${evidence.id} enlaza una fuente inexistente: ${id}`);
}

for (const event of data.knowledge.timeline) {
  for (const id of event.sourceIds) check(sourceIds.has(id), `${event.id} enlaza una fuente inexistente: ${id}`);
}

if (errors.length) {
  console.error(`validate-public-data: FAIL (${errors.length})`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `validate-public-data: PASS — ${data.catalog.length} investigaciones, ${data.searchIndex.length} documentos, ` +
    `${claimIds.size} claims, ${evidenceIds.size} evidencias, ${sourceIds.size} fuentes`,
);
