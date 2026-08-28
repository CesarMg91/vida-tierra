"use client";

import Link from "next/link";
import { ArrowRight, BookOpenText, FileSearch, Link2, TriangleAlert } from "lucide-react";
import { useId, useState } from "react";
import type { AfricanMedicineArchiveData, AfricanMedicineLayerKind } from "../lib/african-medicine-archives";

const labels: Record<AfricanMedicineLayerKind, string> = {
  archive: "Archivo",
  provenance: "Procedencia",
  signal: "Señal",
  inference: "Inferencia",
  contrast: "Contraste",
  limit: "Límite",
};

export default function AfricanMedicineArchiveLab({ data }: { data: AfricanMedicineArchiveData }) {
  const [selectedId, setSelectedId] = useState(data.cases[0]?.id ?? "");
  const selectId = useId();
  const selected = data.cases.find((item) => item.id === selectedId) ?? data.cases[0];

  if (!selected) {
    return (
      <div className="clinical-empty" role="status">
        <TriangleAlert aria-hidden="true" />
        <p>No hay un caso cargado. Es un estado vacío, no evidencia de ausencia histórica de cuidado.</p>
      </div>
    );
  }

  return (
    <div className="clinical-lab documentary-medicine-lab african-medicine-archive-lab">
      <div className="clinical-toolbar">
        <div>
          <label htmlFor={selectId}>Archivo regional auditado</label>
          <select id={selectId} value={selected.id} onChange={(event) => setSelectedId(event.target.value)}>
            {data.cases.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
          </select>
        </div>
        <dl aria-live="polite">
          <div><dt>Región</dt><dd>{selected.region}</dd></div>
          <div><dt>Archivo</dt><dd>{selected.archive}</dd></div>
        </dl>
      </div>

      <ol className="clinical-chain" aria-label={`Cadena desde archivo hasta límite para ${selected.title}`}>
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
          <strong>Silencio documental no es ausencia de cuidado.</strong>
          <p>La cadena conserva procedencia, señal, alternativa y límite sin convertir analogía, lesión, ciudad, texto o residuo en una práctica completa.</p>
        </div>
        <Link className="button button-primary" href={`/${data.researchSlug}`}>Abrir MED-009 <ArrowRight aria-hidden="true" /></Link>
      </footer>
    </div>
  );
}
