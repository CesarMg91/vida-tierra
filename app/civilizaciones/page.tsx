import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, FlaskConical, Scale } from "lucide-react";
import CivilizationTimeline from "../../components/CivilizationTimeline";
import CivilizationsAtlas from "../../components/CivilizationsAtlas";
import { chronologyLanes, civilizationCases } from "../../lib/civilizations";
import { getCivilizationMapData } from "../../lib/civilization-map";
import { getCatalog } from "../../lib/public-data";

export const metadata: Metadata = {
  title: "Civilizaciones — ¿Cómo sabemos lo que sabemos?",
  description: "Viaje comparativo por las primeras civilizaciones: archivos, inferencias, límites y fuentes sin una escala universal de avance.",
};

const chapters = [
  {
    number: "01",
    title: "Producir no fue un interruptor",
    text: "Procesar, almacenar, cultivar, domesticar y depender de una especie ocurrieron en relojes diferentes. Shubayqa, Dhra’, Tianluoshan, Xihuatoxtla y los Llanos de Moxos obligan a reconstruir secuencias locales.",
    source: "INVESTIGACION_050_AGRICULTURAS_DOMESTICACIONES_MULTIPLES",
    image: "/assets/visuales/hero-agriculturas-domesticaciones.png",
  },
  {
    number: "02",
    title: "Ciudad, Estado e imperio son ejes distintos",
    text: "Una gran concentración puede existir sin Estado central demostrado; un Estado no necesita una única megaciudad; un imperio exige incorporación desigual, no sólo objetos o estilos compartidos.",
    source: "INVESTIGACION_051_CIUDADES_ESTADOS",
    image: "/assets/visuales/hero-ciudades-estados.png",
  },
  {
    number: "03",
    title: "Comparar exige conservar los límites",
    text: "La misma palabra no vuelve equivalentes una tablilla de Uruk, un khipu, un drenaje del Indo o una plataforma amazónica. La comparación útil hace visible qué se observó y qué puente sigue faltando.",
    source: "INVESTIGACION_052_COMPARACION_PRIMERAS_CIVILIZACIONES",
    image: "/assets/visuales/hero-comparacion-civilizaciones.png",
  },
];

export default function CivilizationsPage() {
  const map = getCivilizationMapData();
  const catalog = getCatalog();
  const dossierKeys = new Set(["050", "051", "052", "CIV-001"]);
  const dossiers = catalog.filter((record) => dossierKeys.has(record.key));

  return (
    <div className="civilizations-experience">
      <header className="civilizations-hero">
        <Image
          className="civilizations-hero-image"
          src="/assets/visuales/hero-comparacion-civilizaciones.png"
          alt="Mesa de investigación con mapas, registros y objetos arqueológicos comparados"
          fill
          priority
          sizes="100vw"
        />
        <div className="civilizations-hero-shade" />
        <div className="civilizations-hero-copy">
          <p className="eyebrow">Experiencia insignia · Civilizaciones</p>
          <h1>No existe una escalera universal</h1>
          <p>Recorre diez casos y once dimensiones sin convertir diferencia en jerarquía. Cada afirmación conserva su archivo, su inferencia y su límite.</p>
          <div className="civilizations-hero-actions">
            <Link className="button button-primary" href="#viaje">
              Iniciar recorrido <ArrowDown aria-hidden="true" />
            </Link>
            <Link className="button civilizations-ghost-button" href="/civilizaciones/comparar">
              Abrir comparador <Scale aria-hidden="true" />
            </Link>
          </div>
        </div>
        <dl className="civilizations-hero-ledger">
          <div><dt>Casos</dt><dd>{civilizationCases.length}</dd></div>
          <div><dt>Dimensiones</dt><dd>11</dd></div>
          <div><dt>Rankings</dt><dd>0</dd></div>
        </dl>
        <p className="civilizations-visual-limit">Ilustración editorial; no reconstruye una escena arqueológica específica.</p>
      </header>

      <section className="civilizations-thesis" id="viaje">
        <div>
          <p className="eyebrow">La pregunta cambia</p>
          <h2>De “¿quién llegó primero?” a “¿qué permite afirmar cada archivo?”</h2>
        </div>
        <div className="civilizations-thesis-copy">
          <p className="civilizations-lede">“Civilización” no funciona aquí como premio ni como etapa superior. Es un problema comparativo que debe desarmarse.</p>
          <p>Producción, urbanismo, administración, escritura, desigualdad, autoridad, imperio, infraestructura, redes, ecología y transformación se estudian como variables independientes. Pueden conectarse; no deben heredarse unas de otras.</p>
          <Link className="text-link" href="/14_civilizaciones/MARCO_CRITICO_CIVILIZACION">Leer el marco crítico <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="civilization-chapters" aria-labelledby="chapters-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Viaje narrativo</p>
            <h2 id="chapters-title">Tres cambios de perspectiva</h2>
          </div>
          <p>No son etapas. Son herramientas para dejar de comprimir trayectorias regionales en una sola historia.</p>
        </div>
        <div className="civilization-chapter-list">
          {chapters.map((chapter) => (
            <article key={chapter.number}>
              <div className="civilization-chapter-image">
                <Image src={chapter.image} alt="" fill sizes="(max-width: 840px) 100vw, 45vw" />
              </div>
              <div className="civilization-chapter-copy">
                <span>{chapter.number}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.text}</p>
                <Link href={`/14_civilizaciones/${chapter.source}`} className="text-link">
                  Abrir investigación <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="civilization-atlas-section" aria-labelledby="atlas-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Atlas geográfico</p>
            <h2 id="atlas-title">Diez anclajes, ninguna frontera ficticia</h2>
          </div>
          <p>El mapa usa geometría física de Natural Earth. Los círculos sólo ubican sitios o regiones con incertidumbre editorial.</p>
        </div>
        <CivilizationsAtlas cases={civilizationCases} map={map} />
      </section>

      <section className="civilization-chronology-section" aria-labelledby="chronology-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Cronologías por carriles</p>
            <h2 id="chronology-title">Cada región conserva su reloj</h2>
          </div>
          <p>Fechas de muestras, fases, sitios e instituciones no se funden en una única línea de progreso.</p>
        </div>
        <CivilizationTimeline lanes={chronologyLanes} />
      </section>

      <section className="adversarial-section" aria-labelledby="adversarial-title">
        <header>
          <p className="eyebrow">Casos adversarios</p>
          <h2 id="adversarial-title">La excepción no estorba: pone a prueba la regla</h2>
          <p>Estos archivos debilitan requisitos universales como escritura, palacio, densidad extrema, crecimiento lineal o monumentalidad pétrea.</p>
        </header>
        <div className="adversarial-grid">
          {civilizationCases.filter((item) => item.adversarial).map((item, index) => (
            <article key={item.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.shortName}</h3>
              <p>{item.summary}</p>
              <Link href={`/civilizaciones/comparar?casos=${item.id},mesopotamia&dimensiones=urbanism,writing,authority`}>
                Contrastar caso <ArrowRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="civilizations-comparator-callout">
        <div>
          <p className="eyebrow">Laboratorio comparativo</p>
          <h2>Tú eliges los casos. El corpus conserva los límites.</h2>
          <p>Compara hasta tres casos. Cada celda separa archivo observado, inferencia permitida, límite y fuente; el enlace guarda exactamente tu selección.</p>
        </div>
        <Link className="button button-primary" href="/civilizaciones/comparar">
          Construir comparación <Scale aria-hidden="true" />
        </Link>
      </section>

      <section className="civilization-dossiers" aria-labelledby="dossiers-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Corpus canónico</p>
            <h2 id="dossiers-title">Cuatro expedientes detrás de la experiencia</h2>
          </div>
          <p>El viaje y el comparador derivan de estos documentos; no agregan conclusiones nuevas.</p>
        </div>
        <div className="civilization-dossier-grid">
          {dossiers.map((record) => (
            <article key={record.slug}>
              <div className="civilization-dossier-meta">
                {record.order === null ? <FlaskConical aria-hidden="true" /> : <BookOpen aria-hidden="true" />}
                <span>{record.order === null ? "TRAZADO · CIV-001" : `INVESTIGACIÓN ${String(record.order).padStart(3, "0")}`}</span>
              </div>
              <h3>{record.shortTitle}</h3>
              <p>{record.summary}</p>
              <Link className="card-link" href={`/${record.slug}`}>Leer expediente <ArrowRight aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
