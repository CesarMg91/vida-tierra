"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookOpen,
  Check,
  Clock3,
  Network,
  Printer,
  Quote,
  Share2,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from "react";
import type { ReaderStateV1 } from "../lib/contracts";
import { EMPTY_READER_STATE, readReaderState, writeReaderState } from "../lib/reader-state";
import CitationDialog from "./CitationDialog";
import KnowledgeDrawer from "./KnowledgeDrawer";

type ReaderMode = ReaderStateV1["preferredMode"];

type ReaderRecord = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  status: string;
  updatedAt: string;
  collection: string;
  era: string;
  themes: string[];
  readingMinutes: number;
  hero: string;
};

type Neighbor = { slug: string; shortTitle: string; order: number | null } | null;

const modes: Array<{ id: ReaderMode; label: string; detail: string; icon: typeof Clock3 }> = [
  { id: "summary", label: "En 5 minutos", detail: "Respuesta y límites", icon: Clock3 },
  { id: "full", label: "Investigación completa", detail: "Manuscrito íntegro", icon: BookOpen },
  { id: "evidence", label: "Cadena de evidencia", detail: "Claims, datos y fuentes", icon: Network },
];

const summaryToc = [
  ["respuesta-breve-title", "Respuesta breve"],
  ["que-sabemos-title", "Qué sabemos"],
  ["confianza-title", "Confianza"],
  ["que-falta-title", "Qué falta"],
] as const;

const evidenceToc = [
  ["evidence-overview-title", "Vista general"],
  ["claim-ledger-title", "Claims y puentes"],
  ["falsifier-title", "Falsadores"],
  ["source-ledger-title", "Fuentes"],
] as const;

export default function ResearchReader({
  record,
  toc,
  previous,
  next,
  summary,
  full,
  evidence,
}: {
  record: ReaderRecord;
  toc: Array<{ id: string; label: string; level: 2 | 3 }>;
  previous: Neighbor;
  next: Neighbor;
  summary: ReactNode;
  full: ReactNode;
  evidence: ReactNode;
}) {
  const [readerState, setReaderState] = useState<ReaderStateV1>(EMPTY_READER_STATE);
  const [mode, setMode] = useState<ReaderMode>("summary");
  const [progress, setProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState("");
  const [selectedKnowledgeId, setSelectedKnowledgeId] = useState<string | null>(null);
  const [citationOpen, setCitationOpen] = useState(false);
  const [shareStatus, setShareStatus] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);
  const contentTopRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef(readerState);
  const lastSavedRef = useRef({ progress: -1, heading: "", time: 0 });

  useEffect(() => {
    const stored = readReaderState(window.localStorage);
    stateRef.current = stored;
    setReaderState(stored);
    setMode(stored.preferredMode);
    const lastVisited = stored.lastVisited?.slug === record.slug ? stored.lastVisited : null;
    lastSavedRef.current = {
      progress: lastVisited?.progress ?? -1,
      heading: lastVisited?.heading ?? "",
      time: Date.now(),
    };
    const heading = window.location.hash.replace(/^#/, "");
    if (heading) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => document.getElementById(heading)?.scrollIntoView({ block: "start" }));
      });
    }
  }, []);

  useEffect(() => {
    let frame = 0;
    let saveTimer = 0;
    function updateProgress() {
      frame = 0;
      const content = contentRef.current;
      if (!content) return;
      const top = content.getBoundingClientRect().top + window.scrollY;
      const available = Math.max(1, content.offsetHeight - window.innerHeight * 0.7);
      const value = Math.max(0, Math.min(1, (window.scrollY - top + 96) / available));
      const percent = Math.round(value * 100);
      setProgress((current) => current === percent ? current : percent);
      progressRef.current?.style.setProperty("--reader-progress", `${percent}%`);
      progressRef.current?.setAttribute("aria-valuenow", String(percent));

      const headings = [...content.querySelectorAll<HTMLElement>("h2[id], h3[id]")];
      let heading = "";
      for (const item of headings) {
        if (item.getBoundingClientRect().top <= 150) heading = item.id;
        else break;
      }
      setActiveHeading((current) => current === heading ? current : heading);

      const now = Date.now();
      const last = lastSavedRef.current;
      const changed = Math.abs(value - last.progress) > 0.015 || heading !== last.heading;
      if (changed && now - last.time <= 900 && !saveTimer) {
        saveTimer = window.setTimeout(() => {
          saveTimer = 0;
          updateProgress();
        }, Math.max(80, 920 - (now - last.time)));
      } else if (changed) {
        const nextState: ReaderStateV1 = {
          ...stateRef.current,
          lastVisited: {
            slug: record.slug,
            heading: heading || undefined,
            progress: value,
            updatedAt: new Date().toISOString(),
          },
        };
        stateRef.current = nextState;
        try { writeReaderState(window.localStorage, nextState); } catch {}
        lastSavedRef.current = { progress: value, heading, time: now };
      }
    }

    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    }
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      if (saveTimer) window.clearTimeout(saveTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [mode, record.slug]);

  const currentToc = useMemo(() => {
    if (mode === "summary") return summaryToc.map(([id, label]) => ({ id, label, level: 2 as const }));
    if (mode === "evidence") return evidenceToc.map(([id, label]) => ({ id, label, level: 2 as const }));
    return toc;
  }, [mode, toc]);

  const isComplete = readerState.completed.includes(record.slug);
  const bookmarkHeading = activeHeading || undefined;
  const isBookmarked = readerState.bookmarks.some((item) => item.slug === record.slug && item.heading === bookmarkHeading);

  function persist(nextState: ReaderStateV1) {
    stateRef.current = nextState;
    setReaderState(nextState);
    try { writeReaderState(window.localStorage, nextState); } catch {}
  }

  function selectMode(nextMode: ReaderMode) {
    setMode(nextMode);
    persist({ ...stateRef.current, preferredMode: nextMode });
    window.requestAnimationFrame(() => contentTopRef.current?.scrollIntoView({ block: "start" }));
  }

  function moveMode(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % modes.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + modes.length) % modes.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = modes.length - 1;
    else return;
    event.preventDefault();
    const nextMode = modes[nextIndex].id;
    selectMode(nextMode);
    document.getElementById(`reader-mode-${nextMode}`)?.focus();
  }

  function toggleCompleted() {
    const completed = isComplete
      ? readerState.completed.filter((slug) => slug !== record.slug)
      : [...readerState.completed, record.slug];
    persist({ ...readerState, completed });
  }

  function toggleBookmark() {
    const bookmarks = isBookmarked
      ? readerState.bookmarks.filter((item) => !(item.slug === record.slug && item.heading === bookmarkHeading))
      : [...readerState.bookmarks, { slug: record.slug, heading: bookmarkHeading }];
    persist({ ...readerState, bookmarks });
  }

  async function share() {
    const data = { title: record.title, text: record.shortTitle, url: window.location.href };
    const usesWebShare = typeof navigator.share === "function";
    try {
      if (usesWebShare) await navigator.share(data);
      else await navigator.clipboard.writeText(data.url);
      setShareStatus(usesWebShare ? "Compartido" : "Enlace copiado");
    } catch {
      setShareStatus("");
    }
    window.setTimeout(() => setShareStatus(""), 1800);
  }

  function openKnowledge(event: MouseEvent<HTMLDivElement>) {
    const target = (event.target as HTMLElement).closest<HTMLElement>("[data-knowledge-id]");
    const id = target?.dataset.knowledgeId;
    if (!id) return;
    event.preventDefault();
    setSelectedKnowledgeId(id);
  }

  return (
    <article className="research-reader">
      <div
        ref={progressRef}
        className="reader-progress-line"
        role="progressbar"
        aria-label="Progreso de lectura"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      />

      <header className="reader-hero">
        <Image src={record.hero} alt="" fill preload fetchPriority="high" sizes="100vw" />
        <div className="reader-hero-shade" />
        <div className="reader-hero-copy">
          <p>{record.collection} · {record.era}</p>
          <h1>{record.title}</h1>
          <dl>
            <div><dt>Estado</dt><dd>{record.status}</dd></div>
            <div><dt>Revisión</dt><dd>{record.updatedAt}</dd></div>
            <div><dt>Lectura</dt><dd>{record.readingMinutes} min</dd></div>
            <div><dt>Licencia</dt><dd>CC BY 4.0</dd></div>
          </dl>
        </div>
      </header>

      <div ref={contentTopRef} className="reader-mode-bar">
        <div className="reader-mode-tabs" role="tablist" aria-label="Modo de lectura">
          {modes.map(({ id, label, detail, icon: Icon }, index) => (
            <button
              key={id}
              id={`reader-mode-${id}`}
              type="button"
              role="tab"
              aria-selected={mode === id}
              aria-controls="reader-content"
              tabIndex={mode === id ? 0 : -1}
              onClick={() => selectMode(id)}
              onKeyDown={(event) => moveMode(event, index)}
            >
              <Icon aria-hidden="true" />
              <span><strong>{label}</strong><small>{detail}</small></span>
            </button>
          ))}
        </div>
        <div className="reader-actions" role="group" aria-label="Acciones de lectura">
          <button type="button" onClick={toggleBookmark} aria-label="Guardar marcador" aria-pressed={isBookmarked} title="Guardar marcador">
            <Bookmark aria-hidden="true" fill={isBookmarked ? "currentColor" : "none"} /><span>Marcar</span>
          </button>
          <button type="button" onClick={toggleCompleted} aria-label={isComplete ? "Marcar investigación como pendiente" : "Marcar investigación como completada"} aria-pressed={isComplete} title="Marcar investigación como completada">
            <Check aria-hidden="true" /><span>{isComplete ? "Leída" : "Completar"}</span>
          </button>
          <button type="button" onClick={() => setCitationOpen(true)} aria-label="Citar investigación" title="Citar investigación">
            <Quote aria-hidden="true" /><span>Citar</span>
          </button>
          <button type="button" onClick={() => void share()} aria-label="Compartir investigación" title="Compartir investigación">
            <Share2 aria-hidden="true" /><span>Compartir</span>
          </button>
          <button type="button" onClick={() => window.print()} aria-label="Imprimir o guardar PDF" title="Imprimir o guardar PDF">
            <Printer aria-hidden="true" /><span>Imprimir</span>
          </button>
        </div>
        <span className="reader-action-status" aria-live="polite">{shareStatus}</span>
      </div>

      <div className="reader-layout">
        <aside className="reader-toc" aria-label="Índice de esta vista">
          <span>{progress}% leído</span>
          <nav>
            {currentToc.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={`${item.level === 3 ? "is-subheading " : ""}${activeHeading === item.id ? "is-active" : ""}`}>
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <div
          id="reader-content"
          ref={contentRef}
          className={`reader-content reader-mode-${mode}`}
          role="tabpanel"
          aria-labelledby={`reader-mode-${mode}`}
          tabIndex={0}
          onClick={openKnowledge}
        >
          {mode === "summary" ? summary : mode === "full" ? full : evidence}
        </div>
      </div>

      <footer className="reader-neighbors">
        {previous ? <Link href={`/${previous.slug}`}><ArrowLeft aria-hidden="true" /><span>Anterior<small>{previous.shortTitle}</small></span></Link> : <span />}
        {next ? <Link href={`/${next.slug}`}><span>Siguiente<small>{next.shortTitle}</small></span><ArrowRight aria-hidden="true" /></Link> : <span />}
      </footer>

      {selectedKnowledgeId ? (
        <KnowledgeDrawer id={selectedKnowledgeId} onClose={() => setSelectedKnowledgeId(null)} onSelect={setSelectedKnowledgeId} />
      ) : null}
      {citationOpen ? <CitationDialog record={record} onClose={() => setCitationOpen(false)} /> : null}
    </article>
  );
}
