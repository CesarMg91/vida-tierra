import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CivilizationComparator from "../../../components/CivilizationComparator";
import { createPageMetadata } from "../../../lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Comparar civilizaciones",
  description: "Comparador epistemológico de hasta tres casos por dimensiones independientes, con archivo, inferencia, límite y fuente.",
  pathname: "/civilizaciones/comparar",
  image: "/assets/visuales/hero-comparacion-civilizaciones.png",
});

export default function CivilizationComparePage() {
  return (
    <div className="page-shell civilization-compare-page">
      <header className="portal-hero compact comparison-page-hero">
        <Link className="comparison-back-link" href="/civilizaciones"><ArrowLeft aria-hidden="true" /> Volver al viaje</Link>
        <p className="eyebrow">Laboratorio comparativo</p>
        <h1>Comparar sin ordenar el mundo</h1>
        <p>Elige hasta tres casos y conserva abiertas las diferencias. Una ciudad no hereda automáticamente escritura, Estado, imperio o desigualdad.</p>
      </header>
      <CivilizationComparator />
    </div>
  );
}
