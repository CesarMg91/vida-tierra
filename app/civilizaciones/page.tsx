import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCatalog } from "../../lib/public-data";

export const metadata: Metadata = { title: "Civilizaciones — ¿Cómo sabemos lo que sabemos?" };

export default function CivilizationsPage() {
  const keys = new Set(["050", "051", "052", "CIV-001"]);
  const records = getCatalog().filter((record) => keys.has(record.key));
  return (
    <div className="page-shell civilizations-landing">
      <header className="portal-hero">
        <p className="eyebrow">Experiencia insignia · en construcción secuencial</p>
        <h1>No existe una escalera universal hacia la “civilización”</h1>
        <p>Compara domesticación, urbanismo, administración, desigualdad y transformación como ejes independientes. El atlas y comparador completo llegarán en el PR 4; el corpus ya puede recorrerse.</p>
      </header>
      <div className="civilization-cards">
        {records.map((record) => (
          <article key={record.slug}>
            <div className="civilization-image"><Image src={record.hero} alt="" fill sizes="(max-width: 800px) 92vw, 46vw" /></div>
            <div>
              <span>{record.order === null ? "TRAZADO · CIV-001" : `INVESTIGACIÓN ${String(record.order).padStart(3, "0")}`}</span>
              <h2>{record.shortTitle}</h2>
              <p>{record.summary}</p>
              <Link className="text-link" href={`/${record.slug}`}>Abrir expediente <ArrowRight aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
