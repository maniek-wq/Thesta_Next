/** Trasy usług: /{slug} — zgodne z messages.*.servicePages.bySlug */
export const SERVICE_SLUGS = [
  "projektowanie",
  "uruchomienia",
  "szkolenia",
] as const;

export type ServicePageSlug = (typeof SERVICE_SLUGS)[number];

export function isServicePageSlug(s: string): s is ServicePageSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(s);
}
