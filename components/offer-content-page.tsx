"use client";

import Image from "next/image";
import Link from "next/link";
import { FigmaArrowDiagonal } from "@/components/icons/figma-icons";

export type OfferContentStep = {
  readonly title: string;
  readonly body?: string;
};

export type OfferContentBlock = {
  readonly caption: string;
  readonly body: string;
  readonly bullets?: readonly string[];
  /** Domyślnie `placeholder` — pas graficzny nad nagłówkiem sekcji. */
  readonly media?: "placeholder" | "none";
  readonly image?: { readonly src: string; readonly alt: string };
  readonly steps?: readonly OfferContentStep[];
};

type OfferContentPageProps = {
  backHref: string;
  backLabel: string;
  title: string;
  intro: string;
  placeholderCaption: string;
  blocks: readonly OfferContentBlock[];
  cta?: { readonly label: string; readonly href: string };
};

export function OfferContentPage({
  backHref,
  backLabel,
  title,
  intro,
  placeholderCaption,
  blocks,
  cta,
}: OfferContentPageProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href={backHref} className="text-sm text-bridge hover:underline">
        ← {backLabel}
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-white">{title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-sea-300 whitespace-pre-line">
        {intro}
      </p>

      <div className="mt-12 space-y-12">
        {blocks.map((block, i) => {
          const showMedia = block.media !== "none";
          const image = block.image;

          return (
            <section key={i} aria-labelledby={`offer-block-${i}-h`}>
              {showMedia ? (
                <div className="relative aspect-video w-full overflow-hidden border border-bridge-dim/20 bg-sea-850/60">
                  {image ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 48rem, 100vw"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center"
                      role="img"
                      aria-label={placeholderCaption}
                    >
                      <span className="text-4xl text-sea-600" aria-hidden>
                        ▣
                      </span>
                      <span className="text-xs text-sea-500">
                        {placeholderCaption}
                      </span>
                    </div>
                  )}
                </div>
              ) : null}
              <h2
                id={`offer-block-${i}-h`}
                className={`text-xl font-semibold text-sonar-glow ${
                  showMedia ? "mt-5" : ""
                }`}
              >
                {block.caption}
              </h2>
              {block.body ? (
                <p className="mt-3 text-sm leading-relaxed text-sea-300 sm:text-base whitespace-pre-line">
                  {block.body}
                </p>
              ) : null}
              {block.steps && block.steps.length > 0 ? (
                <ol className="mt-5 list-decimal space-y-4 pl-5 text-sm text-sea-300 marker:font-semibold marker:text-bridge sm:text-base">
                  {block.steps.map((step, k) => (
                    <li key={k} className="leading-relaxed">
                      <span className="font-semibold text-sea-200">
                        {step.title}
                      </span>
                      {step.body ? (
                        <p className="mt-1.5 pl-0 font-normal text-sea-300">
                          {step.body}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ol>
              ) : null}
              {block.bullets && block.bullets.length > 0 ? (
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-sea-300 marker:text-bridge/60 sm:text-base">
                  {block.bullets.map((item, j) => (
                    <li key={j} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          );
        })}
      </div>

      {cta ? (
        <div className="mt-14 flex flex-wrap gap-4 border-t border-bridge-dim/15 pt-10">
          <Link
            href={cta.href}
            className="group inline-flex items-center justify-center gap-2 bg-sonar-dim px-6 py-3 text-sm font-medium text-sea-950 transition-colors hover:bg-sonar"
          >
            {cta.label}
            <FigmaArrowDiagonal
              size={13}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
