import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import ClinicalEvidenceLab from "../../components/ClinicalEvidenceLab";
import { medicineEvidence } from "../../lib/medicine-evidence";
import { getCatalog } from "../../lib/public-data";
import { createPageMetadata } from "../../lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Medicina — evidencia, efectos y decisiones",
  description: "Cómo auditamos intervenciones médicas y quirúrgicas: comparadores, efectos, daños, sesgos, aplicabilidad y decisiones sin consejo personal.",
  pathname: "/medicina",
  image: "/assets/visuales/hero-med-001-intervenciones.png",
});

const principles = [
  ["Pregunta antes que etiqueta", "Población, estrategias, desenlace, tiempo y estimando deben existir antes de interpretar."],
  ["Daños con el mismo protagonismo", "Denominador, gravedad, horizonte e incertidumbre no quedan relegados a una nota."],
  ["Cirugía como sistema", "Técnica, operador, equipo, centro y aprendizaje forman parte de la evidencia."],
  ["Decisión situada", "El promedio informa; no decide automáticamente por una persona."],
] as const;

export default function MedicinePage() {
  const dossiers = getCatalog().filter((record) => record.key.startsWith("MED-"));
  return (
    <div className="medicine-experience">
      <header className="medicine-hero">
        <Image src="/assets/visuales/hero-med-001-intervenciones.png" alt="Mesa editorial con protocolo, comparadores, desenlaces, balance y población" fill preload fetchPriority="high" sizes="100vw" />
        <div className="medicine-hero-shade" />
        <div className="medicine-hero-copy">
          <p className="eyebrow">Nueva serie temática · Medicina</p>
          <h1>Una mejoría no basta</h1>
          <p>Del tratamiento observado al efecto causal: comparadores, desenlaces, daños, cirugía y aplicabilidad con los límites a la vista.</p>
          <div><Link className="button button-primary" href="#laboratorio">Abrir laboratorio <ArrowDown aria-hidden="true" /></Link><Link className="medicine-text-link" href="/15_medicina/INVESTIGACION_MED_001_INTERVENCIONES_EFICACIA_DANOS">Leer MED-001 <ArrowRight aria-hidden="true" /></Link></div>
        </div>
        <p className="medicine-visual-limit">Composición editorial contemporánea; no contiene datos clínicos ni representa un ensayo real.</p>
      </header>

      <section className="medicine-boundary">
        <div><ShieldCheck aria-hidden="true" /><p className="eyebrow">Límite de seguridad</p><h2>Educación metodológica, no consulta</h2></div>
        <p>Este portal no solicita síntomas, antecedentes, imágenes, estudios ni identificadores. No calcula riesgo individual ni recomienda iniciar, suspender o elegir tratamientos.</p>
      </section>

      <section className="medicine-principles" aria-labelledby="medicine-principles-title">
        <header><p className="eyebrow">Contrato de lectura</p><h2 id="medicine-principles-title">Cuatro cortafuegos</h2></header>
        <div>{principles.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="medicine-lab-section" id="laboratorio" aria-labelledby="medicine-lab-title">
        <div className="section-heading"><div><p className="eyebrow">Laboratorio de evidencia clínica</p><h2 id="medicine-lab-title">De la pregunta a la decisión</h2></div><p>Elige un caso. Cada capa separa archivo observado, inferencia permitida y límite.</p></div>
        <ClinicalEvidenceLab data={medicineEvidence} />
      </section>

      <section className="medicine-method-grid" aria-labelledby="medicine-method-title">
        <header><p className="eyebrow">Lo que la etiqueta no garantiza</p><h2 id="medicine-method-title">Reporte, sesgo y aplicabilidad son juicios distintos</h2></header>
        <div>
          <article><BookOpen aria-hidden="true" /><h3>Reportar</h3><p>SPIRIT, CONSORT, PRISMA y TIDieR muestran qué se planeó y qué ocurrió. No certifican validez.</p></article>
          <article><Stethoscope aria-hidden="true" /><h3>Estimar</h3><p>RoB 2, el estimando y el intervalo pertenecen a un resultado concreto, no al prestigio del artículo.</p></article>
          <article><HeartPulse aria-hidden="true" /><h3>Decidir</h3><p>Certeza, riesgo basal, daños, carga, factibilidad y preferencias completan el puente clínico.</p></article>
        </div>
      </section>

      <section className="medicine-dossiers" aria-labelledby="medicine-dossiers-title">
        <div className="section-heading"><div><p className="eyebrow">Corpus canónico</p><h2 id="medicine-dossiers-title">{dossiers.length} expediente médico auditado</h2></div><p>La experiencia deriva del Markdown y de los registros maestros; no duplica conclusiones.</p></div>
        <div>{dossiers.map((record) => <article key={record.key}><span>{record.key}</span><p>{record.status} · {record.readingMinutes} min</p><h3>{record.shortTitle}</h3><p>{record.summary}</p><Link href={`/${record.slug}`}>Abrir expediente <ArrowRight aria-hidden="true" /></Link></article>)}</div>
      </section>
    </div>
  );
}
