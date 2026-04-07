"use client";

import Link from "next/link";
import { FigmaArrowDiagonal } from "@/components/icons/figma-icons";
import { SectionShell } from "@/components/section-shell";
import type { Messages } from "@/lib/messages";

type Hero = Messages["home"]["hero"];

const RADAR_BLIPS = [
  { top: "28%", left: "62%", delay: "0s", size: 6 },
  { top: "55%", left: "45%", delay: "1.2s", size: 5 },
  { top: "70%", left: "65%", delay: "2.8s", size: 7 },
  { top: "38%", left: "30%", delay: "0.7s", size: 5 },
  { top: "20%", left: "50%", delay: "1.8s", size: 4 },
];

export function HomeHero({ hero }: { hero: Hero }) {
  const chips = hero.areas.split("·").map((item) => item.trim());

  return (
    <SectionShell
      id="hero"
      variant="hero"
      contained={false}
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(0,212,177,0.11),transparent_24%),radial-gradient(circle_at_16%_22%,rgba(94,184,232,0.08),transparent_24%),linear-gradient(180deg,#0d2035_0%,#122944_44%,#0d2035_100%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(94,184,232,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(94,184,232,0.03)_1px,transparent_1px)] [background-size:100%_5rem,5rem_100%]" />
        <div className="absolute left-[11.5%] top-0 h-full w-px bg-bridge-dim/8" />
        <div className="absolute left-[16.5%] top-0 h-full w-px bg-bridge-dim/6" />
        <div className="absolute right-[-18rem] top-[10%] h-[34rem] w-[34rem] rounded-full bg-sonar/6 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="relative flex min-h-[calc(100dvh-var(--nav-height,4rem))] items-center py-10 pb-24 sm:py-14 sm:pb-28 lg:py-20 lg:pb-32">
          <div className="relative max-w-[34rem] sm:max-w-[38rem] lg:max-w-[42rem] lg:pl-1 xl:max-w-[46rem]">
            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="border border-bridge-dim/20 bg-sea-900/55 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-sonar-glow/80"
                >
                  {chip}
                </span>
              ))}
            </div>
            <p className="mt-7 max-w-[34rem] font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-sea-400 sm:mt-8 sm:text-[11px]">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 max-w-[13ch] text-balance text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-white sm:mt-5 sm:max-w-[14.5ch] lg:max-w-[17ch]">
              {hero.title}
            </h1>
            <p className="mt-7 max-w-[34rem] text-pretty text-[0.98rem] leading-[1.85] text-sea-200/86 sm:mt-8 sm:text-[1.02rem]">
              {hero.lead}
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-sea-500 sm:mt-7 sm:text-[11px]">
              {hero.meta}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:mt-10 sm:gap-4">
              <Link
                href="/contact"
                className="bg-sonar-dim px-5 py-3 text-sm font-medium text-sea-950 transition-colors hover:bg-sonar sm:px-6"
              >
                {hero.ctaContact}
              </Link>
              <Link
                href="/offer"
                className="group/offer inline-flex items-center gap-2 border border-bridge-dim/50 bg-sea-950/30 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-bridge hover:bg-sea-800/50 sm:px-6"
              >
                {hero.ctaOffer}
                <FigmaArrowDiagonal
                  size={13}
                  className="text-bridge/70 transition-transform duration-200 group-hover/offer:translate-x-0.5 group-hover/offer:-translate-y-0.5 group-hover/offer:text-bridge"
                />
              </Link>
            </div>
          </div>
          <HeroScrollHint label={hero.scrollHint} />
        </div>
      </div>
      <HeroRadar />
    </SectionShell>
  );
}

function HeroRadar() {
  return (
    <div
      className="pointer-events-none absolute right-[-5%] top-1/2 hidden -translate-y-1/2 select-none md:block"
      style={{ width: 760, height: 760, opacity: 0.38 }}
      aria-hidden
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "80%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,212,177,0.07) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      {[1, 0.72, 0.5, 0.3].map((r, i) => (
        <div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: `${r * 100}%`,
            height: `${r * 100}%`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderColor: `rgba(0,212,177,${0.55 - i * 0.05})`,
            boxShadow:
              i === 0
                ? "0 0 12px rgba(0,212,177,0.08) inset, 0 0 12px rgba(0,212,177,0.08)"
                : "none",
          }}
        />
      ))}
      {[0, 45, 90, 135].map((deg) => (
        <div
          key={deg}
          className="absolute top-1/2 left-1/2 w-full origin-left"
          style={{
            height: 1,
            background: "rgba(0,212,177,0.45)",
            transform: `translateY(-50%) rotate(${deg}deg)`,
            transformOrigin: "0 50%",
          }}
        />
      ))}
      <div
        className="hero-radar-sweep absolute inset-0 overflow-hidden rounded-full"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "50%",
            height: 2,
            transformOrigin: "0 50%",
            background:
              "linear-gradient(90deg, rgba(0,212,177,0.0), rgba(0,212,177,1))",
            boxShadow:
              "0 0 8px rgba(0,212,177,0.8), 0 0 16px rgba(0,212,177,0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "conic-gradient(from 0deg, rgba(0,212,177,0.0) 0deg, rgba(0,212,177,0.22) 50deg, rgba(0,212,177,0.0) 70deg)",
          }}
        />
      </div>
      {RADAR_BLIPS.map((b, i) => (
        <div
          key={i}
          className="hero-radar-blip absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            background: "#00d4b1",
            top: b.top,
            left: b.left,
            animationDelay: b.delay,
            boxShadow:
              "0 0 10px rgba(0,212,177,1), 0 0 20px rgba(0,212,177,0.5)",
          }}
        />
      ))}
      <div
        className="absolute"
        style={{
          width: 12,
          height: 12,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "1.5px solid rgba(0,212,177,0.9)",
          borderRadius: "50%",
          boxShadow: "0 0 6px rgba(0,212,177,0.6)",
        }}
      />
      {["5", "10", "15", "20"].map((label, i) => (
        <div
          key={label}
          className="absolute font-mono"
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%, calc(-50% - ${[15, 27, 38, 50][i]}%))`,
            color: "rgba(0,212,177,0.45)",
            fontSize: 9,
            letterSpacing: "0.08em",
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

function HeroScrollHint({ label }: { label: string }) {
  return (
    <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 justify-center sm:bottom-10 lg:bottom-12">
      <a
        href="#services"
        className="group flex flex-col items-center gap-3 text-bridge/80 transition-colors hover:text-bridge"
        aria-label={label}
      >
        <span className="animate-hero-scroll-hint-label font-mono text-[10px] uppercase tracking-[0.25em] sm:text-xs">
          {label}
        </span>
        <span
          className="animate-hero-scroll-hint-label flex h-10 w-10 items-center justify-center border border-bridge-dim/50 bg-sea-900/90 shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
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
