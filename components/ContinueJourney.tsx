"use client";

import Link from "next/link";
import { ArrowRight, History } from "lucide-react";
import { useEffect, useState } from "react";
import type { CatalogProgressRecord, ReaderStateV1 } from "../lib/contracts";
import { readReaderState } from "../lib/reader-state";

export default function ContinueJourney({ catalog }: { catalog: CatalogProgressRecord[] }) {
  const [state, setState] = useState<ReaderStateV1 | null>(null);
  useEffect(() => {
    try {
      setState(readReaderState(window.localStorage));
    } catch {
      setState({ completed: [], bookmarks: [], preferredMode: "summary" });
    }
  }, []);

  if (!state) return <div className="continue-placeholder" aria-hidden="true" />;
  const last = state.lastVisited && catalog.find((record) => record.slug === state.lastVisited?.slug);
  const next = catalog.find((record) => record.order !== null && !state.completed.includes(record.slug));
  const target = last || next || catalog.find((record) => record.order === 1);
  if (!target) return null;
  const resumeHash = last && state.lastVisited?.heading ? `#${state.lastVisited.heading}` : "";

  return (
    <Link className="continue-card" href={`/${target.slug}${resumeHash}`}>
      <History aria-hidden="true" />
      <span>
        <small>{last ? "Continúa donde te quedaste" : "Tu próximo paso"}</small>
        <strong>{target.shortTitle}</strong>
      </span>
      <ArrowRight aria-hidden="true" />
    </Link>
  );
}
