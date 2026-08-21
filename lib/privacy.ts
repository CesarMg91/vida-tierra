export function stripUrlQuery(url: string) {
  try {
    const parsed = new URL(url);
    return `${parsed.origin}${parsed.pathname}`;
  } catch {
    return url.split(/[?#]/, 1)[0] ?? url;
  }
}

export function sanitizeAnalyticsEvent<T extends { url: string }>(event: T): T {
  return { ...event, url: stripUrlQuery(event.url) };
}
