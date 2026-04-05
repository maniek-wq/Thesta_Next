"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { AboutLayout } from "@/components/about/about-layout";
import { AboutSubpagesTabs } from "@/components/about/about-subpages-tabs";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { useLocale } from "@/components/locale-provider";
import {
  FigmaChevronLeft,
  FigmaChevronRight,
} from "@/components/icons/figma-icons";
import {
  getPartnerLogo,
  type PartnerLogoId,
} from "@/lib/about-media";

const PANEL = "#0C1219";
const BORDER = "rgba(22,32,48,0.3)";
const LOGO_BORDER = "rgba(22,32,48,0.45)";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export function AboutPartnersPage() {
  const { m } = useLocale();
  const p = m.aboutPages.partners;
  const n = p.items.length;
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + n) % n);
    },
    [n],
  );

  const item = p.items[index]!;
  const logo = getPartnerLogo(item.logoId as PartnerLogoId);
  const counter = `${pad2(index + 1)} / ${pad2(n)}`;

  return (
    <AboutLayout>
      <AboutSubpagesTabs active="partners" />

      <RevealOnScroll>
        <header className="mt-10 space-y-4">
          <h1 className="text-[clamp(1.35rem,3vw,1.75rem)] font-medium leading-snug tracking-[-0.02em] text-[#dce3ed]">
            {p.eyebrow}
          </h1>
          <p className="max-w-3xl text-pretty text-[15px] leading-[1.8] text-[#556478]">
            {p.intro}
          </p>
        </header>
      </RevealOnScroll>

      <div
        className="mt-10 flex flex-col overflow-hidden border lg:mt-12 lg:min-h-[min(28rem,70vh)] lg:flex-row"
        style={{ backgroundColor: PANEL, borderColor: BORDER }}
      >
        {/* Lewa kolumna — lista (Figma: pasek teal przy aktywnym) */}
        <nav
          className="flex shrink-0 flex-col border-b lg:w-[min(100%,320px)] lg:border-b-0 lg:border-r"
          style={{ borderColor: BORDER }}
          aria-label={p.title}
        >
          {p.items.map((row, i) => {
            const active = i === index;
            return (
              <button
                key={row.name}
                type="button"
                onClick={() => setIndex(i)}
                className={`flex w-full items-center justify-between gap-3 border-l-[3px] px-4 py-3.5 text-left transition-colors sm:px-5 sm:py-4 ${
                  active
                    ? "border-[#00D4B1] bg-[rgba(0,212,177,0.06)] text-[#dce3ed]"
                    : "border-transparent text-[#556478] hover:bg-white/[0.02] hover:text-[#8a9aaa]"
                }`}
              >
                <span className="min-w-0 text-[14px] font-medium leading-snug">{row.name}</span>
                <span className="offer-font-mono shrink-0 text-[10px] tracking-[0.06em] text-[#00D4B1]">
                  {pad2(i + 1)} / {pad2(n)}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Prawa kolumna — treść + logo + strzałki */}
        <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-8">
          {logo ? (
            <div
              className="relative mb-6 h-24 w-full max-w-[200px] shrink-0 border bg-[#060A10] sm:h-28 sm:max-w-[220px]"
              style={{ borderColor: LOGO_BORDER }}
            >
              <Image
                src={logo}
                alt=""
                fill
                className="object-contain p-3"
                sizes="220px"
              />
            </div>
          ) : null}

          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className="text-[clamp(1.2rem,2.5vw,1.5rem)] font-medium text-[#dce3ed]">
              {item.name}
            </h2>
            <span className="offer-font-mono text-[11px] tracking-[0.08em] text-[#00D4B1]">
              {counter}
            </span>
          </div>

          <p className="mt-5 flex-1 text-pretty text-[15px] leading-[1.85] text-[#556478]">
            {item.body}
          </p>

          <div className="mt-8 flex gap-px self-start border border-[rgba(22,32,48,0.45)] bg-[rgba(22,32,48,0.35)]">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-10 w-10 items-center justify-center bg-[#060A10] text-[#556478] transition-colors hover:text-[#dce3ed]"
              aria-label={p.partnerNavPrev}
            >
              <FigmaChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-10 w-10 items-center justify-center bg-[#060A10] text-[#556478] transition-colors hover:text-[#dce3ed]"
              aria-label={p.partnerNavNext}
            >
              <FigmaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </AboutLayout>
  );
}
