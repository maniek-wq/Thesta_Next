"use client";

import { useState } from "react";
import Link from "next/link";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionShell } from "@/components/section-shell";
import { NewsItemModal } from "@/components/home/news-item-modal";
import { NewsCardMedia } from "@/components/news/news-card-media";
import { FigmaArrowDiagonal } from "@/components/icons/figma-icons";
import { getNewsItemImage } from "@/lib/news-item-images";
import type { Messages } from "@/lib/messages";

type News = Messages["home"]["news"];
type NewsItem = News["items"][number];

function estimateReadTime(body: string) {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/** Tag pill overlaid on card image */
function TagPill({ label }: { label: string }) {
  return (
    <span className="border border-sonar/25 bg-sea-950/75 px-2 py-0.5 font-mono text-[9px] tracking-[0.06em] text-sonar-glow/85 backdrop-blur-sm">
      {label}
    </span>
  );
}

function FeaturedNewsCard({
  item,
  itemIndex,
  onSeeMore,
  readMoreLabel,
}: {
  item: NewsItem;
  itemIndex: number;
  onSeeMore: (index: number) => void;
  readMoreLabel: string;
}) {
  const img = getNewsItemImage(item.imageKey);
  const alt = item.imageAlt ?? item.title;
  const readMinutes = estimateReadTime(item.modalBody);

  return (
    <article className="group overflow-hidden border border-bridge-dim/15 bg-sea-900/45 transition-colors hover:border-sonar/25">
      <button
        type="button"
        onClick={() => onSeeMore(itemIndex)}
        className="block w-full text-left"
      >
        {/* Image with tag overlay */}
        <div className="relative overflow-hidden border-b border-bridge-dim/10">
          <div className="transition-transform duration-500 ease-out group-hover:scale-[1.015]">
            <NewsCardMedia image={img} alt={alt} />
          </div>
          {/* bottom gradient for tag legibility */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-sea-950/70 to-transparent" />
          <div className="absolute bottom-3 left-3">
            <TagPill label={item.tag} />
          </div>
        </div>

        {/* Text body */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-sea-500">{item.date}</span>
            <span className="font-mono text-[10px] text-sea-600/70">{readMinutes} min</span>
          </div>
          <h3 className="mt-4 text-[1.45rem] font-semibold leading-snug text-white sm:text-[1.7rem]">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-sea-400">
            {item.excerpt}
          </p>
          <div className="mt-7 flex items-center justify-between border-t border-bridge-dim/10 pt-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-sonar/55 transition-colors group-hover:text-sonar">
              {readMoreLabel}
            </span>
            <span className="flex h-7 w-7 items-center justify-center border border-[rgba(37,82,120,0.5)] text-[#8aafc8] transition-colors group-hover:border-sonar/35 group-hover:text-sonar">
              <FigmaArrowDiagonal size={13} />
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}

function CompactNewsCard({
  item,
  itemIndex,
  onSeeMore,
}: {
  item: NewsItem;
  itemIndex: number;
  onSeeMore: (index: number) => void;
}) {
  const img = getNewsItemImage(item.imageKey);
  const alt = item.imageAlt ?? item.title;

  return (
    <article className="group overflow-hidden border border-bridge-dim/15 bg-sea-900/45 transition-colors hover:border-sonar/25">
      <button
        type="button"
        onClick={() => onSeeMore(itemIndex)}
        className="grid w-full grid-cols-[5.5rem_minmax(0,1fr)] text-left sm:grid-cols-[6.5rem_minmax(0,1fr)]"
      >
        {/* Thumbnail with tag overlay */}
        <div className="relative min-w-0 overflow-hidden border-r border-bridge-dim/10">
          <div className="h-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
            <NewsCardMedia image={img} alt={alt} />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-sea-950/60 to-transparent" />
          <div className="absolute bottom-1.5 left-1.5">
            <TagPill label={item.tag} />
          </div>
        </div>

        {/* Text */}
        <div className="flex min-h-[8rem] flex-col justify-center p-3.5 sm:p-4">
          <span className="font-mono text-[9px] text-sea-600/80">{item.date}</span>
          <h3 className="mt-1.5 text-sm font-medium leading-5 text-white transition-colors group-hover:text-sonar-glow sm:text-[0.93rem]">
            {item.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-[0.75rem] leading-5 text-sea-500">
            {item.excerpt}
          </p>
        </div>
      </button>
    </article>
  );
}

function MobileNewsCard({
  item,
  itemIndex,
  onSeeMore,
  readMoreLabel,
}: {
  item: NewsItem;
  itemIndex: number;
  onSeeMore: (index: number) => void;
  readMoreLabel: string;
}) {
  const img = getNewsItemImage(item.imageKey);
  const alt = item.imageAlt ?? item.title;

  return (
    <article className="group overflow-hidden border border-bridge-dim/15 bg-sea-900/45 transition-colors hover:border-sonar/25">
      <button
        type="button"
        onClick={() => onSeeMore(itemIndex)}
        className="block w-full text-left"
      >
        <div className="relative overflow-hidden border-b border-bridge-dim/10">
          <div className="transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <NewsCardMedia image={img} alt={alt} />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-sea-950/70 to-transparent" />
          <div className="absolute bottom-3 left-3">
            <TagPill label={item.tag} />
          </div>
        </div>
        <div className="p-5">
          <time className="font-mono text-[10px] text-sea-500">{item.date}</time>
          <h3 className="mt-2.5 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-sonar-glow">
            {item.title}
          </h3>
          <p className="mt-2.5 text-sm leading-7 text-sea-400">
            {item.excerpt}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-bridge-dim/10 pt-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-sonar/55">
              {readMoreLabel}
            </span>
            <span className="flex h-7 w-7 items-center justify-center border border-[rgba(37,82,120,0.5)] text-[#8aafc8] transition-colors group-hover:border-sonar/35 group-hover:text-sonar">
              <FigmaArrowDiagonal size={13} />
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}

export function HomeNews({ news }: { news: News }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const item = openIndex != null ? news.items[openIndex] : null;
  const [featured, ...rest] = news.items;

  return (
    <SectionShell
      id="aktualnosci"
      variant="default"
      aria-labelledby="news-heading"
    >
      {item ? (
        <NewsItemModal
          open
          title={item.title}
          body={item.modalBody}
          imageCaption={news.modalImageCaption}
          closeLabel={news.modalClose}
          onClose={() => setOpenIndex(null)}
          image={getNewsItemImage(item.imageKey)}
          imageAlt={item.imageAlt}
        />
      ) : null}

      <RevealOnScroll>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sonar/60">
              {news.title}
            </p>
            <h2
              id="news-heading"
              className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-[2.65rem]"
            >
              {news.heading}
            </h2>
          </div>
          <Link
            href="/news"
            className="group/allnews inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.04em] text-sonar/65 transition-colors hover:text-sonar-glow"
          >
            {news.all}
            <span className="transition-transform duration-200 group-hover/allnews:translate-x-0.5 group-hover/allnews:-translate-y-0.5">
              <FigmaArrowDiagonal size={13} />
            </span>
          </Link>
        </div>
      </RevealOnScroll>

      {/* Desktop layout */}
      <div className="mt-8 hidden gap-3.5 lg:grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] xl:gap-4">
        <RevealOnScroll>
          <FeaturedNewsCard
            item={featured}
            itemIndex={0}
            onSeeMore={setOpenIndex}
            readMoreLabel={news.readMore}
          />
        </RevealOnScroll>

        <div className="flex flex-col gap-3.5">
          {rest.map((newsItem, idx) => (
            <RevealOnScroll key={newsItem.title}>
              <CompactNewsCard
                item={newsItem}
                itemIndex={idx + 1}
                onSeeMore={setOpenIndex}
              />
            </RevealOnScroll>
          ))}
          <RevealOnScroll>
            <Link
              href="/news"
              className="group flex items-center justify-between border border-bridge-dim/15 bg-sea-900/45 px-5 py-3.5 transition-colors hover:border-sonar/25"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-sonar/60 transition-colors group-hover:text-sonar-glow">
                {news.all}
              </span>
              <span className="text-sonar/55 transition-[transform,color] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sonar">
                <FigmaArrowDiagonal size={13} />
              </span>
            </Link>
          </RevealOnScroll>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="mt-8 grid gap-3.5 lg:hidden">
        {news.items.map((newsItem, idx) => (
          <RevealOnScroll key={newsItem.title}>
            <MobileNewsCard
              item={newsItem}
              itemIndex={idx}
              onSeeMore={setOpenIndex}
              readMoreLabel={news.readMore}
            />
          </RevealOnScroll>
        ))}
        <RevealOnScroll>
          <Link
            href="/news"
            className="group flex items-center justify-between border border-bridge-dim/15 bg-sea-900/45 px-5 py-3.5 transition-colors hover:border-sonar/25"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-sonar/60 transition-colors group-hover:text-sonar-glow">
              {news.all}
            </span>
            <span className="text-sonar/55 transition-[transform,color] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sonar">
              <FigmaArrowDiagonal size={13} />
            </span>
          </Link>
        </RevealOnScroll>
      </div>
    </SectionShell>
  );
}
