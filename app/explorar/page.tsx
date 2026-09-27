import type { Metadata } from "next";
import { Suspense } from "react";
import ResearchExplorer from "../../components/ResearchExplorer";
import { getCatalog } from "../../lib/public-data";
import { createPageMetadata } from "../../lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Explorar investigaciones",
  description: "Biblioteca filtrable de investigaciones sobre el cosmos, la Tierra, la vida, la humanidad y las civilizaciones.",
  pathname: "/explorar",
});

export default function ExplorePage() {
  const catalog = getCatalog().map(({
    key, id, order, slug, title, shortTitle, status, collection, era, themes, summary, readingMinutes, hero,
  }) => ({ key, id, order, slug, title, shortTitle, status, collection, era, themes, summary, readingMinutes, hero }));
  const globalCount = catalog.filter((record) => record.order !== null).length;
  const thematic = catalog.filter((record) => record.order === null);
  const thematicSeriesCount = new Set(
    thematic.map((record) => record.key.match(/^([A-Z][A-Z0-9]{1,7})-/)?.[1]).filter(Boolean),
  ).size;
  return (
    <div className="page-shell explore-page">
      <header className="portal-hero compact">
        <p className="eyebrow">Biblioteca pública</p>
        <h1>Explora por pregunta, época o tema</h1>
        <p>
          {globalCount} investigaciones globales y {thematic.length} temáticas en {thematicSeriesCount}{" "}
          {thematicSeriesCount === 1 ? "serie" : "series"}. Los filtros quedan reflejados en la URL para compartirlos.
        </p>
      </header>
      <Suspense fallback={<div className="explorer-loading">Preparando biblioteca…</div>}>
        <ResearchExplorer records={catalog} />
      </Suspense>
    </div>
  );
}
