"use client";

import Link from "next/link";
import { ArrowRight, BookOpenText, FileSearch, Link2, TriangleAlert } from "lucide-react";
import { useId, useState } from "react";
import type { PharmacologyResistanceEvidenceData, PharmacologyResistanceLayerKind } from "../lib/pharmacology-resistance-evidence";

const labels: Record<PharmacologyResistanceLayerKind, string> = {
  substance: "Sustancia",
  dose: "Dosis-respuesta",
  series: "Serie",
  comparison: "Comparación",
  regulation: "Regulación",
  surveillance: "Vigilancia",
  ecology: "Ecología",
};

export default function PharmacologyResistanceEvidenceLab({ data }: { data: PharmacologyResistanceEvidenceData }) {
  const [selectedId, setSelectedId] = useState(data.cases[0]?.id ?? "");
  const selectId = useId();
  const selected = data.cases.find((item) => item.id === selectedId) ?? data.cases[0];

  if (!selected) {
    return (
      <div className="clinical-empty" role="status">
        <TriangleAlert aria-hidden="true" />
        <p>No hay un expediente cargado. Es un estado vacío, no evidencia de ausencia de sustancias, series, comparaciones, daños o resistencia.</p>
      </div>
    );
  }

  return (
    <div className="clinical-lab documentary-medicine-lab pharmacology-resistance-evidence-lab">
      <div className="clinical-toolbar">
        <div>
          <label htmlFor={selectId}>Expediente de farmacología o resistencia</label>
          <select id={selectId} value={selected.id} onChange={(event) => setSelectedId(event.target.value)}>
            {data.cases.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
          </select>
        </div>
        <dl aria-live="polite">
          <div><dt>Región y periodo</dt><dd>{selected.region}</dd></div>
          <div><dt>Archivo</dt><dd>{selected.archive}</dd></div>
        </dl>
      </div>

      <ol className="clinical-chain" aria-label={`Cadena desde la sustancia hasta la ecología para ${selected.title}`}>
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
          <strong>Una placa sin bacterias no demuestra un tratamiento eficaz por sí sola.</strong>
          <p>Sustancia, dosis, serie, comparación, regulación, vigilancia y ecología permanecen separadas antes de atribuir efecto, seguridad o carga. Historia de la evidencia: no contiene indicaciones clínicas ni dosis.</p>
        </div>
        <Link className="button button-primary" href={`/${data.researchSlug}`}>Abrir MED-024 <ArrowRight aria-hidden="true" /></Link>
      </footer>
    </div>
  );
}
