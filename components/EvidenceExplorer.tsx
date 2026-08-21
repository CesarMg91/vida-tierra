"use client";

import { AlertTriangle, BookMarked, Bug, Fingerprint, MessageSquareText, Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { foldSearchText, updateQueryString } from "../lib/search";
import KnowledgeDrawer, { loadKnowledgeDataset, type KnowledgeRow } from "./KnowledgeDrawer";

const registries = {
  claims: { label: "Claims", singular: "claim", icon: MessageSquareText, description: "Afirmaciones, confianza y estado." },
  evidence: { label: "Evidencias", singular: "evidencia", icon: Fingerprint, description: "Observaciones, métodos, supuestos y límites." },
  sources: { label: "Fuentes", singular: "fuente", icon: BookMarked, description: "Referencias, acceso y resultado utilizado." },
  controversies: { label: "Controversias", singular: "controversia", icon: AlertTriangle, description: "Acuerdos, alternativas y datos discriminantes." },
  errors: { label: "Errores", singular: "error", icon: Bug, description: "Supuestos fallidos y correcciones documentadas." },
} as const;

type RegistryType = keyof typeof registries;
type ConfidenceGrade = "A" | "B" | "C" | "D" | "E";

const confidenceLabels: Record<ConfidenceGrade, string> = {
  A: "A · Extraordinariamente sólida",
  B: "B · Muy bien sustentada",
  C: "C · Probable",
  D: "D · Abierta a interpretación",
  E: "E · Altamente especulativa",
};

function isRegistryType(value: string | null): value is RegistryType {
  return Boolean(value && value in registries);
}

function searchableText(record: KnowledgeRow) {
  return foldSearchText(Object.values(record).flatMap((value) => Array.isArray(value) ? value : [value]).join(" "));
}

function leadFor(record: KnowledgeRow) {
  return String(record.statement || record.observed || record.reference || record.topic || record.case || "Registro sin descripción");
}

function detailFor(record: KnowledgeRow) {
  return String(record.limitations || record.result || record.alternatives || record.correction || record.method || "");
}

function confidenceGrade(record: KnowledgeRow): ConfidenceGrade | "" {
  const match = String(record.confidence || "").trim().match(/^[A-E]/);
  return (match?.[0] as ConfidenceGrade | undefined) ?? "";
}

export default function EvidenceExplorer() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const type: RegistryType = isRegistryType(searchParams.get("tipo")) ? searchParams.get("tipo") as RegistryType : "claims";
  const query = searchParams.get("q") ?? "";
  const status = searchParams.get("estado") ?? "";
  const confidence = searchParams.get("confianza") ?? "";
  const deferredQuery = useDeferredValue(query);
  const selectedId = searchParams.get("id");
  const [records, setRecords] = useState<KnowledgeRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(48);

  useEffect(() => {
    let current = true;
    setLoading(true);
    setError(false);
    setVisible(48);
    void loadKnowledgeDataset(type).then((rows) => {
      if (current) setRecords(rows);
    }).catch(() => {
      if (current) setError(true);
    }).finally(() => {
      if (current) setLoading(false);
    });
    return () => { current = false; };
  }, [type]);

  function replaceParams(mutator: (next: URLSearchParams) => void) {
    const next = new URLSearchParams(searchParams.toString());
    mutator(next);
    router.replace(`${pathname}${next.size ? `?${next}` : ""}`, { scroll: false });
  }

  function setParam(name: string, value: string) {
    const next = updateQueryString(searchParams.toString(), name, value);
    router.replace(`${pathname}${next ? `?${next}` : ""}`, { scroll: false });
  }

  function selectType(nextType: RegistryType) {
    replaceParams((next) => {
      if (nextType === "claims") next.delete("tipo");
      else next.set("tipo", nextType);
      next.delete("estado");
      next.delete("confianza");
      next.delete("id");
    });
  }

  const statuses = useMemo(() => [...new Set(records.map((record) => String(record.status || "")).filter(Boolean))].sort(), [records]);
  const confidences = useMemo(
    () => (["A", "B", "C", "D", "E"] as ConfidenceGrade[]).filter((grade) => records.some((record) => confidenceGrade(record) === grade)),
    [records],
  );
  const filtered = useMemo(() => {
    const terms = foldSearchText(deferredQuery.trim()).split(/\s+/).filter(Boolean);
    return records.filter((record) => {
      if (status && String(record.status || "") !== status) return false;
      if (confidence && confidenceGrade(record) !== confidence) return false;
      if (!terms.length) return true;
      const haystack = searchableText(record);
      return terms.every((term) => haystack.includes(term));
    });
  }, [confidence, deferredQuery, records, status]);

  const registry = registries[type];

  return (
    <div className="evidence-explorer">
      <div className="registry-switcher" role="group" aria-label="Tipo de registro">
        {(Object.keys(registries) as RegistryType[]).map((key) => {
          const item = registries[key];
          const Icon = item.icon;
          return (
            <button key={key} type="button" aria-label={item.label} aria-pressed={type === key} onClick={() => selectType(key)}>
              <Icon aria-hidden="true" /><span>{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="evidence-explorer-tools">
        <label>
          <Search aria-hidden="true" />
          <span className="sr-only">Buscar en {registry.label}</span>
          <input type="search" value={query} onChange={(event) => setParam("q", event.target.value)} placeholder={`Buscar en ${registry.label.toLowerCase()}…`} />
        </label>
        {statuses.length ? (
          <select value={status} onChange={(event) => setParam("estado", event.target.value)} aria-label="Filtrar por estado">
            <option value="">Todos los estados</option>
            {statuses.map((item) => <option key={item}>{item}</option>)}
          </select>
        ) : null}
        {confidences.length ? (
          <select value={confidence} onChange={(event) => setParam("confianza", event.target.value)} aria-label="Filtrar por confianza">
            <option value="">Toda confianza</option>
            {confidences.map((item) => <option key={item} value={item}>{confidenceLabels[item]}</option>)}
          </select>
        ) : null}
        {query || status || confidence ? (
          <button type="button" className="clear-filters" onClick={() => replaceParams((next) => { next.delete("q"); next.delete("estado"); next.delete("confianza"); })}>
            <X aria-hidden="true" /> Limpiar
          </button>
        ) : null}
      </div>

      <header className="registry-result-head" aria-live="polite">
        <div><span>{registry.label}</span><strong>{loading ? "—" : filtered.length.toLocaleString("es-MX")}</strong></div>
        <p>{registry.description} Selecciona una tarjeta para abrir el registro enlazado.</p>
      </header>

      {loading ? <p className="registry-loading">Cargando el registro sólo para esta vista…</p> : null}
      {error ? <p className="registry-loading">No se pudo cargar este registro. Recarga para intentarlo otra vez.</p> : null}
      {!loading && !error && filtered.length === 0 ? (
        <div className="empty-results"><Search aria-hidden="true" /><h2>No hay coincidencias</h2><p>Prueba con otro ID, tema o filtro.</p></div>
      ) : null}
      {!loading && !error && filtered.length ? (
        <div className="knowledge-card-grid">
          {filtered.slice(0, visible).map((record) => (
            <button key={record.id} type="button" className="knowledge-card" onClick={() => setParam("id", record.id)}>
              <span>{record.id}</span>
              <strong>{leadFor(record)}</strong>
              {detailFor(record) ? <p>{detailFor(record)}</p> : null}
              <small>{[record.confidence, record.status, record.type].filter(Boolean).join(" · ")}</small>
            </button>
          ))}
        </div>
      ) : null}
      {visible < filtered.length ? (
        <button type="button" className="button button-secondary load-more" onClick={() => setVisible((current) => current + 48)}>
          Mostrar 48 más
        </button>
      ) : null}

      {selectedId ? (
        <KnowledgeDrawer id={selectedId} onSelect={(id) => setParam("id", id)} onClose={() => setParam("id", "")} />
      ) : null}
    </div>
  );
}
