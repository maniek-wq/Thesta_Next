"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

export function NewsPageView() {
  const { m } = useLocale();
  const p = m.newsPage;
  const items = m.home.news.items;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/" className="text-sm text-bridge hover:underline">
        ← {p.back}
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-white">{p.title}</h1>
      <p className="mt-4 text-sea-300">{p.intro}</p>
      <ul className="mt-12 space-y-8">
        {items.map((item, i) => (
          <li
            key={i}
            className="border-b border-bridge-dim/10 pb-8 last:border-0"
          >
            <time className="font-mono text-xs text-sonar-dim">{item.date}</time>
            <h2 className="mt-2 text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-2 text-sea-300">{item.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
