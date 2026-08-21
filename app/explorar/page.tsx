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
  return (
    <div className="page-shell explore-page">
      <header className="portal-hero compact">
        <p className="eyebrow">Biblioteca pública</p>
        <h1>Explora por pregunta, época o tema</h1>
        <p>Cincuenta y dos investigaciones globales y una línea temática de Civilizaciones. Los filtros quedan reflejados en la URL para compartirlos.</p>
      </header>
      <Suspense fallback={<div className="explorer-loading">Preparando biblioteca…</div>}>
        <ResearchExplorer records={catalog} />
      </Suspense>
    </div>
  );
}
