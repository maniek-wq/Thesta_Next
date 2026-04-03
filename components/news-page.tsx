"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { NewsItemModal } from "@/components/home/news-item-modal";
import { NewsCardMedia } from "@/components/news/news-card-media";
import { getNewsItemImage } from "@/lib/news-item-images";
import { useLocale } from "@/components/locale-provider";
import type { Messages } from "@/lib/messages";

type NewsItem = Messages["home"]["news"]["items"][number];

/** Przycisk siatki, gdy jest więcej niż jeden slajd lub sensownie dużo wpisów. */
const MIN_ITEMS_FOR_GRID_CTA = 3;

function CarouselChevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {dir === "left" ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  );
}

function chunk<T>(arr: readonly T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

function NewsArchiveCard({
  entry,
  itemIndex,
  titleId,
  seeMoreLabel,
  compact,
  carouselSlide,
  onOpen,
}: {
  entry: NewsItem;
  itemIndex: number;
  titleId: string;
  seeMoreLabel: string;
  compact: boolean;
  /** Karuzela: jednolite wysokości (line-clamp); siatka po „Wczytaj starsze” bez tego. */
  carouselSlide?: boolean;
  onOpen: (i: number) => void;
}) {
  const indexLabel = String(itemIndex + 1).padStart(2, "0");
  const img = getNewsItemImage(entry.imageKey);
  const alt = entry.imageAlt ?? entry.title;

  return (
    <article
      className={`group flex min-h-0 flex-col overflow-hidden border border-bridge-dim/20 bg-sea-850/40 shadow-[0_4px_28px_rgba(0,0,0,0.22)] transition-[border-color,box-shadow] duration-200 hover:border-bridge-dim/40 hover:shadow-[0_8px_36px_rgba(0,0,0,0.28)] ${
        compact
          ? "h-full w-full max-w-[15rem] rounded-xl sm:max-w-[17rem]"
          : "h-full rounded-2xl"
      }`}
      aria-labelledby={titleId}
    >
      <NewsCardMedia image={img} alt={alt} />
      <div className={`flex min-h-0 flex-1 flex-col ${compact ? "p-3" : "p-5 sm:p-6"}`}>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span
            className={`font-mono tabular-nums tracking-wide text-bridge/75 ${
              compact ? "text-[9px]" : "text-[11px]"
            }`}
            aria-hidden
          >
            {indexLabel}
          </span>
          <span className="hidden h-2.5 w-px bg-bridge-dim/30 sm:block" aria-hidden />
          <time
            className={`inline-flex items-center rounded-md border border-bridge-dim/25 bg-sea-900/65 px-1.5 py-0.5 font-mono text-sonar-dim ${
              compact ? "text-[10px]" : "text-xs"
            }`}
          >
            {entry.date}
          </time>
        </div>
        <h2
          id={titleId}
          className={`mt-2 font-semibold leading-snug text-white ${
            compact
              ? "line-clamp-3 text-sm leading-tight sm:text-base"
              : carouselSlide
                ? "mt-4 line-clamp-3 text-xl leading-snug"
                : "mt-4 text-xl leading-snug"
          }`}
        >
          {entry.title}
        </h2>
        <p
          className={`mt-1.5 flex-1 leading-relaxed text-sea-300 ${
            compact
              ? "line-clamp-4 text-[11px] sm:line-clamp-5 sm:text-xs"
              : carouselSlide
                ? "mt-2 line-clamp-5 text-sm sm:line-clamp-6 sm:text-base"
                : "mt-2 text-sm sm:text-base"
          }`}
        >
          {entry.excerpt}
        </p>
        <button
          type="button"
          className={`w-fit text-left font-medium text-bridge transition-colors hover:text-bridge-glow hover:underline ${
            compact ? "mt-2.5 text-[11px] sm:text-xs" : "mt-5 text-sm"
          }`}
          onClick={() => onOpen(itemIndex)}
        >
          {seeMoreLabel}
        </button>
      </div>
    </article>
  );
}

export function NewsPageView() {
  const { m } = useLocale();
  const p = m.newsPage;
  const news = m.home.news;
  const items = news.items;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [expandedGrid, setExpandedGrid] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [activePage, setActivePage] = useState(0);
  const baseId = useId();
  const scrollRef = useRef<HTMLUListElement>(null);
  const pageRefs = useRef<(HTMLLIElement | null)[]>([]);

  const scrollRefCallback = useCallback((el: HTMLLIElement | null, i: number) => {
    pageRefs.current[i] = el;
  }, []);

  const item = openIndex != null ? items[openIndex] : null;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setSlidesPerView(mq.matches ? 3 : 1);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const pages = useMemo(
    () => chunk(items as readonly NewsItem[], slidesPerView),
    [items, slidesPerView],
  );

  useEffect(() => {
    setActivePage(0);
    const el = scrollRef.current;
    if (el) el.scrollLeft = 0;
  }, [slidesPerView, expandedGrid]);

  const updateActiveFromScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || pages.length === 0) return;
    const w = el.clientWidth;
    if (w <= 0) return;
    const idx = Math.round(el.scrollLeft / w);
    setActivePage(Math.min(Math.max(0, idx), pages.length - 1));
  }, [pages.length]);

  useEffect(() => {
    if (expandedGrid) return;
    const el = scrollRef.current;
    if (!el) return;
    updateActiveFromScroll();
    el.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    const ro = new ResizeObserver(updateActiveFromScroll);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateActiveFromScroll);
      ro.disconnect();
    };
  }, [updateActiveFromScroll, pages.length, expandedGrid]);

  const scrollToPage = useCallback(
    (pageIndex: number) => {
      if (pages.length === 0) return;
      const clamped = Math.min(Math.max(0, pageIndex), pages.length - 1);
      const target = pageRefs.current[clamped];
      target?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    },
    [pages.length],
  );

  const showGridCta = items.length >= MIN_ITEMS_FOR_GRID_CTA;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
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
      <Link href="/" className="text-sm text-bridge hover:underline">
        ← {p.back}
      </Link>

      <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-sea-500">
        {p.kicker}
      </p>
      <div className="mt-3 border-l-4 border-sonar/55 pl-5 sm:pl-6">
        <h1
          id={`${baseId}-page-heading`}
          className="text-3xl font-semibold text-white"
        >
          {p.title}
        </h1>
        <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-sea-300">
          {p.intro}
        </p>
      </div>

      {expandedGrid ? (
        <section
          className="mt-12"
          aria-labelledby={`${baseId}-grid-heading`}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2
              id={`${baseId}-grid-heading`}
              className="text-xl font-semibold text-white"
            >
              {p.gridHeading}
            </h2>
            <button
              type="button"
              className="w-fit rounded-xl border border-bridge-dim/40 bg-sea-900/50 px-4 py-2.5 text-sm font-medium text-bridge transition-colors hover:border-bridge/50 hover:bg-sea-850/60 hover:text-bridge-glow"
              onClick={() => setExpandedGrid(false)}
            >
              {p.collapseToCarousel}
            </button>
          </div>
          <ul
            className="mt-8 grid list-none grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
            aria-label={p.gridHeading}
          >
            {items.map((entry, i) => {
              const titleId = `${baseId}-grid-${i}-title`;
              return (
                <li key={i} className="min-w-0">
                  <NewsArchiveCard
                    entry={entry}
                    itemIndex={i}
                    titleId={titleId}
                    seeMoreLabel={news.seeMore}
                    compact={false}
                    onOpen={setOpenIndex}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      ) : (
        <div
          className="mt-12"
          role="region"
          aria-roledescription="karuzela"
          aria-label={p.title}
          aria-labelledby={`${baseId}-page-heading`}
        >
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] lg:items-stretch lg:gap-x-3">
            <div className="hidden lg:flex lg:items-center lg:justify-end">
              {pages.length > 1 && activePage > 0 ? (
                <button
                  type="button"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-bridge-dim/40 bg-sea-900/80 text-bridge shadow-md transition-colors hover:border-bridge/50 hover:bg-sea-850/90 hover:text-bridge-glow"
                  aria-label={p.carouselPrevAria}
                  onClick={() => scrollToPage(activePage - 1)}
                >
                  <CarouselChevron dir="left" />
                </button>
              ) : (
                <span className="inline-block h-10 w-10 shrink-0" aria-hidden />
              )}
            </div>

            <div className="min-w-0">
              <ul
                ref={scrollRef}
                className="flex w-full max-w-full snap-x snap-mandatory gap-0 overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {pages.map((pageItems, pageIdx) => (
                  <li
                    key={pageIdx}
                    ref={(node) => scrollRefCallback(node, pageIdx)}
                    className="w-full min-w-0 shrink-0 grow-0 snap-center snap-always basis-full max-lg:flex max-lg:min-h-[min(72dvh,34rem)] max-lg:flex-col lg:flex lg:min-h-[min(32rem,72vh)] lg:flex-col"
                  >
                    <div
                      className={
                        slidesPerView === 1
                          ? "w-full max-lg:flex max-lg:min-h-0 max-lg:flex-1 max-lg:flex-col"
                          : "grid grid-cols-1 gap-4 sm:gap-5 lg:h-full lg:min-h-0 lg:flex-1 lg:grid-cols-3 lg:content-stretch"
                      }
                    >
                      {pageItems.map((it, j) => {
                        const globalIndex = pageIdx * slidesPerView + j;
                        const titleId = `${baseId}-car-${globalIndex}-title`;
                        return (
                          <div
                            key={globalIndex}
                            className={
                              slidesPerView === 1
                                ? "flex w-full max-lg:min-h-0 max-lg:flex-1 max-lg:flex-col max-lg:items-stretch"
                                : "flex h-full min-h-0 flex-col"
                            }
                          >
                            <NewsArchiveCard
                              entry={it}
                              itemIndex={globalIndex}
                              titleId={titleId}
                              seeMoreLabel={news.seeMore}
                              compact={false}
                              carouselSlide
                              onOpen={setOpenIndex}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-start">
              {pages.length > 1 && activePage < pages.length - 1 ? (
                <button
                  type="button"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-bridge-dim/40 bg-sea-900/80 text-bridge shadow-md transition-colors hover:border-bridge/50 hover:bg-sea-850/90 hover:text-bridge-glow"
                  aria-label={p.carouselNextAria}
                  onClick={() => scrollToPage(activePage + 1)}
                >
                  <CarouselChevron dir="right" />
                </button>
              ) : (
                <span className="inline-block h-10 w-10 shrink-0" aria-hidden />
              )}
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-5">
            {pages.length > 1 ? (
              <div
                className="flex justify-center gap-2"
                role="tablist"
                aria-label={news.carouselDotsAria}
              >
                {pages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === activePage}
                    aria-label={`${i + 1} / ${pages.length}`}
                    tabIndex={i === activePage ? 0 : -1}
                    onClick={() => scrollToPage(i)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors motion-reduce:transition-none ${
                      i === activePage
                        ? "bg-bridge"
                        : "bg-bridge-dim/35 hover:bg-bridge-dim/55"
                    }`}
                  />
                ))}
              </div>
            ) : null}

            {showGridCta ? (
              <button
                type="button"
                className="rounded-xl border border-bridge-dim/45 bg-sea-900/40 px-5 py-2.5 text-sm font-medium text-sea-200 transition-colors hover:border-bridge/40 hover:bg-sea-850/50 hover:text-white"
                onClick={() => setExpandedGrid(true)}
              >
                {p.loadOlder}
              </button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
