import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import PerceptionRealityLab from "../../components/PerceptionRealityLab";
import { perceptionRealityEvidence } from "../../lib/perception-reality-evidence";
import { getCatalog } from "../../lib/public-data";
import { createPageMetadata } from "../../lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Conciencia y percepción — qué garantiza la observación",
  description: "Cómo auditamos si la percepción refleja la realidad sin confundir un teorema evolutivo, una simulación, un hallazgo en organismos, una interpretación y una tesis metafísica.",
  pathname: "/conciencia",
  image: "/assets/visuales/hero-con-001-percepcion-interfaz.png",
});

const principles = [
  ["Teorema no es organismo", "Un resultado demostrado dentro de un modelo sólo viaja a la biología con un puente explícito entre definiciones y seres vivos."],
  ["Construido no es falso", "Que el cerebro infiera o prediga lo que percibe no demuestra que la percepción deje de conservar estructura del mundo."],
  ["Engañable no es globalmente falso", "Un estímulo que explota un atajo perceptivo muestra un límite local, no la falsedad de todo el sistema."],
  ["Interfaz no es metafísica", "Pasar de «percibimos una interfaz» a «la conciencia es lo fundamental» exige otro expediente."],
] as const;

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
          <h1>¿Nuestra percepción refleja la realidad?</h1>
          <p>Un teorema evolutivo dice que percibir «la verdad» rara vez conviene. Aquí se separa lo que demuestra, lo que simula, lo que se observa en organismos, lo que se interpreta y lo que ya es metafísica.</p>
          <div>
            <Link className="button button-primary" href="#percepcion-realidad">Auditar la cadena <ArrowDown aria-hidden="true" /></Link>
            <Link className="medicine-text-link" href="/26_conciencia/INVESTIGACION_CON_001_PERCEPCION_REALIDAD">Leer CON-001 <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
        <p className="medicine-visual-limit">Composición generativa no probatoria: no representa un resultado, un dato ni una estructura física real.</p>
      </header>

      <section className="medicine-boundary">
        <div><ShieldCheck aria-hidden="true" /><p className="eyebrow">El observador como objeto</p><h2>La única serie que audita al que observa</h2></div>
        <p>Todas las investigaciones del proyecto empiezan en la observación directa. Esta serie pregunta qué la garantiza. No ofrece orientación espiritual, terapéutica ni de consumo: reconstruye cómo sabemos lo que sabemos sobre la percepción misma.</p>
      </section>

      <section className="medicine-principles" aria-labelledby="consciousness-principles-title">
        <header><p className="eyebrow">Contrato de lectura</p><h2 id="consciousness-principles-title">Cuatro cortafuegos</h2></header>
        <div>{principles.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="medicine-lab-section documentary-lab-section" id="percepcion-realidad" aria-labelledby="perception-reality-lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">CON-001 · laboratorio de percepción y realidad</p><h2 id="perception-reality-lab-title">Del modelo a la prueba</h2></div>
          <p>Elige un expediente. Seis capas separan sistema, resultado, alcance, interpretación, salto metafísico y prueba sin convertir un teorema, una simulación o un escarabajo engañado en una conclusión sobre toda la realidad.</p>
        </div>
        <PerceptionRealityLab data={perceptionRealityEvidence} />
      </section>

      <section className="medicine-dossiers" aria-labelledby="consciousness-dossiers-title">
        <div className="section-heading"><div><p className="eyebrow">Corpus canónico</p><h2 id="consciousness-dossiers-title">{dossiers.length === 1 ? "1 expediente auditado" : `${dossiers.length} expedientes auditados`}</h2></div><p>La serie sigue con el espacio-tiempo, la conciencia como fundamento, el puente matemático y los psicodélicos como herramienta. Cada uno tendrá su propio expediente.</p></div>
        <div>{dossiers.map((record) => <article key={record.key}><span>{record.key}</span><p>{record.status} · {record.readingMinutes} min</p><h3>{record.shortTitle}</h3><p>{record.summary}</p><Link href={`/${record.slug}`}>Abrir expediente <ArrowRight aria-hidden="true" /></Link></article>)}</div>
      </section>
    </div>
  );
}
