"use client";

import Link from "next/link";
import { ArrowRight, BookOpenText, FlaskConical, Link2, TriangleAlert } from "lucide-react";
import { useId, useState } from "react";
import type { ClinicalLayerKind, MedicineEvidenceData } from "../lib/medicine-evidence";

const labels: Record<ClinicalLayerKind, string> = {
  question: "Pregunta",
  comparison: "Comparación",
  outcomes: "Desenlaces",
  estimate: "Estimación",
  applicability: "Aplicabilidad",
  decision: "Decisión",
};

export default function ClinicalEvidenceLab({ data }: { data: MedicineEvidenceData }) {
  const [selectedId, setSelectedId] = useState(data.cases[0]?.id ?? "");
  const selectId = useId();
  const selected = data.cases.find((item) => item.id === selectedId) ?? data.cases[0];

  if (!selected) {
    return <div className="clinical-empty" role="status"><TriangleAlert aria-hidden="true" /><p>No hay un caso auditado disponible. Es un estado vacío del módulo, no evidencia clínica de ausencia.</p></div>;
  }

  return (
    <div className="clinical-lab">
      <div className="clinical-toolbar">
        <div>
          <label htmlFor={selectId}>Caso metodológico auditado</label>
          <select id={selectId} value={selected.id} onChange={(event) => setSelectedId(event.target.value)}>
            {data.cases.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
          </select>
        </div>
        <dl><div><dt>Alcance</dt><dd>{selected.scope}</dd></div><div><dt>Diseño</dt><dd>{selected.design}</dd></div></dl>
      </div>

      <ol className="clinical-chain" aria-label={`Cadena de evidencia para ${selected.title}`}>
        {selected.layers.map((layer, index) => (
          <li key={layer.kind}>
            <header><span>{String(index + 1).padStart(2, "0")}</span><h3>{labels[layer.kind]}</h3></header>
            <dl>
              <div><dt>Archivo observado</dt><dd>{layer.observed}</dd></div>
              <div><dt>Inferencia permitida</dt><dd>{layer.inference}</dd></div>
              <div className="clinical-limit"><dt>Límite</dt><dd>{layer.limit}</dd></div>
            </dl>
            <div className="clinical-references" role="group" aria-label={`Referencias de ${labels[layer.kind]}`}>
              {layer.claimIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><FlaskConical aria-hidden="true" />{id}</Link>)}
              {layer.evidenceIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><Link2 aria-hidden="true" />{id}</Link>)}
              {layer.sourceIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><BookOpenText aria-hidden="true" />{id}</Link>)}
            </div>
          </li>
        ))}
      </ol>

      <footer className="clinical-lab-footer">
        <div><strong>Explica evidencia; no recibe información de pacientes.</strong><p>El módulo no calcula riesgos, no recomienda tratamientos y no sustituye la conversación clínica.</p></div>
        <Link className="button button-primary" href={`/${data.researchSlug}`}>Abrir MED-001 <ArrowRight aria-hidden="true" /></Link>
      </footer>
    </div>
  );
}
