"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionShell } from "@/components/section-shell";
import type { Messages } from "@/lib/messages";

type Hero = Messages["home"]["hero"];

const SLIDE_MS = 2800;

export function HomeHero({ hero }: { hero: Hero }) {
  const slides = hero.backgroundSlides;
  const [active, setActive] = useState(0);
  const [motionOk, setMotionOk] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionOk(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!motionOk || slides.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [motionOk, slides.length]);

  return (
    <SectionShell
      id="hero"
      variant="hero"
      contained={false}
      className="relative flex min-h-dvh flex-col overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 left-1/2 w-screen max-w-[100vw] -translate-x-1/2"
        aria-hidden
      >
        {slides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-sea-950/80 via-sea-950/70 to-sea-900/85" />
        <div className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-bridge/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-1/4 h-80 w-80 rounded-full bg-sonar/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col px-4 sm:px-6">
        <div className="flex min-h-0 flex-1 flex-col justify-center py-12 sm:py-16">
          <RevealOnScroll rootMargin="0px 0px 0px 0px">
            <div className="relative mx-auto max-w-4xl text-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-bridge/90 sm:text-sm">
                {hero.areas}
              </p>
              <h1 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                {hero.title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-sea-100/90 sm:text-lg">
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
                  className="rounded-xl border border-bridge-dim/50 bg-sea-950/30 px-6 py-3 text-sm font-medium text-bridge backdrop-blur-sm transition-colors hover:border-bridge hover:bg-sea-800/50"
                >
                  {hero.ctaOffer}
                </Link>
              </div>
            </div>
          </RevealOnScroll>
          <HeroScrollHint label={hero.scrollHint} />
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
        className="group flex flex-col items-center gap-3 text-bridge/80 transition-colors hover:text-bridge"
        aria-label={label}
      >
        <span className="animate-hero-scroll-hint-label font-mono text-[10px] uppercase tracking-[0.25em] sm:text-xs">
          {label}
        </span>
        <span
          className="animate-hero-scroll-hint-label flex h-10 w-10 items-center justify-center rounded-full border border-bridge-dim/50 bg-sea-900/90 shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
          aria-hidden
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-bridge"
          >
            <path d="M12 22V8" />
            <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
            <circle cx="12" cy="5" r="3" />
          </svg>
        </span>
      </a>
    </div>
  );
}
