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

for (const [series, records] of recordsBySeries) {
  const seriesOrders = records.map(({ order }) => order);
  check(duplicates(seriesOrders).length === 0, `órdenes ${series} duplicados: ${duplicates(seriesOrders).join(", ")}`);
  const lastSeriesOrder = Math.max(0, ...seriesOrders);
  for (let order = 1; order <= lastSeriesOrder; order += 1) {
    check(seriesOrders.includes(order), `falta la investigación temática ${series}-${String(order).padStart(3, "0")}`);
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
