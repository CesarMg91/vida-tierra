"use client";

import Link from "next/link";
import { ArrowRight, BookOpenText, FlaskConical, Link2 } from "lucide-react";
import { useId, useState } from "react";
import type { SouthwestAsiaData } from "../lib/civilization-swasia";
import styles from "./CivilizationSouthwestAsia.module.css";

export default function CivilizationSouthwestAsiaStyled({ data }: { data: SouthwestAsiaData }) {
  const [selectedId, setSelectedId] = useState(data.regions[0]?.id ?? "");
  const selectId = useId();
  const region = data.regions.find((item) => item.id === selectedId) ?? data.regions[0];
  if (!region) return <p role="status">No hay un expediente regional publicado.</p>;

  return (
    <div className={styles.lab}>
      <div className={styles.toolbar}>
        <div>
          <label htmlFor={selectId}>Paisaje de evidencia</label>
          <select id={selectId} value={region.id} onChange={(event) => setSelectedId(event.target.value)}>
            {data.regions.map((item) => <option key={item.id} value={item.id}>{item.label} · {item.window}</option>)}
          </select>
        </div>
        <p><span>Ventana</span>{region.window}</p>
      </div>
      <div className={styles.case}>
        <header><p>{region.label}</p><h3>{region.sites.join(" · ")}</h3></header>
        <dl>
          <div><dt>Archivo observado</dt><dd>{region.archive}</dd></div>
          <div><dt>Inferencia permitida</dt><dd>{region.inference}</dd></div>
          <div className={styles.limit}><dt>Límite</dt><dd>{region.limit}</dd></div>
        </dl>
        <div className={styles.refs} aria-label={`Referencias de ${region.label}`}>
          {region.claimIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><FlaskConical aria-hidden="true" /> {id}</Link>)}
          {region.evidenceIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><Link2 aria-hidden="true" /> {id}</Link>)}
          {region.sourceIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><BookOpenText aria-hidden="true" /> {id}</Link>)}
        </div>
      </div>
      <footer className={styles.footer}>
        <div><strong>Cinco paisajes, ninguna cuna.</strong><p>Cambiar de región cambia el archivo, el reloj y el límite; no asigna una posición en una escala de avance.</p></div>
        <Link className="button civilizations-ghost-button" href={`/${data.researchSlug}`}>Abrir CIV-003 <ArrowRight aria-hidden="true" /></Link>
      </footer>
    </div>
  );
}
