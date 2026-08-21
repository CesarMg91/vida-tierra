"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Circle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { CatalogListingRecord, ReaderStateV1 } from "../lib/contracts";
import { EMPTY_READER_STATE, readReaderState, writeReaderState } from "../lib/reader-state";

export default function JourneyClient({ records }: { records: CatalogListingRecord[] }) {
  const [state, setState] = useState<ReaderStateV1>(EMPTY_READER_STATE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      setState(readReaderState(window.localStorage));
    } finally {
      setReady(true);
    }
  }, []);

  const completed = useMemo(() => new Set(state.completed), [state.completed]);
  const numeric = records.filter((record) => record.order !== null);
  const progress = numeric.length ? Math.round((numeric.filter((record) => completed.has(record.slug)).length / numeric.length) * 100) : 0;

  function update(next: ReaderStateV1) {
    setState(next);
    try {
      writeReaderState(window.localStorage, next);
    } catch {}
  }

  function toggle(slug: string) {
    const next = completed.has(slug) ? state.completed.filter((item) => item !== slug) : [...state.completed, slug];
    update({ ...state, completed: next });
  }

  function visit(record: CatalogListingRecord) {
    update({
      ...state,
      lastVisited: { slug: record.slug, progress: 0, updatedAt: new Date().toISOString() },
    });
  }

  return (
    <div className="journey-app">
      <div className="journey-progress" aria-live="polite">
        <div>
          <span>Progreso local</span>
          <strong>{ready ? `${progress}%` : "—"}</strong>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-label="Progreso del viaje"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <span style={{ width: `${progress}%` }} />
        </div>
        <p>Se guarda sólo en este dispositivo. Puedes marcar cada parada como completada.</p>
      </div>

      <ol className="journey-list">
        {numeric.map((record) => {
          const isComplete = completed.has(record.slug);
          return (
            <li key={record.slug} className={isComplete ? "is-complete" : ""}>
              <div className="journey-number">{String(record.order).padStart(3, "0")}</div>
              <div className="journey-image">
                <Image src={record.hero} alt="" fill sizes="(max-width: 720px) 92vw, 240px" />
              </div>
              <div className="journey-copy">
                <span>{record.collection} · {record.era}</span>
                <h2>{record.shortTitle}</h2>
                <p>{record.summary}</p>
                <Link href={`/${record.slug}`} onClick={() => visit(record)}>
                  Abrir investigación <ArrowRight aria-hidden="true" />
                </Link>
              </div>
              <button type="button" className="complete-button" onClick={() => toggle(record.slug)} aria-pressed={isComplete}>
                {isComplete ? <Check aria-hidden="true" /> : <Circle aria-hidden="true" />}
                {isComplete ? "Completada" : "Marcar leída"}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
