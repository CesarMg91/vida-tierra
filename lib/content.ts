import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";

export type ContentIndexRecord = {
  file: string;
  slug: string;
  title: string;
  section: string;
  estado: string | null;
  bytes: number;
  headings: string[];
};

export type NavGroup = {
  name: string;
  label: string;
  items: ContentIndexRecord[];
};

export type NavData = {
  root: ContentIndexRecord[];
  sections: NavGroup[];
};

export type SearchIndexRecord = {
  s: string;
  t: string;
  g: string;
  h: string[];
};

export type ContentDocument = ContentIndexRecord & {
  html: string;
  data: Record<string, unknown>;
  toc: Array<{ id: string; label: string; level: 2 | 3 }>;
  readerSections?: {
    answerHtml: string;
    knownHtml: string;
    confidenceHtml: string;
    unknownHtml: string;
    falsifiersHtml: string;
  };
};

export const REPO_ROOT = process.cwd();
const GENERATED_CONTENT_ROOT = path.join(REPO_ROOT, ".generated", "content");
const GENERATED_INDEX_FILE = path.join(GENERATED_CONTENT_ROOT, "index.json");
const GENERATED_DOCUMENTS_DIR = path.join(GENERATED_CONTENT_ROOT, "documents");
const KNOWLEDGE_ID = /(CLAIM|EVID|SRC|CONT|ERR)-[A-Z0-9]+(?:-[A-Z0-9]+)+/g;
const KNOWLEDGE_ID_EXACT = /^(CLAIM|EVID|SRC|CONT|ERR)-[A-Z0-9]+(?:-[A-Z0-9]+)+$/;

type GeneratedIndexRecord = ContentIndexRecord & { generatedFile: string };

export function fileToSlug(file: string): string {
  return file.replace(/\.md$/, "");
}

export function isResearchDocument(file: string): boolean {
  return /(^|[\\/])INVESTIGACION_(?:\d{3}|[A-Z][A-Z0-9]{1,7}_\d{3})_/.test(file);
}

let generatedIndexCache: GeneratedIndexRecord[] | null = null;
const CACHE_INDEX = process.env.NODE_ENV === "production";

function getGeneratedIndex(): GeneratedIndexRecord[] {
  if (CACHE_INDEX && generatedIndexCache) return generatedIndexCache;
  const records = JSON.parse(fs.readFileSync(GENERATED_INDEX_FILE, "utf8")) as GeneratedIndexRecord[];
  if (CACHE_INDEX) generatedIndexCache = records;
  return records;
}

export function getIndex(): ContentIndexRecord[] {
  return getGeneratedIndex().map(({ generatedFile: _generatedFile, ...record }) => record);
}

export function getNav(): NavData {
  const docs = getIndex();
  const root = docs.filter((doc) => !doc.section);
  const groups = new Map<string, ContentIndexRecord[]>();
  for (const doc of docs) {
    if (!doc.section) continue;
    const items = groups.get(doc.section) ?? [];
    items.push(doc);
    groups.set(doc.section, items);
  }
  return {
    root,
    sections: [...groups.entries()]
      .sort((a, b) => a[0].localeCompare(b[0], "es"))
      .map(([name, items]) => ({
        name,
        label: name.replace(/^\d+_/, "").replace(/_/g, " "),
        items: items.sort((a, b) => {
          const rank = (doc: ContentIndexRecord) => {
            if (doc.slug === `${name}/README`) return 0;
            if (doc.file.split("/").length > 2) return 2;
            return 1;
          };
          return rank(a) - rank(b) || a.slug.localeCompare(b.slug, "es");
        }),
      })),
  };
}

function rewriteLinks(currentFile: string) {
  const baseDir = path.posix.dirname(currentFile);
  const resolve = (target: string) => {
    if (/^(https?:|mailto:|#)/.test(target) || !target) return null;
    const [rawPath, hash] = target.split("#");
    if (!rawPath) return null;
    const absolute = path.posix.normalize(path.posix.join(baseDir === "." ? "" : baseDir, rawPath));
    return { absolute, hash: hash ? `#${hash}` : "" };
  };

  return () => (tree: unknown) => {
    (visit as any)(tree, ["link", "image"], (node: { type: string; url: string }) => {
      const result = resolve(node.url);
      if (!result) return;
      if (node.type === "image" || /\.(svg|png|jpe?g|gif|webp)$/i.test(result.absolute)) {
        node.url = `/${result.absolute.replace(/^\/+/, "")}`;
        return;
      }
      if (result.absolute.endsWith(".md")) {
        node.url = `/${fileToSlug(result.absolute).replace(/^\/+/, "")}${result.hash}`;
        return;
      }
      node.url = `/${result.absolute.replace(/^\/+/, "")}${result.hash}`;
    });
  };
}

const sanitizeSchema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), "details", "summary", "mark", "kbd"],
  attributes: {
    ...defaultSchema.attributes,
    "*": [...(defaultSchema.attributes?.["*"] ?? []), "id", "title", ["className", /^[A-Za-z0-9 _-]+$/]],
    a: [...(defaultSchema.attributes?.a ?? []), "target", "rel"],
    img: [...(defaultSchema.attributes?.img ?? []), "loading", "decoding", "width", "height"],
  },
};

const processorCache = new Map<string, any>();

function hastText(node: any): string {
  if (node?.type === "text") return String(node.value ?? "");
  return Array.isArray(node?.children) ? node.children.map(hastText).join("") : "";
}

function hasElement(node: any, tagName: string): boolean {
  if (node?.type === "element" && node.tagName === tagName) return true;
  return Array.isArray(node?.children) && node.children.some((child: any) => hasElement(child, tagName));
}

function stripResearchLead(enabled: boolean) {
  return () => (tree: any) => {
    if (!enabled || !Array.isArray(tree.children)) return;
    let sectionStarted = false;
    let removedTitle = false;
    let removedHero = false;
    tree.children = tree.children.filter((node: any) => {
      if (node?.type === "element" && node.tagName === "h2") sectionStarted = true;
      if (!sectionStarted && !removedTitle && node?.type === "element" && node.tagName === "h1") {
        removedTitle = true;
        return false;
      }
      if (!sectionStarted && !removedHero && node?.type === "element" && node.tagName === "p" && hasElement(node, "img")) {
        removedHero = true;
        return false;
      }
      return true;
    });
  };
}

function wrapTables() {
  return () => (tree: any) => {
    (visit as any)(tree, "element", (node: any, index: number | undefined, parent: any) => {
      if (node?.tagName !== "table" || !parent || typeof index !== "number" || parent?.properties?.className?.includes?.("table-scroll")) return;
      parent.children[index] = {
        type: "element",
        tagName: "div",
        properties: {
          className: ["table-scroll"],
          role: "region",
          tabIndex: 0,
          ariaLabel: "Tabla desplazable",
        },
        children: [node],
      };
    });
  };
}

function knowledgeAnchor(id: string, children: any[]) {
  return {
    type: "element",
    tagName: "a",
    properties: {
      className: ["knowledge-link"],
      href: `/evidencia?id=${encodeURIComponent(id)}`,
      dataKnowledgeId: id,
      title: `Abrir ${id} sin abandonar la lectura`,
    },
    children,
  };
}

function linkKnowledgeIds() {
  return () => (tree: any) => {
    (visit as any)(tree, "element", (node: any, index: number | undefined, parent: any) => {
      if (node?.tagName !== "code" || ["a", "pre"].includes(parent?.tagName) || !parent || typeof index !== "number") return;
      const id = hastText(node).trim();
      if (KNOWLEDGE_ID_EXACT.test(id)) parent.children[index] = knowledgeAnchor(id, [node]);
    });
    (visit as any)(tree, "text", (node: any, index: number | undefined, parent: any) => {
      if (!parent || typeof index !== "number" || ["a", "code", "pre", "script", "style"].includes(parent.tagName)) return;
      const value = String(node.value ?? "");
      const matches = [...value.matchAll(KNOWLEDGE_ID)];
      if (!matches.length) return;
      const children: any[] = [];
      let cursor = 0;
      for (const match of matches) {
        const start = match.index ?? 0;
        if (start > cursor) children.push({ type: "text", value: value.slice(cursor, start) });
        children.push(knowledgeAnchor(match[0], [{ type: "text", value: match[0] }]));
        cursor = start + match[0].length;
      }
      if (cursor < value.length) children.push({ type: "text", value: value.slice(cursor) });
      parent.children.splice(index, 1, ...children);
    });
  };
}

function collectToc() {
  return () => (tree: any, file: any) => {
    const toc: Array<{ id: string; label: string; level: 2 | 3 }> = [];
    (visit as any)(tree, "element", (node: any) => {
      if (node?.tagName !== "h2" && node?.tagName !== "h3") return;
      const id = String(node.properties?.id ?? "");
      if (id) toc.push({ id, label: hastText(node), level: node.tagName === "h2" ? 2 : 3 });
    });
    file.data.toc = toc;
  };
}

function processorFor(file: string, stripLead = false) {
  const cacheKey = `${file}:${stripLead ? "reader" : "fragment"}`;
  if (!processorCache.has(cacheKey)) {
    processorCache.set(
      cacheKey,
      unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(rewriteLinks(file))
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeSanitize, sanitizeSchema as any)
        .use(stripResearchLead(stripLead))
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, { behavior: "wrap", properties: { className: ["heading-anchor"] } })
        .use(wrapTables())
        .use(linkKnowledgeIds())
        .use(collectToc())
        .use(rehypeStringify),
    );
  }
  return processorCache.get(cacheKey)!;
}

export async function renderMarkdownForTest(markdown: string, file = "TEST.md"): Promise<string> {
  return String(await processorFor(file).process(markdown));
}

export function extractMarkdownSection(markdown: string, headingPattern: RegExp): string {
  const tree = unified().use(remarkParse).use(remarkGfm).parse(markdown) as any;
  const children = Array.isArray(tree.children) ? tree.children : [];
  for (let index = 0; index < children.length; index += 1) {
    const node = children[index];
    if (node?.type !== "heading" || !headingPattern.test(toString(node).trim())) continue;
    const start = node.position?.end?.offset;
    if (typeof start !== "number") return "";
    let end = markdown.length;
    for (let nextIndex = index + 1; nextIndex < children.length; nextIndex += 1) {
      const next = children[nextIndex];
      if (next?.type === "heading" && next.depth <= node.depth) {
        end = next.position?.start?.offset ?? end;
        break;
      }
    }
    return markdown.slice(start, end).trim();
  }
  return "";
}

const documentCache = new Map<string, Promise<ContentDocument | null>>();

async function buildDoc(slug: string): Promise<ContentDocument | null> {
  const doc = getGeneratedIndex().find((candidate) => candidate.slug === slug);
  if (!doc) return null;
  const raw = fs.readFileSync(path.join(GENERATED_DOCUMENTS_DIR, doc.generatedFile), "utf8");
  const { content, data } = matter(raw);
  const isResearch = isResearchDocument(doc.file);
  const processed = await processorFor(doc.file, isResearch).process(content);
  const html = String(processed);
  let readerSections: ContentDocument["readerSections"];
  if (isResearch) {
    const fragments = [
      /^respuesta breve(?:, con sus condiciones| provisional)?$/i,
      /^qué sabemos realmente$/i,
      /^nivel de confianza$/i,
      /^qué todavía no sabemos$/i,
      /^qué podría falsarlo$/i,
    ].map((pattern) => extractMarkdownSection(content, pattern));
    const rendered = await Promise.all(fragments.map((fragment) => processorFor(doc.file).process(fragment)));
    readerSections = {
      answerHtml: String(rendered[0]),
      knownHtml: String(rendered[1]),
      confidenceHtml: String(rendered[2]),
      unknownHtml: String(rendered[3]),
      falsifiersHtml: String(rendered[4]),
    };
  }
  const { generatedFile: _generatedFile, ...record } = doc;
  return {
    ...record,
    html,
    data,
    toc: (processed.data.toc as ContentDocument["toc"] | undefined) ?? [],
    readerSections,
  };
}

export function getDoc(slug: string): Promise<ContentDocument | null> {
  if (!CACHE_INDEX) return buildDoc(slug);
  if (!documentCache.has(slug)) documentCache.set(slug, buildDoc(slug));
  return documentCache.get(slug)!;
}

export function getSearchIndex(): SearchIndexRecord[] {
  return getIndex().map((doc) => ({
    s: doc.slug,
    t: doc.title,
    g: doc.section,
    h: doc.headings,
  }));
}
