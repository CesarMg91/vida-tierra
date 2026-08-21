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
};

export const REPO_ROOT = process.cwd();
const GENERATED_CONTENT_ROOT = path.join(REPO_ROOT, ".generated", "content");
const GENERATED_INDEX_FILE = path.join(GENERATED_CONTENT_ROOT, "index.json");
const GENERATED_DOCUMENTS_DIR = path.join(GENERATED_CONTENT_ROOT, "documents");

type GeneratedIndexRecord = ContentIndexRecord & { generatedFile: string };

export function fileToSlug(file: string): string {
  return file.replace(/\.md$/, "");
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

function processorFor(file: string) {
  if (!processorCache.has(file)) {
    processorCache.set(
      file,
      unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(rewriteLinks(file))
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeSanitize, sanitizeSchema as any)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, { behavior: "wrap", properties: { className: ["heading-anchor"] } })
        .use(rehypeStringify),
    );
  }
  return processorCache.get(file)!;
}

export async function renderMarkdownForTest(markdown: string, file = "TEST.md"): Promise<string> {
  return String(await processorFor(file).process(markdown));
}

export async function getDoc(slug: string): Promise<ContentDocument | null> {
  const doc = getGeneratedIndex().find((candidate) => candidate.slug === slug);
  if (!doc) return null;
  const raw = fs.readFileSync(path.join(GENERATED_DOCUMENTS_DIR, doc.generatedFile), "utf8");
  const { content, data } = matter(raw);
  const html = String(await processorFor(doc.file).process(content));
  const { generatedFile: _generatedFile, ...record } = doc;
  return { ...record, html, data };
}

export function getSearchIndex(): SearchIndexRecord[] {
  return getIndex().map((doc) => ({
    s: doc.slug,
    t: doc.title,
    g: doc.section,
    h: doc.headings,
  }));
}
