"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

/** Quita acentos y baja a minusculas para buscar sin tildes. */
function fold(s) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export default function SearchBox({ index }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);
  const [cursor, setCursor] = useState(0);
  const boxRef = useRef(null);

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
    function onDocClick(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) setFocused(false);
    }
    function onKey(e) {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
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

  function go(slug) {
    setQ("");
    setFocused(false);
    router.push(`/${slug}`);
  }

  function onKeyDown(e) {
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => (c + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => (c - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[cursor].s);
    } else if (e.key === "Escape") {
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
              <button className={i === cursor ? "active" : ""} onMouseEnter={() => setCursor(i)} onClick={() => go(r.s)}>
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
