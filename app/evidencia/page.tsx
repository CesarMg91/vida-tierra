import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, BookMarked, Fingerprint, MessageSquareText } from "lucide-react";
import EvidenceChain from "../../components/EvidenceChain";
import { getKnowledgeCounts } from "../../lib/public-data";

export const metadata: Metadata = { title: "Evidencia — ¿Cómo sabemos lo que sabemos?" };

export default function EvidencePage() {
  const counts = getKnowledgeCounts();
  const records = [
    { title: "Claims", count: counts.claims, href: "/CLAIMS", icon: MessageSquareText, text: "Afirmaciones delimitadas, confianza y estado." },
    { title: "Evidencias", count: counts.evidence, href: "/EVIDENCE_LEDGER", icon: Fingerprint, text: "Observación, método, supuestos y límites." },
    { title: "Fuentes", count: counts.sources, href: "/SOURCES", icon: BookMarked, text: "Referencia, acceso, resultado usado y limitaciones." },
    { title: "Controversias", count: counts.controversies, href: "/CONTROVERSIES", icon: AlertTriangle, text: "Desacuerdos reales y datos discriminantes." },
  ];
  return (
    <div className="page-shell evidence-page">
      <header className="portal-hero compact"><p className="eyebrow">Laboratorio público</p><h1>Recorre una conclusión hasta sus datos</h1><p>El explorador relacional completo llegará en el PR 3. Desde ahora, la cadena y todos los registros maestros tienen una entrada pública estable.</p></header>
      <EvidenceChain />
      <div className="registry-grid">
        {records.map(({ title, count, href, icon: Icon, text }) => (
          <article key={title}><Icon aria-hidden="true" /><span>{count.toLocaleString("es-MX")}</span><h2>{title}</h2><p>{text}</p><Link href={href}>Abrir registro <ArrowRight aria-hidden="true" /></Link></article>
        ))}
      </div>
    </div>
  );
}
