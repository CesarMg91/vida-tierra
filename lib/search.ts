import type { CatalogListingRecord, SearchDocument } from "./contracts.ts";

export function foldSearchText(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function catalogMatchesQuery(record: CatalogListingRecord, query: string) {
  const needle = foldSearchText(query.trim());
  if (!needle) return true;
  const haystack = foldSearchText(
    [record.id, record.shortTitle, record.title, record.summary, record.era, ...record.themes].join(" "),
  );
  return needle.split(/\s+/).filter(Boolean).every((term) => haystack.includes(term));
}

export function rankSearchDocuments(records: SearchDocument[], query: string, limit = 10) {
  const needle = foldSearchText(query.trim());
  if (needle.length < 2) return [];
  const terms = needle.split(/\s+/).filter(Boolean);
  return records
    .map((record) => {
      const title = foldSearchText(record.title);
      const summary = foldSearchText(record.summary);
      const ids = foldSearchText(record.ids.join(" "));
      const headings = foldSearchText(record.headings.join(" "));
      const themes = foldSearchText(record.themes.join(" "));
      let score = 0;
      for (const term of terms) {
        if (title.includes(term)) score += 12;
        else if (ids.includes(term)) score += 10;
        else if (themes.includes(term)) score += 7;
        else if (headings.includes(term)) score += 5;
        else if (summary.includes(term)) score += 2;
        else return { record, score: -1 };
      }
      return { record, score };
    })
    .filter((item) => item.score >= 0)
    .sort((a, b) => b.score - a.score || a.record.title.localeCompare(b.record.title, "es"))
    .slice(0, limit)
    .map(({ record }) => record);
}

export function updateQueryString(current: string, name: string, value: string) {
  const next = new URLSearchParams(current);
  if (value) next.set(name, value);
  else next.delete(name);
  return next.toString();
}
