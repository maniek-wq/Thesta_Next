"use client";

import { useState } from "react";
import Link from "next/link";
import { NewsItemModal } from "@/components/home/news-item-modal";
import { useLocale } from "@/components/locale-provider";

export function NewsPageView() {
  const { m } = useLocale();
  const p = m.newsPage;
  const news = m.home.news;
  const items = news.items;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const item = openIndex != null ? items[openIndex] : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      {item ? (
        <NewsItemModal
          open
          title={item.title}
          body={item.modalBody}
          imageCaption={news.modalImageCaption}
          closeLabel={news.modalClose}
          onClose={() => setOpenIndex(null)}
        />
      ) : null}
      <Link href="/" className="text-sm text-bridge hover:underline">
        ← {p.back}
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-white">{p.title}</h1>
      <p className="mt-4 text-sea-300">{p.intro}</p>
      <ul className="mt-12 space-y-8">
        {items.map((entry, i) => (
          <li
            key={i}
            className="border-b border-bridge-dim/10 pb-8 last:border-0"
          >
            <time className="font-mono text-xs text-sonar-dim">{entry.date}</time>
            <h2 className="mt-2 text-xl font-semibold text-white">{entry.title}</h2>
            <p className="mt-2 text-sea-300">{entry.excerpt}</p>
            <button
              type="button"
              className="mt-4 text-sm font-medium text-bridge hover:underline"
              onClick={() => setOpenIndex(i)}
            >
              {news.seeMore}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
