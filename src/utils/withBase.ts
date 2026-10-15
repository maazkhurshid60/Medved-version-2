// Prefix internal root-relative links with the deploy base path (e.g. "/repo/" on GitHub Pages).
export function withBase(href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  return import.meta.env.BASE_URL.replace(/\/$/, "") + href;
}
