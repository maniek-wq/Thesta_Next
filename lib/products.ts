/** Trasy produktów: /{slug} — muszą być zgodne z messages.*.productDetailPages */
export const PRODUCT_SLUGS = [
  "systemy-nawigacyjne",
  "oswietlenie-nawigacyjne",
  "ins",
  "odbiorniki-gnss",
  "vsat",
  "lacznosc-wewnetrzna-okretowa",
  "lacznosc-radiowa",
  "nawodne-pojazdy-bezalogowe-usv",
  "echosondy-wielowiazowe",
  "pojazdy-podwodne-rov-auv",
  "t-bwss",
] as const;

export type ProductPageSlug = (typeof PRODUCT_SLUGS)[number];

export function isProductPageSlug(s: string): s is ProductPageSlug {
  return (PRODUCT_SLUGS as readonly string[]).includes(s);
}
