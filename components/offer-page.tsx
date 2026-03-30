"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

export function OfferPageView() {
  const { m } = useLocale();
  const p = m.offerPage;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/" className="text-sm text-bridge hover:underline">
        ← {m.newsPage.back}
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-white">{p.title}</h1>
      <p className="mt-4 text-lg text-sea-300">{p.intro}</p>
      <ul className="mt-12 space-y-6">
        {p.sections.map((s, i) => (
          <li
            key={i}
            className="rounded-2xl border border-bridge-dim/15 bg-sea-850/40 p-6"
          >
            <h2 className="text-xl font-semibold text-sonar-glow">{s.title}</h2>
            <p className="mt-3 text-sea-300">{s.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
