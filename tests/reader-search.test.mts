import assert from "node:assert/strict";
import test from "node:test";
import { normalizeReaderState, readReaderState } from "../lib/reader-state.ts";
import { catalogMatchesQuery, rankSearchDocuments, updateQueryString } from "../lib/search.ts";
import type { CatalogRecord, SearchDocument } from "../lib/contracts.ts";

test("el estado local corrupto se descarta sin romper la lectura", () => {
  let removed = false;
  const state = readReaderState({
    getItem: () => "{no-json",
    removeItem: () => { removed = true; },
  });
  assert.equal(removed, true);
  assert.deepEqual(state.completed, []);
  assert.equal(state.preferredMode, "summary");
});

test("el estado local se normaliza y acota el progreso", () => {
  const state = normalizeReaderState({
    completed: ["uno", "uno", 3],
    bookmarks: [{ slug: "uno", heading: "Método" }, { bad: true }],
    lastVisited: { slug: "uno", progress: 4, updatedAt: "2026-08-20" },
    preferredMode: "evidence",
  });
  assert.deepEqual(state.completed, ["uno"]);
  assert.equal(state.bookmarks.length, 1);
  assert.equal(state.lastVisited?.progress, 1);
  assert.equal(state.preferredMode, "evidence");
});

test("la búsqueda tolera tildes en catálogo e índice", () => {
  const catalog = {
    id: "INV-CIV-001",
    shortTitle: "Primeras civilizaciones",
    title: "Comparación arqueológica",
    summary: "Múltiples trayectorias de urbanización",
    era: "Holoceno",
    themes: ["arqueología"],
  } as CatalogRecord;
  assert.equal(catalogMatchesQuery(catalog, "arqueologia urbanizacion"), true);

  const search = [{
    slug: "x",
    title: "¿Cómo surgió la urbanización?",
    section: "14_civilizaciones",
    type: "investigación",
    headings: [],
    summary: "",
    ids: ["INV-CIV-001"],
    themes: ["arqueología"],
    era: "Holoceno",
    status: "AUDITADO",
  }] satisfies SearchDocument[];
  assert.equal(rankSearchDocuments(search, "como urbanizacion")[0]?.slug, "x");
});

test("los filtros producen URLs enlazables y eliminan valores vacíos", () => {
  const withTheme = updateQueryString("coleccion=Vida", "tema", "evolución");
  assert.equal(new URLSearchParams(withTheme).get("tema"), "evolución");
  assert.equal(updateQueryString(withTheme, "tema", ""), "coleccion=Vida");
});
