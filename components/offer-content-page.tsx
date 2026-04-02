"use client";

import Link from "next/link";

export type OfferContentBlock = {
  readonly caption: string;
  readonly body: string;
  readonly bullets?: readonly string[];
};

type OfferContentPageProps = {
  backHref: string;
  backLabel: string;
  title: string;
  intro: string;
  placeholderCaption: string;
  blocks: readonly OfferContentBlock[];
};

export function OfferContentPage({
  backHref,
  backLabel,
  title,
  intro,
  placeholderCaption,
  blocks,
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
        {blocks.map((block, i) => (
          <section key={i} aria-labelledby={`offer-block-${i}-h`}>
            <div
              className="aspect-video w-full overflow-hidden rounded-2xl border border-bridge-dim/20 bg-sea-850/60"
              role="img"
              aria-label={placeholderCaption}
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
                <span className="text-4xl text-sea-600" aria-hidden>
                  ▣
                </span>
                <span className="text-xs text-sea-500">{placeholderCaption}</span>
              </div>
            </div>
            <h2
              id={`offer-block-${i}-h`}
              className="mt-5 text-xl font-semibold text-sonar-glow"
            >
              {block.caption}
            </h2>
            {block.body ? (
              <p className="mt-3 text-sm leading-relaxed text-sea-300 sm:text-base whitespace-pre-line">
                {block.body}
              </p>
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
        ))}
      </div>
    </div>
  );
}
