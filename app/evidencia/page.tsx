import type { Metadata } from "next";
import { Suspense } from "react";
import EvidenceChain from "../../components/EvidenceChain";
import EvidenceExplorer from "../../components/EvidenceExplorer";
import { getKnowledgeCounts } from "../../lib/public-data";

export const metadata: Metadata = { title: "Evidencia — ¿Cómo sabemos lo que sabemos?" };

export default function EvidencePage() {
  const counts = getKnowledgeCounts();
  return (
    <div className="page-shell evidence-page">
      <header className="portal-hero compact">
        <p className="eyebrow">Laboratorio público · {Object.values(counts).reduce((sum, value) => sum + value, 0).toLocaleString("es-MX")} registros</p>
        <h1>Recorre una conclusión hasta sus datos</h1>
        <p>Busca por ID o concepto, cambia de registro y abre cada relación sin perder el contexto. Las consultas permanecen en tu dispositivo.</p>
      </header>
      <section className="evidence-method-preview" aria-labelledby="evidence-method-title">
        <div><p className="eyebrow">El puente mínimo</p><h2 id="evidence-method-title">Una cadena, no una lista de autoridades</h2></div>
        <EvidenceChain />
      </section>
      <Suspense fallback={<p className="registry-loading">Preparando el laboratorio…</p>}>
        <EvidenceExplorer />
      </Suspense>
    </div>
  );
}
