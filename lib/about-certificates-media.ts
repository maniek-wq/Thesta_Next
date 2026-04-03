import type { StaticImageData } from "next/image";
import certKoncesja1 from "@/assets/img/certifcates/xkoncesja_mswia.png.pagespeed.ic.jPk9WiamFx.webp";
import certKoncesja2 from "@/assets/img/certifcates/xkoncesja_mswia_2.png.pagespeed.ic.J1cwWSEKVD.webp";
import certWsk from "@/assets/img/certifcates/xCertyfikat-WSK_page-0001-724x1024.jpg.pagespeed.ic.v38CxFU9HO.webp";
import certPolityka from "@/assets/img/certifcates/xpolityka-jakosci-755x1024.png.pagespeed.ic.3CS8rpxSVp.webp";

/**
 * Kolejność jak `aboutPages.certificates.sections` (PL i EN): koncesja, decyzje, WSK/WSK, polityka jakości.
 */
export const certificateSectionImages: StaticImageData[] = [
  certKoncesja1,
  certKoncesja2,
  certWsk,
  certPolityka,
];

export function getCertificateSectionImage(
  sectionIndex: number,
): StaticImageData | null {
  return certificateSectionImages[sectionIndex] ?? null;
}
