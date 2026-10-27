"use client";

import Link from "next/link";
import { ArrowRight, BookOpenText, FileSearch, Link2, TriangleAlert } from "lucide-react";
import { useId, useState } from "react";
import type { PerceptionRealityEvidenceData, PerceptionRealityLayerKind } from "../lib/perception-reality-evidence";

const labels: Record<PerceptionRealityLayerKind, string> = {
  system: "Sistema",
  result: "Resultado",
  scope: "Alcance",
  interpretation: "Interpretación",
  leap: "Salto",
  test: "Prueba",
};

export default function PerceptionRealityLab({ data }: { data: PerceptionRealityEvidenceData }) {
  const [selectedId, setSelectedId] = useState(data.cases[0]?.id ?? "");
  const selectId = useId();
  const selected = data.cases.find((item) => item.id === selectedId) ?? data.cases[0];

  if (!selected) {
    return (
      <div className="clinical-empty" role="status">
        <TriangleAlert aria-hidden="true" />
        <p>No hay un expediente cargado. Es un estado vacío, no evidencia a favor ni en contra de que la percepción refleje la realidad.</p>
      </div>
    );
  }

  return (
    <div className="clinical-lab documentary-medicine-lab perception-reality-lab">
      <div className="clinical-toolbar">
        <div>
          <label htmlFor={selectId}>Expediente auditado</label>
          <select id={selectId} value={selected.id} onChange={(event) => setSelectedId(event.target.value)}>
            {data.cases.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
          </select>
        </div>
        <dl aria-live="polite">
          <div><dt>Tipo de producto</dt><dd>{selected.product}</dd></div>
          <div><dt>Qué sostiene</dt><dd>{selected.stance}</dd></div>
        </dl>
      </div>

      <ol className="clinical-chain" aria-label={`Cadena desde el sistema hasta la prueba para ${selected.title}`}>
        {selected.layers.map((layer, index) => (
          <li key={layer.kind}>
            <header><span>{String(index + 1).padStart(2, "0")}</span><h3>{labels[layer.kind]}</h3></header>
            <dl>
              <div><dt>Establecido</dt><dd>{layer.observed}</dd></div>
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
          <strong>Un teorema sobre pagos no es una tesis sobre lo que existe.</strong>
          <p>Sistema, resultado, alcance, interpretación, salto metafísico y prueba permanecen separados antes de concluir si la percepción refleja la realidad.</p>
        </div>
        <Link className="button button-primary" href={`/${data.researchSlug}`}>Abrir CON-001 <ArrowRight aria-hidden="true" /></Link>
      </footer>
    </div>
  );
}
