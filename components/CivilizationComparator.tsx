"use client";

import Link from "next/link";
import { Check, ExternalLink, Scale, Share2 } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import {
  civilizationCases,
  civilizationDimensions,
  getComparisonCell,
  parseComparisonState,
  serializeComparisonState,
  type CivilizationDimensionKey,
  type ComparisonState,
} from "../lib/civilizations";

const stateLabels: Record<ComparisonState, string> = {
  observed: "Archivo observado",
  conditional: "Inferencia condicionada",
  "not-demonstrated": "No demostrado",
  missing: "Dato ausente",
  contrary: "Evidencia contraria",
};

const comparisonChangeEvent = "vt-comparison-change";

function subscribeToLocation(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  window.addEventListener(comparisonChangeEvent, onStoreChange);
  return () => {
    window.removeEventListener("popstate", onStoreChange);
    window.removeEventListener(comparisonChangeEvent, onStoreChange);
  };
}

function getLocationSnapshot() {
  return window.location.search;
}

function getServerLocationSnapshot() {
  return "";
}

export default function CivilizationComparator() {
  const locationSearch = useSyncExternalStore(subscribeToLocation, getLocationSnapshot, getServerLocationSnapshot);
  const selection = parseComparisonState(new URLSearchParams(locationSearch));
  const [mobileChoice, setMobileChoice] = useState<CivilizationDimensionKey>(selection.dimensions[0]);
  const [shareStatus, setShareStatus] = useState("");
  const mobileDimension = selection.dimensions.includes(mobileChoice) ? mobileChoice : selection.dimensions[0];
  const selectedCases = selection.cases
    .map((id) => civilizationCases.find((item) => item.id === id))
    .filter((item): item is (typeof civilizationCases)[number] => Boolean(item));

  function update(cases: string[], dimensions: CivilizationDimensionKey[]) {
    window.history.replaceState(
      window.history.state,
      "",
      `${window.location.pathname}?${serializeComparisonState(cases, dimensions)}`,
    );
    window.dispatchEvent(new Event(comparisonChangeEvent));
  }

  function toggleCase(id: string) {
    const selected = selection.cases.includes(id);
    if (selected && selection.cases.length === 1) return;
    if (!selected && selection.cases.length === 3) return;
    update(selected ? selection.cases.filter((item) => item !== id) : [...selection.cases, id], selection.dimensions);
  }

  function toggleDimension(key: CivilizationDimensionKey) {
    const selected = selection.dimensions.includes(key);
    if (selected && selection.dimensions.length === 1) return;
    const next = selected
      ? selection.dimensions.filter((item) => item !== key)
      : [...selection.dimensions, key];
    update(selection.cases, next);
  }

  async function shareComparison() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Comparador de civilizaciones", url });
        setShareStatus("Comparador compartido.");
      } else {
        await navigator.clipboard.writeText(url);
        setShareStatus("Enlace copiado.");
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setShareStatus("No se pudo compartir; copia la URL del navegador.");
    }
  }

  return (
    <div className="comparison-app">
      <section className="comparison-controls" aria-labelledby="case-control-title">
        <div className="comparison-control-head">
          <div>
            <span>Paso 01</span>
            <h2 id="case-control-title">Elige hasta tres casos</h2>
          </div>
          <p id="case-limit">{selection.cases.length} de 3 seleccionados</p>
        </div>
        <div className="case-picker">
          {civilizationCases.map((item) => {
            const checked = selection.cases.includes(item.id);
            const disabled = (!checked && selection.cases.length >= 3) || (checked && selection.cases.length === 1);
            return (
              <label key={item.id} className={checked ? "is-selected" : ""}>
                <input
                  type="checkbox"
                  checked={checked}
                  disabled={disabled}
                  onChange={() => toggleCase(item.id)}
                  aria-describedby="case-limit"
                />
                <span className="case-check"><Check aria-hidden="true" /></span>
                <span>
                  <strong>{item.shortName}</strong>
                  <small>{item.region}{item.adversarial ? " · control" : ""}</small>
                </span>
              </label>
            );
          })}
        </div>
      </section>

      <section className="comparison-controls" aria-labelledby="dimension-control-title">
        <div className="comparison-control-head">
          <div>
            <span>Paso 02</span>
            <h2 id="dimension-control-title">Selecciona dimensiones independientes</h2>
          </div>
          <p>{selection.dimensions.length} activas</p>
        </div>
        <div className="dimension-picker">
          {civilizationDimensions.map((dimension) => {
            const active = selection.dimensions.includes(dimension.key);
            return (
              <button
                type="button"
                key={dimension.key}
                className={active ? "is-selected" : ""}
                aria-pressed={active}
                onClick={() => toggleDimension(dimension.key)}
              >
                {dimension.label}
              </button>
            );
          })}
        </div>
      </section>

      <div className="comparison-toolbar">
        <div className="comparison-guardrail">
          <Scale aria-hidden="true" />
          <span><strong>No hay puntuación total.</strong> Las dimensiones no se suman ni forman una escala de avance.</span>
        </div>
        <button type="button" className="button button-secondary" onClick={shareComparison}>
          <Share2 aria-hidden="true" />
          Compartir comparación
        </button>
        <span className="sr-only" aria-live="polite">{shareStatus}</span>
      </div>

      <label className="mobile-dimension-select">
        <span>Dimensión visible</span>
        <select value={mobileDimension} onChange={(event) => setMobileChoice(event.target.value as CivilizationDimensionKey)}>
          {selection.dimensions.map((key) => {
            const dimension = civilizationDimensions.find((item) => item.key === key);
            return <option key={key} value={key}>{dimension?.label}</option>;
          })}
        </select>
      </label>

      <div className="comparison-results" aria-live="polite">
        {selection.dimensions.map((dimensionKey) => {
          const dimension = civilizationDimensions.find((item) => item.key === dimensionKey);
          if (!dimension) return null;
          return (
            <section
              className={`comparison-dimension${dimensionKey === mobileDimension ? " is-mobile-active" : ""}`}
              key={dimensionKey}
              aria-labelledby={`dimension-${dimensionKey}`}
            >
              <header>
                <span>Dimensión</span>
                <h2 id={`dimension-${dimensionKey}`}>{dimension.label}</h2>
                <p>{dimension.question}</p>
              </header>
              <div className="comparison-case-grid" style={{ "--case-count": selectedCases.length } as React.CSSProperties}>
                {selectedCases.map((item) => {
                  const result = getComparisonCell(item.id, dimensionKey);
                  return (
                    <article className="comparison-cell" key={`${dimensionKey}-${item.id}`}>
                      <div className="comparison-cell-head">
                        <div>
                          <span>{item.region}</span>
                          <h3>{item.shortName}</h3>
                        </div>
                        <strong data-state={result.state}>{stateLabels[result.state]}</strong>
                      </div>
                      <dl>
                        <div>
                          <dt>Archivo observado</dt>
                          <dd>{result.observed}</dd>
                        </div>
                        <div>
                          <dt>Inferencia permitida</dt>
                          <dd>{result.inference}</dd>
                        </div>
                        <div>
                          <dt>Límite</dt>
                          <dd>{result.limit}</dd>
                        </div>
                      </dl>
                      <div className="comparison-cell-sources">
                        {result.sources.map((source) => (
                          <Link key={source} href={`/evidencia?id=${source}`}>
                            {source} <ExternalLink aria-hidden="true" />
                          </Link>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <section className="comparison-state-key" aria-labelledby="state-key-title">
        <div>
          <p className="eyebrow">Clave epistemológica</p>
          <h2 id="state-key-title">Tres vacíos que no significan lo mismo</h2>
        </div>
        <dl>
          <div><dt data-state="not-demonstrated">No demostrado</dt><dd>Hay archivo pertinente, pero no sostiene la afirmación fuerte.</dd></div>
          <div><dt data-state="missing">Dato ausente</dt><dd>El corpus no ofrece una medición comparable; no prueba ausencia histórica.</dd></div>
          <div><dt data-state="contrary">Evidencia contraria</dt><dd>El caso debilita una regla supuestamente universal.</dd></div>
        </dl>
      </section>
    </div>
  );
}
