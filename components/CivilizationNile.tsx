"use client";

import Link from "next/link";
import { ArrowRight, BookOpenText, FlaskConical, Link2 } from "lucide-react";
import { useId, useState } from "react";
import type { NileData } from "../lib/civilization-nile";
import styles from "./CivilizationSouthwestAsia.module.css";

export default function CivilizationNile({ data }: { data: NileData }) {
  const [selectedId, setSelectedId] = useState(data.archives[0]?.id ?? "");
  const selectId = useId();
  const item = data.archives.find((entry) => entry.id === selectedId) ?? data.archives[0];
  if (!item) return <p role="status">No hay un expediente regional publicado.</p>;

  return (
    <div className={styles.lab}>
      <div className={styles.toolbar}>
        <div>
          <label htmlFor={selectId}>Archivo</label>
          <select id={selectId} value={item.id} onChange={(event) => setSelectedId(event.target.value)}>
            {data.archives.map((entry) => <option key={entry.id} value={entry.id}>{entry.label} · {entry.window}</option>)}
          </select>
        </div>
        <p><span>Ventana</span>{item.window}</p>
      </div>
      <div className={styles.case}>
        <header><p>{item.label}</p><h3>{item.sites.join(" · ")}</h3></header>
        <dl>
          <div><dt>Archivo observado</dt><dd>{item.archive}</dd></div>
          <div><dt>Inferencia permitida</dt><dd>{item.inference}</dd></div>
          <div className={styles.limit}><dt>Límite</dt><dd>{item.limit}</dd></div>
        </dl>
        <div className={styles.refs} aria-label={`Adversario y referencias de ${item.label}`}>
          <p style={{ flexBasis: "100%", margin: "0 0 .4rem", color: "#d9bd8d", fontSize: ".78rem", lineHeight: 1.6 }}><strong>Adversario más fuerte:</strong> {item.adversary}</p>
          {item.claimIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><FlaskConical aria-hidden="true" /> {id}</Link>)}
          {item.evidenceIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><Link2 aria-hidden="true" /> {id}</Link>)}
          {item.sourceIds.map((id) => <Link key={id} href={`/evidencia?id=${encodeURIComponent(id)}`}><BookOpenText aria-hidden="true" /> {id}</Link>)}
        </div>
      </div>
      <footer className={styles.footer}>
        <div><strong>Varios polos, ninguna periferia.</strong><p>Cambiar de archivo cambia el reloj, la inferencia y el límite; ningún archivo fecha la «unificación».</p></div>
        <Link className="button civilizations-ghost-button" href={`/${data.researchSlug}`}>Abrir CIV-004 <ArrowRight aria-hidden="true" /></Link>
      </footer>
    </div>
  );
}
