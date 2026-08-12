import { notFound } from "next/navigation";
import { getIndex, getDoc } from "../../lib/content.mjs";

export const dynamicParams = false;

export function generateStaticParams() {
  return getIndex().map((d) => ({ slug: d.slug.split("/") }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doc = await getDoc(slug.join("/"));
  return { title: doc ? `${doc.title} — ¿Cómo sabemos lo que sabemos?` : "No encontrado" };
}

const ESTADOS = {
  AUDITADO: "Cadena completa: adversario, incertidumbre y falsadores revisados.",
  REPLICADO: "Además existe reproducción o reanálisis independiente documentado.",
  TRAZADO: "Claim, evidencia y fuente enlazados.",
  EN_DESARROLLO: "Evidencia localizada, análisis incompleto.",
  SEMILLA: "Entrada creada para organizar trabajo futuro.",
  REVISAR: "Nueva evidencia o error detectado.",
  RETIRADO: "Formulación abandonada, conservada para historial.",
};

export default async function DocPage({ params }) {
  const { slug } = await params;
  const doc = await getDoc(slug.join("/"));
  if (!doc) notFound();

  return (
    <article className="doc">
      {doc.estado && (
        <p className={`estado estado-${doc.estado}`} title={ESTADOS[doc.estado] ?? ""}>
          {doc.estado.replace(/_/g, " ")}
        </p>
      )}
      <div dangerouslySetInnerHTML={{ __html: doc.html }} />
      <footer className="doc-footer">
        <a
          href={`https://github.com/CesarMg91/vida-tierra/blob/main/${doc.file}`}
          target="_blank"
          rel="noreferrer"
        >
          Ver la fuente de esta página en GitHub
        </a>
      </footer>
    </article>
  );
}
