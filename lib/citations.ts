export type CitationInput = {
  id: string;
  title: string;
  updatedAt: string;
  url: string;
};

export type CitationFormat = "markdown" | "apa" | "bibtex";

function yearFrom(value: string) {
  return /^\d{4}/.test(value) ? value.slice(0, 4) : "s. f.";
}

function bibtexKey(id: string) {
  return id.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function bibtexEscape(value: string) {
  return value.replace(/[{}]/g, "").replace(/&/g, "\\&");
}

export function formatCitation(input: CitationInput, format: CitationFormat) {
  const url = input.url.split("#")[0].split("?")[0];
  if (format === "markdown") return `[${input.title}](${url}) — ¿Cómo sabemos lo que sabemos?`;
  if (format === "apa") {
    return `¿Cómo sabemos lo que sabemos? (${yearFrom(input.updatedAt)}). ${input.title} [Investigación]. ${url}`;
  }
  return `@misc{${bibtexKey(input.id)},\n  author = {{¿Cómo sabemos lo que sabemos?}},\n  title = {${bibtexEscape(input.title)}},\n  year = {${yearFrom(input.updatedAt)}},\n  url = {${url}},\n  note = {Consulta editorial: ${input.updatedAt}}\n}`;
}
