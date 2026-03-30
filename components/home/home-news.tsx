"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionShell } from "@/components/section-shell";
import type { Messages } from "@/lib/messages";

type News = Messages["home"]["news"];

export function HomeNews({ news }: { news: News }) {
  return (
    <SectionShell id="aktualnosci" variant="default" aria-labelledby="news-heading">
      <RevealOnScroll>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="news-heading"
              className="text-2xl font-semibold text-white sm:text-3xl"
            >
              {news.title}
            </h2>
          </div>
          <Link
            href="/news"
            className="text-sm font-medium text-bridge hover:text-bridge-glow"
          >
            {news.all} →
          </Link>
        </div>
      </RevealOnScroll>
      <ul className="mt-10 grid list-none gap-6 p-0 md:grid-cols-3">
        {news.items.map((item, i) => (
          <li key={i} className="min-h-0">
            <RevealOnScroll delayMs={i * 100} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-bridge-dim/15 bg-sea-850/40 p-6 transition-colors hover:border-bridge-dim/30">
                <time className="font-mono text-xs text-sonar-dim">{item.date}</time>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-sea-300">
                  {item.excerpt}
                </p>
                <Link
                  href="/news"
                  className="mt-4 text-sm text-bridge hover:underline"
                >
                  {news.readMore}
                </Link>
              </div>
            </RevealOnScroll>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
