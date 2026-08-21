"use client";

import Link from "next/link";
import { Crosshair, ExternalLink, MapPin } from "lucide-react";
import { useState } from "react";
import type { CivilizationCase } from "../lib/civilizations";
import type { CivilizationMapData } from "../lib/civilization-map";

export default function CivilizationsAtlas({
  cases,
  map,
}: {
  cases: CivilizationCase[];
  map: CivilizationMapData;
}) {
  const [selectedId, setSelectedId] = useState(cases[0]?.id ?? "");
  const selected = cases.find((item) => item.id === selectedId) ?? cases[0];

  if (!selected) return null;

  return (
    <div className="civilization-atlas">
      <div className="atlas-map-panel">
        <div className="atlas-map-head">
          <div>
            <span>Atlas de anclajes</span>
            <strong>Regiones, no fronteras</strong>
          </div>
          <p><Crosshair aria-hidden="true" /> Cada área punteada expresa incertidumbre cartográfica editorial.</p>
        </div>

        <svg
          className="civilization-map"
          viewBox={`0 0 ${map.width} ${map.height}`}
          role="group"
          aria-labelledby="civilization-map-title civilization-map-description"
        >
          <title id="civilization-map-title">Mapa mundial de casos comparados</title>
          <desc id="civilization-map-description">
            Mapa físico basado en Natural Earth. Los marcadores son anclajes de sitio o región y las áreas punteadas son incertidumbres, no territorios históricos.
          </desc>
          <path className="atlas-graticule" d={map.graticulePath} />
          <path className="atlas-land" d={map.landPath} />
          {map.markers.map((marker, index) => {
            const item = cases.find((candidate) => candidate.id === marker.id);
            if (!item) return null;
            const active = item.id === selected.id;
            return (
              <g
                className={`atlas-marker${active ? " is-active" : ""}${item.adversarial ? " is-adversarial" : ""}`}
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`Abrir ${item.name}, ${item.region}`}
                aria-pressed={active}
                onClick={() => setSelectedId(item.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedId(item.id);
                  }
                }}
              >
                <path className="atlas-uncertainty" d={marker.uncertaintyPath} />
                <circle className="atlas-point-halo" cx={marker.x} cy={marker.y} r={active ? 16 : 11} />
                <circle className="atlas-point" cx={marker.x} cy={marker.y} r={active ? 5.5 : 4} />
                <text x={marker.x + 10} y={marker.y - 11}>{String(index + 1).padStart(2, "0")}</text>
              </g>
            );
          })}
        </svg>

        <div className="atlas-attribution">
          Base física: Natural Earth 1:110m, redistribuida por world-atlas. Sin fronteras históricas reconstruidas.
        </div>
      </div>

      <aside className="atlas-case-panel" aria-live="polite">
        <div className="atlas-case-number">{String(cases.findIndex((item) => item.id === selected.id) + 1).padStart(2, "0")}</div>
        <p className="eyebrow">{selected.adversarial ? "Caso adversario" : selected.region}</p>
        <h3>{selected.name}</h3>
        <p className="atlas-period">{selected.period}</p>
        <p>{selected.summary}</p>
        <div className="atlas-anchor-note">
          <MapPin aria-hidden="true" />
          <span>{selected.anchorNote}</span>
        </div>
        <div className="atlas-sources">
          <span>Expediente conectado</span>
          {selected.sources.slice(0, 3).map((source) => (
            <Link key={source} href={`/evidencia?id=${source}`}>
              {source} <ExternalLink aria-hidden="true" />
            </Link>
          ))}
        </div>
      </aside>

      <div className="atlas-case-list" role="group" aria-label="Seleccionar caso del atlas">
        {cases.map((item, index) => (
          <button
            type="button"
            key={item.id}
            aria-pressed={item.id === selected.id}
            onClick={() => setSelectedId(item.id)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.shortName}</strong>
            <small>{item.region}</small>
          </button>
        ))}
      </div>

      <details className="atlas-text-equivalent">
        <summary>Ver alternativa textual completa del mapa</summary>
        <div className="table-scroll">
          <table>
            <caption>Anclajes geográficos y límites de representación</caption>
            <thead><tr><th>Caso</th><th>Región</th><th>Periodo</th><th>Anclaje</th></tr></thead>
            <tbody>
              {cases.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.name}</th>
                  <td>{item.region}</td>
                  <td>{item.period}</td>
                  <td>{item.anchorNote}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}
