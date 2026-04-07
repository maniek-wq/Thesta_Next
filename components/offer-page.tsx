"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import {
  FigmaArrowDiagonal as ArrowDiagIcon,
  FigmaArrowRight as ArrowRightIcon,
  FigmaCtaArrow as CtaArrowIcon,
  FigmaDot as DotIcon,
} from "@/components/icons/figma-icons";
import {
  ServiceCoverBridgeVisual,
  ServiceCoverMonitorsVisual,
  ServiceCoverStatsVisual,
} from "@/components/offer/service-cover-visuals";
import type { Messages } from "@/lib/messages";

type OfferTab = "products" | "services";
type Block = {
  caption: string;
  body?: string;
  bullets?: string[];
  steps?: { title: string; body: string }[];
};

const offerTeal = "#00D4B1";
const offerCanvas = "#0d2035";
const offerPanel = "#122944";

type ServiceOfferCoverModel = Messages["offerPage"]["serviceOfferCards"][number]["cover"];

function ServiceOfferCoverArt({ cover }: { cover: ServiceOfferCoverModel }) {
  if (cover.kind === "bridge") {
    return (
      <ServiceCoverBridgeVisual
        eyebrowSmall={cover.eyebrowSmall}
        eyebrowWide={cover.eyebrowWide}
        systemTags={cover.systemTags}
        protocolLine={cover.protocolLine}
      />
    );
  }

  if (cover.kind === "stats") {
    return <ServiceCoverStatsVisual cells={cover.cells} />;
  }

  return (
    <ServiceCoverMonitorsVisual
      primary={cover.primary}
      secondary={cover.secondary}
    />
  );
}

function ServiceOfferCoverCard({
  slug,
  code,
  cover,
}: {
  slug: string;
  code: string;
  cover: ServiceOfferCoverModel;
}) {
  return (
    <Link
      href={`/${slug}`}
      className="group relative flex min-h-[260px] min-w-0 flex-1 flex-col overflow-hidden border-t border-white/[0.06] outline-none transition-[box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-[#00D4B1]/50 lg:border-l lg:border-t-0"
    >
      <span
        className="absolute inset-0 bg-gradient-to-br from-[#0B1622] to-[#070D16]"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_45%,rgba(0,212,177,0.14)_0%,transparent_58%)] opacity-40"
        aria-hidden
      />
      <div className="relative z-[1] flex flex-1 flex-col">
        <ServiceOfferCoverArt cover={cover} />
      </div>
      <span
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0d2035]/[0.72] to-transparent"
        aria-hidden
      />
      <span className="offer-font-mono absolute bottom-5 left-5 z-[2] text-[10px] text-[rgba(0,212,177,0.3)] transition-colors duration-300 group-hover:text-[rgba(0,212,177,0.5)]">
        {code}
      </span>
    </Link>
  );
}

function ServiceOfferTextCard({
  slug,
  title,
  subtitle,
}: {
  slug: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Link
      href={`/${slug}`}
      className="group flex min-h-[104px] w-full shrink-0 items-center gap-4 border-b border-white/[0.06] px-6 py-5 outline-none transition-[background-color] duration-300 hover:bg-white/[0.02] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#00D4B1]/45 lg:w-[min(395px,42%)] lg:max-w-md lg:border-b-0 lg:border-r lg:border-white/[0.06]"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/[0.06]">
        <ArrowDiagIcon className="text-[#4a5a6a] transition-colors duration-300 group-hover:text-[#5a6a7a]" />
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-[16px] font-medium leading-normal tracking-[-0.01em] text-[#d0dce8]">
          {title}
        </span>
        <span className="offer-font-mono text-[10px] font-medium leading-normal text-[rgba(85,100,120,0.35)]">
          {subtitle}
        </span>
      </div>
      <ArrowRightIcon className="shrink-0 text-white/[0.12] transition-colors duration-300 group-hover:text-white/25" />
    </Link>
  );
}

function TabSwitcher({
  tab,
  onSwitch,
}: {
  tab: OfferTab;
  onSwitch: (t: OfferTab) => void;
}) {
  const { m } = useLocale();
  const p = m.offerPage;

  const tabs: { key: OfferTab; label: string }[] = [
    { key: "products", label: p.productsTitle },
    { key: "services", label: p.servicesTitle },
  ];

  return (
    <div
      className="inline-flex border border-white/[0.07] p-1"
      style={{ backgroundColor: "rgba(10, 16, 24, 0.8)" }}
      role="tablist"
      aria-label={p.title}
    >
      {tabs.map(({ key, label }) => {
        const active = tab === key;
        return (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onSwitch(key)}
            className={`offer-font-mono relative min-w-[7.5rem] px-5 py-2.5 text-[11px] font-medium tracking-[0.1em] transition-[color,background-color,border-color,box-shadow] duration-300 ease-out ${
              active
                ? "border border-[rgba(0,212,177,0.25)] text-[#00D4B1]"
                : "border border-transparent text-[#8aafc8] hover:text-[#8a9aaa]"
            }`}
            style={
              active
                ? { backgroundColor: "rgba(0, 212, 177, 0.1)" }
                : undefined
            }
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

function ProductsSectionHeader() {
  const { m } = useLocale();
  const p = m.offerPage;

  return (
    <div className="mb-3 flex flex-wrap items-center gap-3 pl-1">
      <span
        className="h-2 w-2 shrink-0"
        style={{ backgroundColor: "rgba(0, 212, 177, 0.6)" }}
        aria-hidden
      />
      <span className="text-[13px] font-normal leading-normal tracking-[-0.005em] text-[#dce3ed]">
        {p.productsTitle}
      </span>
      <span className="offer-font-mono text-[10px] leading-normal text-[rgba(85,100,120,0.3)]">
        {p.productsDescriptor}
      </span>
    </div>
  );
}

function ListRow({
  code,
  category,
  listTitle,
  active,
  onClick,
}: {
  code: string;
  category: string;
  listTitle: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full overflow-hidden border-0 border-b border-l-[2px] text-left transition-[background-color,border-color] duration-300 ease-out ${
        active
          ? "border-[#00D4B1]"
          : "border-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.08)]"
      }`}
      style={{
        backgroundColor: active ? "rgba(0, 212, 177, 0.06)" : offerCanvas,
      }}
    >
      {active && (
        <span
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,212,177,0.05)_0%,transparent_55%)]"
          aria-hidden
        />
      )}

      <div className="relative flex items-center gap-4 px-6 py-[18px]">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-colors duration-300 ${
            active
              ? "border-[rgba(0,212,177,0.25)]"
              : "border-[rgba(255,255,255,0.06)]"
          }`}
          style={
            active
              ? {
                  background:
                    "linear-gradient(90deg, rgba(0,212,177,0.05) 0%, transparent 100%)",
                }
              : undefined
          }
        >
          <ArrowDiagIcon
            className={
              active
                ? "text-[#00D4B1]"
                : "text-[#4a5a6a] group-hover:text-[#5a6a7a]"
            }
          />
        </span>

        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span
            className="offer-font-mono text-[9px] font-medium tracking-[0.08em] transition-colors duration-300"
            style={{ color: "rgba(0, 212, 177, 0.3)" }}
          >
            {code} · {category}
          </span>
          <span
            className={`text-[14px] font-medium leading-normal transition-colors duration-300 ${
              active
                ? "text-[#e0eaf5]"
                : "text-[#68788a] group-hover:text-[#8a9aaa]"
            }`}
          >
            {listTitle}
          </span>
        </div>

        <ArrowRightIcon
          className={`shrink-0 transition-colors duration-300 ${
            active
              ? "text-[#00D4B1]"
              : "text-white/10 group-hover:text-white/25"
          }`}
        />
      </div>
    </button>
  );
}

function DetailPanel({
  title,
  subtitle,
  description,
  features,
  tags,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  features?: { caption: string; body?: string; bullets?: string[] }[];
  tags?: string[];
}) {
  return (
    <div
      className="h-full min-h-[20rem] border border-white/[0.07] p-7 lg:p-8"
      style={{ backgroundColor: offerPanel }}
    >
      <h2 className="text-[22.4px] font-medium leading-[1.25] tracking-[-0.015em] text-[#dce3ed]">
        {title}
      </h2>

      {subtitle && (
        <p
          className="offer-font-mono mt-1.5 text-[11px] leading-normal"
          style={{ color: "rgba(85, 100, 120, 0.4)" }}
        >
          {subtitle}
        </p>
      )}

      <div className="my-5 h-px w-full max-w-md bg-[linear-gradient(90deg,#00D4B1_0%,transparent_72%)]" />

      {description && (
        <p className="text-[13px] leading-[1.8] text-[#8aafc8]">{description}</p>
      )}

      {features && features.length > 0 && (
        <div className="mt-5 flex flex-col gap-5">
          {features.map((block, i) => (
            <div key={i}>
              <p
                className="offer-font-mono text-[9px] uppercase tracking-[0.07em]"
                style={{ color: "rgba(0, 212, 177, 0.7)" }}
              >
                {block.caption}
              </p>
              {block.body && (
                <p className="mt-2 text-[13px] leading-[1.75] text-[#8aafc8]">
                  {block.body}
                </p>
              )}
              {block.bullets && block.bullets.length > 0 && (
                <ul className="mt-2 flex flex-col gap-1.5">
                  {block.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-[13px] leading-[1.6] text-[rgba(220,227,237,0.88)]"
                    >
                      <span className="mt-[5px] text-[#00D4B1]">
                        <DotIcon className="shrink-0" />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {tags && tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="offer-font-mono border border-[rgba(0,212,177,0.5)] px-2.5 py-1 text-[9px] tracking-[0.07em] text-[#00D4B1]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function ProductsTab() {
  const { m } = useLocale();
  const p = m.offerPage;
  const [activeCategory, setActiveCategory] = useState(0);

  const cat = p.productCategories[activeCategory];
  const products = cat.itemSlugs.map((slug) => m.productPages.bySlug[slug]);

  const tags = cat.itemSlugs.map(
    (slug) => m.productPages.bySlug[slug]?.title ?? slug,
  );

  const primaryProduct = products[0];
  const allBlocks = products.flatMap(
    (prod) => (prod?.blocks ?? []) as unknown as Block[],
  );

  return (
    <div className="border-t border-[rgba(255,255,255,0.05)] pt-4">
      <ProductsSectionHeader />
      <div
        className="border-t border-[rgba(255,255,255,0.05)] pt-3"
        style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
      >
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[minmax(0,11.2fr)_minmax(0,15.4fr)] lg:gap-3 lg:p-3">
          <div className="flex flex-col">
            {p.productCategories.map((category, idx) => (
              <ListRow
                key={`${category.title}-${category.listTitle}`}
                code={`P0${idx + 1}`}
                category={category.title}
                listTitle={category.listTitle}
                active={activeCategory === idx}
                onClick={() => setActiveCategory(idx)}
              />
            ))}
          </div>

          <DetailPanel
            title={cat.listTitle}
            subtitle={primaryProduct?.title}
            description={primaryProduct?.intro}
            features={allBlocks.slice(0, 6).map((b) => ({
              caption: b.caption,
              body: b.body || undefined,
              bullets: b.bullets,
            }))}
            tags={tags}
          />
        </div>
      </div>
    </div>
  );
}

function ServicesTab() {
  const { m } = useLocale();
  const p = m.offerPage;
  const rows = p.serviceOfferCards;

  return (
    <div className="border-t border-[rgba(255,255,255,0.05)] pt-4">
      <div className="mb-3 flex flex-wrap items-center gap-3 pl-1">
        <span
          className="h-2 w-2 shrink-0"
          style={{ backgroundColor: "rgba(0, 212, 177, 0.6)" }}
          aria-hidden
        />
        <span className="text-[13px] font-normal tracking-[-0.005em] text-[#dce3ed]">
          {p.servicesTitle}
        </span>
        <span className="offer-font-mono text-[10px] text-[rgba(85,100,120,0.3)]">
          {p.servicesDescriptor}
        </span>
      </div>
      <div
        className="border-t border-[rgba(255,255,255,0.05)] pt-3"
        style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
      >
        <div className="flex flex-col gap-3 p-3">
          {rows.map((row) => (
            <div
              key={row.slug}
              className="flex flex-col overflow-hidden border border-white/[0.06] bg-sea-900 lg:flex-row lg:items-stretch"
            >
              <ServiceOfferTextCard
                slug={row.slug}
                title={row.cardTitle}
                subtitle={row.cardSubtitle}
              />
              <ServiceOfferCoverCard
                slug={row.slug}
                code={row.code}
                cover={row.cover}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OfferCtaBar({ onServicesClick }: { onServicesClick: () => void }) {
  const { m } = useLocale();
  const p = m.offerPage;

  return (
    <RevealOnScroll>
      <div
        className="offer-cta-radial relative mt-16 border-t border-[rgba(37,82,120,0.3)] px-0 py-12"
        style={{ backgroundColor: offerCanvas }}
      >
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-xl space-y-3">
            <p
              className="offer-font-mono text-[10px] tracking-[0.12em] text-[rgba(0,212,177,0.5)]"
              style={{ letterSpacing: "0.12em" }}
            >
              {p.ctaKicker}
            </p>
            <h2 className="text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-[#dce3ed]">
              {p.ctaTitle}
            </h2>
            <p className="text-[14px] leading-[1.75] text-[#8aafc8]">
              {p.ctaBody}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 text-[13px] font-medium text-[#060a10] transition-[filter,transform] duration-300 hover:brightness-110 active:scale-[0.98]"
              style={{ backgroundColor: offerTeal }}
            >
              {p.ctaPrimary}
              <CtaArrowIcon />
            </Link>
            <button
              type="button"
              onClick={onServicesClick}
              className="inline-flex items-center gap-2 border border-[rgba(37,82,120,0.5)] px-5 py-3 text-[13px] font-medium text-[#8aafc8] transition-[color,border-color,background-color] duration-300 hover:border-[rgba(85,100,120,0.6)] hover:text-[#8a9aaa]"
            >
              {p.ctaSecondary}
              <ArrowRightIcon className="text-[#8aafc8]" />
            </button>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export function OfferPageView() {
  const { m } = useLocale();
  const p = m.offerPage;
  const [tab, setTab] = useState<OfferTab>("products");

  return (
    <div
      className="min-h-[calc(100dvh-var(--nav-height,4rem)-5rem)] pb-16"
      style={{ backgroundColor: offerCanvas }}
    >
      <div className="mx-auto max-w-[1216px] px-4 sm:px-8">
        <Link
          href="/"
          className="offer-font-mono inline-block pt-10 text-[10px] uppercase tracking-[0.1em] text-[#8aafc8] transition-colors duration-300 hover:text-[rgba(0,212,177,0.65)]"
        >
          ← {p.backLink}
        </Link>

        <RevealOnScroll>
          <header className="mt-10 space-y-4">
            <p
              className="offer-font-mono text-[10px] font-normal uppercase tracking-[0.15em] text-[rgba(0,212,177,0.5)]"
              style={{ letterSpacing: "0.15em" }}
            >
              {p.sectionKicker}
            </p>
            <h1 className="max-w-[22ch] text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#dce3ed]">
              {p.headline}
            </h1>
            <p className="max-w-2xl text-[15px] leading-[1.8] text-[#8aafc8]">
              {p.intro}
            </p>
            <p className="offer-font-mono text-[10px] tracking-[0.15em] text-[rgba(85,100,120,0.3)]">
              {p.metaLine}
            </p>
            <div className="pt-2">
              <TabSwitcher tab={tab} onSwitch={setTab} />
            </div>
          </header>
        </RevealOnScroll>

        <RevealOnScroll delayMs={80} rootMargin="0px 0px -6% 0px">
          <div className="mt-10">
            <div key={tab} className="offer-tab-panel-animate">
              {tab === "products" ? <ProductsTab /> : <ServicesTab />}
            </div>
          </div>
        </RevealOnScroll>

        <OfferCtaBar onServicesClick={() => setTab("services")} />
      </div>
    </div>
  );
}
