"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsItemModal } from "@/components/home/news-item-modal";
import { NewsCardMedia } from "@/components/news/news-card-media";
import { getNewsItemImage } from "@/lib/news-item-images";
import { FigmaArrowDiagonal } from "@/components/icons/figma-icons";
import { useLocale } from "@/components/locale-provider";
import type { Messages } from "@/lib/messages";

type NewsItem = Messages["home"]["news"]["items"][number];

function estimateReadTime(body: string) {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function TagBadge({ label }: { label: string }) {
  return (
    <span className="border border-sonar/40 bg-sea-950/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.09em] text-sonar backdrop-blur-sm">
      {label}
    </span>
  );
}

function FilterBar({
  tags,
  activeTag,
  onChange,
  allLabel,
}: {
  tags: string[];
  activeTag: string | null;
  onChange: (tag: string | null) => void;
  allLabel: string;
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange(null)}
        className={`border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] transition-colors ${
          activeTag === null
            ? "border-sonar bg-sonar/[0.12] text-sonar"
            : "border-white/20 text-[#8aafc8] hover:border-white/35 hover:text-sonar/70"
        }`}
      >
        {allLabel}
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onChange(activeTag === tag ? null : tag)}
          className={`border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] transition-colors ${
            activeTag === tag
              ? "border-sonar bg-sonar/[0.12] text-sonar"
              : "border-white/20 text-[#8aafc8] hover:border-white/35 hover:text-sonar/70"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

function FeaturedNewsCard({
  item,
  itemIndex,
  onOpen,
  readMoreLabel,
}: {
  item: NewsItem;
  itemIndex: number;
  onOpen: (index: number) => void;
  readMoreLabel: string;
}) {
  const image = getNewsItemImage(item.imageKey);
  const alt = item.imageAlt ?? item.title;

  return (
    <article className="group overflow-hidden border border-white/[0.15] bg-sea-900 transition-colors hover:border-white/30">
      <button
        type="button"
        onClick={() => onOpen(itemIndex)}
        className="grid w-full text-left lg:grid-cols-[minmax(18rem,1.2fr)_minmax(0,1fr)]"
      >
        {/* Left: ArticleCover — fills full card height on desktop */}
        <div className="relative overflow-hidden border-b border-white/[0.08] lg:border-b-0 lg:border-r lg:border-white/[0.08]">
          {/* Mobile spacer to preserve proportion */}
          <div className="aspect-video w-full lg:hidden" />
          {/* Cover fills the full grid cell on desktop */}
          <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.015]">
            {image ? (
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            ) : (
              <FeaturedCoverPlaceholder />
            )}
          </div>
          {/* Bottom gradient for tag legibility */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d2035]/80 to-transparent" />
          {/* Tag badge */}
          <div className="absolute bottom-3 left-3">
            <TagBadge label={item.tag} />
          </div>
        </div>

        {/* Right: content */}
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:py-10 lg:pl-10 lg:pr-8">
          <div>
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="border border-sonar/40 bg-sea-950/60 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.09em] text-sonar">
                {item.tag}
              </span>
              <span className="font-mono text-[10px] text-[#8aafc8]">
                {item.date}
              </span>
              <span className="font-mono text-[10px] text-[#8aafc8]">
                {estimateReadTime(item.modalBody)} min read
              </span>
            </div>
            {/* Title */}
            <h2 className="mt-5 max-w-[26ch] text-[1.45rem] font-medium leading-[1.3] tracking-[-0.015em] text-[#dce3ed] transition-colors group-hover:text-sonar-glow sm:text-[1.55rem]">
              {item.title}
            </h2>
            {/* Excerpt */}
            <p className="mt-4 max-w-[38rem] text-[13px] leading-[1.8] text-[#8aafc8]">
              {item.excerpt}
            </p>
          </div>

          {/* CTA row */}
          <div className="mt-8 flex items-center justify-between border border-white/20 px-4 py-3 transition-colors group-hover:border-sonar/35">
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-sonar">
              {readMoreLabel}
            </span>
            <span className="flex items-center justify-center border border-sonar/40 p-1.5 text-sonar transition-colors group-hover:border-sonar">
              <FigmaArrowDiagonal size={13} />
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}

function FeaturedCoverPlaceholder() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#122944] to-[#0d2035]">
      {/* Subtle sonar tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sonar/[0.03] to-transparent" />
      {/* Radial glow */}
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,212,177,0.15)_0%,transparent_70%)]" />
      {/* Sonar / radar icon */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sonar/60">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden>
          <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.25" />
          <circle cx="32" cy="32" r="21" stroke="currentColor" strokeWidth="1" opacity="0.45" />
          <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="1" opacity="0.65" />
          <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.9" />
          <line x1="32" y1="32" x2="32" y2="2" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="32" y1="32" x2="58" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="32" y1="32" x2="11" y2="11" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>
      {/* Bottom-left gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d2035] to-transparent" />
    </div>
  );
}

function GridNewsCard({
  item,
  itemIndex,
  onOpen,
  readMoreLabel,
}: {
  item: NewsItem;
  itemIndex: number;
  onOpen: (index: number) => void;
  readMoreLabel: string;
}) {
  const image = getNewsItemImage(item.imageKey);
  const alt = item.imageAlt ?? item.title;

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-white/[0.15] bg-sea-900 transition-colors hover:border-white/30">
      <button
        type="button"
        onClick={() => onOpen(itemIndex)}
        className="flex h-full w-full flex-col text-left"
      >
        {/* Cover */}
        <div className="relative overflow-hidden border-b border-white/[0.08]">
          <div className="transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <NewsCardMedia image={image} alt={alt} />
          </div>
          {/* Bottom gradient */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0d2035]/80 to-transparent" />
          {/* Tag badge */}
          <div className="absolute bottom-3 left-3">
            <TagBadge label={item.tag} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            {/* Meta row */}
            <div className="flex items-center gap-3">
              <span className="border border-sonar/40 bg-sea-950/60 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.09em] text-sonar">
                {item.tag}
              </span>
              <span className="font-mono text-[10px] text-[#8aafc8]">
                {item.date}
              </span>
            </div>
            {/* Title */}
            <h3 className="mt-3 line-clamp-2 text-[15px] font-medium leading-[1.4] tracking-[-0.01em] text-[#dce3ed] transition-colors group-hover:text-sonar-glow">
              {item.title}
            </h3>
            {/* Excerpt */}
            <p className="mt-2.5 line-clamp-3 text-[12px] leading-[1.7] text-[#8aafc8]">
              {item.excerpt}
            </p>
          </div>

          {/* CTA row */}
          <div className="mt-5 flex items-center justify-between border border-white/20 px-4 py-2.5 transition-colors group-hover:border-sonar/35">
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-sonar">
              {readMoreLabel}
            </span>
            <div className="flex items-center gap-2 text-[#8aafc8]">
              <span className="flex items-center justify-center border border-[#8aafc8]/40 p-1 transition-colors group-hover:border-sonar/40 group-hover:text-sonar">
                <FigmaArrowDiagonal size={13} />
              </span>
              <span className="font-mono text-[10px]">
                {estimateReadTime(item.modalBody)} min
              </span>
            </div>
          </div>
        </div>
      </button>
    </article>
  );
}

export function NewsPageView() {
  const { m } = useLocale();
  const p = m.newsPage;
  const news = m.home.news;
  const items = news.items;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const item = openIndex != null ? items[openIndex] : null;
  const tags = useMemo(
    () => Array.from(new Set(items.map((entry) => entry.tag))),
    [items],
  );
  const filteredEntries = useMemo(
    () =>
      items
        .map((entry, index) => ({ entry, index }))
        .filter(({ entry }) => (activeTag ? entry.tag === activeTag : true)),
    [items, activeTag],
  );
  const [featured, ...gridItems] = filteredEntries;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
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

      <Link
        href="/"
        className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#8aafc8] transition-colors hover:text-sonar/70"
      >
        ← {p.back}
      </Link>

      <section className="relative overflow-hidden pb-10 pt-12">
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(61,217,160,0.08)_0%,transparent_72%)] blur-3xl" />
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sonar/60">
          {p.kicker}
        </p>
        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1
              id="news-page-heading"
              className="text-4xl font-semibold tracking-tight text-white sm:text-[3.35rem]"
            >
              {p.heading}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#8aafc8] sm:text-[0.95rem]">
              {p.intro}
            </p>
          </div>
          <div className="hidden items-center gap-6 lg:flex">
            <div className="text-center">
              <p className="font-mono text-xl text-sonar">{items.length}</p>
              <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#8aafc8]">
                {p.itemsCountLabel}
              </p>
            </div>
            <div className="text-center">
              <p className="font-mono text-xl text-sonar">{tags.length}</p>
              <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#8aafc8]">
                {p.tagsCountLabel}
              </p>
            </div>
          </div>
        </div>
        <FilterBar
          tags={tags}
          activeTag={activeTag}
          onChange={setActiveTag}
          allLabel={p.allTags}
        />
      </section>

      {featured ? (
        <section className="pb-24" aria-labelledby="news-page-heading">
          <FeaturedNewsCard
            item={featured.entry}
            itemIndex={featured.index}
            onOpen={setOpenIndex}
            readMoreLabel={news.readMore}
          />

          {gridItems.length > 0 ? (
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {gridItems.map(({ entry, index }) => (
                <GridNewsCard
                  key={entry.title}
                  item={entry}
                  itemIndex={index}
                  onOpen={setOpenIndex}
                  readMoreLabel={news.readMore}
                />
              ))}
            </div>
          ) : null}
        </section>
      ) : (
        <section className="pb-24 pt-8">
          <div className="border border-white/[0.15] bg-sea-900 px-6 py-16 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8aafc8]">
              {p.emptyState}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
