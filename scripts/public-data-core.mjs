import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";

export const ROOT = process.cwd();
export const PUBLIC_DATA_DIR = path.join(ROOT, "public", "data");
export const GENERATED_CONTENT_DIR = path.join(ROOT, ".generated", "content");

export const PUBLIC_STATUSES = new Set([
  "AUDITADO",
  "TRAZADO",
  "EN_DESARROLLO",
  "SEMILLA",
]);

const IGNORED_DIRS = new Set([
  ".git",
  ".agents",
  ".claude",
  ".codex",
  ".next",
  ".idea",
  ".vscode",
  "node_modules",
  "public",
  "out",
  "app",
  "lib",
  "components",
  "content",
  "scripts",
  "assets",
  "tests",
  "_borradores_locales",
  "_privado",
]);

const parser = unified().use(remarkParse).use(remarkGfm);

export function normalizePath(file) {
  return file.split(path.sep).join("/");
}

export function walkMarkdown(dir = ROOT, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && IGNORED_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkMarkdown(full, acc);
    else if (entry.name.endsWith(".md")) acc.push(normalizePath(path.relative(ROOT, full)));
  }
  return acc.sort((a, b) => a.localeCompare(b, "es"));
}

export function fileToSlug(file) {
  return normalizePath(file).replace(/\.md$/, "");
}

export function researchKeyFromFile(file) {
  const name = path.posix.basename(normalizePath(file));
  const numeric = name.match(/^INVESTIGACION_(\d{3})_/);
  if (numeric) return numeric[1];
  if (/^INVESTIGACION_CIV_001_/.test(name)) return "CIV-001";
  return null;
}

export function listResearchFiles(files = walkMarkdown()) {
  return files.filter((file) => researchKeyFromFile(file));
}

export function parseMarkdown(raw) {
  const parsed = matter(raw);
  return { ...parsed, tree: parser.parse(parsed.content) };
}

export function plainInline(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

export function titleFromDocument(parsed, file) {
  if (parsed.data?.titulo) return plainInline(parsed.data.titulo);
  const heading = parsed.tree.children.find((node) => node.type === "heading" && node.depth === 1);
  return heading ? plainInline(toString(heading)) : path.posix.basename(file, ".md");
}

export function headingsFromTree(tree) {
  const headings = [];
  visit(tree, "heading", (node) => {
    headings.push({ depth: node.depth, text: plainInline(toString(node)) });
  });
  return headings;
}

export function extractSectionText(tree, headingPattern) {
  let active = false;
  const pieces = [];
  for (const node of tree.children) {
    if (node.type === "heading" && node.depth <= 2) {
      const label = plainInline(toString(node));
      if (active) break;
      active = node.depth === 2 && headingPattern.test(label);
      continue;
    }
    if (!active) continue;
    if (["paragraph", "list", "blockquote"].includes(node.type)) {
      const text = plainInline(toString(node));
      if (text) pieces.push(text);
    }
    if (pieces.join(" ").length >= 900) break;
  }
  return pieces.join(" ").slice(0, 1100).trim();
}

/** @param {string} text @param {string | null} prefix */
export function extractIds(text, prefix = null) {
  const matches = String(text ?? "").match(/\b(?:CLAIM|EVID|SRC|CONT|ERR|TIME|OPEN|INV)-[A-Za-z0-9*-]+/g) ?? [];
  return [...new Set(matches)]
    .filter((id) => !id.includes("*") && !id.endsWith("-"))
    .filter((id) => !prefix || id.startsWith(`${prefix}-`));
}

export function extractIdPatterns(text, prefix = null) {
  const matches = String(text ?? "").match(/\b(?:CLAIM|EVID|SRC|CONT|ERR|TIME|OPEN|INV)-[A-Za-z0-9*-]+/g) ?? [];
  return [...new Set(matches)]
    .filter((id) => !id.endsWith("-"))
    .filter((id) => !prefix || id.startsWith(`${prefix}-`));
}

export function expandIdPatterns(text, prefix, knownIds) {
  const expanded = [];
  for (const pattern of extractIdPatterns(text, prefix)) {
    if (!pattern.includes("*")) {
      expanded.push(pattern);
      continue;
    }
    const expression = new RegExp(`^${pattern.split("*").map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join(".*")}$`);
    expanded.push(...knownIds.filter((id) => expression.test(id)));
  }
  return [...new Set(expanded)];
}

export function normalizeDate(value) {
  if (!value) return "";
  if (value instanceof Date && !Number.isNaN(value.valueOf())) return value.toISOString().slice(0, 10);
  return String(value).slice(0, 10);
}

export function resolveAssetUrl(file, url) {
  if (!url || /^(?:https?:|data:|\/)/.test(url)) return url;
  const base = path.posix.dirname(normalizePath(file));
  return `/${path.posix.normalize(path.posix.join(base === "." ? "" : base, url)).replace(/^\/+/, "")}`;
}

export function heroFromTree(tree, file) {
  let firstPng = "";
  let hero = "";
  visit(tree, "image", (node) => {
    const url = String(node.url ?? "");
    if (!/\.png(?:$|[?#])/i.test(url)) return;
    if (!firstPng) firstPng = url;
    if (!hero && /(?:^|\/)hero-/i.test(url)) hero = url;
  });
  return resolveAssetUrl(file, hero || firstPng);
}

export function tableRowsFromMarkdown(raw) {
  const { tree } = parseMarkdown(raw);
  const tables = [];
  visit(tree, "table", (table) => {
    if (!table.children?.length) return;
    const headers = table.children[0].children.map((cell) => plainInline(toString(cell)));
    const rows = table.children.slice(1).map((row) => {
      const record = {};
      row.children.forEach((cell, index) => {
        record[headers[index] || `col_${index + 1}`] = plainInline(toString(cell));
      });
      return record;
    });
    tables.push({ headers, rows });
  });
  return tables;
}

function tableNodeFromSnippet(snippet) {
  const tree = parser.parse(snippet);
  return tree.children.find((node) => node.type === "table") ?? null;
}

export function registryTableRowsFromMarkdown(raw) {
  const lines = raw.split(/\r?\n/);
  const records = [];
  let headerLine = "";
  let delimiterLine = "";
  let headers = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const next = lines[index + 1] ?? "";
    if (/^\s*\|\s*ID\s*\|/i.test(line) && /^\s*\|\s*:?-{3,}/.test(next)) {
      const table = tableNodeFromSnippet(`${line}\n${next}\n`);
      if (!table) continue;
      headerLine = line;
      delimiterLine = next;
      headers = table.children[0].children.map((cell) => plainInline(toString(cell)));
      index += 1;
      continue;
    }
    if (!headerLine || !/^\s*\|/.test(line) || /^\s*\|\s*:?-{3,}/.test(line)) continue;
    const table = tableNodeFromSnippet(`${headerLine}\n${delimiterLine}\n${line}\n`);
    const row = table?.children?.[1];
    if (!row) continue;
    const values = row.children.map((cell) => plainInline(toString(cell)));
    const record = {};
    headers.forEach((header, cellIndex) => {
      record[header || `col_${cellIndex + 1}`] = values[cellIndex] ?? "";
    });
    records.push(record);
  }

  return records;
}

export function normalizeFieldName(value) {
  return plainInline(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function pickField(row, aliases) {
  const normalized = new Map(Object.entries(row).map(([key, value]) => [normalizeFieldName(key), value]));
  for (const alias of aliases) {
    const value = normalized.get(normalizeFieldName(alias));
    if (value !== undefined) return value;
  }
  return "";
}

export function parseRegistry(file, prefix) {
  const raw = fs.readFileSync(path.join(ROOT, file), "utf8");
  const records = [];
  for (const row of registryTableRowsFromMarkdown(raw)) {
    const id = pickField(row, ["ID"]);
    if (id.startsWith(`${prefix}-`)) records.push({ id, row });
  }
  const unique = new Map(records.map((record) => [record.id, record]));
  return [...unique.values()];
}

export function readEditorialCatalog() {
  return JSON.parse(fs.readFileSync(path.join(ROOT, "content", "catalog-editorial.json"), "utf8"));
}

export function createResearchRecord(file, editorialCatalog) {
  const raw = fs.readFileSync(path.join(ROOT, file), "utf8");
  const parsed = parseMarkdown(raw);
  const key = researchKeyFromFile(file);
  const editorial = editorialCatalog.records[key];
  const section = normalizePath(file).split("/")[0];
  const defaults = editorialCatalog.sectionDefaults[section];
  const bodyText = toString(parsed.tree);
  const claims = Array.isArray(parsed.data.claims) ? parsed.data.claims.map(String) : extractIds(bodyText, "CLAIM");
  const declaredSources = Array.isArray(parsed.data.fuentes) ? parsed.data.fuentes.map(String) : [];
  const sources = declaredSources.length ? declaredSources : extractIds(bodyText, "SRC");
  const summary =
    extractSectionText(parsed.tree, /^respuesta breve(?: provisional)?$/i) ||
    extractSectionText(parsed.tree, /^qué sabemos realmente$/i);
  const words = plainInline(bodyText).split(/\s+/).filter(Boolean).length;
  const status = String(parsed.data.estado ?? "");
  return {
    id: String(parsed.data.id ?? ""),
    order: key === "CIV-001" ? null : Number(key),
    key,
    slug: fileToSlug(file),
    file,
    title: titleFromDocument(parsed, file),
    shortTitle: editorial?.shortTitle ?? titleFromDocument(parsed, file),
    status,
    updatedAt: normalizeDate(parsed.data.ultima_revision),
    collection: defaults?.collection ?? "Sin colección",
    era: defaults?.era ?? "Sin época",
    themes: [...new Set([...(defaults?.themes ?? []), ...(editorial?.themes ?? [])])],
    summary,
    readingMinutes: Math.max(1, Math.ceil(words / 220)),
    hero: heroFromTree(parsed.tree, file),
    claimIds: [...new Set(claims)],
    sourceIds: [...new Set(sources)],
    featured: Boolean(editorial?.featured),
  };
}

export function registryRows() {
  const claims = parseRegistry("CLAIMS.md", "CLAIM").map(({ id, row }) => ({
    id,
    statement: pickField(row, ["Afirmación delimitada", "Afirmación"]),
    confidence: pickField(row, ["Confianza"]),
    status: pickField(row, ["Estado"]),
    evidenceIds: [],
    evidencePattern: pickField(row, ["Evidencias principales", "Evidencia"]),
    sourceIds: [],
    researchIds: extractIds(pickField(row, ["Investigación", "Investigaciones"]), "INV"),
  }));

  const evidence = parseRegistry("EVIDENCE_LEDGER.md", "EVID").map(({ id, row }) => ({
    id,
    claimIds: extractIds(pickField(row, ["Claim", "Claims vinculados", "Claims"]), "CLAIM"),
    observed: pickField(row, ["Evidencia observada hoy", "Resultado delimitado", "Resultado", "Evidencia"]),
    type: pickField(row, ["Tipo"]),
    method: pickField(row, ["Método/instrumento", "Método"]),
    sourceIds: [],
    sourcePattern: pickField(row, ["Fuente", "Fuentes"]),
    assumptions: pickField(row, ["Supuestos principales", "Supuestos"]),
    limitations: pickField(row, ["Limitaciones / evidencia contraria", "Limitaciones"]),
    confidence: pickField(row, ["Confianza de la evidencia", "Confianza", "Fortaleza"]),
  }));

  const sources = parseRegistry("SOURCES.md", "SRC").map(({ id, row }) => ({
    id,
    reference: pickField(row, ["Referencia"]),
    access: pickField(row, ["Tipo / acceso", "Acceso", "Tipo"]),
    method: pickField(row, ["Método y datos", "Método"]),
    result: pickField(row, ["Resultado usado", "Resultado"]),
    limitations: pickField(row, ["Limitaciones relevantes", "Limitaciones"]),
  }));

  const controversies = parseRegistry("CONTROVERSIES.md", "CONT").map(({ id, row }) => ({
    id,
    topic: pickField(row, ["Tema", "Núcleo del desacuerdo"]),
    commonGround: pickField(row, ["Observación compartida"]),
    dominant: pickField(row, ["Explicación dominante o práctica"]),
    alternatives: pickField(row, ["Alternativa fuerte", "Alternativas principales"]),
    status: pickField(row, ["Estado"]),
    confidence: pickField(row, ["Confianza en la síntesis", "Confianza"]),
  }));

  const errors = parseRegistry("SCIENTIFIC_ERRORS.md", "ERR").map(({ id, row }) => ({
    id,
    case: pickField(row, ["Caso", "Formulación errónea"]),
    failedAssumption: pickField(row, ["Supuesto que falló", "Fusión indebida"]),
    correction: pickField(row, ["Mecanismo de corrección", "Corrección"]),
    status: pickField(row, ["Estado"]),
  }));

  const timeline = parseRegistry("TIMELINE.md", "TIME").map(({ id, row }) => ({
    id,
    interval: pickField(row, ["Fecha/intervalo", "Fecha", "Intervalo"]),
    event: pickField(row, ["Evento delimitado", "Evento"]),
    uncertainty: pickField(row, ["Incertidumbre y qué fecha", "Incertidumbre"]),
    evidence: pickField(row, ["Evidencia principal", "Evidencia"]),
    sourceIds: [],
    sourcePattern: pickField(row, ["Fuente", "Fuentes"]),
    confidence: pickField(row, ["Confianza"]),
    status: pickField(row, ["Estado"]),
  }));

  const knownSourceIds = sources.map((source) => source.id);
  const knownEvidenceIds = evidence.map((record) => record.id);
  for (const record of evidence) record.sourceIds = expandIdPatterns(record.sourcePattern, "SRC", knownSourceIds);
  for (const event of timeline) event.sourceIds = expandIdPatterns(event.sourcePattern, "SRC", knownSourceIds);
  for (const claim of claims) claim.evidenceIds = expandIdPatterns(claim.evidencePattern, "EVID", knownEvidenceIds);

  const claimsById = new Map(claims.map((claim) => [claim.id, claim]));
  const evidenceById = new Map(evidence.map((record) => [record.id, record]));
  for (const record of evidence) {
    for (const claimId of record.claimIds) {
      const claim = claimsById.get(claimId);
      if (claim && !claim.evidenceIds.includes(record.id)) claim.evidenceIds.push(record.id);
    }
  }
  for (const claim of claims) {
    claim.sourceIds = [
      ...new Set(claim.evidenceIds.flatMap((evidenceId) => evidenceById.get(evidenceId)?.sourceIds ?? [])),
    ];
  }

  for (const claim of claims) delete claim.evidencePattern;
  for (const record of evidence) delete record.sourcePattern;
  for (const event of timeline) delete event.sourcePattern;

  return { claims, evidence, sources, controversies, errors, timeline };
}

function documentType(file) {
  if (researchKeyFromFile(file)) return "investigación";
  if (["CLAIMS.md", "EVIDENCE_LEDGER.md", "SOURCES.md", "CONTROVERSIES.md", "SCIENTIFIC_ERRORS.md", "TIMELINE.md"].includes(file)) {
    return "registro";
  }
  if (file.startsWith("18_historia_ciencia/")) return "historia de la ciencia";
  if (file.startsWith("22_mapas_epistemologicos/")) return "mapa epistemológico";
  return "documento";
}

export function buildPublicData() {
  const editorial = readEditorialCatalog();
  const files = walkMarkdown();
  const researchFiles = listResearchFiles(files);
  const catalog = researchFiles
    .map((file) => createResearchRecord(file, editorial))
    .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER));
  const catalogBySlug = new Map(catalog.map((record) => [record.slug, record]));

  const siteIndex = [];
  const searchIndex = files.map((file, index) => {
    const raw = fs.readFileSync(path.join(ROOT, file), "utf8");
    const parsed = parseMarkdown(raw);
    const slug = fileToSlug(file);
    const research = catalogBySlug.get(slug);
    const body = toString(parsed.tree);
    const headings = headingsFromTree(parsed.tree).filter((heading) => heading.depth <= 3).map((heading) => heading.text);
    siteIndex.push({
      file,
      slug,
      title: titleFromDocument(parsed, file),
      section: normalizePath(file).includes("/") ? normalizePath(file).split("/")[0] : "",
      estado: parsed.data.estado ? String(parsed.data.estado) : null,
      bytes: Buffer.byteLength(raw),
      headings: headings.filter((_, headingIndex) => headingIndex < 40),
      generatedFile: `${String(index + 1).padStart(3, "0")}.md`,
    });
    return {
      slug,
      title: titleFromDocument(parsed, file),
      section: normalizePath(file).includes("/") ? normalizePath(file).split("/")[0] : "",
      type: documentType(file),
      headings: headings.slice(0, 80),
      summary: research?.summary ?? extractSectionText(parsed.tree, /^respuesta breve(?: provisional)?$/i),
      ids: extractIds(body),
      themes: research?.themes ?? [],
      era: research?.era ?? "",
      status: research?.status ?? String(parsed.data.estado ?? ""),
    };
  });

  const knowledge = registryRows();
  const researchById = new Map(catalog.map((record) => [record.id, record]));
  const claimsById = new Map(knowledge.claims.map((claim) => [claim.id, claim]));
  const evidenceById = new Map(knowledge.evidence.map((record) => [record.id, record]));

  // Algunas síntesis metodológicas remiten al corpus completo de una investigación.
  // Materializamos primero ese corpus a partir de las evidencias con fuentes directas.
  for (const research of catalog) {
    research.sourceIds = [
      ...new Set(
        [
          ...research.sourceIds,
          ...research.claimIds.flatMap((claimId) =>
            (claimsById.get(claimId)?.evidenceIds ?? []).flatMap(
              (evidenceId) => evidenceById.get(evidenceId)?.sourceIds ?? [],
            ),
          ),
        ],
      ),
    ];
  }

  for (const record of knowledge.evidence) {
    record.sourceLinkMode = record.sourceIds.length ? "direct" : "research-corpus";
    if (record.sourceIds.length) continue;
    const researchIds = [
      ...new Set(record.claimIds.flatMap((claimId) => claimsById.get(claimId)?.researchIds ?? [])),
    ];
    record.sourceIds = [
      ...new Set(researchIds.flatMap((researchId) => researchById.get(researchId)?.sourceIds ?? [])),
    ];
  }
  for (const claim of knowledge.claims) {
    claim.sourceIds = [
      ...new Set(claim.evidenceIds.flatMap((evidenceId) => evidenceById.get(evidenceId)?.sourceIds ?? [])),
    ];
  }
  return { catalog, searchIndex, siteIndex, knowledge };
}

export function writeJson(relativePath, value) {
  const destination = path.join(ROOT, "public", ...relativePath.split("/"));
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

export function writePublicData(data) {
  writeJson("data/catalog.json", data.catalog);
  writeJson("data/search-index.json", data.searchIndex);
  writeJson("data/timeline.json", data.knowledge.timeline);
  writeJson("data/knowledge/claims.json", data.knowledge.claims);
  writeJson("data/knowledge/evidence.json", data.knowledge.evidence);
  writeJson("data/knowledge/sources.json", data.knowledge.sources);
  writeJson("data/knowledge/controversies.json", data.knowledge.controversies);
  writeJson("data/knowledge/errors.json", data.knowledge.errors);
}

export function writeGeneratedContent(data) {
  const documentsDir = path.join(GENERATED_CONTENT_DIR, "documents");
  fs.mkdirSync(documentsDir, { recursive: true });
  for (const record of data.siteIndex) {
    fs.copyFileSync(path.join(ROOT, record.file), path.join(documentsDir, record.generatedFile));
  }
  fs.writeFileSync(path.join(GENERATED_CONTENT_DIR, "index.json"), `${JSON.stringify(data.siteIndex, null, 2)}\n`, "utf8");
}
