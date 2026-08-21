import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Suspense } from "react";
import CivilizationComparator from "../../../components/CivilizationComparator";

export const metadata: Metadata = {
  title: "Comparar civilizaciones — ¿Cómo sabemos lo que sabemos?",
  description: "Comparador epistemológico de hasta tres casos por dimensiones independientes, con archivo, inferencia, límite y fuente.",
};

export default function CivilizationComparePage() {
  return (
    <div className="page-shell civilization-compare-page">
      <header className="portal-hero compact comparison-page-hero">
        <Link className="comparison-back-link" href="/civilizaciones"><ArrowLeft aria-hidden="true" /> Volver al viaje</Link>
        <p className="eyebrow">Laboratorio comparativo</p>
        <h1>Comparar sin ordenar el mundo</h1>
        <p>Elige hasta tres casos y conserva abiertas las diferencias. Una ciudad no hereda automáticamente escritura, Estado, imperio o desigualdad.</p>
      </header>
      <Suspense fallback={<div className="comparator-loading">Preparando dimensiones y fuentes…</div>}>
        <CivilizationComparator />
      </Suspense>
    </div>
  );
}
