"use client";

import Link from "next/link";
import { ArrowRight, BookOpenText, FlaskConical, Link2, TriangleAlert } from "lucide-react";
import { useId, useState } from "react";
import type { CivilizationDatingData, DatingLayerKind } from "../lib/civilization-dating";

const layerLabels: Record<DatingLayerKind, string> = {
  sample: "Muestra",
  measurement: "Medición",
  calendar: "Calendario",
  context: "Contexto",
  phase: "Fase",
  event: "Acontecimiento",
};

export default function CivilizationDatingLab({ data }: { data: CivilizationDatingData }) {
  const [selectedId, setSelectedId] = useState(data.cases[0]?.id ?? "");
  const selectId = useId();
  const selected = data.cases.find((item) => item.id === selectedId) ?? data.cases[0];

  if (!selected) {
    return (
      <div className="dating-empty" role="status">
        <TriangleAlert aria-hidden="true" />
        <p>No hay un caso auditado disponible. Esto es un estado vacío de datos, no evidencia de ausencia histórica.</p>
      </div>
    );
  }

  return (
    <div className="dating-lab">
      <div className="dating-lab-toolbar">
        <div>
          <label htmlFor={selectId}>Caso auditado</label>
          <select id={selectId} value={selected.id} onChange={(event) => setSelectedId(event.target.value)}>
            {data.cases.map((item) => <option key={item.id} value={item.id}>{item.title} · {item.region}</option>)}
          </select>
        </div>
        <div className="dating-methods" aria-label="Métodos del caso">
          {selected.methods.map((method) => <span key={method}>{method}</span>)}
        </div>
      </div>

      <ol className="dating-chain" aria-label={`Cadena de fechado para ${selected.title}`}>
        {selected.layers.map((layer, index) => (
          <li key={layer.kind}>
            <div className="dating-layer-heading">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{layerLabels[layer.kind]}</h3>
            </div>
            <dl>
              <div><dt>Observado</dt><dd>{layer.observed}</dd></div>
              <div><dt>Inferencia permitida</dt><dd>{layer.inference}</dd></div>
              <div className="dating-limit"><dt>Límite</dt><dd>{layer.limit}</dd></div>
            </dl>
            <div className="dating-references" aria-label={`Referencias de ${layerLabels[layer.kind]}`}>
              {layer.claimIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><FlaskConical aria-hidden="true" /> {id}</Link>)}
              {layer.evidenceIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><Link2 aria-hidden="true" /> {id}</Link>)}
              {layer.sourceIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><BookOpenText aria-hidden="true" /> {id}</Link>)}
            </div>
          </li>
        ))}
      </ol>

      <footer className="dating-lab-footer">
        <div>
          <strong>“No demostrado” no significa “dato ausente”.</strong>
          <p>El primero limita una inferencia; el segundo describe que el archivo necesario no está disponible. La evidencia contraria es un tercer estado.</p>
        </div>
        <Link className="button civilizations-ghost-button" href={`/${data.researchSlug}`}>
          Abrir CIV-002 <ArrowRight aria-hidden="true" />
        </Link>
      </footer>
    </div>
  );
}
