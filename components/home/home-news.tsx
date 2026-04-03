"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionShell } from "@/components/section-shell";
import { NewsItemModal } from "@/components/home/news-item-modal";
import { NewsCardMedia } from "@/components/news/news-card-media";
import { getNewsItemImage } from "@/lib/news-item-images";
import type { Messages } from "@/lib/messages";

type News = Messages["home"]["news"];
type NewsItem = News["items"][number];

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

function NewsCard({
  item,
  itemIndex,
  seeMoreLabel,
  carouselSlide,
  onSeeMore,
}: {
  item: NewsItem;
  itemIndex: number;
  seeMoreLabel: string;
  /** Karuzela (np. mobile): stała wysokość slajdu + skrót tekstu. */
  carouselSlide?: boolean;
  onSeeMore: (index: number) => void;
}) {
  const img = getNewsItemImage(item.imageKey);
  const alt = item.imageAlt ?? item.title;

  return (
    <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-bridge-dim/15 bg-sea-850/40 transition-colors hover:border-bridge-dim/30">
      <NewsCardMedia image={img} alt={alt} />
      <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
        <time className="font-mono text-xs text-sonar-dim">{item.date}</time>
        <h3
          className={`mt-3 text-lg font-semibold leading-snug text-white ${
            carouselSlide ? "line-clamp-3" : ""
          }`}
        >
          {item.title}
        </h3>
        <p
          className={`mt-2 flex-1 text-sm leading-relaxed text-sea-300 ${
            carouselSlide ? "line-clamp-5 sm:line-clamp-6" : ""
          }`}
        >
          {item.excerpt}
        </p>
        <button
          type="button"
          className="mt-4 w-fit text-left text-sm font-medium text-bridge hover:underline"
          onClick={() => onSeeMore(itemIndex)}
        >
          {seeMoreLabel}
        </button>
      </div>
    </article>
  );
}

export function HomeNews({ news }: { news: News }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [activePage, setActivePage] = useState(0);
  const scrollRef = useRef<HTMLUListElement>(null);
  const pageRefs = useRef<(HTMLLIElement | null)[]>([]);

  const open = openIndex != null;
  const item = open ? news.items[openIndex] : null;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setSlidesPerView(mq.matches ? 3 : 1);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const pages = useMemo(
    () => chunk(news.items as readonly NewsItem[], slidesPerView),
    [news.items, slidesPerView],
  );

  useEffect(() => {
    setActivePage(0);
    const el = scrollRef.current;
    if (el) el.scrollLeft = 0;
  }, [slidesPerView]);

  const updateActiveFromScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || pages.length === 0) return;
    const w = el.clientWidth;
    if (w <= 0) return;
    const idx = Math.round(el.scrollLeft / w);
    setActivePage(Math.min(Math.max(0, idx), pages.length - 1));
  }, [pages.length]);

  useEffect(() => {
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
  }, [updateActiveFromScroll, pages.length]);

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

  return (
    <SectionShell id="aktualnosci" variant="default" aria-labelledby="news-heading">
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

      <div
        className="mt-10"
        role="region"
        aria-roledescription="karuzela"
        aria-label={news.title}
      >
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] lg:items-stretch lg:gap-x-3">
          <div className="hidden lg:flex lg:items-center lg:justify-end">
            {pages.length > 1 && activePage > 0 ? (
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-bridge-dim/40 bg-sea-900/80 text-bridge shadow-md transition-colors hover:border-bridge/50 hover:bg-sea-850/90 hover:text-bridge-glow"
                aria-label={news.carouselPrevAria}
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
                  ref={(node) => {
                    pageRefs.current[pageIdx] = node;
                  }}
                  className="w-full min-w-0 shrink-0 grow-0 snap-center snap-always basis-full max-lg:flex max-lg:min-h-[min(72dvh,34rem)] max-lg:flex-col lg:flex lg:min-h-[min(32rem,72vh)] lg:flex-col"
                >
                  <div
                    className={
                      slidesPerView === 1
                        ? "w-full max-lg:flex max-lg:min-h-0 max-lg:flex-1 max-lg:flex-col"
                        : "grid grid-cols-1 gap-6 lg:h-full lg:min-h-0 lg:flex-1 lg:grid-cols-3 lg:content-stretch"
                    }
                  >
                    {pageItems.map((it, j) => {
                      const globalIndex = pageIdx * slidesPerView + j;
                      return (
                        <div
                          key={globalIndex}
                          className={
                            slidesPerView === 1
                              ? "flex min-w-0 max-lg:min-h-0 max-lg:flex-1 max-lg:flex-col max-lg:items-stretch"
                              : "flex h-full min-h-0 min-w-0 flex-col"
                          }
                        >
                          <NewsCard
                            item={it}
                            itemIndex={globalIndex}
                            seeMoreLabel={news.seeMore}
                            carouselSlide={slidesPerView === 1}
                            onSeeMore={setOpenIndex}
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
                aria-label={news.carouselNextAria}
                onClick={() => scrollToPage(activePage + 1)}
              >
                <CarouselChevron dir="right" />
              </button>
            ) : (
              <span className="inline-block h-10 w-10 shrink-0" aria-hidden />
            )}
          </div>
        </div>

        {pages.length > 1 ? (
          <div
            className="mt-6 flex justify-center gap-2"
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
      </div>
    </SectionShell>
  );
}
