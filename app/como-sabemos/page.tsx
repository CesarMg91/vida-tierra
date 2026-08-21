import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, CreativeCommons, Gauge, GitBranch, Quote, ShieldCheck } from "lucide-react";
import { createPageMetadata } from "../../lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Cómo sabemos — metodología y autoría",
  description: "Metodología, niveles de confianza, autoría, privacidad y licencias de ¿Cómo sabemos lo que sabemos?",
  pathname: "/como-sabemos",
});

export default function HowWeKnowPage() {
  return (
    <div className="page-shell methods-page">
      <header className="portal-hero"><p className="eyebrow">Método · límites · autoría</p><h1>La incertidumbre no se esconde: se estructura</h1><p>Cada investigación separa lo observado, medido e inferido; declara supuestos, alternativas, controversias, confianza y posibles falsadores.</p></header>
      <div className="method-grid">
        <article><GitBranch aria-hidden="true" /><h2>Cadena de inferencia</h2><p>Del objeto actual al claim sobre el pasado, con cada puente visible.</p><Link href="/METHODOLOGY">Leer metodología <ArrowRight aria-hidden="true" /></Link></article>
        <article><Gauge aria-hidden="true" /><h2>Confianza A–E</h2><p>La calificación pertenece a una proposición concreta y conserva condiciones.</p><Link href="/00_metodologia/CONFIDENCE_SYSTEM">Ver sistema <ArrowRight aria-hidden="true" /></Link></article>
        <article><BookOpenCheck aria-hidden="true" /><h2>Autoría y actualización</h2><p>El historial de Git conserva cambios; el frontmatter indica revisión y estado.</p><Link href="/CONTRIBUTING">Cómo contribuir <ArrowRight aria-hidden="true" /></Link></article>
        <article><CreativeCommons aria-hidden="true" /><h2>Licencias abiertas</h2><p>Contenido CC BY 4.0, código MIT y obras citadas bajo sus licencias originales.</p><Link href="/LICENCIAS">Reutilizar con crédito <ArrowRight aria-hidden="true" /></Link></article>
      </div>
      <section className="launch-transparency" aria-labelledby="launch-transparency-title">
        <div>
          <p className="eyebrow">Transparencia pública</p>
          <h2 id="launch-transparency-title">Leer sin entregar tu identidad</h2>
          <p>No hay cuentas, comentarios ni perfiles. El progreso permanece en tu dispositivo y la analítica agregada descarta las consultas escritas.</p>
        </div>
        <div className="launch-transparency-links">
          <Link href="/privacidad"><ShieldCheck aria-hidden="true" /><span><strong>Privacidad</strong>Qué se guarda y qué no se recopila</span><ArrowRight aria-hidden="true" /></Link>
          <a href="https://github.com/CesarMg91/vida-tierra/blob/main/CITATION.cff" target="_blank" rel="noreferrer"><Quote aria-hidden="true" /><span><strong>Citar el proyecto</strong>Metadatos reutilizables de la versión 0.2.1</span><ArrowRight aria-hidden="true" /></a>
        </div>
      </section>
    </div>
  );
}
