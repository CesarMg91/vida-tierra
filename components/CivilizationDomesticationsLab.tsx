"use client";

import Link from "next/link";
import { ArrowRight, BookOpenText, FlaskConical, Link2 } from "lucide-react";
import { useId, useState } from "react";
import type { CivilizationDomesticationsData, DomesticationFieldKind, DomesticationStatus } from "../lib/civilization-domestications";
import styles from "./CivilizationSouthwestAsia.module.css";

const fieldLabels: Record<DomesticationFieldKind, string> = {
  organism: "Planta o animal",
  trait: "Rasgo",
  management: "Cultivo o manejo",
  village: "Aldea",
  date: "Fecha",
  diffusion: "Difusión",
};

const statusLabels: Record<DomesticationStatus, string> = {
  sostenido: "sostenido",
  condicionado: "condicionado",
  "no-demostrado": "no demostrado",
  "dato-ausente": "dato ausente",
};

const statusColors: Record<DomesticationStatus, string> = {
  sostenido: "#a9c1a7",
  condicionado: "#d9bd8d",
  "no-demostrado": "#d79a70",
  "dato-ausente": "#9d968b",
};

export default function CivilizationDomesticationsLab({ data }: { data: CivilizationDomesticationsData }) {
  const [caseId, setCaseId] = useState(data.cases[0]?.id ?? "");
  const [fieldIndex, setFieldIndex] = useState(0);
  const caseSelectId = useId();
  const fieldSelectId = useId();
  const selected = data.cases.find((entry) => entry.id === caseId) ?? data.cases[0];
  if (!selected) return <p role="status">No hay un archivo regional auditado disponible. Es un estado vacío de datos, no evidencia de ausencia de cultivo.</p>;
  const step = selected.steps[Math.min(fieldIndex, selected.steps.length - 1)];
  if (!step) return <p role="status">El archivo no tiene campos publicados.</p>;

  return (
    <div className={styles.lab}>
      <div className={styles.toolbar}>
        <div>
          <label htmlFor={caseSelectId}>Archivo regional</label>
          <select id={caseSelectId} value={selected.id} onChange={(event) => { setCaseId(event.target.value); setFieldIndex(0); }}>
            {data.cases.map((entry) => <option key={entry.id} value={entry.id}>{entry.title} · {entry.region}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor={fieldSelectId}>Campo</label>
          <select id={fieldSelectId} value={fieldIndex} onChange={(event) => setFieldIndex(Number(event.target.value))}>
            {selected.steps.map((entry, index) => <option key={entry.kind} value={index}>{String(index + 1).padStart(2, "0")} · {fieldLabels[entry.kind]} — {statusLabels[entry.status]}</option>)}
          </select>
        </div>
      </div>

      <ol aria-label={`Estado de los seis campos para ${selected.title}`} style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", margin: 0, padding: "1rem 1.3rem", listStyle: "none", borderBottom: "1px solid rgba(222,184,113,.18)" }}>
        {selected.steps.map((entry, index) => (
          <li key={entry.kind}>
            <button
              type="button"
              onClick={() => setFieldIndex(index)}
              aria-pressed={index === fieldIndex}
              style={{ padding: ".35rem .55rem", border: `1px solid ${index === fieldIndex ? statusColors[entry.status] : "rgba(222,184,113,.18)"}`, background: index === fieldIndex ? "rgba(222,184,113,.08)" : "transparent", color: statusColors[entry.status], fontFamily: "var(--font-plex-mono), Consolas, monospace", fontSize: ".62rem", cursor: "pointer" }}
            >
              {String(index + 1).padStart(2, "0")} {fieldLabels[entry.kind]} · {statusLabels[entry.status]}
            </button>
          </li>
        ))}
      </ol>

      <div className={styles.case}>
        <header>
          <p>{selected.window} · {selected.archives.join(" · ")}</p>
          <h3>{fieldLabels[step.kind]}: {statusLabels[step.status]}</h3>
        </header>
        <dl>
          <div><dt>Observado</dt><dd>{step.observed}</dd></div>
          <div><dt>Inferencia permitida</dt><dd>{step.inference}</dd></div>
          <div className={styles.limit}><dt>Límite</dt><dd>{step.limit}</dd></div>
        </dl>
        <div className={styles.refs} aria-label={`Adversario y referencias de ${selected.title}, campo ${fieldLabels[step.kind]}`}>
          <p style={{ flexBasis: "100%", margin: "0 0 .4rem", color: "#d9bd8d", fontSize: ".78rem", lineHeight: 1.6 }}><strong>Adversario más fuerte:</strong> {selected.adversary}</p>
          {step.claimIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><FlaskConical aria-hidden="true" /> {id}</Link>)}
          {step.evidenceIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><Link2 aria-hidden="true" /> {id}</Link>)}
          {step.sourceIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><BookOpenText aria-hidden="true" /> {id}</Link>)}
        </div>
      </div>

      <footer className={styles.footer}>
        <div>
          <strong>Una semilla no es una aldea.</strong>
          <p>Cada archivo se lee en seis campos que no se heredan. «Dato ausente» describe un archivo que no existe o no se preservó; no significa que no hubiera cultivo ni es evidencia contraria.</p>
        </div>
        <Link className="button civilizations-ghost-button" href={`/${data.researchSlug}`}>Abrir CIV-006 <ArrowRight aria-hidden="true" /></Link>
      </footer>
    </div>
  );
}
