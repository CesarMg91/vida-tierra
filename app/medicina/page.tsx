import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import ClinicalEvidenceLab from "../../components/ClinicalEvidenceLab";
import DiagnosticEvidenceLab from "../../components/DiagnosticEvidenceLab";
import HistoricalMedicineLab from "../../components/HistoricalMedicineLab";
import { diagnosticEvidence } from "../../lib/diagnostic-evidence";
import { historicalMedicineEvidence } from "../../lib/historical-medicine-evidence";
import { medicineEvidence } from "../../lib/medicine-evidence";
import { getCatalog } from "../../lib/public-data";
import { createPageMetadata } from "../../lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Historia de la medicina — archivos, cuidado y evidencia",
  description: "Cómo reconstruimos la historia mundial de la medicina desde huesos, biomoléculas, objetos y textos sin confundir huella, diagnóstico, práctica o eficacia.",
  pathname: "/medicina",
  image: "/assets/visuales/hero-med-003-origenes-medicina.png",
});

const principles = [
  ["Archivo antes que relato", "Espécimen, procedencia, fecha y asociación se auditan antes de interpretar una huella."],
  ["Lesión no es diagnóstico", "Diferencial, fisiopatología y conservación limitan lo que un cuerpo puede demostrar."],
  ["Presencia no es práctica", "ADN, residuo, objeto o texto no heredan automáticamente síntomas, intención o eficacia."],
  ["Decisión situada", "En la medicina contemporánea, el promedio informa; no decide automáticamente por una persona."],
] as const;

export default function MedicinePage() {
  const dossiers = getCatalog().filter((record) => record.key.startsWith("MED-"));

  return (
    <div className="medicine-experience">
      <header className="medicine-hero medicine-history-hero">
        <Image
          src="/assets/visuales/hero-med-003-origenes-medicina.png"
          alt="Mesa de conservación con seis archivos materiales separados para investigar los orígenes de la medicina"
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="medicine-hero-shade" />
        <div className="medicine-hero-copy">
          <p className="eyebrow">Historia mundial de la medicina</p>
          <h1>No existe un fósil único</h1>
          <p>De la huella superviviente al cuidado, la intervención y el sistema médico: una cronología global con cada salto inferencial a la vista.</p>
          <div>
            <Link className="button button-primary" href="#historia">Abrir archivo histórico <ArrowDown aria-hidden="true" /></Link>
            <Link className="medicine-text-link" href="/15_medicina/INVESTIGACION_MED_003_ORIGENES_ARCHIVO_CUIDADO">Leer MED-003 <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
        <p className="medicine-visual-limit">Composición editorial no probatoria; las bandejas no son coetáneas ni una colección arqueológica real.</p>
      </header>

      <section className="medicine-boundary">
        <div><ShieldCheck aria-hidden="true" /><p className="eyebrow">Límite de seguridad</p><h2>Historia y método, no consulta</h2></div>
        <p>El portal no solicita síntomas, antecedentes, imágenes, estudios ni identificadores. Reconstruye cómo sabemos lo que sabemos y no calcula riesgo individual ni recomienda pruebas o tratamientos.</p>
      </section>

      <section className="medicine-principles" aria-labelledby="medicine-principles-title">
        <header><p className="eyebrow">Contrato de lectura</p><h2 id="medicine-principles-title">Cuatro cortafuegos</h2></header>
        <div>{principles.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="medicine-lab-section historical-lab-section" id="historia" aria-labelledby="historical-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">Archivo histórico de la medicina</p><h2 id="historical-lab-title">De la huella al sistema</h2></div>
          <p>Elige un caso. Seis capas separan espécimen, contexto, huella, interpretación, conducta y sistema médico.</p>
        </div>
        <HistoricalMedicineLab data={historicalMedicineEvidence} />
      </section>

      <section className="medicine-lab-section" id="intervenciones" aria-labelledby="medicine-lab-title">
        <div className="section-heading"><div><p className="eyebrow">Laboratorio de evidencia clínica</p><h2 id="medicine-lab-title">De la pregunta a la decisión</h2></div><p>Elige un caso. Cada capa separa archivo observado, inferencia permitida y límite.</p></div>
        <ClinicalEvidenceLab data={medicineEvidence} />
      </section>

      <section className="medicine-lab-section diagnostic-lab-section" id="diagnostico" aria-labelledby="diagnostic-lab-title">
        <div className="section-heading"><div><p className="eyebrow">Laboratorio de evidencia diagnóstica</p><h2 id="diagnostic-lab-title">Una prueba no es una decisión</h2></div><p>Compara cuatro casos. Cada recorrido conserva población, prueba, referencia, rendimiento, manejo y desenlace.</p></div>
        <DiagnosticEvidenceLab data={diagnosticEvidence} />
      </section>

      <section className="medicine-method-grid" aria-labelledby="medicine-method-title">
        <header><p className="eyebrow">Lo que una etiqueta no garantiza</p><h2 id="medicine-method-title">Documento, validez y efecto son juicios distintos</h2></header>
        <div>
          <article><BookOpen aria-hidden="true" /><h3>Reconstruir</h3><p>Huesos, moléculas, objetos y textos conservan productos distintos. Ninguno sustituye automáticamente a los demás.</p></article>
          <article><Stethoscope aria-hidden="true" /><h3>Estimar</h3><p>Diseño, comparador, sesgo e intervalo pertenecen a una pregunta concreta, no al prestigio del archivo.</p></article>
          <article><HeartPulse aria-hidden="true" /><h3>Decidir</h3><p>Certeza, riesgo basal, daños, carga, factibilidad y preferencias completan el puente clínico contemporáneo.</p></article>
        </div>
      </section>

      <section className="medicine-dossiers" aria-labelledby="medicine-dossiers-title">
        <div className="section-heading"><div><p className="eyebrow">Corpus canónico</p><h2 id="medicine-dossiers-title">{dossiers.length} expedientes médicos auditados</h2></div><p>La experiencia deriva del Markdown y de los registros maestros; no duplica conclusiones.</p></div>
        <div>{dossiers.map((record) => <article key={record.key}><span>{record.key}</span><p>{record.status} · {record.readingMinutes} min</p><h3>{record.shortTitle}</h3><p>{record.summary}</p><Link href={`/${record.slug}`}>Abrir expediente <ArrowRight aria-hidden="true" /></Link></article>)}</div>
      </section>
    </div>
  );
}
