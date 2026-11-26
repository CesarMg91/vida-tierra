"use client";

import Link from "next/link";
import { ArrowRight, BookOpenText, FileSearch, Link2, TriangleAlert } from "lucide-react";
import { useId, useState } from "react";
import type { CriticalCareEvidenceData, CriticalCareLayerKind } from "../lib/critical-care-evidence";

const labels: Record<CriticalCareLayerKind, string> = {
  infrastructure: "Infraestructura",
  procedure: "Procedimiento",
  series: "Serie",
  comparison: "Comparación",
  protocol: "Protocolo",
  outcome: "Resultado",
  harm: "Daño",
};

export default function CriticalCareEvidenceLab({ data }: { data: CriticalCareEvidenceData }) {
  const [selectedId, setSelectedId] = useState(data.cases[0]?.id ?? "");
  const selectId = useId();
  const selected = data.cases.find((item) => item.id === selectedId) ?? data.cases[0];

  if (!selected) {
    return (
      <div className="clinical-empty" role="status">
        <TriangleAlert aria-hidden="true" />
        <p>No hay un expediente cargado. Es un estado vacío, no evidencia de ausencia de infraestructuras, series, comparaciones, resultados o daños.</p>
      </div>
    );
  }

  return (
    <div className="clinical-lab documentary-medicine-lab critical-care-evidence-lab">
      <div className="clinical-toolbar">
        <div>
          <label htmlFor={selectId}>Expediente de transfusión, trauma o cuidados críticos</label>
          <select id={selectId} value={selected.id} onChange={(event) => setSelectedId(event.target.value)}>
            {data.cases.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
          </select>
        </div>
        <dl aria-live="polite">
          <div><dt>Región y periodo</dt><dd>{selected.region}</dd></div>
          <div><dt>Archivo</dt><dd>{selected.archive}</dd></div>
        </dl>
      </div>

      <ol className="clinical-chain" aria-label={`Cadena desde la infraestructura hasta el daño para ${selected.title}`}>
        {selected.layers.map((layer, index) => (
          <li key={layer.kind}>
            <header><span>{String(index + 1).padStart(2, "0")}</span><h3>{labels[layer.kind]}</h3></header>
            <dl>
              <div><dt>Observado</dt><dd>{layer.observed}</dd></div>
              <div><dt>Inferencia permitida</dt><dd>{layer.inference}</dd></div>
              <div className="clinical-limit"><dt>Límite</dt><dd>{layer.limit}</dd></div>
            </dl>
            <div className="clinical-references" role="group" aria-label={`Referencias de ${labels[layer.kind]}`}>
              {layer.claimIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><FileSearch aria-hidden="true" />{id}</Link>)}
              {layer.evidenceIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><Link2 aria-hidden="true" />{id}</Link>)}
              {layer.sourceIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><BookOpenText aria-hidden="true" />{id}</Link>)}
            </div>
          </li>
        ))}
      </ol>

      <footer className="clinical-lab-footer">
        <div>
          <strong>Una fisiología sostenida no demuestra por sí sola una vida salvada.</strong>
          <p>Infraestructura, procedimiento, serie, comparación, protocolo, resultado y daño permanecen separados antes de atribuir beneficio o vida salvada. Historia de la evidencia: no contiene indicaciones clínicas, umbrales ni dosis.</p>
        </div>
        <Link className="button button-primary" href={`/${data.researchSlug}`}>Abrir MED-026 <ArrowRight aria-hidden="true" /></Link>
      </footer>
    </div>
  );
}
