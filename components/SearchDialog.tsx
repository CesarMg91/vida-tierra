"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import type { SearchDocument } from "../lib/contracts";
import { foldSearchText, rankSearchDocuments } from "../lib/search";

function excerpt(record: SearchDocument, needle: string) {
  const heading = record.headings.find((item) => foldSearchText(item).includes(needle));
  const text = heading || record.summary || record.headings[0] || "Abrir documento";
  return text.length > 190 ? `${text.slice(0, 187).trim()}…` : text;
}

export default function SearchDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SearchDocument[] | null>(null);
  const [loadError, setLoadError] = useState(false);

  async function openSearch() {
    setOpen(true);
    dialogRef.current?.showModal();
    requestAnimationFrame(() => inputRef.current?.focus());
    if (index || loadError) return;
    try {
      const response = await fetch("/data/search-index.json");
      if (!response.ok) throw new Error(String(response.status));
      setIndex((await response.json()) as SearchDocument[]);
    } catch {
      setLoadError(true);
    }
  }

  function closeSearch() {
    dialogRef.current?.close();
    setOpen(false);
    setQuery("");
  }

  useEffect(() => {
    function onShortcut(event: KeyboardEvent) {
      if (event.key === "/" && !(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)) {
        event.preventDefault();
        void openSearch();
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        void openSearch();
      }
    }
    document.addEventListener("keydown", onShortcut);
    return () => document.removeEventListener("keydown", onShortcut);
  }, [index, loadError]);

  const results = useMemo(() => {
    return index ? rankSearchDocuments(index, query) : [];
  }, [index, query]);

  return (
    <>
      <button
        type="button"
        className="search-trigger"
        onClick={() => void openSearch()}
        aria-haspopup="dialog"
        aria-label="Buscar en todo el proyecto"
      >
        <Search aria-hidden="true" />
        <span>Buscar</span>
        <kbd>/</kbd>
      </button>
      <dialog
        ref={dialogRef}
        className="search-dialog"
        aria-label="Buscar en todo el proyecto"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeSearch();
        }}
      >
        <div className="search-panel">
          <div className="search-panel-head">
            <Search aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Pregunta, tema, ID o investigación…"
              aria-label="Buscar en todo el proyecto"
            />
            <button type="button" className="icon-button" onClick={closeSearch} aria-label="Cerrar búsqueda">
              <X aria-hidden="true" />
            </button>
          </div>
          <div className="search-panel-body" aria-live="polite">
            {!index && !loadError && <p className="search-status">Cargando el índice sólo para esta búsqueda…</p>}
            {loadError && <p className="search-status">No se pudo cargar el índice. Inténtalo de nuevo al recargar.</p>}
            {index && query.trim().length < 2 && (
              <p className="search-status">Escribe al menos dos caracteres. Tu consulta permanece en este dispositivo.</p>
            )}
            {index && query.trim().length >= 2 && results.length === 0 && (
              <p className="search-status">No encontramos resultados para «{query}».</p>
            )}
            {results.length > 0 && (
              <ul className="search-hit-list">
                {results.map((record) => (
                  <li key={record.slug}>
                    <Link href={`/${record.slug}`} onClick={closeSearch}>
                      <span className="search-hit-meta">{record.type} · {record.status || "documento"}</span>
                      <strong>{record.title}</strong>
                      <span>{excerpt(record, foldSearchText(query.trim()))}</span>
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <footer className="search-panel-foot">
            <span>{index ? `${index.length} documentos indexados` : "Índice diferido"}</span>
            <Link href={`/explorar${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`} onClick={closeSearch}>
              Abrir explorador
            </Link>
          </footer>
        </div>
      </dialog>
      {open && <span className="sr-only">Búsqueda abierta</span>}
    </>
  );
}
