import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import PerceptionRealityLab from "../../components/PerceptionRealityLab";
import { perceptionRealityEvidence } from "../../lib/perception-reality-evidence";
import { consciousnessFundamentalEvidence } from "../../lib/consciousness-fundamental-evidence";
import { lillyEvidence } from "../../lib/lilly-evidence";
import { spacetimeFundamentalEvidence } from "../../lib/spacetime-fundamental-evidence";
import { getCatalog } from "../../lib/public-data";
import { createPageMetadata } from "../../lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Conciencia y percepción — qué garantiza la observación",
  description: "Cómo auditamos si la percepción refleja la realidad, si el espacio-tiempo es fundamental y si la conciencia puede serlo, y qué queda de la obra de John C. Lilly, sin confundir un teorema, una conjetura, una observación, una interpretación y una tesis metafísica.",
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
          <p>Primero, si la percepción refleja la realidad. Después, si el espacio-tiempo es fundamental. Luego, si la conciencia puede serlo. Y un caso histórico: qué queda de John C. Lilly. En cada paso se separa lo demostrado, lo calculado, lo observado, lo interpretado y lo que ya es metafísica.</p>
          <div>
            <Link className="button button-primary" href="#percepcion-realidad">Auditar la percepción <ArrowDown aria-hidden="true" /></Link>
            <Link className="medicine-text-link" href="#espacio-tiempo">Auditar el espacio-tiempo <ArrowDown aria-hidden="true" /></Link>
            <Link className="medicine-text-link" href="#conciencia-fundamental">Auditar la conciencia <ArrowDown aria-hidden="true" /></Link>
            <Link className="medicine-text-link" href="#john-lilly">El caso Lilly <ArrowDown aria-hidden="true" /></Link>
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

      <section className="medicine-dossiers" aria-labelledby="consciousness-dossiers-title">
        <div className="section-heading"><div><p className="eyebrow">Corpus canónico</p><h2 id="consciousness-dossiers-title">{dossiers.length === 1 ? "1 expediente auditado" : `${dossiers.length} expedientes auditados`}</h2></div><p>La serie sigue con el puente matemático entre agentes conscientes y partículas, y con los psicodélicos como herramienta para estudiar la percepción. Cada uno tendrá su propio expediente.</p></div>
        <div>{dossiers.map((record) => <article key={record.key}><span>{record.key}</span><p>{record.status} · {record.readingMinutes} min</p><h3>{record.shortTitle}</h3><p>{record.summary}</p><Link href={`/${record.slug}`}>Abrir expediente <ArrowRight aria-hidden="true" /></Link></article>)}</div>
      </section>
    </div>
  );
}
