import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, Scale, ShieldCheck } from "lucide-react";
import ContinueJourney from "../components/ContinueJourney";
import EvidenceChain from "../components/EvidenceChain";
import StageRail from "../components/StageRail";
import { getCatalog, getKnowledgeCounts } from "../lib/public-data";

export default function Home() {
  const catalog = getCatalog();
  const counts = getKnowledgeCounts();
  const featuredKeys = new Set(["002", "013", "035", "050", "052", "MED-011"]);
  const featured = catalog.filter((record) => featuredKeys.has(record.key));
  const progressCatalog = catalog.map(({ order, slug, shortTitle }) => ({ order, slug, shortTitle }));

  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <Image
          className="home-hero-image"
          src="/assets/visuales/hero-historia-profunda.png"
          alt="Transición conceptual del cosmos a la Tierra, la vida, la humanidad y las primeras ciudades"
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="home-hero-shade" />
        <div className="home-hero-content">
          <h1 id="home-title"><span>¿Cómo sabemos</span><span>lo que sabemos?</span></h1>
          <p className="home-deck">La historia del cosmos, la Tierra,<br />la vida, la humanidad y la medicina.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/viaje">
              Comenzar el viaje <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="text-link" href="/explorar">
              Explorar investigaciones <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
        <StageRail />
        <p className="visual-limit">Ilustración conceptual: comprime épocas distintas y no está a escala.</p>
      </section>

      <section className="evidence-home section-dark" aria-labelledby="evidence-title">
        <div className="evidence-intro">
          <p className="eyebrow">Laboratorio de evidencia</p>
          <h2 id="evidence-title">Del razonamiento<br />a la evidencia</h2>
          <p>Así construimos conocimiento fiable sobre un pasado que nadie observó directamente.</p>
          <Link className="text-link" href="/evidencia">Explorar las cadenas <ArrowRight aria-hidden="true" /></Link>
        </div>
        <EvidenceChain />
      </section>

      <section className="home-resume section-light" aria-labelledby="resume-title">
        <div>
          <p className="eyebrow">Sin cuenta · sólo en tu dispositivo</p>
          <h2 id="resume-title">Tu recorrido puede continuar</h2>
          <p>Marca investigaciones como leídas y vuelve al último punto sin registro, cookies de perfil ni una base de usuarios.</p>
        </div>
        <ContinueJourney catalog={progressCatalog} />
      </section>

      <section className="home-featured section-light" aria-labelledby="featured-title">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Seis puertas de entrada</p>
            <h2 id="featured-title">Empieza por la pregunta que te atrape</h2>
          </div>
          <Link className="text-link" href="/explorar">Ver las {catalog.length} investigaciones <ArrowRight aria-hidden="true" /></Link>
        </header>
        <div className="featured-grid">
          {featured.map((record) => (
            <article key={record.slug} className="featured-card">
              <Link href={`/${record.slug}`} className="featured-image">
                <Image src={record.hero} alt="" fill sizes="(max-width: 720px) 92vw, 32vw" />
                <span>{String(record.order).padStart(3, "0")}</span>
              </Link>
              <div>
                <p>{record.collection} · {record.readingMinutes} min</p>
                <h3><Link href={`/${record.slug}`}>{record.shortTitle}</Link></h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-ledger section-dark" aria-labelledby="ledger-title">
        <div className="ledger-copy">
          <p className="eyebrow">Actualizado por el build</p>
          <h2 id="ledger-title">Un archivo que enseña sus costuras</h2>
          <p>Los conteos provienen de los registros maestros. Cada vínculo se valida antes de publicar.</p>
        </div>
        <dl className="ledger-stats">
          <div><dt>Investigaciones</dt><dd>{catalog.length}</dd></div>
          <div><dt>Claims</dt><dd>{counts.claims}</dd></div>
          <div><dt>Evidencias</dt><dd>{counts.evidence}</dd></div>
          <div><dt>Fuentes</dt><dd>{counts.sources}</dd></div>
        </dl>
      </section>

      <section className="principles section-light" aria-labelledby="principles-title">
        <header className="section-heading"><div><p className="eyebrow">Cómo leer el proyecto</p><h2 id="principles-title">Rigor sin una falsa certeza</h2></div></header>
        <div className="principle-grid">
          <article><FlaskConical aria-hidden="true" /><h3>Medición antes que autoridad</h3><p>Una fuente conduce a datos y métodos; su prestigio no reemplaza la cadena.</p></article>
          <article><Scale aria-hidden="true" /><h3>Alternativas visibles</h3><p>La explicación principal se compara con rivales y evidencia contraria.</p></article>
          <article><ShieldCheck aria-hidden="true" /><h3>Confianza delimitada</h3><p>La letra de confianza califica un claim concreto, no una disciplina entera.</p></article>
          <article><BookOpen aria-hidden="true" /><h3>Conocimiento reutilizable</h3><p>Contenido CC BY 4.0, código MIT y procedencia visual documentada.</p></article>
        </div>
      </section>
    </div>
  );
}
