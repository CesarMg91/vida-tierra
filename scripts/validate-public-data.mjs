import fs from "node:fs";
import path from "node:path";
import {
  ROOT,
  PUBLIC_STATUSES,
  buildPublicData,
  readEditorialCatalog,
  thematicResearchKey,
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

const textExtensions = new Set([".md", ".json", ".ts", ".tsx", ".mjs", ".svg", ".css", ".cff", ".yml", ".yaml", ".txt"]);
const ignoredTextDirectories = new Set([".git", ".next", "node_modules"]);

function textFiles(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (ignoredTextDirectories.has(entry.name)) continue;
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...textFiles(target));
    else if (textExtensions.has(path.extname(entry.name).toLowerCase()) || entry.name === "CITATION.cff") files.push(target);
  }
  return files;
}

for (const file of textFiles(ROOT)) {
  const value = fs.readFileSync(file, "utf8");
  const relative = path.relative(ROOT, file).replaceAll("\\", "/");
  check(!value.includes("\uFFFD"), `${relative} contiene el carácter de sustitución U+FFFD`);
  check(!/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/u.test(value), `${relative} contiene caracteres de control no permitidos`);
}

check(editorial.schemaVersion === 2, `versión de catálogo editorial no soportada: ${editorial.schemaVersion}`);
for (const [series, metadata] of Object.entries(editorial.thematicSeries ?? {})) {
  check(/^[A-Z][A-Z0-9]{1,7}$/.test(series), `código de serie temática inválido: ${series}`);
  check(Boolean(metadata?.label), `la serie ${series} no declara label`);
  check(Boolean(metadata?.description), `la serie ${series} no declara description`);
  check(
    typeof metadata?.route === "string" && metadata.route.startsWith("/"),
    `la serie ${series} no declara una ruta pública absoluta`,
  );
}

const numeric = data.catalog.filter((record) => record.order !== null);
const orders = numeric.map((record) => record.order);
check(numeric.length === 52, `se esperaban 52 investigaciones numeradas y se encontraron ${numeric.length}`);
check(duplicates(orders).length === 0, `órdenes duplicados: ${duplicates(orders).join(", ")}`);
for (let order = 1; order <= 52; order += 1) {
  check(orders.includes(order), `falta la Investigación ${String(order).padStart(3, "0")}`);
}

const thematic = data.catalog.filter((record) => record.order === null);
const thematicSeries = editorial.thematicSeries ?? {};
const parsedThematic = thematic.map((record) => ({ record, key: thematicResearchKey(record.key) }));
check(thematic.length > 0, "falta al menos una línea temática");
check(parsedThematic.every(({ key }) => key !== null), "hay una investigación sin orden que no usa una clave SERIE-NNN");

const recordsBySeries = new Map();
for (const { record, key } of parsedThematic) {
  if (!key) continue;
  check(Boolean(thematicSeries[key.series]), `la serie ${key.series} no está declarada en thematicSeries`);
  if (!recordsBySeries.has(key.series)) recordsBySeries.set(key.series, []);
  recordsBySeries.get(key.series).push({ record, order: key.order });
}

// Claves del programa pospuestas a propósito (pendientes de replanteo): no cuentan como hueco.
const postponedThematic = new Set(["MED-031"]);
for (const [series, records] of recordsBySeries) {
  const seriesOrders = records.map(({ order }) => order);
  check(duplicates(seriesOrders).length === 0, `órdenes ${series} duplicados: ${duplicates(seriesOrders).join(", ")}`);
  const lastSeriesOrder = Math.max(0, ...seriesOrders);
  for (let order = 1; order <= lastSeriesOrder; order += 1) {
    const thematicKey = `${series}-${String(order).padStart(3, "0")}`;
    if (postponedThematic.has(thematicKey)) {
      check(!seriesOrders.includes(order), `${thematicKey} figura como pospuesta pero ya existe; quítala de postponedThematic`);
      continue;
    }
    check(seriesOrders.includes(order), `falta la investigación temática ${thematicKey}`);
  }
}

for (const series of Object.keys(thematicSeries)) {
  check(recordsBySeries.has(series), `la serie editorial ${series} no contiene investigaciones`);
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

const swasiaData = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-swasia.json"), "utf8"));
check(swasiaData.schemaVersion === 1, "el módulo regional usa una versión de esquema desconocida");
check(researchSlugs.has(swasiaData.researchSlug), `el módulo regional apunta a un expediente inexistente: ${swasiaData.researchSlug}`);
check(Array.isArray(swasiaData.regions) && swasiaData.regions.length === 5, "el módulo regional debe contener cinco paisajes");
check(duplicates(swasiaData.regions.map((record) => record.id)).length === 0, "el módulo regional contiene paisajes duplicados");
for (const region of swasiaData.regions) {
  check(Boolean(region.label) && Boolean(region.window), `${region.id} no declara nombre o ventana`);
  check(Boolean(region.archive) && Boolean(region.inference) && Boolean(region.limit), `${region.id} no separa archivo, inferencia y límite`);
  check(Array.isArray(region.sites) && region.sites.length > 0, `${region.id} no declara sitios o escalas`);
  for (const id of region.claimIds ?? []) check(claimIds.has(id), `${region.id} enlaza un claim inexistente: ${id}`);
  for (const id of region.evidenceIds ?? []) check(evidenceIds.has(id), `${region.id} enlaza una evidencia inexistente: ${id}`);
  for (const id of region.sourceIds ?? []) check(sourceIds.has(id), `${region.id} enlaza una fuente inexistente: ${id}`);
}

const nileData = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-nile.json"), "utf8"));
check(nileData.schemaVersion === 1, "el módulo del Nilo usa una versión de esquema desconocida");
check(researchSlugs.has(nileData.researchSlug), `el módulo del Nilo apunta a un expediente inexistente: ${nileData.researchSlug}`);
check(Array.isArray(nileData.archives) && nileData.archives.length === 6, "el módulo del Nilo debe contener seis archivos");
check(duplicates(nileData.archives.map((record) => record.id)).length === 0, "el módulo del Nilo contiene archivos duplicados");
for (const item of nileData.archives) {
  check(Boolean(item.label) && Boolean(item.window), `${item.id} no declara nombre o ventana`);
  check(Boolean(item.archive) && Boolean(item.inference) && Boolean(item.limit) && Boolean(item.adversary), `${item.id} no separa archivo, inferencia, límite y adversario`);
  check(Array.isArray(item.sites) && item.sites.length > 0, `${item.id} no declara sitios o escalas`);
  for (const id of item.claimIds ?? []) check(claimIds.has(id), `${item.id} enlaza un claim inexistente: ${id}`);
  for (const id of item.evidenceIds ?? []) check(evidenceIds.has(id), `${item.id} enlaza una evidencia inexistente: ${id}`);
  for (const id of item.sourceIds ?? []) check(sourceIds.has(id), `${item.id} enlaza una fuente inexistente: ${id}`);
}

const identitiesData = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-identities.json"), "utf8"));
const identityKinds = ["object", "assemblage", "style", "practice", "group", "name", "identity"];
const identityStatuses = new Set(["sostenido", "condicionado", "no-demostrado", "dato-ausente"]);
check(identitiesData.schemaVersion === 1, "el módulo de identidades usa una versión de esquema desconocida");
check(researchSlugs.has(identitiesData.researchSlug), `el módulo de identidades apunta a un expediente inexistente: ${identitiesData.researchSlug}`);
check(Array.isArray(identitiesData.cases) && identitiesData.cases.length > 0, "el módulo de identidades no contiene casos");
check(duplicates(identitiesData.cases.map((record) => record.id)).length === 0, "el módulo de identidades contiene casos duplicados");
for (const identityCase of identitiesData.cases) {
  check(Boolean(identityCase.title) && Boolean(identityCase.region) && Boolean(identityCase.adversary), `${identityCase.id} no declara título, región o adversario`);
  check(
    JSON.stringify(identityCase.steps?.map((step) => step.kind)) === JSON.stringify(identityKinds),
    `${identityCase.id} no conserva los siete pasos canónicos en orden`,
  );
  for (const step of identityCase.steps ?? []) {
    check(identityStatuses.has(step.status), `${identityCase.id}/${step.kind} usa un estado desconocido: ${step.status}`);
    check(Boolean(step.observed) && Boolean(step.inference) && Boolean(step.limit), `${identityCase.id}/${step.kind} tiene un estado vacío`);
    for (const id of step.claimIds ?? []) check(claimIds.has(id), `${identityCase.id}/${step.kind} enlaza un claim inexistente: ${id}`);
    for (const id of step.evidenceIds ?? []) check(evidenceIds.has(id), `${identityCase.id}/${step.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of step.sourceIds ?? []) check(sourceIds.has(id), `${identityCase.id}/${step.kind} enlaza una fuente inexistente: ${id}`);
  }
}

const domesticationsData = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-domestications.json"), "utf8"));
const domesticationKinds = ["organism", "trait", "management", "village", "date", "diffusion"];
const domesticationStatuses = new Set(["sostenido", "condicionado", "no-demostrado", "dato-ausente"]);
check(domesticationsData.schemaVersion === 1, "el módulo de domesticaciones usa una versión de esquema desconocida");
check(researchSlugs.has(domesticationsData.researchSlug), `el módulo de domesticaciones apunta a un expediente inexistente: ${domesticationsData.researchSlug}`);
check(Array.isArray(domesticationsData.cases) && domesticationsData.cases.length > 0, "el módulo de domesticaciones no contiene archivos");
check(duplicates(domesticationsData.cases.map((record) => record.id)).length === 0, "el módulo de domesticaciones contiene archivos duplicados");
for (const domesticationCase of domesticationsData.cases) {
  check(Boolean(domesticationCase.title) && Boolean(domesticationCase.region) && Boolean(domesticationCase.adversary), `${domesticationCase.id} no declara título, región o adversario`);
  check(
    JSON.stringify(domesticationCase.steps?.map((step) => step.kind)) === JSON.stringify(domesticationKinds),
    `${domesticationCase.id} no conserva los seis campos canónicos en orden`,
  );
  for (const step of domesticationCase.steps ?? []) {
    check(domesticationStatuses.has(step.status), `${domesticationCase.id}/${step.kind} usa un estado desconocido: ${step.status}`);
    check(Boolean(step.observed) && Boolean(step.inference) && Boolean(step.limit), `${domesticationCase.id}/${step.kind} tiene un campo vacío`);
    for (const id of step.claimIds ?? []) check(claimIds.has(id), `${domesticationCase.id}/${step.kind} enlaza un claim inexistente: ${id}`);
    for (const id of step.evidenceIds ?? []) check(evidenceIds.has(id), `${domesticationCase.id}/${step.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of step.sourceIds ?? []) check(sourceIds.has(id), `${domesticationCase.id}/${step.kind} enlaza una fuente inexistente: ${id}`);
  }
}

const urbanismsData = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-urbanisms.json"), "utf8"));
const urbanDimensionKinds = ["density", "extent", "monumentality", "planning", "inequality", "governance", "provisioning"];
const urbanDimensionStatuses = new Set(["sostenido", "condicionado", "no-demostrado", "dato-ausente"]);
check(urbanismsData.schemaVersion === 1, "el módulo de urbanismos usa una versión de esquema desconocida");
check(researchSlugs.has(urbanismsData.researchSlug), `el módulo de urbanismos apunta a un expediente inexistente: ${urbanismsData.researchSlug}`);
check(Array.isArray(urbanismsData.cases) && urbanismsData.cases.length > 0, "el módulo de urbanismos no contiene casos");
check(duplicates(urbanismsData.cases.map((record) => record.id)).length === 0, "el módulo de urbanismos contiene casos duplicados");
for (const urbanCase of urbanismsData.cases) {
  check(Boolean(urbanCase.title) && Boolean(urbanCase.region) && Boolean(urbanCase.adversary), `${urbanCase.id} no declara título, región o adversario`);
  check(
    JSON.stringify(urbanCase.steps?.map((step) => step.kind)) === JSON.stringify(urbanDimensionKinds),
    `${urbanCase.id} no conserva las siete dimensiones canónicas en orden`,
  );
  for (const step of urbanCase.steps ?? []) {
    check(urbanDimensionStatuses.has(step.status), `${urbanCase.id}/${step.kind} usa un estado desconocido: ${step.status}`);
    check(Boolean(step.observed) && Boolean(step.inference) && Boolean(step.limit), `${urbanCase.id}/${step.kind} tiene un campo vacío`);
    for (const id of step.claimIds ?? []) check(claimIds.has(id), `${urbanCase.id}/${step.kind} enlaza un claim inexistente: ${id}`);
    for (const id of step.evidenceIds ?? []) check(evidenceIds.has(id), `${urbanCase.id}/${step.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of step.sourceIds ?? []) check(sourceIds.has(id), `${urbanCase.id}/${step.kind} enlaza una fuente inexistente: ${id}`);
  }
}

const scriptsData = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-scripts.json"), "utf8"));
const scriptLevelKinds = ["sign", "system", "language", "function", "institution", "decipherment"];
const scriptLevelStatuses = new Set(["sostenido", "condicionado", "no-demostrado", "dato-ausente"]);
check(scriptsData.schemaVersion === 1, "el módulo de escrituras usa una versión de esquema desconocida");
check(researchSlugs.has(scriptsData.researchSlug), `el módulo de escrituras apunta a un expediente inexistente: ${scriptsData.researchSlug}`);
check(Array.isArray(scriptsData.cases) && scriptsData.cases.length > 0, "el módulo de escrituras no contiene archivos");
check(duplicates(scriptsData.cases.map((record) => record.id)).length === 0, "el módulo de escrituras contiene archivos duplicados");
for (const scriptCase of scriptsData.cases) {
  check(Boolean(scriptCase.title) && Boolean(scriptCase.region) && Boolean(scriptCase.adversary), `${scriptCase.id} no declara título, región o adversario`);
  check(
    JSON.stringify(scriptCase.steps?.map((step) => step.kind)) === JSON.stringify(scriptLevelKinds),
    `${scriptCase.id} no conserva los seis niveles canónicos en orden`,
  );
  for (const step of scriptCase.steps ?? []) {
    check(scriptLevelStatuses.has(step.status), `${scriptCase.id}/${step.kind} usa un estado desconocido: ${step.status}`);
    check(Boolean(step.observed) && Boolean(step.inference) && Boolean(step.limit), `${scriptCase.id}/${step.kind} tiene un campo vacío`);
    for (const id of step.claimIds ?? []) check(claimIds.has(id), `${scriptCase.id}/${step.kind} enlaza un claim inexistente: ${id}`);
    for (const id of step.evidenceIds ?? []) check(evidenceIds.has(id), `${scriptCase.id}/${step.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of step.sourceIds ?? []) check(sourceIds.has(id), `${scriptCase.id}/${step.kind} enlaza una fuente inexistente: ${id}`);
  }
}

const medicineData = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "medicine-evidence.json"), "utf8"));
const clinicalKinds = ["question", "comparison", "outcomes", "estimate", "applicability", "decision"];
check(medicineData.schemaVersion === 1, "el módulo médico usa una versión de esquema desconocida");
check(researchSlugs.has(medicineData.researchSlug), `el módulo médico apunta a un expediente inexistente: ${medicineData.researchSlug}`);
check(Array.isArray(medicineData.cases) && medicineData.cases.length > 0, "el módulo médico no contiene casos");
check(duplicates(medicineData.cases.map((record) => record.id)).length === 0, "el módulo médico contiene casos duplicados");
for (const clinicalCase of medicineData.cases) {
  check(Boolean(clinicalCase.title) && Boolean(clinicalCase.scope) && Boolean(clinicalCase.design), `${clinicalCase.id} no declara título, alcance o diseño`);
  check(
    JSON.stringify(clinicalCase.layers?.map((layer) => layer.kind)) === JSON.stringify(clinicalKinds),
    `${clinicalCase.id} no conserva las seis capas clínicas en orden`,
  );
  for (const layer of clinicalCase.layers ?? []) {
    check(Boolean(layer.observed) && Boolean(layer.inference) && Boolean(layer.limit), `${clinicalCase.id}/${layer.kind} tiene un estado vacío`);
    check(layer.claimIds?.length > 0, `${clinicalCase.id}/${layer.kind} no enlaza claims`);
    check(layer.evidenceIds?.length > 0, `${clinicalCase.id}/${layer.kind} no enlaza evidencias`);
    check(layer.sourceIds?.length > 0, `${clinicalCase.id}/${layer.kind} no enlaza fuentes`);
    for (const id of layer.claimIds ?? []) check(claimIds.has(id), `${clinicalCase.id}/${layer.kind} enlaza un claim inexistente: ${id}`);
    for (const id of layer.evidenceIds ?? []) check(evidenceIds.has(id), `${clinicalCase.id}/${layer.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of layer.sourceIds ?? []) check(sourceIds.has(id), `${clinicalCase.id}/${layer.kind} enlaza una fuente inexistente: ${id}`);
  }
}

const diagnosticData = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "diagnostic-evidence.json"), "utf8"));
const diagnosticKinds = ["population", "index", "reference", "performance", "management", "outcome"];
check(diagnosticData.schemaVersion === 1, "el módulo diagnóstico usa una versión de esquema desconocida");
check(researchSlugs.has(diagnosticData.researchSlug), `el módulo diagnóstico apunta a un expediente inexistente: ${diagnosticData.researchSlug}`);
check(Array.isArray(diagnosticData.cases) && diagnosticData.cases.length === 4, "el módulo diagnóstico debe contener cuatro casos");
check(duplicates(diagnosticData.cases.map((record) => record.id)).length === 0, "el módulo diagnóstico contiene casos duplicados");
for (const diagnosticCase of diagnosticData.cases) {
  check(
    Boolean(diagnosticCase.title) && Boolean(diagnosticCase.scope) && Boolean(diagnosticCase.design),
    `${diagnosticCase.id} no declara título, alcance o diseño`,
  );
  check(
    JSON.stringify(diagnosticCase.layers?.map((layer) => layer.kind)) === JSON.stringify(diagnosticKinds),
    `${diagnosticCase.id} no conserva las seis capas diagnósticas en orden`,
  );
  for (const layer of diagnosticCase.layers ?? []) {
    check(Boolean(layer.observed) && Boolean(layer.inference) && Boolean(layer.limit), `${diagnosticCase.id}/${layer.kind} tiene un estado vacío`);
    check(layer.claimIds?.length > 0, `${diagnosticCase.id}/${layer.kind} no enlaza claims`);
    check(layer.evidenceIds?.length > 0, `${diagnosticCase.id}/${layer.kind} no enlaza evidencias`);
    check(layer.sourceIds?.length > 0, `${diagnosticCase.id}/${layer.kind} no enlaza fuentes`);
    for (const id of layer.claimIds ?? []) check(claimIds.has(id), `${diagnosticCase.id}/${layer.kind} enlaza un claim inexistente: ${id}`);
    for (const id of layer.evidenceIds ?? []) check(evidenceIds.has(id), `${diagnosticCase.id}/${layer.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of layer.sourceIds ?? []) check(sourceIds.has(id), `${diagnosticCase.id}/${layer.kind} enlaza una fuente inexistente: ${id}`);
  }
}

const historicalMedicineData = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "historical-medicine-evidence.json"), "utf8"));
const historicalMedicineKinds = ["specimen", "context", "trace", "interpretation", "behavior", "system"];
check(historicalMedicineData.schemaVersion === 1, "el módulo histórico médico usa una versión de esquema desconocida");
check(
  researchSlugs.has(historicalMedicineData.researchSlug),
  `el módulo histórico médico apunta a un expediente inexistente: ${historicalMedicineData.researchSlug}`,
);
check(
  Array.isArray(historicalMedicineData.cases) && historicalMedicineData.cases.length === 4,
  "el módulo histórico médico debe contener cuatro casos",
);
check(
  duplicates(historicalMedicineData.cases.map((record) => record.id)).length === 0,
  "el módulo histórico médico contiene casos duplicados",
);
for (const historicalCase of historicalMedicineData.cases) {
  check(
    Boolean(historicalCase.title) && Boolean(historicalCase.region) && Boolean(historicalCase.archive),
    `${historicalCase.id} no declara título, región o archivo`,
  );
  check(
    JSON.stringify(historicalCase.layers?.map((layer) => layer.kind)) === JSON.stringify(historicalMedicineKinds),
    `${historicalCase.id} no conserva las seis capas históricas en orden`,
  );
  for (const layer of historicalCase.layers ?? []) {
    check(
      Boolean(layer.observed) && Boolean(layer.inference) && Boolean(layer.limit),
      `${historicalCase.id}/${layer.kind} tiene un estado vacío`,
    );
    check(layer.claimIds?.length > 0, `${historicalCase.id}/${layer.kind} no enlaza claims`);
    check(layer.evidenceIds?.length > 0, `${historicalCase.id}/${layer.kind} no enlaza evidencias`);
    check(layer.sourceIds?.length > 0, `${historicalCase.id}/${layer.kind} no enlaza fuentes`);
    for (const id of layer.claimIds ?? []) check(claimIds.has(id), `${historicalCase.id}/${layer.kind} enlaza un claim inexistente: ${id}`);
    for (const id of layer.evidenceIds ?? []) check(evidenceIds.has(id), `${historicalCase.id}/${layer.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of layer.sourceIds ?? []) check(sourceIds.has(id), `${historicalCase.id}/${layer.kind} enlaza una fuente inexistente: ${id}`);
  }
}

const documentaryMedicineData = JSON.parse(
  fs.readFileSync(path.join(ROOT, "content", "documentary-medicine-evidence.json"), "utf8"),
);
const documentaryMedicineKinds = ["object", "text", "genre", "circulation", "practice", "consequence"];
check(documentaryMedicineData.schemaVersion === 1, "el módulo documental médico usa una versión de esquema desconocida");
check(
  researchSlugs.has(documentaryMedicineData.researchSlug),
  `el módulo documental médico apunta a un expediente inexistente: ${documentaryMedicineData.researchSlug}`,
);
check(
  Array.isArray(documentaryMedicineData.cases) && documentaryMedicineData.cases.length === 5,
  "el módulo documental médico debe contener cinco casos",
);
check(
  duplicates(documentaryMedicineData.cases.map((record) => record.id)).length === 0,
  "el módulo documental médico contiene casos duplicados",
);
for (const documentaryCase of documentaryMedicineData.cases) {
  check(
    Boolean(documentaryCase.title) && Boolean(documentaryCase.region) && Boolean(documentaryCase.archive),
    `${documentaryCase.id} no declara título, región o archivo`,
  );
  check(
    JSON.stringify(documentaryCase.layers?.map((layer) => layer.kind)) === JSON.stringify(documentaryMedicineKinds),
    `${documentaryCase.id} no conserva las seis capas documentales en orden`,
  );
  for (const layer of documentaryCase.layers ?? []) {
    check(
      Boolean(layer.observed) && Boolean(layer.inference) && Boolean(layer.limit),
      `${documentaryCase.id}/${layer.kind} tiene un estado vacío`,
    );
    check(layer.claimIds?.length > 0, `${documentaryCase.id}/${layer.kind} no enlaza claims`);
    check(layer.evidenceIds?.length > 0, `${documentaryCase.id}/${layer.kind} no enlaza evidencias`);
    check(layer.sourceIds?.length > 0, `${documentaryCase.id}/${layer.kind} no enlaza fuentes`);
    for (const id of layer.claimIds ?? []) check(claimIds.has(id), `${documentaryCase.id}/${layer.kind} enlaza un claim inexistente: ${id}`);
    for (const id of layer.evidenceIds ?? []) check(evidenceIds.has(id), `${documentaryCase.id}/${layer.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of layer.sourceIds ?? []) check(sourceIds.has(id), `${documentaryCase.id}/${layer.kind} enlaza una fuente inexistente: ${id}`);
  }
}

const southAsianMedicineData = JSON.parse(
  fs.readFileSync(path.join(ROOT, "content", "south-asian-medicine-evidence.json"), "utf8"),
);
const southAsianMedicineKinds = ["testimony", "reading", "stratum", "circulation", "practice", "consequence"];
check(southAsianMedicineData.schemaVersion === 1, "el módulo médico de Asia meridional usa una versión de esquema desconocida");
check(
  researchSlugs.has(southAsianMedicineData.researchSlug),
  `el módulo médico de Asia meridional apunta a un expediente inexistente: ${southAsianMedicineData.researchSlug}`,
);
check(
  Array.isArray(southAsianMedicineData.cases) && southAsianMedicineData.cases.length === 5,
  "el módulo médico de Asia meridional debe contener cinco casos",
);
check(
  duplicates(southAsianMedicineData.cases.map((record) => record.id)).length === 0,
  "el módulo médico de Asia meridional contiene casos duplicados",
);
for (const southAsianCase of southAsianMedicineData.cases) {
  check(
    Boolean(southAsianCase.title) && Boolean(southAsianCase.region) && Boolean(southAsianCase.archive),
    `${southAsianCase.id} no declara título, región o archivo`,
  );
  check(
    JSON.stringify(southAsianCase.layers?.map((layer) => layer.kind)) === JSON.stringify(southAsianMedicineKinds),
    `${southAsianCase.id} no conserva las seis capas de corpus y práctica en orden`,
  );
  for (const layer of southAsianCase.layers ?? []) {
    check(
      Boolean(layer.observed) && Boolean(layer.inference) && Boolean(layer.limit),
      `${southAsianCase.id}/${layer.kind} tiene un estado vacío`,
    );
    check(layer.claimIds?.length > 0, `${southAsianCase.id}/${layer.kind} no enlaza claims`);
    check(layer.evidenceIds?.length > 0, `${southAsianCase.id}/${layer.kind} no enlaza evidencias`);
    check(layer.sourceIds?.length > 0, `${southAsianCase.id}/${layer.kind} no enlaza fuentes`);
    for (const id of layer.claimIds ?? []) check(claimIds.has(id), `${southAsianCase.id}/${layer.kind} enlaza un claim inexistente: ${id}`);
    for (const id of layer.evidenceIds ?? []) check(evidenceIds.has(id), `${southAsianCase.id}/${layer.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of layer.sourceIds ?? []) check(sourceIds.has(id), `${southAsianCase.id}/${layer.kind} enlaza una fuente inexistente: ${id}`);
  }
}

const eastAsianMedicineData = JSON.parse(
  fs.readFileSync(path.join(ROOT, "content", "east-asian-medicine-evidence.json"), "utf8"),
);
const eastAsianMedicineKinds = ["witness", "reading", "stratum", "operation", "institution", "consequence"];
check(eastAsianMedicineData.schemaVersion === 1, "el módulo médico de Asia oriental usa una versión de esquema desconocida");
check(
  researchSlugs.has(eastAsianMedicineData.researchSlug),
  `el módulo médico de Asia oriental apunta a un expediente inexistente: ${eastAsianMedicineData.researchSlug}`,
);
check(
  Array.isArray(eastAsianMedicineData.cases) && eastAsianMedicineData.cases.length === 5,
  "el módulo médico de Asia oriental debe contener cinco casos",
);
check(
  duplicates(eastAsianMedicineData.cases.map((record) => record.id)).length === 0,
  "el módulo médico de Asia oriental contiene casos duplicados",
);
for (const eastAsianCase of eastAsianMedicineData.cases) {
  check(
    Boolean(eastAsianCase.title) && Boolean(eastAsianCase.region) && Boolean(eastAsianCase.archive),
    `${eastAsianCase.id} no declara título, región o archivo`,
  );
  check(
    JSON.stringify(eastAsianCase.layers?.map((layer) => layer.kind)) === JSON.stringify(eastAsianMedicineKinds),
    `${eastAsianCase.id} no conserva las seis capas de canon y práctica en orden`,
  );
  for (const layer of eastAsianCase.layers ?? []) {
    check(
      Boolean(layer.observed) && Boolean(layer.inference) && Boolean(layer.limit),
      `${eastAsianCase.id}/${layer.kind} tiene un estado vacío`,
    );
    check(layer.claimIds?.length > 0, `${eastAsianCase.id}/${layer.kind} no enlaza claims`);
    check(layer.evidenceIds?.length > 0, `${eastAsianCase.id}/${layer.kind} no enlaza evidencias`);
    check(layer.sourceIds?.length > 0, `${eastAsianCase.id}/${layer.kind} no enlaza fuentes`);
    for (const id of layer.claimIds ?? []) check(claimIds.has(id), `${eastAsianCase.id}/${layer.kind} enlaza un claim inexistente: ${id}`);
    for (const id of layer.evidenceIds ?? []) check(evidenceIds.has(id), `${eastAsianCase.id}/${layer.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of layer.sourceIds ?? []) check(sourceIds.has(id), `${eastAsianCase.id}/${layer.kind} enlaza una fuente inexistente: ${id}`);
  }
}

const greekHellenisticMedicineData = JSON.parse(
  fs.readFileSync(path.join(ROOT, "content", "greek-hellenistic-medicine-evidence.json"), "utf8"),
);
const greekHellenisticMedicineKinds = ["witness", "reading", "genre", "operation", "institution", "consequence"];
check(greekHellenisticMedicineData.schemaVersion === 1, "el módulo médico griego y helenístico usa una versión de esquema desconocida");
check(
  researchSlugs.has(greekHellenisticMedicineData.researchSlug),
  `el módulo médico griego y helenístico apunta a un expediente inexistente: ${greekHellenisticMedicineData.researchSlug}`,
);
check(
  Array.isArray(greekHellenisticMedicineData.cases) && greekHellenisticMedicineData.cases.length === 5,
  "el módulo médico griego y helenístico debe contener cinco casos",
);
check(
  duplicates(greekHellenisticMedicineData.cases.map((record) => record.id)).length === 0,
  "el módulo médico griego y helenístico contiene casos duplicados",
);
for (const greekCase of greekHellenisticMedicineData.cases) {
  check(
    Boolean(greekCase.title) && Boolean(greekCase.region) && Boolean(greekCase.archive),
    `${greekCase.id} no declara título, región o archivo`,
  );
  check(
    JSON.stringify(greekCase.layers?.map((layer) => layer.kind)) === JSON.stringify(greekHellenisticMedicineKinds),
    `${greekCase.id} no conserva las seis capas de archivo y práctica en orden`,
  );
  for (const layer of greekCase.layers ?? []) {
    check(
      Boolean(layer.observed) && Boolean(layer.inference) && Boolean(layer.limit),
      `${greekCase.id}/${layer.kind} tiene un estado vacío`,
    );
    check(layer.claimIds?.length > 0, `${greekCase.id}/${layer.kind} no enlaza claims`);
    check(layer.evidenceIds?.length > 0, `${greekCase.id}/${layer.kind} no enlaza evidencias`);
    check(layer.sourceIds?.length > 0, `${greekCase.id}/${layer.kind} no enlaza fuentes`);
    for (const id of layer.claimIds ?? []) check(claimIds.has(id), `${greekCase.id}/${layer.kind} enlaza un claim inexistente: ${id}`);
    for (const id of layer.evidenceIds ?? []) check(evidenceIds.has(id), `${greekCase.id}/${layer.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of layer.sourceIds ?? []) check(sourceIds.has(id), `${greekCase.id}/${layer.kind} enlaza una fuente inexistente: ${id}`);
  }
}

const romanByzantineMedicineData = JSON.parse(
  fs.readFileSync(path.join(ROOT, "content", "roman-byzantine-medicine-evidence.json"), "utf8"),
);
const romanByzantineMedicineKinds = ["trace", "identification", "function", "operation", "access", "consequence"];
check(romanByzantineMedicineData.schemaVersion === 1, "el módulo médico romano y bizantino usa una versión de esquema desconocida");
check(
  researchSlugs.has(romanByzantineMedicineData.researchSlug),
  `el módulo médico romano y bizantino apunta a un expediente inexistente: ${romanByzantineMedicineData.researchSlug}`,
);
check(
  Array.isArray(romanByzantineMedicineData.cases) && romanByzantineMedicineData.cases.length === 5,
  "el módulo médico romano y bizantino debe contener cinco casos",
);
check(
  duplicates(romanByzantineMedicineData.cases.map((record) => record.id)).length === 0,
  "el módulo médico romano y bizantino contiene casos duplicados",
);
for (const romanCase of romanByzantineMedicineData.cases) {
  check(
    Boolean(romanCase.title) && Boolean(romanCase.region) && Boolean(romanCase.archive),
    `${romanCase.id} no declara título, región o archivo`,
  );
  check(
    JSON.stringify(romanCase.layers?.map((layer) => layer.kind)) === JSON.stringify(romanByzantineMedicineKinds),
    `${romanCase.id} no conserva las seis capas de infraestructura y acceso en orden`,
  );
  for (const layer of romanCase.layers ?? []) {
    check(
      Boolean(layer.observed) && Boolean(layer.inference) && Boolean(layer.limit),
      `${romanCase.id}/${layer.kind} tiene un estado vacío`,
    );
    check(layer.claimIds?.length > 0, `${romanCase.id}/${layer.kind} no enlaza claims`);
    check(layer.evidenceIds?.length > 0, `${romanCase.id}/${layer.kind} no enlaza evidencias`);
    check(layer.sourceIds?.length > 0, `${romanCase.id}/${layer.kind} no enlaza fuentes`);
    for (const id of layer.claimIds ?? []) check(claimIds.has(id), `${romanCase.id}/${layer.kind} enlaza un claim inexistente: ${id}`);
    for (const id of layer.evidenceIds ?? []) check(evidenceIds.has(id), `${romanCase.id}/${layer.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of layer.sourceIds ?? []) check(sourceIds.has(id), `${romanCase.id}/${layer.kind} enlaza una fuente inexistente: ${id}`);
  }
}

const africanMedicineArchiveData = JSON.parse(
  fs.readFileSync(path.join(ROOT, "content", "african-medicine-archives.json"), "utf8"),
);
const africanMedicineLayerKinds = ["archive", "provenance", "signal", "inference", "contrast", "limit"];
check(africanMedicineArchiveData.schemaVersion === 1, "el módulo de archivos africanos usa una versión de esquema desconocida");
check(
  researchSlugs.has(africanMedicineArchiveData.researchSlug),
  `el módulo de archivos africanos apunta a un expediente inexistente: ${africanMedicineArchiveData.researchSlug}`,
);
check(
  Array.isArray(africanMedicineArchiveData.cases) && africanMedicineArchiveData.cases.length === 6,
  "el módulo de archivos africanos debe contener seis casos",
);
check(
  duplicates(africanMedicineArchiveData.cases.map((record) => record.id)).length === 0,
  "el módulo de archivos africanos contiene casos duplicados",
);
for (const archiveCase of africanMedicineArchiveData.cases) {
  check(
    Boolean(archiveCase.title) && Boolean(archiveCase.region) && Boolean(archiveCase.archive),
    `${archiveCase.id} no declara título, región o archivo`,
  );
  check(
    JSON.stringify(archiveCase.layers?.map((layer) => layer.kind)) === JSON.stringify(africanMedicineLayerKinds),
    `${archiveCase.id} no conserva las seis capas de archivo y límite en orden`,
  );
  for (const layer of archiveCase.layers ?? []) {
    check(
      Boolean(layer.observed) && Boolean(layer.inference) && Boolean(layer.limit),
      `${archiveCase.id}/${layer.kind} tiene un estado vacío`,
    );
    check(layer.claimIds?.length > 0, `${archiveCase.id}/${layer.kind} no enlaza claims`);
    check(layer.evidenceIds?.length > 0, `${archiveCase.id}/${layer.kind} no enlaza evidencias`);
    check(layer.sourceIds?.length > 0, `${archiveCase.id}/${layer.kind} no enlaza fuentes`);
    for (const id of layer.claimIds ?? []) check(claimIds.has(id), `${archiveCase.id}/${layer.kind} enlaza un claim inexistente: ${id}`);
    for (const id of layer.evidenceIds ?? []) check(evidenceIds.has(id), `${archiveCase.id}/${layer.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of layer.sourceIds ?? []) check(sourceIds.has(id), `${archiveCase.id}/${layer.kind} enlaza una fuente inexistente: ${id}`);
  }
}

const americasMedicineArchiveData = JSON.parse(
  fs.readFileSync(path.join(ROOT, "content", "americas-medicine-archives.json"), "utf8"),
);
const americasMedicineLayerKinds = ["archive", "provenance", "signal", "practice", "consequence", "limit"];
check(americasMedicineArchiveData.schemaVersion === 1, "el módulo médico de las Américas usa una versión de esquema desconocida");
check(
  researchSlugs.has(americasMedicineArchiveData.researchSlug),
  `el módulo médico de las Américas apunta a un expediente inexistente: ${americasMedicineArchiveData.researchSlug}`,
);
check(
  Array.isArray(americasMedicineArchiveData.cases) && americasMedicineArchiveData.cases.length === 6,
  "el módulo médico de las Américas debe contener seis casos",
);
check(
  duplicates(americasMedicineArchiveData.cases.map((record) => record.id)).length === 0,
  "el módulo médico de las Américas contiene casos duplicados",
);
for (const archiveCase of americasMedicineArchiveData.cases) {
  check(
    Boolean(archiveCase.title) && Boolean(archiveCase.region) && Boolean(archiveCase.archive),
    `${archiveCase.id} no declara título, región o archivo`,
  );
  check(
    JSON.stringify(archiveCase.layers?.map((layer) => layer.kind)) === JSON.stringify(americasMedicineLayerKinds),
    `${archiveCase.id} no conserva las seis capas médicas en orden`,
  );
  for (const layer of archiveCase.layers ?? []) {
    check(
      Boolean(layer.observed) && Boolean(layer.inference) && Boolean(layer.limit),
      `${archiveCase.id}/${layer.kind} tiene un estado vacío`,
    );
    check(layer.claimIds?.length > 0, `${archiveCase.id}/${layer.kind} no enlaza claims`);
    check(layer.evidenceIds?.length > 0, `${archiveCase.id}/${layer.kind} no enlaza evidencias`);
    check(layer.sourceIds?.length > 0, `${archiveCase.id}/${layer.kind} no enlaza fuentes`);
    for (const id of layer.claimIds ?? []) check(claimIds.has(id), `${archiveCase.id}/${layer.kind} enlaza un claim inexistente: ${id}`);
    for (const id of layer.evidenceIds ?? []) check(evidenceIds.has(id), `${archiveCase.id}/${layer.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of layer.sourceIds ?? []) check(sourceIds.has(id), `${archiveCase.id}/${layer.kind} enlaza una fuente inexistente: ${id}`);
  }
}

const islamicWorldsMedicineNetworkData = JSON.parse(
  fs.readFileSync(path.join(ROOT, "content", "islamic-worlds-medicine-networks.json"), "utf8"),
);
const islamicWorldsMedicineLayerKinds = ["witness", "version", "operation", "institution", "scope", "consequence"];
check(islamicWorldsMedicineNetworkData.schemaVersion === 1, "el módulo de mundos islámicos usa una versión de esquema desconocida");
check(
  researchSlugs.has(islamicWorldsMedicineNetworkData.researchSlug),
  `el módulo de mundos islámicos apunta a un expediente inexistente: ${islamicWorldsMedicineNetworkData.researchSlug}`,
);
check(
  Array.isArray(islamicWorldsMedicineNetworkData.cases) && islamicWorldsMedicineNetworkData.cases.length === 6,
  "el módulo de mundos islámicos debe contener seis redes",
);
check(
  duplicates(islamicWorldsMedicineNetworkData.cases.map((record) => record.id)).length === 0,
  "el módulo de mundos islámicos contiene redes duplicadas",
);
for (const networkCase of islamicWorldsMedicineNetworkData.cases) {
  check(
    Boolean(networkCase.title) && Boolean(networkCase.region) && Boolean(networkCase.archive),
    `${networkCase.id} no declara título, región o archivo`,
  );
  check(
    JSON.stringify(networkCase.layers?.map((layer) => layer.kind)) === JSON.stringify(islamicWorldsMedicineLayerKinds),
    `${networkCase.id} no conserva las seis capas médicas en orden`,
  );
  for (const layer of networkCase.layers ?? []) {
    check(
      Boolean(layer.observed) && Boolean(layer.inference) && Boolean(layer.limit),
      `${networkCase.id}/${layer.kind} tiene un estado vacío`,
    );
    check(layer.claimIds?.length > 0, `${networkCase.id}/${layer.kind} no enlaza claims`);
    check(layer.evidenceIds?.length > 0, `${networkCase.id}/${layer.kind} no enlaza evidencias`);
    check(layer.sourceIds?.length > 0, `${networkCase.id}/${layer.kind} no enlaza fuentes`);
    for (const id of layer.claimIds ?? []) check(claimIds.has(id), `${networkCase.id}/${layer.kind} enlaza un claim inexistente: ${id}`);
    for (const id of layer.evidenceIds ?? []) check(evidenceIds.has(id), `${networkCase.id}/${layer.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of layer.sourceIds ?? []) check(sourceIds.has(id), `${networkCase.id}/${layer.kind} enlaza una fuente inexistente: ${id}`);
  }
}

const medievalEuropeJewishMedicineNetworkData = JSON.parse(
  fs.readFileSync(path.join(ROOT, "content", "medieval-europe-jewish-medicine-networks.json"), "utf8"),
);
const medievalEuropeJewishMedicineLayerKinds = ["witness", "version", "curriculum", "practitioner", "encounter", "reach"];
check(medievalEuropeJewishMedicineNetworkData.schemaVersion === 1, "el módulo medieval europeo usa una versión de esquema desconocida");
check(
  researchSlugs.has(medievalEuropeJewishMedicineNetworkData.researchSlug),
  `el módulo medieval europeo apunta a un expediente inexistente: ${medievalEuropeJewishMedicineNetworkData.researchSlug}`,
);
check(
  Array.isArray(medievalEuropeJewishMedicineNetworkData.cases) && medievalEuropeJewishMedicineNetworkData.cases.length === 6,
  "el módulo medieval europeo debe contener seis archivos",
);
check(
  duplicates(medievalEuropeJewishMedicineNetworkData.cases.map((record) => record.id)).length === 0,
  "el módulo medieval europeo contiene archivos duplicados",
);
for (const archiveCase of medievalEuropeJewishMedicineNetworkData.cases) {
  check(
    Boolean(archiveCase.title) && Boolean(archiveCase.region) && Boolean(archiveCase.archive),
    `${archiveCase.id} no declara título, región o archivo`,
  );
  check(
    JSON.stringify(archiveCase.layers?.map((layer) => layer.kind)) === JSON.stringify(medievalEuropeJewishMedicineLayerKinds),
    `${archiveCase.id} no conserva las seis capas médicas en orden`,
  );
  for (const layer of archiveCase.layers ?? []) {
    check(
      Boolean(layer.observed) && Boolean(layer.inference) && Boolean(layer.limit),
      `${archiveCase.id}/${layer.kind} tiene un estado vacío`,
    );
    check(layer.claimIds?.length > 0, `${archiveCase.id}/${layer.kind} no enlaza claims`);
    check(layer.evidenceIds?.length > 0, `${archiveCase.id}/${layer.kind} no enlaza evidencias`);
    check(layer.sourceIds?.length > 0, `${archiveCase.id}/${layer.kind} no enlaza fuentes`);
    for (const id of layer.claimIds ?? []) check(claimIds.has(id), `${archiveCase.id}/${layer.kind} enlaza un claim inexistente: ${id}`);
    for (const id of layer.evidenceIds ?? []) check(evidenceIds.has(id), `${archiveCase.id}/${layer.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of layer.sourceIds ?? []) check(sourceIds.has(id), `${archiveCase.id}/${layer.kind} enlaza una fuente inexistente: ${id}`);
  }
}

for (const record of data.catalog) {
  for (const id of record.claimIds) check(claimIds.has(id), `${record.key} enlaza un claim inexistente: ${id}`);
  for (const id of record.sourceIds) check(sourceIds.has(id), `${record.key} enlaza una fuente inexistente: ${id}`);
}

const empiresData = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-empires.json"), "utf8"));
const reachDimensionKinds = ["claim", "presence", "logistics", "tribute", "archive", "negotiation", "control"];
const reachDimensionStatuses = new Set(["sostenido", "condicionado", "no-demostrado", "dato-ausente"]);
check(empiresData.schemaVersion === 1, "el módulo de Estados e imperios usa una versión de esquema desconocida");
check(researchSlugs.has(empiresData.researchSlug), `el módulo de Estados e imperios apunta a un expediente inexistente: ${empiresData.researchSlug}`);
check(Array.isArray(empiresData.cases) && empiresData.cases.length > 0, "el módulo de Estados e imperios no contiene casos");
check(duplicates(empiresData.cases.map((record) => record.id)).length === 0, "el módulo de Estados e imperios contiene casos duplicados");
for (const empireCase of empiresData.cases) {
  check(Boolean(empireCase.title) && Boolean(empireCase.region) && Boolean(empireCase.adversary), `${empireCase.id} no declara título, región o adversario`);
  check(
    JSON.stringify(empireCase.steps?.map((step) => step.kind)) === JSON.stringify(reachDimensionKinds),
    `${empireCase.id} no conserva las siete dimensiones de alcance en orden`,
  );
  for (const step of empireCase.steps ?? []) {
    check(reachDimensionStatuses.has(step.status), `${empireCase.id}/${step.kind} usa un estado desconocido: ${step.status}`);
    check(Boolean(step.observed) && Boolean(step.inference) && Boolean(step.limit), `${empireCase.id}/${step.kind} tiene un campo vacío`);
    for (const id of step.claimIds ?? []) check(claimIds.has(id), `${empireCase.id}/${step.kind} enlaza un claim inexistente: ${id}`);
    for (const id of step.evidenceIds ?? []) check(evidenceIds.has(id), `${empireCase.id}/${step.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of step.sourceIds ?? []) check(sourceIds.has(id), `${empireCase.id}/${step.kind} enlaza una fuente inexistente: ${id}`);
  }
}

const transformationsData = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-transformations.json"), "utf8"));
const transformationLevelKinds = ["signal", "chronology", "depopulation", "institutions", "continuity", "attribution"];
const transformationLevelStatuses = new Set(["sostenido", "condicionado", "no-demostrado", "dato-ausente"]);
check(transformationsData.schemaVersion === 1, "el módulo de transformaciones usa una versión de esquema desconocida");
check(researchSlugs.has(transformationsData.researchSlug), `el módulo de transformaciones apunta a un expediente inexistente: ${transformationsData.researchSlug}`);
check(Array.isArray(transformationsData.cases) && transformationsData.cases.length > 0, "el módulo de transformaciones no contiene casos");
check(duplicates(transformationsData.cases.map((record) => record.id)).length === 0, "el módulo de transformaciones contiene casos duplicados");
for (const transformationCase of transformationsData.cases) {
  check(Boolean(transformationCase.title) && Boolean(transformationCase.region) && Boolean(transformationCase.adversary), `${transformationCase.id} no declara título, región o adversario`);
  check(
    JSON.stringify(transformationCase.steps?.map((step) => step.kind)) === JSON.stringify(transformationLevelKinds),
    `${transformationCase.id} no conserva los seis niveles en orden`,
  );
  check(transformationCase.steps?.find((step) => step.kind === "attribution")?.status !== "sostenido", `${transformationCase.id} presenta una atribución causal como sostenida`);
  for (const step of transformationCase.steps ?? []) {
    check(transformationLevelStatuses.has(step.status), `${transformationCase.id}/${step.kind} usa un estado desconocido: ${step.status}`);
    check(Boolean(step.observed) && Boolean(step.inference) && Boolean(step.limit), `${transformationCase.id}/${step.kind} tiene un campo vacío`);
    for (const id of step.claimIds ?? []) check(claimIds.has(id), `${transformationCase.id}/${step.kind} enlaza un claim inexistente: ${id}`);
    for (const id of step.evidenceIds ?? []) check(evidenceIds.has(id), `${transformationCase.id}/${step.kind} enlaza una evidencia inexistente: ${id}`);
    for (const id of step.sourceIds ?? []) check(sourceIds.has(id), `${transformationCase.id}/${step.kind} enlaza una fuente inexistente: ${id}`);
  }
}

// Laboratorios de la serie CON: mismas seis capas ordenadas, siempre con claims, evidencias y fuentes canónicas.
const consciousnessKinds = ["system", "result", "scope", "interpretation", "leap", "test"];
for (const [file, label] of [
  ["perception-reality-evidence.json", "percepción"],
  ["spacetime-fundamental-evidence.json", "espacio-tiempo"],
  ["consciousness-fundamental-evidence.json", "conciencia"],
  ["lilly-evidence.json", "Lilly"],
  ["agents-particles-evidence.json", "agentes y partículas"],
  ["psychedelics-evidence.json", "psicodélicos"],
]) {
  const labData = JSON.parse(fs.readFileSync(path.join(ROOT, "content", file), "utf8"));
  check(labData.schemaVersion === 1, `el módulo de ${label} usa una versión de esquema desconocida`);
  check(researchSlugs.has(labData.researchSlug), `el módulo de ${label} apunta a un expediente inexistente: ${labData.researchSlug}`);
  check(Array.isArray(labData.cases) && labData.cases.length > 0, `el módulo de ${label} no contiene casos`);
  check(duplicates(labData.cases.map((record) => record.id)).length === 0, `el módulo de ${label} contiene casos duplicados`);
  for (const labCase of labData.cases) {
    check(Boolean(labCase.title) && Boolean(labCase.product) && Boolean(labCase.stance), `${labCase.id} no declara título, producto o postura`);
    check(
      JSON.stringify(labCase.layers?.map((layer) => layer.kind)) === JSON.stringify(consciousnessKinds),
      `${labCase.id} no conserva las seis capas de ${label} en orden`,
    );
    for (const layer of labCase.layers ?? []) {
      check(Boolean(layer.observed) && Boolean(layer.inference) && Boolean(layer.limit), `${labCase.id}/${layer.kind} tiene un estado vacío`);
      check(layer.claimIds?.length > 0 && layer.evidenceIds?.length > 0 && layer.sourceIds?.length > 0, `${labCase.id}/${layer.kind} no enlaza claims, evidencias y fuentes`);
      for (const id of layer.claimIds ?? []) check(claimIds.has(id), `${labCase.id}/${layer.kind} enlaza un claim inexistente: ${id}`);
      for (const id of layer.evidenceIds ?? []) check(evidenceIds.has(id), `${labCase.id}/${layer.kind} enlaza una evidencia inexistente: ${id}`);
      for (const id of layer.sourceIds ?? []) check(sourceIds.has(id), `${labCase.id}/${layer.kind} enlaza una fuente inexistente: ${id}`);
    }
  }
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
