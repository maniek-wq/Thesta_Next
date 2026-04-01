import Image from "next/image";
import brandLogo from "@/assets/img/logo.webp";

type BrandLogoProps = {
  alt: string;
  className?: string;
  priority?: boolean;
};

/**
 * Pełny plik zawiera też blok tekstowy po prawej — pokazujemy tylko niebieski znak (kadrowanie
 * przez wąski kontener + object-left + overflow hidden).
 */
export function BrandLogo({ alt, className = "", priority }: BrandLogoProps) {
  return (
    <span className={`relative block overflow-hidden ${className}`}>
      <Image
        src={brandLogo}
        alt={alt}
        fill
        className="object-contain object-left"
        sizes="320px"
        priority={priority}
      />
    </span>
  );
}
