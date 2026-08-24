"use client";

import Link from "next/link";
import { ArrowRight, BookOpenText, FlaskConical, Link2, TriangleAlert } from "lucide-react";
import { useId, useState } from "react";
import type { DiagnosticEvidenceData, DiagnosticLayerKind } from "../lib/diagnostic-evidence";

const labels: Record<DiagnosticLayerKind, string> = {
  population: "Población",
  index: "Prueba y umbral",
  reference: "Referencia",
  performance: "Rendimiento",
  management: "Manejo",
  outcome: "Desenlace",
};

export default function DiagnosticEvidenceLab({ data }: { data: DiagnosticEvidenceData }) {
  const [selectedId, setSelectedId] = useState(data.cases[0]?.id ?? "");
  const selectId = useId();
  const selected = data.cases.find((item) => item.id === selectedId) ?? data.cases[0];

  if (!selected) {
    return (
      <div className="clinical-empty" role="status">
        <TriangleAlert aria-hidden="true" />
        <p>No hay un caso auditado disponible. Es un estado vacío del módulo, no evidencia de ausencia clínica.</p>
      </div>
    );
  }

  return (
    <div className="clinical-lab diagnostic-lab">
      <div className="clinical-toolbar">
        <div>
          <label htmlFor={selectId}>Caso diagnóstico auditado</label>
          <select id={selectId} value={selected.id} onChange={(event) => setSelectedId(event.target.value)}>
            {data.cases.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
          </select>
        </div>
        <dl aria-live="polite">
          <div><dt>Alcance</dt><dd>{selected.scope}</dd></div>
          <div><dt>Diseño</dt><dd>{selected.design}</dd></div>
        </dl>
      </div>

      <ol className="clinical-chain" aria-label={`Cadena diagnóstica para ${selected.title}`}>
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
          <strong>Una prueba no es una decisión.</strong>
          <p>Este recorrido no acepta datos personales, no calcula probabilidades y no recomienda estudios o tratamientos.</p>
        </div>
        <Link className="button button-primary" href={`/${data.researchSlug}`}>Abrir MED-002 <ArrowRight aria-hidden="true" /></Link>
      </footer>
    </div>
  );
}
