import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getIndex, getDoc } from "../../lib/content";

// El valor debe ser un literal para que Next.js pueda analizar la configuración
// durante el build. Las rutas publicadas son las enumeradas por
// generateStaticParams; al agregar un .md nuevo se reinicia el servidor local.
export const dynamicParams = false;

export function generateStaticParams() {
  return getIndex().map((d) => ({ slug: d.slug.split("/") }));
}

type PageProps = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getDoc(slug.join("/"));
  return { title: doc ? `${doc.title} — ¿Cómo sabemos lo que sabemos?` : "No encontrado" };
}

const ESTADOS: Record<string, string> = {
  AUDITADO: "Cadena completa: adversario, incertidumbre y falsadores revisados.",
  REPLICADO: "Además existe reproducción o reanálisis independiente documentado.",
  TRAZADO: "Claim, evidencia y fuente enlazados.",
  EN_DESARROLLO: "Evidencia localizada, análisis incompleto.",
  SEMILLA: "Entrada creada para organizar trabajo futuro.",
  REVISAR: "Nueva evidencia o error detectado.",
  RETIRADO: "Formulación abandonada, conservada para historial.",
};

export default async function DocPage({ params }: PageProps) {
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
