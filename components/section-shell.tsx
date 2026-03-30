import type { ReactNode } from "react";

export type SectionVariant = "default" | "band" | "ridge" | "hero";

const variantClass: Record<SectionVariant, string> = {
  hero:
    "scroll-mt-20 overflow-x-clip border-b border-bridge-dim/10 bg-gradient-to-b from-sea-950 via-sea-950 to-sea-900/30",
  default: "scroll-mt-20",
  band: "scroll-mt-20 border-y border-bridge-dim/10 bg-sea-900/45 backdrop-blur-[1px]",
  ridge: "scroll-mt-20 border-t border-bridge-dim/20",
};

const spacing = "py-16 sm:py-20 md:py-24";

type SectionShellProps = {
  id?: string;
  variant?: SectionVariant;
  children: ReactNode;
  className?: string;
  /** false = tylko zewnętrzna ramka, bez max-w (np. hero z własnym układem) */
  contained?: boolean;
  "aria-labelledby"?: string;
};

export function SectionShell({
  id,
  variant = "default",
  children,
  className = "",
  contained = true,
  "aria-labelledby": ariaLabelledBy,
}: SectionShellProps) {
  const isHero = variant === "hero";
  /** Hero: padding ustawia komponent strony (np. pełne dvh); pozostałe sekcje — domyślny rytm */
  const pad = isHero ? "" : spacing;

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`${variantClass[variant]} ${pad} ${className}`}
    >
      {contained ? (
        <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
