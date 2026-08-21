import { READER_STATE_KEY, type ReaderStateV1 } from "./contracts.ts";

export const EMPTY_READER_STATE: ReaderStateV1 = {
  completed: [],
  bookmarks: [],
  preferredMode: "summary",
};

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function strings(value: unknown): string[] {
  return Array.isArray(value) ? [...new Set(value.filter((item): item is string => typeof item === "string"))] : [];
}

export function normalizeReaderState(value: unknown): ReaderStateV1 {
  if (!isObject(value)) return { ...EMPTY_READER_STATE };
  const preferredMode = ["summary", "full", "evidence"].includes(String(value.preferredMode))
    ? (value.preferredMode as ReaderStateV1["preferredMode"])
    : "summary";
  const bookmarks = Array.isArray(value.bookmarks)
    ? value.bookmarks
        .filter((item): item is Record<string, unknown> => isObject(item) && typeof item.slug === "string")
        .map((item) => ({
          slug: String(item.slug),
          ...(typeof item.heading === "string" ? { heading: item.heading } : {}),
        }))
    : [];
  const last = isObject(value.lastVisited) && typeof value.lastVisited.slug === "string" ? value.lastVisited : null;
  return {
    completed: strings(value.completed),
    bookmarks,
    ...(last
      ? {
          lastVisited: {
            slug: String(last.slug),
            ...(typeof last.heading === "string" ? { heading: last.heading } : {}),
            progress: Math.min(1, Math.max(0, Number(last.progress) || 0)),
            updatedAt: typeof last.updatedAt === "string" ? last.updatedAt : new Date(0).toISOString(),
          },
        }
      : {}),
    preferredMode,
  };
}

export function readReaderState(storage: Pick<Storage, "getItem" | "removeItem">): ReaderStateV1 {
  const raw = storage.getItem(READER_STATE_KEY);
  if (!raw) return { ...EMPTY_READER_STATE };
  try {
    return normalizeReaderState(JSON.parse(raw));
  } catch {
    storage.removeItem(READER_STATE_KEY);
    return { ...EMPTY_READER_STATE };
  }
}

export function writeReaderState(storage: Pick<Storage, "setItem">, state: ReaderStateV1) {
  storage.setItem(READER_STATE_KEY, JSON.stringify(normalizeReaderState(state)));
}
