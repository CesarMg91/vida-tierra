import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import { getCatalog } from "../../lib/public-data";

export const metadata: Metadata = { title: "Cronología — ¿Cómo sabemos lo que sabemos?" };

export default function TimelinePage() {
  const catalog = getCatalog();
  const lanes = ["Cosmos", "Tierra", "Vida", "Humanidad", "Civilizaciones"].map((collection) => ({
    collection,
    records: catalog.filter((record) => record.collection === collection && record.order !== null),
  }));
  return (
    <div className="page-shell timeline-page">
      <header className="portal-hero">
        <p className="eyebrow">Muchos relojes, una historia profunda</p>
        <h1>Una cronología que conserva sus incertidumbres</h1>
        <p>Las escalas cósmicas, geológicas, evolutivas y arqueológicas no se fuerzan sobre una regla única. Cada carril mantiene su unidad y sus límites.</p>
        <Link className="button button-secondary" href="/TIMELINE">Abrir registro cronológico completo <ArrowRight aria-hidden="true" /></Link>
      </header>
      <div className="timeline-lanes">
        {lanes.map(({ collection, records }) => (
          <section key={collection}>
            <header><Clock3 aria-hidden="true" /><h2>{collection}</h2><span>{records.length} paradas</span></header>
            <ol>
              {records.map((record) => (
                <li key={record.slug}>
                  <span>{String(record.order).padStart(3, "0")}</span>
                  <Link href={`/${record.slug}`}>{record.shortTitle}</Link>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
