"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

const BG = "#0d2035";
const CARD = "#122944";

export function AboutHubPage() {
  const { m } = useLocale();
  const h = m.aboutPages.hub;

  return (
    <div className="min-h-[calc(100dvh-var(--nav-height,4rem)-5rem)] pb-20" style={{ backgroundColor: BG }}>
      <div className="mx-auto max-w-[1216px] px-4 sm:px-8">
        <Link
          href="/"
          className="offer-font-mono inline-block pt-10 text-[10px] uppercase tracking-[0.1em] text-[#8aafc8] transition-colors duration-300 hover:text-[rgba(0,212,177,0.65)]"
        >
          ← {m.aboutPages.common.back}
        </Link>

        <RevealOnScroll>
          <section className="mt-10 border-t border-[rgba(37,82,120,0.3)] pt-14">
            <p className="max-w-5xl text-[clamp(1.1rem,2vw,1.4rem)] leading-[1.8] text-[#dce3ed]">{h.heroBody}</p>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
          <section className="mt-20 border-t border-[rgba(37,82,120,0.3)] pt-16">
            <div className="mb-12 space-y-4">
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.02em] text-[#dce3ed]">
                {h.pillarsTitle}
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {h.pillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="border border-[rgba(37,82,120,0.2)] p-6 transition-shadow duration-300 hover:shadow-[0_0_48px_rgba(0,212,177,0.06)]"
                  style={{ backgroundColor: CARD }}
                >
                  <h3 className="text-[17px] font-medium leading-normal text-[#dce3ed]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.8] text-[#8aafc8]">{pillar.body}</p>
                </div>
              ))}
            </div>
          </section>
        </RevealOnScroll>
      </div>
    </div>
  );
}
