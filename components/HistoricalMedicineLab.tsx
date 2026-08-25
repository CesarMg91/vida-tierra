"use client";

import Link from "next/link";
import { ArrowRight, BookOpenText, FlaskConical, Link2, TriangleAlert } from "lucide-react";
import { useId, useState } from "react";
import type {
  HistoricalMedicineEvidenceData,
  HistoricalMedicineLayerKind,
} from "../lib/historical-medicine-evidence";

const labels: Record<HistoricalMedicineLayerKind, string> = {
  specimen: "Espécimen o testimonio",
  context: "Contexto",
  trace: "Huella",
  interpretation: "Interpretación",
  behavior: "Conducta",
  system: "Sistema médico",
};

export default function HistoricalMedicineLab({ data }: { data: HistoricalMedicineEvidenceData }) {
  const [selectedId, setSelectedId] = useState(data.cases[0]?.id ?? "");
  const selectId = useId();
  const selected = data.cases.find((item) => item.id === selectedId) ?? data.cases[0];

  if (!selected) {
    return (
      <div className="clinical-empty" role="status">
        <TriangleAlert aria-hidden="true" />
        <p>No hay un caso histórico auditado. Es un estado vacío del módulo, no evidencia de ausencia de cuidado o enfermedad.</p>
      </div>
    );
  }

  return (
    <div className="clinical-lab historical-medicine-lab">
      <div className="clinical-toolbar">
        <div>
          <label htmlFor={selectId}>Caso histórico auditado</label>
          <select id={selectId} value={selected.id} onChange={(event) => setSelectedId(event.target.value)}>
            {data.cases.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
          </select>
        </div>
        <dl aria-live="polite">
          <div><dt>Región</dt><dd>{selected.region}</dd></div>
          <div><dt>Archivo</dt><dd>{selected.archive}</dd></div>
        </dl>
      </div>

      <ol className="clinical-chain" aria-label={`Cadena histórica para ${selected.title}`}>
        {selected.layers.map((layer, index) => (
          <li key={layer.kind}>
            <header><span>{String(index + 1).padStart(2, "0")}</span><h3>{labels[layer.kind]}</h3></header>
            <dl>
              <div><dt>Archivo observado</dt><dd>{layer.observed}</dd></div>
              <div><dt>Inferencia permitida</dt><dd>{layer.inference}</dd></div>
              <div className="clinical-limit"><dt>Límite</dt><dd>{layer.limit}</dd></div>
            </dl>
            <div className="clinical-references" aria-label={`Referencias de ${labels[layer.kind]}`}>
              {layer.claimIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><FlaskConical aria-hidden="true" />{id}</Link>)}
              {layer.evidenceIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><Link2 aria-hidden="true" />{id}</Link>)}
              {layer.sourceIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><BookOpenText aria-hidden="true" />{id}</Link>)}
            </div>
          </li>
        ))}
      </ol>

      <footer className="clinical-lab-footer">
        <div>
          <strong>No existe un fósil único de la medicina.</strong>
          <p>El recorrido explica archivos publicados; no diagnostica restos, no recibe datos personales y no convierte una huella en intención o eficacia.</p>
        </div>
        <Link className="button button-primary" href={`/${data.researchSlug}`}>Abrir MED-003 <ArrowRight aria-hidden="true" /></Link>
      </footer>
    </div>
  );
}
