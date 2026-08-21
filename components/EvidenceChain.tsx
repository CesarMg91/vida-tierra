"use client";

import { Binary, BookMarked, Fingerprint, MessageSquareText, Microscope } from "lucide-react";
import { useState, type KeyboardEvent } from "react";

const steps = [
  {
    label: "Claim",
    icon: MessageSquareText,
    description: "Una afirmación acotada: precisa qué se sostiene, con qué confianza y bajo qué condiciones.",
  },
  {
    label: "Evidencia",
    icon: Fingerprint,
    description: "La observación o medición que restringe la afirmación, sin confundir objeto con interpretación.",
  },
  {
    label: "Fuente",
    icon: BookMarked,
    description: "El registro auditable donde se publican datos, procedimiento, acceso y limitaciones.",
  },
  {
    label: "Método",
    icon: Microscope,
    description: "El instrumento, calibración y modelo que convierten una señal en una medida comparable.",
  },
  {
    label: "Dato",
    icon: Binary,
    description: "El valor, imagen, secuencia o distribución original, acompañado por incertidumbre y contexto.",
  },
];

export default function EvidenceChain() {
  const [active, setActive] = useState(0);

  function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % steps.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + steps.length) % steps.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = steps.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`evidence-step-tab-${next}`)?.focus();
  }

  return (
    <div className="evidence-chain">
      <div className="evidence-steps" role="tablist" aria-label="Cadena de evidencia">
        {steps.map(({ label, icon: Icon }, index) => (
          <button
            key={label}
            type="button"
            role="tab"
            id={`evidence-step-tab-${index}`}
            aria-selected={active === index}
            aria-controls="evidence-step-detail"
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => moveTab(event, index)}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </button>
        ))}
      </div>
      <p id="evidence-step-detail" role="tabpanel" aria-labelledby={`evidence-step-tab-${active}`} tabIndex={0}>
        <strong>{steps[active].label}.</strong> {steps[active].description}
      </p>
    </div>
  );
}
