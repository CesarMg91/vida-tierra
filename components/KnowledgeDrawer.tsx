"use client";

import Link from "next/link";
import { ExternalLink, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type KnowledgeRow = Record<string, unknown> & { id: string };

const fileByPrefix = {
  CLAIM: "claims",
  EVID: "evidence",
  SRC: "sources",
  CONT: "controversies",
  ERR: "errors",
} as const;

const dataCache = new Map<string, Promise<KnowledgeRow[]>>();

function fileForId(id: string) {
  const prefix = id.split("-")[0] as keyof typeof fileByPrefix;
  return fileByPrefix[prefix] ?? null;
}

export async function loadKnowledgeDataset(file: string) {
  if (!dataCache.has(file)) {
    dataCache.set(file, fetch(`/data/knowledge/${file}.json`).then((response) => {
      if (!response.ok) throw new Error(String(response.status));
      return response.json() as Promise<KnowledgeRow[]>;
    }));
  }
  return dataCache.get(file)!;
}

export async function loadKnowledgeRecord(id: string) {
  const file = fileForId(id);
  if (!file) return null;
  const rows = await loadKnowledgeDataset(file);
  return rows.find((row) => row.id === id) ?? null;
}

const fieldLabels: Record<string, string> = {
  statement: "Afirmación",
  confidence: "Confianza",
  status: "Estado",
  evidenceIds: "Evidencias relacionadas",
  sourceIds: "Fuentes relacionadas",
  researchIds: "Investigaciones",
  claimIds: "Claims relacionados",
  observed: "Observado",
  type: "Tipo",
  method: "Método",
  assumptions: "Supuestos",
  limitations: "Límites",
  sourceLinkMode: "Vínculo con fuentes",
  reference: "Referencia",
  access: "Acceso",
  result: "Resultado utilizado",
  topic: "Tema",
  commonGround: "Acuerdo mínimo",
  dominant: "Explicación dominante",
  alternatives: "Alternativas",
  case: "Caso",
  failedAssumption: "Supuesto que falló",
  correction: "Corrección",
};

function isKnowledgeId(value: string) {
  return /^(CLAIM|EVID|SRC|CONT|ERR)-/.test(value);
}

export default function KnowledgeDrawer({
  id,
  onClose,
  onSelect,
}: {
  id: string;
  onClose: () => void;
  onSelect: (id: string) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [record, setRecord] = useState<KnowledgeRow | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    return () => dialog?.close();
  }, []);

  useEffect(() => {
    let current = true;
    setRecord(null);
    setError(false);
    void loadKnowledgeRecord(id).then((value) => {
      if (!current) return;
      if (value) setRecord(value);
      else setError(true);
    }).catch(() => {
      if (current) setError(true);
    });
    return () => { current = false; };
  }, [id]);

  return (
    <dialog
      ref={dialogRef}
      className="knowledge-drawer"
      aria-labelledby="knowledge-drawer-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === dialogRef.current) onClose(); }}
    >
      <div className="knowledge-drawer-panel">
        <header>
          <div>
            <span>Registro enlazado</span>
            <h2 id="knowledge-drawer-title">{id}</h2>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Cerrar detalle">
            <X aria-hidden="true" />
          </button>
        </header>
        <div className="knowledge-drawer-body">
          {!record && !error ? <p className="drawer-status">Cargando el registro bajo demanda…</p> : null}
          {error ? <p className="drawer-status">No encontramos este ID en los registros públicos.</p> : null}
          {record ? (
            <dl>
              {Object.entries(record).filter(([key]) => key !== "id").map(([key, value]) => (
                <div key={key}>
                  <dt>{fieldLabels[key] ?? key}</dt>
                  <dd>
                    {Array.isArray(value) ? (
                      value.length ? value.map((item) => {
                        const text = String(item);
                        return isKnowledgeId(text) ? (
                          <button type="button" className="related-id" key={text} onClick={() => onSelect(text)}>{text}</button>
                        ) : <span className="plain-value" key={text}>{text}</span>;
                      }) : "—"
                    ) : String(value || "—")}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
        <footer>
          <Link href={`/evidencia?id=${encodeURIComponent(id)}`}>Abrir en el explorador <ExternalLink aria-hidden="true" /></Link>
        </footer>
      </div>
    </dialog>
  );
}
