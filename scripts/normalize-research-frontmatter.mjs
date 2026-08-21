import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import matter from "gray-matter";
import {
  ROOT,
  buildPublicData,
  extractIds,
  listResearchFiles,
  plainInline,
  researchKeyFromFile,
  tableRowsFromMarkdown,
  titleFromDocument,
  parseMarkdown,
} from "./public-data-core.mjs";

function editorialFields(raw) {
  for (const table of tableRowsFromMarkdown(raw)) {
    if (table.headers.length !== 2 || table.headers[0] !== "Campo" || table.headers[1] !== "Valor") continue;
    return Object.fromEntries(table.rows.map((row) => [row.Campo, row.Valor]));
  }
  return {};
}

function lastRevision(file) {
  return execFileSync("git", ["-c", `safe.directory=${ROOT}`, "log", "-1", "--format=%cs", "--", file], {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
}

let changed = 0;
for (const file of listResearchFiles()) {
  const absolute = path.join(ROOT, file);
  const raw = fs.readFileSync(absolute, "utf8");
  if (raw.startsWith("---\n") || raw.startsWith("---\r\n")) {
    const existing = matter(raw);
    const title = String(existing.data.titulo ?? "").replace(/^Investigación \d{3}\s+—\s+/i, "");
    if (title !== existing.data.titulo) {
      fs.writeFileSync(absolute, matter.stringify(existing.content.replace(/^\s+/, ""), { ...existing.data, titulo: title }), "utf8");
      changed += 1;
    }
    continue;
  }
  const parsed = parseMarkdown(raw);
  const fields = editorialFields(raw);
  const id = extractIds(fields.ID ?? raw, "INV")[0];
  const status = plainInline(fields.Estado).replace(/`/g, "");
  const version = plainInline(fields["Versión"]).replace(/`/g, "");
  const title = titleFromDocument(parsed, file).replace(/^Investigación \d{3}\s+—\s+/i, "");
  const claims = extractIds(raw, "CLAIM");
  const sources = extractIds(raw, "SRC");
  if (!id || !status) throw new Error(`No se pudieron extraer ID/Estado de ${file}`);

  const normalized = matter.stringify(parsed.content.replace(/^\s+/, ""), {
    id,
    titulo: title,
    estado: status,
    ultima_revision: lastRevision(file),
    ...(version ? { version } : {}),
    claims,
    fuentes: sources,
  });
  fs.writeFileSync(absolute, normalized, "utf8");
  changed += 1;
}

// Las investigaciones 041–051 nacieron con tabla editorial pero sin contrato
// YAML. Una vez materializados claims y evidencias, guardamos también su corpus
// de fuentes exacto para que el frontmatter sea autocontenido y auditable.
const catalogBySlug = new Map(buildPublicData().catalog.map((record) => [record.slug, record]));
for (const file of listResearchFiles()) {
  const key = researchKeyFromFile(file);
  const order = Number(key);
  if (!Number.isInteger(order) || order < 41 || order > 51) continue;
  const absolute = path.join(ROOT, file);
  const parsed = matter(fs.readFileSync(absolute, "utf8"));
  const record = catalogBySlug.get(file.replace(/\.md$/, ""));
  if (!record) throw new Error(`No se pudo materializar el catálogo de ${file}`);
  const current = Array.isArray(parsed.data.fuentes) ? parsed.data.fuentes.map(String) : [];
  if (JSON.stringify(current) === JSON.stringify(record.sourceIds)) continue;
  fs.writeFileSync(
    absolute,
    matter.stringify(parsed.content.replace(/^\s+/, ""), { ...parsed.data, fuentes: record.sourceIds }),
    "utf8",
  );
  changed += 1;
}

console.log(`normalize-research-frontmatter: ${changed} documentos normalizados`);
