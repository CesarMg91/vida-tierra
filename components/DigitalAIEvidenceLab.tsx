"use client";

import Link from "next/link";
import { ArrowRight, BookOpenText, FileSearch, Link2, TriangleAlert } from "lucide-react";
import { useId, useState } from "react";
import type { DigitalAIEvidenceData, DigitalAILayerKind } from "../lib/digital-ai-evidence";

const labels: Record<DigitalAILayerKind, string> = {
  data: "Datos",
  model: "Modelo",
  validation: "Validación",
  deployment: "Despliegue",
  drift: "Deriva",
  equity: "Equidad",
  utility: "Utilidad",
  responsibility: "Responsabilidad",
};

export default function DigitalAIEvidenceLab({ data }: { data: DigitalAIEvidenceData }) {
  const [selectedId, setSelectedId] = useState(data.cases[0]?.id ?? "");
  const selectId = useId();
  const selected = data.cases.find((item) => item.id === selectedId) ?? data.cases[0];

  if (!selected) {
    return (
      <div className="clinical-empty" role="status">
        <TriangleAlert aria-hidden="true" />
        <p>No hay un expediente cargado. Es un estado vacío, no evidencia de ausencia de datos, modelos, validaciones, sesgos o responsables.</p>
      </div>
    );
  }

  return (
    <div className="clinical-lab documentary-medicine-lab digital-ai-evidence-lab">
      <div className="clinical-toolbar">
        <div>
          <label htmlFor={selectId}>Expediente de medicina digital o inteligencia artificial</label>
          <select id={selectId} value={selected.id} onChange={(event) => setSelectedId(event.target.value)}>
            {data.cases.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
          </select>
        </div>
        <dl aria-live="polite">
          <div><dt>Región y periodo</dt><dd>{selected.region}</dd></div>
          <div><dt>Archivo</dt><dd>{selected.archive}</dd></div>
        </dl>
      </div>

      <ol className="clinical-chain" aria-label={`Cadena desde los datos hasta la responsabilidad para ${selected.title}`}>
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
          <strong>Un modelo exacto no demuestra por sí solo un beneficio ni asigna una responsabilidad.</strong>
          <p>Datos, modelo, validación, despliegue, deriva, equidad, utilidad y responsabilidad permanecen separados antes de atribuir un beneficio o un responsable. Historia de la evidencia: no contiene indicaciones clínicas, dosis ni orientación sobre qué sistema usar, comprar o aprobar.</p>
        </div>
        <Link className="button button-primary" href={`/${data.researchSlug}`}>Abrir MED-033 <ArrowRight aria-hidden="true" /></Link>
      </footer>
    </div>
  );
}
