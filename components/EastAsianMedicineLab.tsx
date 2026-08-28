"use client";

import Link from "next/link";
import { ArrowRight, BookOpenText, FileSearch, Link2, TriangleAlert } from "lucide-react";
import { useId, useState } from "react";
import type {
  EastAsianMedicineEvidenceData,
  EastAsianMedicineLayerKind,
} from "../lib/east-asian-medicine-evidence";

const labels: Record<EastAsianMedicineLayerKind, string> = {
  witness: "Testigo",
  reading: "Lectura",
  stratum: "Estrato",
  operation: "Operación",
  institution: "Institución",
  consequence: "Consecuencia",
};

export default function EastAsianMedicineLab({ data }: { data: EastAsianMedicineEvidenceData }) {
  const [selectedId, setSelectedId] = useState(data.cases[0]?.id ?? "");
  const selectId = useId();
  const selected = data.cases.find((item) => item.id === selectedId) ?? data.cases[0];

  if (!selected) {
    return (
      <div className="clinical-empty" role="status">
        <TriangleAlert aria-hidden="true" />
        <p>No hay un caso cargado. Es un estado vacío, no evidencia de ausencia de práctica o cuidado.</p>
      </div>
    );
  }

  return (
    <div className="clinical-lab documentary-medicine-lab">
      <div className="clinical-toolbar">
        <div>
          <label htmlFor={selectId}>Archivo de China y Asia oriental</label>
          <select id={selectId} value={selected.id} onChange={(event) => setSelectedId(event.target.value)}>
            {data.cases.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
          </select>
        </div>
        <dl aria-live="polite">
          <div><dt>Región</dt><dd>{selected.region}</dd></div>
          <div><dt>Archivo</dt><dd>{selected.archive}</dd></div>
        </dl>
      </div>

      <ol className="clinical-chain" aria-label={`Cadena desde testigo hasta consecuencia para ${selected.title}`}>
        {selected.layers.map((layer, index) => (
          <li key={layer.kind}>
            <header><span>{String(index + 1).padStart(2, "0")}</span><h3>{labels[layer.kind]}</h3></header>
            <dl>
              <div><dt>Archivo observado</dt><dd>{layer.observed}</dd></div>
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
          <strong>Un canon no es una práctica uniforme.</strong>
          <p>La cadena separa testigo, lectura, estrato, operación, institución y consecuencia para no heredar autoría, cobertura o eficacia.</p>
        </div>
        <Link className="button button-primary" href={`/${data.researchSlug}`}>Abrir MED-006 <ArrowRight aria-hidden="true" /></Link>
      </footer>
    </div>
  );
}
