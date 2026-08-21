import { buildPublicData, writePublicData } from "./public-data-core.mjs";

const data = buildPublicData();
writePublicData(data);

console.log(
  `generate-public-data: ${data.catalog.length} investigaciones, ${data.searchIndex.length} documentos, ` +
    `${data.knowledge.claims.length} claims, ${data.knowledge.evidence.length} evidencias y ${data.knowledge.sources.length} fuentes`,
);
