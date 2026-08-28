import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import AfricanMedicineArchiveLab from "../../components/AfricanMedicineArchiveLab";
import AmericasMedicineArchiveLab from "../../components/AmericasMedicineArchiveLab";
import AnatomyPrintEvidenceLab from "../../components/AnatomyPrintEvidenceLab";
import ClinicalEvidenceLab from "../../components/ClinicalEvidenceLab";
import ColonialEncountersEvidenceLab from "../../components/ColonialEncountersEvidenceLab";
import DiagnosticEvidenceLab from "../../components/DiagnosticEvidenceLab";
import DocumentaryMedicineLab from "../../components/DocumentaryMedicineLab";
import EastAsianMedicineLab from "../../components/EastAsianMedicineLab";
import EpidemicsQuarantineEvidenceLab from "../../components/EpidemicsQuarantineEvidenceLab";
import GreekHellenisticMedicineLab from "../../components/GreekHellenisticMedicineLab";
import HistoricalMedicineLab from "../../components/HistoricalMedicineLab";
import IndianOceanEurasianMedicineRouteLab from "../../components/IndianOceanEurasianMedicineRouteLab";
import IslamicWorldsMedicineNetworkLab from "../../components/IslamicWorldsMedicineNetworkLab";
import MedievalEuropeJewishMedicineNetworkLab from "../../components/MedievalEuropeJewishMedicineNetworkLab";
import RomanByzantineMedicineLab from "../../components/RomanByzantineMedicineLab";
import SouthAsianMedicineLab from "../../components/SouthAsianMedicineLab";
import { africanMedicineArchives } from "../../lib/african-medicine-archives";
import { americasMedicineArchives } from "../../lib/americas-medicine-archives";
import { anatomyPrintEvidence } from "../../lib/anatomy-print-evidence";
import { colonialEncountersEvidence } from "../../lib/colonial-encounters-evidence";
import { diagnosticEvidence } from "../../lib/diagnostic-evidence";
import { documentaryMedicineEvidence } from "../../lib/documentary-medicine-evidence";
import { eastAsianMedicineEvidence } from "../../lib/east-asian-medicine-evidence";
import { epidemicsQuarantineEvidence } from "../../lib/epidemics-quarantine-evidence";
import { greekHellenisticMedicineEvidence } from "../../lib/greek-hellenistic-medicine-evidence";
import { historicalMedicineEvidence } from "../../lib/historical-medicine-evidence";
import { indianOceanEurasianMedicineRoutes } from "../../lib/indian-ocean-eurasian-medicine-routes";
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
  image: "/assets/visuales/hero-med-016-anatomia-diseccion-imprenta.png",
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
          src="/assets/visuales/hero-med-016-anatomia-diseccion-imprenta.png"
          alt="Mesa editorial con manuscritos, instrumental histórico, diagramas anatómicos, tipos de imprenta y marcas de corrección conectados por hilos"
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="medicine-hero-shade" />
        <div className="medicine-hero-copy">
          <p className="eyebrow">Historia mundial de la medicina</p>
          <h1>Un cuerpo abierto no corrige un libro por sí solo</h1>
          <p>Cuerpo, procedimiento, imagen, texto, comparación, corrección y circulación forman una cadena histórica. Cada capa exige procedencia y límite antes de llamar verdadera, nueva o clínica a una anatomía.</p>
          <div>
            <Link className="button button-primary" href="#anatomia-imprenta">Auditar la corrección <ArrowDown aria-hidden="true" /></Link>
            <Link className="medicine-text-link" href="/15_medicina/INVESTIGACION_MED_016_ANATOMIA_DISECCION_IMPRENTA">Leer MED-016 <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
        <p className="medicine-visual-limit">Composición editorial no probatoria: utilería genérica; no reproduce cuerpo, disección, manuscrito, lámina, taller o acontecimiento reales.</p>
      </header>

      <section className="medicine-boundary">
        <div><ShieldCheck aria-hidden="true" /><p className="eyebrow">Límite de seguridad</p><h2>Historia y método, no consulta</h2></div>
        <p>El portal no solicita síntomas, antecedentes, imágenes, estudios ni identificadores. Reconstruye cómo sabemos lo que sabemos y no calcula riesgo individual ni recomienda pruebas o tratamientos.</p>
      </section>

      <section className="medicine-principles" aria-labelledby="medicine-principles-title">
        <header><p className="eyebrow">Contrato de lectura</p><h2 id="medicine-principles-title">Cuatro cortafuegos</h2></header>
        <div>{principles.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="anatomia-imprenta" aria-labelledby="anatomy-print-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">MED-016 · laboratorio de anatomía e imprenta</p><h2 id="anatomy-print-lab-title">Del cuerpo disponible a la circulación</h2></div>
          <p>Elige un expediente. Siete capas separan acceso, procedimiento, representación, autoridad, contraste, revisión y recepción sin convertir disección, imagen o imprenta en verdad automática.</p>
        </div>
        <AnatomyPrintEvidenceLab data={anatomyPrintEvidence} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="encuentros-coloniales" aria-labelledby="colonial-encounters-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">MED-015 · laboratorio de encuentros coloniales</p><h2 id="colonial-encounters-lab-title">De la exposición a la supervivencia</h2></div>
          <p>Elige un expediente. Siete capas separan conexión, coerción, cuerpo, archivo, agencia y desenlace sin reducir la catástrofe a «contacto» ni la continuidad a ausencia de daño.</p>
        </div>
        <ColonialEncountersEvidenceLab data={colonialEncountersEvidence} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="epidemias-cuarentenas" aria-labelledby="epidemics-quarantine-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">MED-014 · laboratorio de epidemias y respuestas</p><h2 id="epidemics-quarantine-lab-title">Del testimonio a la desigualdad</h2></div>
          <p>Elige un expediente. Seis capas separan diagnóstico, denominador, política, ejecución y carga social sin convertir relato, genoma, entierro u orden en una conclusión heredada.</p>
        </div>
        <EpidemicsQuarantineEvidenceLab data={epidemicsQuarantineEvidence} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="rutas-indico-eurasia" aria-labelledby="indian-ocean-eurasia-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">MED-013 · laboratorio de conexión y transferencia</p><h2 id="indian-ocean-eurasia-lab-title">De la huella al alcance</h2></div>
          <p>Elige una ruta o archivo. Seis capas separan conexión, mediación y recepción sin convertir presencia, traducción o imperio en práctica o efecto.</p>
        </div>
        <IndianOceanEurasianMedicineRouteLab data={indianOceanEurasianMedicineRoutes} />
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
          <div><p className="eyebrow">MED-011 · laboratorio de redes y versiones</p><h2 id="islamic-worlds-lab-title">Del testigo a la consecuencia en redes</h2></div>
          <p>Elige una red. Seis capas separan copia, operación, institución y alcance sin convertir circulación en eficacia.</p>
        </div>
        <IslamicWorldsMedicineNetworkLab data={islamicWorldsMedicineNetworks} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="archivos-americas" aria-labelledby="americas-archives-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">MED-010 · laboratorio de cuerpo, planta y códice</p><h2 id="americas-archives-lab-title">Del archivo americano al límite</h2></div>
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
          <div><p className="eyebrow">MED-007 · laboratorio de archivo y práctica</p><h2 id="greek-hellenistic-lab-title">Del testimonio mediterráneo a la consecuencia</h2></div>
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
