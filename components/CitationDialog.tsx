"use client";

import { Check, Copy, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { formatCitation, type CitationFormat } from "../lib/citations";

export default function CitationDialog({
  record,
  onClose,
}: {
  record: { id: string; title: string; updatedAt: string };
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [format, setFormat] = useState<CitationFormat>("markdown");
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");
  const citation = useMemo(() => formatCitation({ ...record, url }, format), [format, record, url]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    setUrl(window.location.href);
    return () => dialog?.close();
  }, []);

  async function copyCitation() {
    try {
      await navigator.clipboard.writeText(citation);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="citation-dialog"
      aria-labelledby="citation-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === dialogRef.current) onClose(); }}
    >
      <div className="citation-panel">
        <header>
          <div><span>Cita reutilizable</span><h2 id="citation-title">Citar esta investigación</h2></div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Cerrar citas"><X aria-hidden="true" /></button>
        </header>
        <div className="citation-tabs" role="group" aria-label="Formato de cita">
          {(["markdown", "apa", "bibtex"] as CitationFormat[]).map((item) => (
            <button key={item} type="button" aria-pressed={format === item} onClick={() => setFormat(item)}>
              {item === "markdown" ? "Markdown" : item === "apa" ? "APA" : "BibTeX"}
            </button>
          ))}
        </div>
        <pre><code>{citation}</code></pre>
        <button type="button" className="button button-primary" onClick={() => void copyCitation()}>
          {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          {copied ? "Copiada" : "Copiar cita"}
        </button>
      </div>
    </dialog>
  );
}
