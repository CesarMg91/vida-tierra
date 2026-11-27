import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import PerceptionRealityLab from "../../components/PerceptionRealityLab";
import { perceptionRealityEvidence } from "../../lib/perception-reality-evidence";
import { consciousnessFundamentalEvidence } from "../../lib/consciousness-fundamental-evidence";
import { agentsParticlesEvidence } from "../../lib/agents-particles-evidence";
import { lillyEvidence } from "../../lib/lilly-evidence";
import { psychedelicsEvidence } from "../../lib/psychedelics-evidence";
import { animalConsciousnessEvidence } from "../../lib/animal-consciousness-evidence";
import { dreamsEvidence } from "../../lib/dreams-evidence";
import { meditationEvidence } from "../../lib/meditation-evidence";
import { spacetimeFundamentalEvidence } from "../../lib/spacetime-fundamental-evidence";
import { getCatalog } from "../../lib/public-data";
import { createPageMetadata } from "../../lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Conciencia y percepción — qué garantiza la observación",
  description: "Cómo auditamos si la percepción refleja la realidad, si el espacio-tiempo es fundamental y si la conciencia puede serlo, qué queda de la obra de John C. Lilly, qué conecta agentes conscientes con partículas, qué enseñan los psicodélicos sin recomendar su uso, qué podemos saber de la conciencia de otros animales, qué sabemos de los sueños y del sueño lúcido sin enseñar a inducirlos y qué miden los estudios de meditación sin enseñar a meditar, sin confundir un teorema, una conjetura, una observación, una interpretación y una tesis metafísica.",
  pathname: "/conciencia",
  image: "/assets/visuales/hero-con-001-percepcion-interfaz.png",
});

const principles = [
  ["Teorema no es organismo", "Un resultado demostrado dentro de un modelo sólo viaja a la biología con un puente explícito entre definiciones y seres vivos."],
  ["Construido no es falso", "Que el cerebro infiera o prediga lo que percibe no demuestra que la percepción deje de conservar estructura del mundo."],
  ["Engañable no es globalmente falso", "Un estímulo que explota un atajo perceptivo muestra un límite local, no la falsedad de todo el sistema."],
  ["Dependencia no es identidad", "Que la experiencia cambie con el cerebro fija la relación, no decide si el cerebro la produce, la organiza o es su apariencia."],
  ["Emergente no es ilusorio", "Si el espacio-tiempo surge de algo más profundo, sigue siendo la descripción correcta allí donde se ha probado, como la temperatura."],
  ["Interfaz no es metafísica", "Pasar de «percibimos una interfaz» o «el espacio-tiempo no es fundamental» a «la conciencia es lo fundamental» exige otro expediente."],
] as const;

const animalCopy = {
  dossier: "CON-007",
  emptyText: "No hay un expediente cargado. Es un estado vacío, no evidencia a favor ni en contra de la conciencia de otros animales.",
  firstLayer: "Sistema",
  footerTitle: "Una conducta no es una experiencia.",
  footerText: "Conducta, marcador, inferencia, sintiencia y estatus moral permanecen separados. Este expediente no es guía de bienestar animal ni recomendación de política pública.",
};

const dreamsCopy = {
  dossier: "CON-008",
  emptyText: "No hay un expediente cargado. Es un estado vacío, no evidencia a favor ni en contra de lo que sabemos de los sueños.",
  firstLayer: "Sistema",
  footerTitle: "Un informe no es un registro.",
  footerText: "Sistema, resultado, alcance, interpretación, salto y prueba permanecen separados entre informe, correlato, mecanismo y función. Este expediente no es una guía de inducción ni de interpretación de sueños.",
};

const meditationCopy = {
  dossier: "CON-009",
  emptyText: "No hay un expediente cargado. Es un estado vacío, no evidencia a favor ni en contra de lo que miden los estudios de meditación.",
  firstLayer: "Sistema",
  footerTitle: "Una práctica no es una revelación.",
  footerText: "Sistema, resultado, alcance, interpretación, salto y prueba permanecen separados entre práctica, informe, correlato, efecto y afirmación metafísica. Este expediente no es una guía de meditación ni una recomendación clínica.",
};

const psychedelicsCopy = {
  dossier: "CON-006",
  emptyText: "No hay un expediente cargado. Es un estado vacío, no evidencia a favor ni en contra de lo que enseñan los psicodélicos.",
  firstLayer: "Sistema",
  footerTitle: "Una perturbación no es una revelación.",
  footerText: "Mecanismo, resultado, alcance, interpretación, salto metafísico y prueba permanecen separados. Este expediente no recomienda el uso de ninguna sustancia.",
};

const agentsCopy = {
  dossier: "CON-005",
  emptyText: "No hay un expediente cargado. Es un estado vacío, no evidencia a favor ni en contra del puente entre agentes y partículas.",
  firstLayer: "Modelo",
  footerTitle: "Una etiqueta no es una derivación.",
  footerText: "Modelo, resultado, alcance, interpretación, salto metafísico y prueba permanecen separados antes de concluir qué conecta agentes conscientes y partículas.",
};

const lillyCopy = {
  dossier: "CON-004",
  emptyText: "No hay un expediente cargado. Es un estado vacío, no evidencia a favor ni en contra de la obra de Lilly.",
  firstLayer: "Registro",
  footerTitle: "Una pregunta audaz no es una respuesta.",
  footerText: "Registro, resultado, alcance, interpretación, salto metafísico y prueba permanecen separados antes de juzgar qué queda de la obra de Lilly.",
};

const consciousnessCopy = {
  dossier: "CON-003",
  emptyText: "No hay un expediente cargado. Es un estado vacío, no evidencia a favor ni en contra de que la conciencia sea fundamental.",
  firstLayer: "Planteamiento",
  footerTitle: "Una correlación no es una metafísica.",
  footerText: "Planteamiento, resultado, alcance, interpretación, salto metafísico y prueba permanecen separados antes de concluir si la conciencia es fundamental.",
};

const spacetimeCopy = {
  dossier: "CON-002",
  emptyText: "No hay un expediente cargado. Es un estado vacío, no evidencia a favor ni en contra de que el espacio-tiempo sea fundamental.",
  firstLayer: "Modelo",
  footerTitle: "Una reformulación no es una tesis sobre lo que existe.",
  footerText: "Modelo, resultado, alcance, interpretación, salto metafísico y prueba permanecen separados antes de concluir si el espacio-tiempo es fundamental.",
};

export default function ConsciousnessPage() {
  const dossiers = getCatalog().filter((record) => record.key.startsWith("CON-"));

  return (
    <div className="medicine-experience consciousness-experience">
      <header className="medicine-hero consciousness-hero">
        <Image
          src="/assets/visuales/hero-con-001-percepcion-interfaz.png"
          alt="Composición abstracta: íconos ordenados en cuadrícula que se deshacen en partículas y dejan ver una red de nodos con otra geometría"
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="medicine-hero-shade" />
        <div className="medicine-hero-copy">
          <p className="eyebrow">Conciencia y percepción</p>
          <h1>Del observador a la física</h1>
          <p>Primero, si la percepción refleja la realidad. Después, si el espacio-tiempo es fundamental. Luego, si la conciencia puede serlo. Y un caso histórico: qué queda de John C. Lilly. Después, qué conecta agentes conscientes y partículas. Luego, qué enseñan los psicodélicos sobre la percepción, sin recomendar su uso. Y qué podemos saber de la conciencia de otros animales, que no pueden decirnos qué sienten. Luego, qué sabemos de los sueños y del sueño lúcido, sin enseñar a inducirlos ni a interpretarlos. Y al final, qué miden los estudios de meditación sobre la atención y la conciencia, sin enseñar a meditar. En cada paso se separa lo demostrado, lo calculado, lo observado, lo interpretado y lo que ya es metafísica.</p>
          <div>
            <Link className="button button-primary" href="#percepcion-realidad">Auditar la percepción <ArrowDown aria-hidden="true" /></Link>
            <Link className="medicine-text-link" href="#espacio-tiempo">Auditar el espacio-tiempo <ArrowDown aria-hidden="true" /></Link>
            <Link className="medicine-text-link" href="#conciencia-fundamental">Auditar la conciencia <ArrowDown aria-hidden="true" /></Link>
            <Link className="medicine-text-link" href="#john-lilly">El caso Lilly <ArrowDown aria-hidden="true" /></Link>
            <Link className="medicine-text-link" href="#agentes-particulas">Agentes y partículas <ArrowDown aria-hidden="true" /></Link>
            <Link className="medicine-text-link" href="#psicodelicos">Psicodélicos <ArrowDown aria-hidden="true" /></Link>
            <Link className="medicine-text-link" href="#conciencia-animal">Conciencia animal <ArrowDown aria-hidden="true" /></Link>
            <Link className="medicine-text-link" href="#suenos">Sueños <ArrowDown aria-hidden="true" /></Link>
            <Link className="medicine-text-link" href="#meditacion">Meditación <ArrowDown aria-hidden="true" /></Link>
          </div>
        </div>
        <p className="medicine-visual-limit">Composición generativa no probatoria: no representa un resultado, un dato ni una estructura física real.</p>
      </header>

      <section className="medicine-boundary">
        <div><ShieldCheck aria-hidden="true" /><p className="eyebrow">El observador como objeto</p><h2>La única serie que audita al que observa</h2></div>
        <p>Todas las investigaciones del proyecto empiezan en la observación directa. Esta serie pregunta qué la garantiza. No ofrece orientación espiritual, terapéutica ni de consumo: reconstruye cómo sabemos lo que sabemos sobre la percepción misma.</p>
      </section>

      <section className="medicine-principles" aria-labelledby="consciousness-principles-title">
        <header><p className="eyebrow">Contrato de lectura</p><h2 id="consciousness-principles-title">Seis cortafuegos</h2></header>
        <div>{principles.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="percepcion-realidad" aria-labelledby="perception-reality-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">CON-001 · laboratorio de percepción y realidad</p><h2 id="perception-reality-lab-title">Del modelo a la prueba</h2></div>
          <p>Elige un expediente. Seis capas separan sistema, resultado, alcance, interpretación, salto metafísico y prueba sin convertir un teorema, una simulación o un escarabajo engañado en una conclusión sobre toda la realidad.</p>
        </div>
        <PerceptionRealityLab data={perceptionRealityEvidence} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="espacio-tiempo" aria-labelledby="spacetime-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">CON-002 · laboratorio del espacio-tiempo</p><h2 id="spacetime-lab-title">De la ecuación al universo</h2></div>
          <p>Elige un expediente. Las mismas seis capas separan modelo, resultado, alcance, interpretación, salto metafísico y prueba sin convertir una conjetura, una reformulación o un experimento de Bell en una conclusión sobre lo que existe.</p>
        </div>
        <figure className="consciousness-figure">
          <Image
            src="/assets/visuales/escala-pruebas-espacio-tiempo-con-002.svg"
            alt="Eje de energía: un fotón de 31 GeV, diecisiete órdenes de magnitud por debajo de la energía de Planck, basta para acotar una violación lineal de Lorentz por encima de 7.6 veces esa energía; paneles con estallidos de rayos gamma, GW170817 y el Holometer"
            width={1600}
            height={900}
            sizes="(max-width: 1200px) 100vw, 1120px"
          />
          <figcaption>Tres pruebas llegan a la escala de Planck sin ver desviación. Descartan modelos concretos, no la idea general de emergencia.</figcaption>
        </figure>
        <PerceptionRealityLab data={spacetimeFundamentalEvidence} copy={spacetimeCopy} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="conciencia-fundamental" aria-labelledby="consciousness-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">CON-003 · laboratorio de la conciencia</p><h2 id="consciousness-lab-title">De la experiencia a la metafísica</h2></div>
          <p>Elige un expediente. Las mismas seis capas separan planteamiento, resultado, alcance, interpretación, salto metafísico y prueba sin convertir un argumento, una correlación o un experimento con fotones en una conclusión sobre qué es lo fundamental.</p>
        </div>
        <figure className="consciousness-figure">
          <Image
            src="/assets/visuales/deudas-posturas-con-003.svg"
            alt="Matriz: fisicalismo, panpsiquismo, idealismo y realismo consciente aceptan la dependencia cerebral; el fisicalismo debe el problema difícil, el panpsiquismo la combinación, el idealismo y el realismo consciente derivar las leyes regulares, y sólo el realismo consciente promete una predicción propia"
            width={1600}
            height={900}
            sizes="(max-width: 1200px) 100vw, 1120px"
          />
          <figcaption>Mismos datos, distinta deuda. Ningún experimento actual separa a las posturas; cada una deja algo sin explicar.</figcaption>
        </figure>
        <PerceptionRealityLab data={consciousnessFundamentalEvidence} copy={consciousnessCopy} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="john-lilly" aria-labelledby="lilly-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">CON-004 · caso histórico</p><h2 id="lilly-lab-title">John C. Lilly, línea por línea</h2></div>
          <p>Delfines, tanque de flotación, ketamina y metaprogramación. Las mismas seis capas separan lo que Lilly registró, lo que concluyó y lo que otros pudieron medir después. Este expediente no recomienda sustancias, aislamiento ni ninguna práctica.</p>
        </div>
        <figure className="consciousness-figure">
          <Image
            src="/assets/visuales/lineas-lilly-con-004.svg"
            alt="Tabla de cinco líneas de trabajo de Lilly: neurofisiología se sostiene; aislamiento y delfines se sostienen en parte o los confirmaron otros con otro alcance; St. Thomas y los autoexperimentos no se sostienen o fallaron"
            width={1600}
            height={900}
            sizes="(max-width: 1200px) 100vw, 1120px"
          />
          <figcaption>Lo que hizo Lilly y lo que quedó. Sobrevive lo que otros pudieron medir con controles.</figcaption>
        </figure>
        <PerceptionRealityLab data={lillyEvidence} copy={lillyCopy} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="agentes-particulas" aria-labelledby="agents-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">CON-005 · laboratorio del puente</p><h2 id="agents-lab-title">De la etiqueta a la predicción</h2></div>
          <p>Reproducimos el mapa de cadenas de Markov a permutaciones decoradas con un script del repositorio. Las seis capas separan lo que el mapa define, lo que conserva, lo que se conjetura y lo que haría falta para hablar de física derivada.</p>
        </div>
        <figure className="consciousness-figure">
          <Image
            src="/assets/visuales/mapa-markov-permutaciones-con-005.svg"
            alt="Barras de las 14 permutaciones decoradas que produce el mapa con tres estados y cuántos de los 343 patrones de transición caen en cada una: 144 en la clase de tres estados; un recuadro señala que el artículo dice 17 donde hay 14 y que sólo existen 16 posibles"
            width={1600}
            height={900}
            sizes="(max-width: 1200px) 100vw, 1120px"
          />
          <figcaption>343 patrones de transición, 14 etiquetas. El mapa ignora las probabilidades; el texto original cuenta 17.</figcaption>
        </figure>
        <PerceptionRealityLab data={agentsParticlesEvidence} copy={agentsCopy} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="psicodelicos" aria-labelledby="psychedelics-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">CON-006 · laboratorio de los psicodélicos</p><h2 id="psychedelics-lab-title">Del receptor a la revelación</h2></div>
          <p>Receptor, cerebro, ratones, ensayos, experiencia y ley. Las seis capas separan lo que se midió de lo que se proyectó sobre ello. Este expediente es informativo: no recomienda el uso de ninguna sustancia, no da dosis ni instrucciones y no sustituye la atención médica.</p>
        </div>
        <figure className="consciousness-figure">
          <Image
            src="/assets/visuales/escalera-evidencia-con-006.svg"
            alt="Tabla de cinco niveles: receptor, cerebro, animales, ensayos y metafísica; para cada uno, qué se midió y qué no se sigue de ello"
            width={1600}
            height={900}
            sizes="(max-width: 1200px) 100vw, 1120px"
          />
          <figcaption>Cuanto más se sube en la escalera, menos sostiene la evidencia. El último peldaño no tiene datos a favor.</figcaption>
        </figure>
        <PerceptionRealityLab data={psychedelicsEvidence} copy={psychedelicsCopy} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="conciencia-animal" aria-labelledby="animal-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">CON-007 · laboratorio de la conciencia animal</p><h2 id="animal-lab-title">De la conducta al estatus moral</h2></div>
          <p>Espejo, marcadores, declaraciones, pulpos, cangrejos, abejorros y peces. Las seis capas separan lo que el animal hace, lo que eso indica y lo que se infiere de ello. Este expediente no es guía de bienestar animal ni recomendación de política pública.</p>
        </div>
        <figure className="consciousness-figure">
          <Image
            src="/assets/visuales/matriz-taxones-marcadores-con-007.svg"
            alt="Matriz de siete grupos de animales —grandes simios, delfines y elefantes, córvidos, pez limpiador, pulpos, cangrejos verdaderos y abejorros— por cuatro tipos de evidencia: espejo, marcador neural, conducta ante el daño y la Declaración de Nueva York; muchas casillas dicen «no revisado aquí»"
            width={1600}
            height={900}
            sizes="(max-width: 1200px) 100vw, 1120px"
          />
          <figcaption>Qué evidencia hay y dónde falta. Una casilla gris no significa que el animal falle: la falta de estudios no es evidencia de ausencia.</figcaption>
        </figure>
        <PerceptionRealityLab data={animalConsciousnessEvidence} copy={animalCopy} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="suenos" aria-labelledby="dreams-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">CON-008 · laboratorio de los sueños</p><h2 id="dreams-lab-title">Del informe a la función</h2></div>
          <p>Informe al despertar, teorías del mecanismo, zona caliente posterior, sueño lúcido, comunicación en tiempo real, inducción y función. Las seis capas separan lo que se cuenta, lo que se mide y lo que se propone. Este expediente no es una guía de inducción ni de interpretación de sueños.</p>
        </div>
        <figure className="consciousness-figure">
          <Image
            src="/assets/visuales/capas-informe-funcion-con-008.svg"
            alt="Tabla de cinco capas: informe, correlato, mecanismo, función y metafísica; para cada una, qué se midió, qué no se sigue y su nivel de confianza"
            width={1600}
            height={900}
            sizes="(max-width: 1200px) 100vw, 1120px"
          />
          <figcaption>Hay informes sólidos y correlatos que avanzan. El mecanismo y la función siguen en disputa; la metafísica no tiene datos.</figcaption>
        </figure>
        <PerceptionRealityLab data={dreamsEvidence} copy={dreamsCopy} />
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="meditacion" aria-labelledby="meditation-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">CON-009 · laboratorio de la meditación</p><h2 id="meditation-lab-title">De la práctica a la metafísica</h2></div>
          <p>Familias de prácticas, informes en primera persona, gamma de expertos, red por defecto, atención y percepción, controles activos, efectos adversos y el «cese». Las seis capas separan lo que se practica, lo que se informa, lo que se mide y lo que se afirma. Este expediente no es una guía de meditación ni una recomendación clínica.</p>
        </div>
        <figure className="consciousness-figure">
          <Image
            src="/assets/visuales/capas-practica-metafisica-con-009.svg"
            alt="Tabla de cinco capas: práctica, informe, correlato, efecto y metafísica; para cada una, qué se midió, qué no se sigue y su nivel de confianza"
            width={1600}
            height={900}
            sizes="(max-width: 1200px) 100vw, 1120px"
          />
          <figcaption>Hay prácticas distintas, informes valiosos y correlatos replicados en expertos. El efecto se encoge frente a controles activos; la metafísica no tiene datos.</figcaption>
        </figure>
        <PerceptionRealityLab data={meditationEvidence} copy={meditationCopy} />
      </section>

      <section className="medicine-dossiers" aria-labelledby="consciousness-dossiers-title">
        <div className="section-heading"><div><p className="eyebrow">Corpus canónico</p><h2 id="consciousness-dossiers-title">{dossiers.length === 1 ? "1 expediente auditado" : `${dossiers.length} expedientes auditados`}</h2></div><p>El programa inicial cerró con los psicodélicos como herramienta para estudiar la percepción. La conciencia animal abre su ampliación: qué se puede atribuir a quien no puede informar. Los sueños y la meditación la siguen con preguntas sobre la experiencia misma, sin recomendar ninguna práctica. Cada expediente se puede leer por separado.</p></div>
        <div>{dossiers.map((record) => <article key={record.key}><span>{record.key}</span><p>{record.status} · {record.readingMinutes} min</p><h3>{record.shortTitle}</h3><p>{record.summary}</p><Link href={`/${record.slug}`}>Abrir expediente <ArrowRight aria-hidden="true" /></Link></article>)}</div>
      </section>
    </div>
  );
}
