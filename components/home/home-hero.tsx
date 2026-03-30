"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionShell } from "@/components/section-shell";
import type { Messages } from "@/lib/messages";

type Hero = Messages["home"]["hero"];

export function HomeHero({ hero }: { hero: Hero }) {
  return (
    <SectionShell
      id="hero"
      variant="hero"
      contained={false}
      className="flex min-h-dvh flex-col"
    >
      <div className="relative mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col overflow-x-clip px-4 sm:px-6">
        <div className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-bridge/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-1/4 h-80 w-80 rounded-full bg-sonar/5 blur-3xl" />

        <div className="flex min-h-0 flex-1 flex-col justify-center py-12 sm:py-16">
          <RevealOnScroll rootMargin="0px 0px 0px 0px">
            <div className="relative mx-auto max-w-4xl text-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-bridge/80 sm:text-sm">
                {hero.areas}
              </p>
              <h1 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                {hero.title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-sea-300 sm:text-lg">
                {hero.lead}
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl bg-sonar-dim px-6 py-3 text-sm font-medium text-sea-950 transition-colors hover:bg-sonar"
                >
                  {hero.ctaContact}
                </Link>
                <Link
                  href="/offer"
                  className="rounded-xl border border-bridge-dim/40 px-6 py-3 text-sm font-medium text-bridge transition-colors hover:border-bridge hover:bg-sea-800/50"
                >
                  {hero.ctaOffer}
                </Link>
              </div>
              <HeroScrollHint label={hero.scrollHint} />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </SectionShell>
  );
}

function HeroScrollHint({ label }: { label: string }) {
  return (
    <div className="relative z-10 mt-10 flex justify-center sm:mt-12">
      <a
        href="#services"
        className="group flex flex-col items-center gap-3 text-bridge/70 transition-colors hover:text-bridge"
        aria-label={label}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] sm:text-xs">
          {label}
        </span>
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full border border-bridge-dim/50 bg-sea-900/70 shadow-[0_4px_20px_rgba(0,0,0,0.35)] backdrop-blur-sm"
          aria-hidden
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-bridge motion-safe:animate-hero-scroll-bounce"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </span>
      </a>
    </div>
  );
}
