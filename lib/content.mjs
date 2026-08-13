import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";

export const REPO_ROOT = process.cwd();

// Todo lo que NO es contenido de investigacion.
const IGNORED = new Set([
  ".git", ".agents", ".claude", ".codex", ".next", ".idea", ".vscode",
  "node_modules", "public", "out", "app", "lib", "components", "scripts", "assets",
  "_borradores_locales", "_privado",
]);

/** Recorre el repositorio y devuelve la ruta relativa de cada .md. */
function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORED.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.name.endsWith(".md")) acc.push(path.relative(REPO_ROOT, full).split(path.sep).join("/"));
  }
  return acc;
}

/** `08_cenozoico/INVESTIGACION_036_X.md` -> `08_cenozoico/INVESTIGACION_036_X` */
export function fileToSlug(file) {
  return file.replace(/\.md$/, "");
}

/** Titulo legible: frontmatter `titulo`, primer H1, o el nombre del archivo. */
function extractTitle(raw, file) {
  const { data, content } = matter(raw);
  if (data?.titulo) return String(data.titulo);
  const h1 = content.match(/^#\s+(.+)$/m);
  if (h1) return h1[1].replace(/[`*_]/g, "").trim();
  return path.basename(file, ".md");
}

let _index = null;

// En produccion el arbol se recorre una sola vez y se congela en el build.
// En desarrollo se relee siempre, para que un .md nuevo aparezca sin reiniciar.
const CACHEAR = process.env.NODE_ENV === "production";

/** Indice completo del repositorio. */
export function getIndex() {
  if (CACHEAR && _index) return _index;
  const docs = walk(REPO_ROOT).map((file) => {
    const raw = fs.readFileSync(path.join(REPO_ROOT, file), "utf8");
    const { data } = matter(raw);
    return {
      file,
      slug: fileToSlug(file),
      title: extractTitle(raw, file),
      section: file.includes("/") ? file.split("/")[0] : "",
      estado: data?.estado ?? null,
      bytes: Buffer.byteLength(raw),
      headings: [...raw.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1].replace(/[`*_]/g, "").trim()).slice(0, 40),
    };
  });
  docs.sort((a, b) => a.slug.localeCompare(b.slug, "es"));
  if (CACHEAR) _index = docs;
  return docs;
}

/** Agrupa por carpeta de primer nivel, con los .md de raiz en un grupo propio. */
export function getNav() {
  const docs = getIndex();
  const rootDocs = docs.filter((d) => !d.section);
  const groups = new Map();
  for (const d of docs) {
    if (!d.section) continue;
    if (!groups.has(d.section)) groups.set(d.section, []);
    groups.get(d.section).push(d);
  }
  return {
    root: rootDocs,
    sections: [...groups.entries()]
      .sort((a, b) => a[0].localeCompare(b[0], "es"))
      .map(([name, items]) => ({
        name,
        label: name.replace(/^\d+_/, "").replace(/_/g, " "),
        // El README de la propia seccion encabeza el grupo; luego el resto,
        // y al final los documentos de subcarpetas.
        items: items.sort((a, b) => {
          const rank = (d) => {
            if (d.slug === `${name}/README`) return 0;
            if (d.file.split("/").length > 2) return 2;
            return 1;
          };
          return rank(a) - rank(b) || a.slug.localeCompare(b.slug, "es");
        }),
      })),
  };
}

/**
 * Reescribe enlaces relativos del repositorio a rutas del sitio.
 * `../assets/visuales/x.svg` -> `/assets/visuales/x.svg`
 * `CLAIMS.md` -> `/CLAIMS`  |  `../SOURCES.md#ancla` -> `/SOURCES#ancla`
 */
function rewriteLinks(currentFile) {
  const baseDir = path.posix.dirname(currentFile);
  const resolve = (target) => {
    if (/^(https?:|mailto:|#)/.test(target) || !target) return null;
    const [rawPath, hash] = target.split("#");
    if (!rawPath) return null;
    const abs = path.posix.normalize(path.posix.join(baseDir === "." ? "" : baseDir, rawPath));
    return { abs, hash: hash ? `#${hash}` : "" };
  };

  return () => (tree) => {
    visit(tree, ["link", "image"], (node) => {
      const r = resolve(node.url);
      if (!r) return;
      if (node.type === "image" || /\.(svg|png|jpe?g|gif|webp)$/i.test(r.abs)) {
        node.url = "/" + r.abs.replace(/^\/+/, "");
        return;
      }
      if (r.abs.endsWith(".md")) {
        node.url = "/" + fileToSlug(r.abs).replace(/^\/+/, "") + r.hash;
        return;
      }
      node.url = "/" + r.abs.replace(/^\/+/, "") + r.hash;
    });
  };
}

const processorCache = new Map();

function processorFor(file) {
  if (!processorCache.has(file)) {
    processorCache.set(
      file,
      unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(rewriteLinks(file))
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, { behavior: "wrap", properties: { className: "heading-anchor" } })
        .use(rehypeStringify, { allowDangerousHtml: true })
    );
  }
  return processorCache.get(file);
}

/** Devuelve `{ title, html, data, file }` para un slug, o null si no existe. */
export async function getDoc(slug) {
  const doc = getIndex().find((d) => d.slug === slug);
  if (!doc) return null;
  const raw = fs.readFileSync(path.join(REPO_ROOT, doc.file), "utf8");
  const { content, data } = matter(raw);
  const html = String(await processorFor(doc.file).process(content));
  return { ...doc, html, data };
}

/** Indice ligero para el buscador del cliente. */
export function getSearchIndex() {
  return getIndex().map((d) => ({
    s: d.slug,
    t: d.title,
    g: d.section,
    h: d.headings,
  }));
}
