import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import AfricanMedicineArchiveLab from "../../components/AfricanMedicineArchiveLab";
import AmericasMedicineArchiveLab from "../../components/AmericasMedicineArchiveLab";
import ClinicalEvidenceLab from "../../components/ClinicalEvidenceLab";
import DiagnosticEvidenceLab from "../../components/DiagnosticEvidenceLab";
import DocumentaryMedicineLab from "../../components/DocumentaryMedicineLab";
import EastAsianMedicineLab from "../../components/EastAsianMedicineLab";
import GreekHellenisticMedicineLab from "../../components/GreekHellenisticMedicineLab";
import HistoricalMedicineLab from "../../components/HistoricalMedicineLab";
import IslamicWorldsMedicineNetworkLab from "../../components/IslamicWorldsMedicineNetworkLab";
import MedievalEuropeJewishMedicineNetworkLab from "../../components/MedievalEuropeJewishMedicineNetworkLab";
import RomanByzantineMedicineLab from "../../components/RomanByzantineMedicineLab";
import SouthAsianMedicineLab from "../../components/SouthAsianMedicineLab";
import { africanMedicineArchives } from "../../lib/african-medicine-archives";
import { americasMedicineArchives } from "../../lib/americas-medicine-archives";
import { diagnosticEvidence } from "../../lib/diagnostic-evidence";
import { documentaryMedicineEvidence } from "../../lib/documentary-medicine-evidence";
import { eastAsianMedicineEvidence } from "../../lib/east-asian-medicine-evidence";
import { greekHellenisticMedicineEvidence } from "../../lib/greek-hellenistic-medicine-evidence";
import { historicalMedicineEvidence } from "../../lib/historical-medicine-evidence";
import { islamicWorldsMedicineNetworks } from "../../lib/islamic-worlds-medicine-networks";
import { medievalEuropeJewishMedicineNetworks } from "../../lib/medieval-europe-jewish-medicine-networks";
import { medicineEvidence } from "../../lib/medicine-evidence";
import { romanByzantineMedicineEvidence } from "../../lib/roman-byzantine-medicine-evidence";
import { southAsianMedicineEvidence } from "../../lib/south-asian-medicine-evidence";
import { getCatalog } from "../../lib/public-data";
import { createPageMetadata } from "../../lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Historia de la medicina — archivos, cuidado y evidencia",
  description: "Cómo reconstruimos la historia mundial de la medicina desde huesos, manuscritos, cánones, instituciones y resultados sin confundir archivo, práctica o eficacia.",
  pathname: "/medicina",
  image: "/assets/visuales/hero-med-012-europa-medieval-tradiciones-judias.png",
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
          src="/assets/visuales/hero-med-012-europa-medieval-tradiciones-judias.png"
          alt="Mesa editorial con códice, objetos domésticos, fascículos, traducciones, instrumentos y maqueta hospitalaria genéricos unidos por hilos no lineales"
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="medicine-hero-shade" />
        <div className="medicine-hero-copy">
          <p className="eyebrow">Historia mundial de la medicina</p>
          <h1>Un currículo no hereda una consulta</h1>
          <p>Códices, traducciones, currículos, licencias, contratos y reglas conservan productos distintos. Testigo, versión, currículo, practicante, encuentro y alcance impiden convertir autoridad en atención.</p>
          <div>
            <Link className="button button-primary" href="#europa-medieval">Seguir la cadena <ArrowDown aria-hidden="true" /></Link>
            <Link className="medicine-text-link" href="/15_medicina/INVESTIGACION_MED_012_EUROPA_MEDIEVAL_TRADICIONES_JUDIAS">Leer MED-012 <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
        <p className="medicine-visual-limit">Composición editorial no probatoria: utilería genérica; no reproduce códice, contrato, instrumento, hospital, comunidad o práctica reales.</p>
      </header>

      <section className="medicine-boundary">
        <div><ShieldCheck aria-hidden="true" /><p className="eyebrow">Límite de seguridad</p><h2>Historia y método, no consulta</h2></div>
        <p>El portal no solicita síntomas, antecedentes, imágenes, estudios ni identificadores. Reconstruye cómo sabemos lo que sabemos y no calcula riesgo individual ni recomienda pruebas o tratamientos.</p>
      </section>

      <section className="medicine-principles" aria-labelledby="medicine-principles-title">
        <header><p className="eyebrow">Contrato de lectura</p><h2 id="medicine-principles-title">Cuatro cortafuegos</h2></header>
        <div>{principles.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="europa-medieval" aria-labelledby="medieval-europe-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">MED-012 · laboratorio de autoridad y encuentro</p><h2 id="medieval-europe-lab-title">Del testigo al alcance</h2></div>
          <p>Elige un archivo. Seis capas separan versión, enseñanza, agente y encuentro sin convertir currículo, licencia o identidad en práctica.</p>
        </div>
        <MedievalEuropeJewishMedicineNetworkLab data={medievalEuropeJewishMedicineNetworks} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="redes-islamicas" aria-labelledby="islamic-worlds-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">MED-011 · laboratorio de redes y versiones</p><h2 id="islamic-worlds-lab-title">Del testigo a la consecuencia</h2></div>
          <p>Elige una red. Seis capas separan copia, operación, institución y alcance sin convertir circulación en eficacia.</p>
        </div>
        <IslamicWorldsMedicineNetworkLab data={islamicWorldsMedicineNetworks} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="archivos-americas" aria-labelledby="americas-archives-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">MED-010 · laboratorio de cuerpo, planta y códice</p><h2 id="americas-archives-lab-title">Del archivo al límite</h2></div>
          <p>Elige un caso. Seis capas separan procedencia, señal, práctica y consecuencia sin fabricar una historia clínica.</p>
        </div>
        <AmericasMedicineArchiveLab data={americasMedicineArchives} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="archivos-africanos" aria-labelledby="african-archives-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">MED-009 · laboratorio de archivo y silencio</p><h2 id="african-archives-lab-title">Del archivo al límite</h2></div>
          <p>Elige un caso. Seis capas separan archivo, procedencia, señal, inferencia, contraste y límite sin fabricar continuidad.</p>
        </div>
        <AfricanMedicineArchiveLab data={africanMedicineArchives} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="infraestructura" aria-labelledby="roman-byzantine-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">MED-008 · laboratorio de infraestructura y acceso</p><h2 id="roman-byzantine-lab-title">Del vestigio a la consecuencia</h2></div>
          <p>Elige un archivo. Seis capas separan identificación, función, operación, acceso y consecuencia observada.</p>
        </div>
        <RomanByzantineMedicineLab data={romanByzantineMedicineEvidence} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="observacion" aria-labelledby="greek-hellenistic-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">MED-007 · laboratorio de archivo y práctica</p><h2 id="greek-hellenistic-lab-title">Del testimonio a la consecuencia</h2></div>
          <p>Elige un archivo. Seis capas separan testimonio, lectura, género, operación, institución y consecuencia observada.</p>
        </div>
        <GreekHellenisticMedicineLab data={greekHellenisticMedicineEvidence} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="canones" aria-labelledby="east-asian-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">MED-006 · laboratorio de canon y práctica</p><h2 id="east-asian-lab-title">Del testigo a la consecuencia</h2></div>
          <p>Elige un archivo. Seis capas separan testigo, lectura, estrato, operación, institución y consecuencia observada.</p>
        </div>
        <EastAsianMedicineLab data={eastAsianMedicineEvidence} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="corpus" aria-labelledby="south-asian-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">MED-005 · laboratorio de corpus y práctica</p><h2 id="south-asian-lab-title">Del testimonio a la consecuencia</h2></div>
          <p>Elige un caso. Seis capas separan soporte, lectura, estrato, circulación, práctica situada y consecuencia observada.</p>
        </div>
        <SouthAsianMedicineLab data={southAsianMedicineEvidence} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="documentos" aria-labelledby="documentary-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">MED-004 · laboratorio documental</p><h2 id="documentary-lab-title">Del objeto a la consecuencia</h2></div>
          <p>Elige un caso. Seis capas separan objeto, texto, género, circulación, práctica situada y consecuencia.</p>
        </div>
        <DocumentaryMedicineLab data={documentaryMedicineEvidence} />
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
