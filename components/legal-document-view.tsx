"use client";

import Link from "next/link";

export type LegalSection = { h: string; p: string };

type LegalDocumentViewProps = {
  title: string;
  intro: string;
  disclaimer?: string;
  sections: readonly LegalSection[];
  backLabel: string;
};

export function LegalDocumentView({
  title,
  intro,
  disclaimer,
  sections,
  backLabel,
}: LegalDocumentViewProps) {
  return (
    <article className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <Link href="/" className="text-sm text-bridge hover:underline">
        ← {backLabel}
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-white">{title}</h1>
      <p className="mt-6 text-sm leading-relaxed text-sea-300">{intro}</p>
      {disclaimer ? (
        <p className="mt-4 border border-bridge-dim/20 bg-sea-900/50 p-4 text-xs leading-relaxed text-sea-400">
          {disclaimer}
        </p>
      ) : null}
      <div className="mt-10 space-y-8">
        {sections.map((s, i) => (
          <section key={i}>
            <h2 className="text-lg font-semibold text-bridge/90">{s.h}</h2>
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-sea-300">
              {s.p}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
