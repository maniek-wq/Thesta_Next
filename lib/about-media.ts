import type { StaticImageData } from "next/image";
import exailLogo from "@/assets/img/logo-exail-63936560.svg";

/**
 * Loga partnerów: dopisz import z @/assets/img/... i ustaw w `partnerLogos` poniżej.
 * Oczekiwane nazwy plików (np. z optymalizacji PageSpeed): skydeck, orbit, sep, norbit — skopiuj do assets/img i zaimportuj.
 * PDF koncesji: umieść w public/docs/ i ustaw href w messages (aboutPages.certificates) zamiast "#".
 */

export type PartnerLogoId =
  | "exail"
  | "skydec"
  | "orbit"
  | "septentrio"
  | "norbit";

const partnerLogos: Record<PartnerLogoId, StaticImageData | null> = {
  exail: exailLogo,
  skydec: null,
  orbit: null,
  septentrio: null,
  norbit: null,
};

export function getPartnerLogo(id: PartnerLogoId): StaticImageData | null {
  return partnerLogos[id] ?? null;
}
