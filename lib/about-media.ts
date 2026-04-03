import type { StaticImageData } from "next/image";
import exailLogo from "@/assets/img/logos/logo-exail-63936560.svg";
import norbitLogo from "@/assets/img/logos/norbit.webp";
import orbitLogo from "@/assets/img/logos/orbit.webp";
import skydecLogo from "@/assets/img/logos/skydeck.webp";
import septentrioLogo from "@/assets/img/logos/septentrio.webp";

/**
 * Loga partnerów: pliki w `assets/img/logos/` — dopisz import i wpis w `partnerLogos`.
 * PDF koncesji: `public/docs/` + href w messages (`aboutPages.certificates`).
 */

export type PartnerLogoId =
  | "exail"
  | "skydec"
  | "orbit"
  | "septentrio"
  | "norbit";

const partnerLogos: Record<PartnerLogoId, StaticImageData | null> = {
  exail: exailLogo,
  skydec: skydecLogo,
  orbit: orbitLogo,
  septentrio: septentrioLogo,
  norbit: norbitLogo,
};

export function getPartnerLogo(id: PartnerLogoId): StaticImageData | null {
  return partnerLogos[id] ?? null;
}
