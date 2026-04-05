"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { FigmaArrowRight } from "@/components/icons/figma-icons";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import type { Messages } from "@/lib/messages";

const BG = "#060A10";
const CARD = "#0C1219";
const TEAL = "#00D4B1";

type ProcessStep = Messages["home"]["process"]["steps"][number];

export function AboutHubPage() {
  const { m, t } = useLocale();
  const h = m.aboutPages.hub;
  const proc = m.home.process;
  const [openStep, setOpenStep] = useState<number | null>(0);

  const subpageLinks: {
    href: string;
    code: string;
    title: string;
    desc: string;
  }[] = [
    {
      href: "/about/certificates",
      code: "01",
      title: t("nav.aboutCertificates"),
      desc: h.certificatesDesc,
    },
    {
      href: "/about/projects",
      code: "02",
      title: t("nav.aboutProjects"),
      desc: h.projectsDesc,
    },
    {
      href: "/about/partners",
      code: "03",
      title: t("nav.aboutPartners"),
      desc: h.partnersDesc,
    },
  ];

  return (
    <div className="min-h-[calc(100dvh-var(--nav-height,4rem)-5rem)] pb-20" style={{ backgroundColor: BG }}>
      <div className="mx-auto max-w-[1216px] px-4 sm:px-8">
        <Link
          href="/"
          className="offer-font-mono inline-block pt-10 text-[10px] uppercase tracking-[0.1em] text-[#556478] transition-colors duration-300 hover:text-[rgba(0,212,177,0.65)]"
        >
          ← {m.aboutPages.common.back}
        </Link>

        <RevealOnScroll>
          <header className="mt-10 space-y-4">
            <p
              className="offer-font-mono text-[10px] font-normal uppercase tracking-[0.15em] text-[rgba(0,212,177,0.5)]"
            >
              {h.introTabLabel}
            </p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#dce3ed]">
              {h.title}
            </h1>
          </header>
        </RevealOnScroll>

        <RevealOnScroll delayMs={40}>
          <section className="mt-14 space-y-5 border-t border-[rgba(22,32,48,0.3)] pt-14">
            <p className="offer-font-mono text-[10px] uppercase tracking-[0.15em] text-[rgba(0,212,177,0.5)]">
              {h.heroKicker}
            </p>
            <h2 className="max-w-[20ch] text-[clamp(1.75rem,4vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#dce3ed]">
              {h.heroTitle}
            </h2>
            <p className="max-w-3xl text-[15px] leading-[1.8] text-[#556478]">{h.heroBody}</p>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
          <section className="mt-20 border-t border-[rgba(22,32,48,0.3)] pt-16">
            <div className="mb-12 space-y-4">
              <p className="offer-font-mono text-[10px] uppercase tracking-[0.15em] text-[rgba(0,212,177,0.5)]">
                {h.pillarsKicker}
              </p>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.02em] text-[#dce3ed]">
                {h.pillarsTitle}
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {h.pillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="border border-[rgba(22,32,48,0.2)] p-6 transition-shadow duration-300 hover:shadow-[0_0_48px_rgba(0,212,177,0.06)]"
                  style={{ backgroundColor: CARD }}
                >
                  <span
                    className="offer-font-mono text-[11px] text-[rgba(0,212,177,0.2)]"
                  >
                    {pillar.num}
                  </span>
                  <h3 className="mt-2 text-[17px] font-medium leading-normal text-[#dce3ed]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.8] text-[#556478]">{pillar.body}</p>
                </div>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={40}>
          <section
            className="mt-16 grid gap-10 border-y border-[rgba(22,32,48,0.3)] py-14 sm:grid-cols-3"
          >
            {h.kpi.map((k) => (
              <div key={k.label} className="space-y-2">
                <div className="flex items-baseline gap-0.5">
                  <span
                    className="offer-font-mono text-[56px] font-normal leading-none tracking-tight"
                    style={{ color: TEAL }}
                  >
                    {k.value}
                  </span>
                  <span
                    className="offer-font-mono text-[22px] leading-none text-[rgba(0,212,177,0.4)]"
                  >
                    {k.suffix}
                  </span>
                </div>
                <p className="text-[14px] leading-normal text-[#dce3ed]/90">{k.label}</p>
                <p className="text-[12px] leading-normal text-[#556478]/80">{k.sub}</p>
              </div>
            ))}
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
          <section className="mt-20 border-t border-[rgba(22,32,48,0.3)] pt-16">
            <div className="mb-10 space-y-3">
              <p className="offer-font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(0,212,177,0.5)]">
                {proc.kicker}
              </p>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.02em] text-[#dce3ed]">
                {proc.heading}
              </h2>
              <p className="text-[13px] text-[#556478]">{proc.hint}</p>
            </div>
            <div className="border border-[rgba(22,32,48,0.25)]">
              {proc.steps.map((step: ProcessStep, i: number) => {
                const open = openStep === i;
                return (
                  <div
                    key={step.title}
                    className="border-b border-[rgba(22,32,48,0.25)] last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenStep(open ? null : i)}
                      className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.02]"
                      style={{ backgroundColor: open ? "rgba(0,212,177,0.04)" : CARD }}
                      aria-expanded={open}
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block text-[17px] font-medium text-[#dce3ed]">
                          {step.title}
                        </span>
                      </span>
                      <span className="flex shrink-0 items-center gap-3">
                        <span
                          className={`offer-font-mono text-[14px] font-medium transition-transform duration-300 ${
                            open ? "rotate-45 text-[#00D4B1]" : "text-[rgba(85,100,120,0.5)]"
                          }`}
                        >
                          +
                        </span>
                        <span
                          className={`offer-font-mono flex h-12 w-12 items-center justify-center border text-[12px] font-medium transition-colors ${
                            open
                              ? "border-[#00D4B1] text-[#00D4B1]"
                              : "border-white/10 text-[#556478]"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="border-t border-[rgba(22,32,48,0.2)] px-5 py-4 text-[13px] leading-[1.75] text-[#556478]">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={40}>
          <section className="mt-20 border-t border-[rgba(22,32,48,0.3)] pt-16">
            <div className="mb-10 space-y-3">
              <p className="offer-font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(0,212,177,0.5)]">
                {h.subpagesKicker}
              </p>
              <h2 className="text-[clamp(1.35rem,2.5vw,2rem)] font-medium tracking-[-0.02em] text-[#dce3ed]">
                {h.subpagesTitle}
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {subpageLinks.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group flex flex-col overflow-hidden border border-white/[0.06] bg-[#09111D] sm:flex-row sm:items-stretch"
                >
                  <div className="flex min-h-[88px] shrink-0 items-center gap-4 border-b border-white/[0.06] px-6 py-5 sm:w-[min(280px,38%)] sm:border-b-0 sm:border-r sm:border-white/[0.06]">
                    <span className="offer-font-mono text-[11px] text-[rgba(0,212,177,0.25)]">
                      {c.code}
                    </span>
                    <span className="text-[16px] font-medium text-[#d0dce8]">{c.title}</span>
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-4 px-6 py-5">
                    <p className="text-[13px] leading-relaxed text-[#556478]">{c.desc}</p>
                    <span className="shrink-0 text-white/15 transition-colors group-hover:text-[#00D4B1]/60">
                      <FigmaArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
          <section className="mt-20 border-t border-[rgba(22,32,48,0.3)] pt-16">
            <div className="mb-12 space-y-4">
              <p className="offer-font-mono text-[10px] uppercase tracking-[0.15em] text-[rgba(0,212,177,0.5)]">
                {h.audienceKicker}
              </p>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.02em] text-[#dce3ed]">
                {h.audienceTitle}
              </h2>
            </div>
            <div className="grid gap-3 lg:grid-cols-3">
              {h.audienceCards.map((card) => (
                <div
                  key={card.title}
                  className="border border-[rgba(22,32,48,0.2)] p-8"
                  style={{ backgroundColor: CARD }}
                >
                  <h3 className="text-[17px] font-medium text-[#dce3ed]">{card.title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.8] text-[#556478]">{card.body}</p>
                </div>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={40}>
          <div className="mt-20 border-t border-[rgba(22,32,48,0.3)] py-16 text-center">
            <h2 className="text-[28px] font-medium tracking-[-0.02em] text-[#dce3ed] sm:text-[32px]">
              {h.ctaBandTitle}
            </h2>
            <Link
              href="/contact"
              className="offer-font-mono mt-6 inline-flex items-center gap-2 border border-[rgba(22,32,48,0.5)] px-6 py-3 text-[12px] font-medium tracking-[0.08em] text-[#556478] transition-colors hover:border-[#00D4B1]/40 hover:text-[#00D4B1]"
            >
              {h.ctaBandButton}
              <FigmaArrowRight size={14} className="text-current" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
