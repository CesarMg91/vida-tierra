"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import type { SearchIndexRecord } from "../lib/content";

/** Quita acentos y baja a minusculas para buscar sin tildes. */
function fold(s: string) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export default function SearchBox({ index }: { index: SearchIndexRecord[] }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);
  const [cursor, setCursor] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  const folded = useMemo(
    () => index.map((d) => ({ ...d, ft: fold(d.t), fh: d.h.map(fold), fs: fold(d.s) })),
    [index]
  );

  const results = useMemo(() => {
    const needle = fold(q.trim());
    if (needle.length < 2) return [];
    const terms = needle.split(/\s+/);
    const scored = [];
    for (const d of folded) {
      let score = 0;
      for (const t of terms) {
        if (d.ft.includes(t)) score += 10;
        else if (d.fs.includes(t)) score += 6;
        else if (d.fh.some((h) => h.includes(t))) score += 3;
        else {
          score = -1;
          break;
        }
      }
      if (score > 0) scored.push({ ...d, score });
    }
    return scored.sort((a, b) => b.score - a.score).slice(0, 12);
  }, [q, folded]);

  useEffect(() => setCursor(0), [q]);

  useEffect(() => {
    function onDocClick(event: MouseEvent) {
      if (boxRef.current && event.target instanceof Node && !boxRef.current.contains(event.target)) setFocused(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "/" && document.activeElement?.tagName !== "INPUT") {
        event.preventDefault();
        boxRef.current?.querySelector("input")?.focus();
      }
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function go(slug: string) {
    setQ("");
    setFocused(false);
    router.push(`/${slug}`);
  }

  function onKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (!results.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setCursor((c) => (c + 1) % results.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setCursor((c) => (c - 1 + results.length) % results.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      go(results[cursor].s);
    } else if (event.key === "Escape") {
      setFocused(false);
    }
  }

  return (
    <div className="search" ref={boxRef}>
      <input
        type="search"
        value={q}
        placeholder="Buscar investigación, registro o tema…"
        onChange={(e) => setQ(e.target.value)}
        onFocus={() => setFocused(true)}
        onKeyDown={onKeyDown}
        aria-label="Buscar en el repositorio"
      />
      {focused && results.length > 0 && (
        <ul className="search-results">
          {results.map((r, i) => (
            <li key={r.s}>
              <button type="button" className={i === cursor ? "active" : ""} onMouseEnter={() => setCursor(i)} onClick={() => go(r.s)}>
                <span className="sr-title">{r.t}</span>
                <span className="sr-path">{r.g || "raíz"}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      {focused && q.trim().length >= 2 && results.length === 0 && (
        <ul className="search-results">
          <li className="sr-empty">Sin resultados para «{q}»</li>
        </ul>
      )}
    </div>
  );
}
