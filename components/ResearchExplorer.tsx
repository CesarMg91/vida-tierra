"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Search, SlidersHorizontal, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import type { CatalogListingRecord } from "../lib/contracts";
import { catalogMatchesQuery, updateQueryString } from "../lib/search";

export default function ResearchExplorer({ records }: { records: CatalogListingRecord[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const collection = searchParams.get("coleccion") ?? "";
  const era = searchParams.get("epoca") ?? "";
  const theme = searchParams.get("tema") ?? "";
  const status = searchParams.get("estado") ?? "";
  const duration = searchParams.get("duracion") ?? "";

  function setParam(name: string, value: string) {
    const next = updateQueryString(searchParams.toString(), name, value);
    router.replace(`${pathname}${next ? `?${next}` : ""}`, { scroll: false });
  }

  const options = useMemo(
    () => ({
      collections: [...new Set(records.map((record) => record.collection))].sort((a, b) => a.localeCompare(b, "es")),
      eras: [...new Set(records.map((record) => record.era))].sort((a, b) => a.localeCompare(b, "es")),
      themes: [...new Set(records.flatMap((record) => record.themes))].sort((a, b) => a.localeCompare(b, "es")),
      statuses: [...new Set(records.map((record) => record.status))].sort(),
    }),
    [records],
  );

  const filtered = useMemo(() => {
    return records.filter((record) => {
      if (collection && record.collection !== collection) return false;
      if (era && record.era !== era) return false;
      if (theme && !record.themes.includes(theme)) return false;
      if (status && record.status !== status) return false;
      if (duration === "corta" && record.readingMinutes > 15) return false;
      if (duration === "media" && (record.readingMinutes <= 15 || record.readingMinutes > 25)) return false;
      if (duration === "larga" && record.readingMinutes <= 25) return false;
      return catalogMatchesQuery(record, query);
    });
  }, [collection, duration, era, query, records, status, theme]);

  const hasFilters = Boolean(query || collection || era || theme || status || duration);
  const thematic = records.filter((record) => record.order === null);
  const thematicSeries = [...new Set(thematic.map((record) => record.key.match(/^([A-Z][A-Z0-9]{1,7})-/)?.[1]).filter(Boolean))];

  return (
    <div className="explorer-app">
      <div className="explorer-tools">
        <label className="catalog-search">
          <Search aria-hidden="true" />
          <span className="sr-only">Buscar en investigaciones</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setParam("q", event.target.value)}
            placeholder="Buscar una pregunta o tema…"
          />
        </label>
        <div className="filter-label"><SlidersHorizontal aria-hidden="true" /> Filtros</div>
        <select value={collection} onChange={(event) => setParam("coleccion", event.target.value)} aria-label="Filtrar por colección">
          <option value="">Todas las colecciones</option>
          {options.collections.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select value={era} onChange={(event) => setParam("epoca", event.target.value)} aria-label="Filtrar por época">
          <option value="">Todas las épocas</option>
          {options.eras.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select value={theme} onChange={(event) => setParam("tema", event.target.value)} aria-label="Filtrar por tema">
          <option value="">Todos los temas</option>
          {options.themes.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select value={status} onChange={(event) => setParam("estado", event.target.value)} aria-label="Filtrar por estado">
          <option value="">Todos los estados</option>
          {options.statuses.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select value={duration} onChange={(event) => setParam("duracion", event.target.value)} aria-label="Filtrar por duración">
          <option value="">Cualquier duración</option>
          <option value="corta">Hasta 15 minutos</option>
          <option value="media">16–25 minutos</option>
          <option value="larga">Más de 25 minutos</option>
        </select>
        {hasFilters && (
          <button type="button" className="clear-filters" onClick={() => router.replace(pathname, { scroll: false })}>
            <X aria-hidden="true" /> Limpiar
          </button>
        )}
      </div>

      <div className="result-count" aria-live="polite">
        <strong>{filtered.length}</strong> {filtered.length === 1 ? "investigación" : "investigaciones"}
        {thematic.length > 0 && (
          <span>
            {thematic.length} {thematic.length === 1 ? "investigación temática" : "investigaciones temáticas"} en{" "}
            {thematicSeries.length} {thematicSeries.length === 1 ? "serie" : "series"} ({thematicSeries.join(", ")}) se muestra
            {thematic.length === 1 ? "" : "n"} fuera de la secuencia global.
          </span>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="research-grid">
          {filtered.map((record) => (
            <article className="research-card" key={record.slug}>
              <Link className="research-card-image" href={`/${record.slug}`}>
                <Image src={record.hero} alt="" fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 44vw, 30vw" />
                <span className="research-order">{record.order === null ? record.key : String(record.order).padStart(3, "0")}</span>
              </Link>
              <div className="research-card-body">
                <div className="research-card-meta">
                  <span>{record.collection}</span>
                  <span><Clock3 aria-hidden="true" /> {record.readingMinutes} min</span>
                </div>
                <h2><Link href={`/${record.slug}`}>{record.shortTitle}</Link></h2>
                <p>{record.summary}</p>
                <div className="research-tags">
                  {record.themes.slice(0, 3).map((item) => <span key={item}>{item}</span>)}
                </div>
                <Link className="card-link" href={`/${record.slug}`}>
                  Leer investigación <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-results">
          <Search aria-hidden="true" />
          <h2>No hay investigaciones con esta combinación</h2>
          <p>Prueba quitando un filtro o usando una pregunta más general.</p>
        </div>
      )}
    </div>
  );
}
