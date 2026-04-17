"use client";

import { SectionShell } from "@/components/section-shell";
import { AnchorScrollHint } from "@/components/home/anchor-scroll-hint";
import type { Messages } from "@/lib/messages";

type Hero = Messages["home"]["hero"];

/** Podmień na właściwy plik po otrzymaniu od klienta. */
const HERO_VIDEO_SRC = "/videos/main.mp4";

export function HomeHero({ hero }: { hero: Hero }) {
  return (
    <SectionShell
      id="hero"
      variant="hero"
      contained={false}
      className="relative overflow-hidden"
    >
      {/* ── Video background ── */}
      <video
        src={HERO_VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
        aria-hidden
      />

      {/* ── Overlays (działają zarówno z wideo, jak i bez) ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Główna ciemna zasłona — symetryczna dla wyśrodkowanego układu */}
        <div className="absolute inset-0 bg-[rgba(10,20,35,0.58)]" />
        {/* Gradient góra/dół dla spójności z resztą strony */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,32,53,0.55)_0%,transparent_30%,transparent_70%,rgba(13,32,53,0.75)_100%)]" />
        {/* Subtelny sonar glow po prawej (zachowany klimat marynistyczny) */}
        <div className="absolute right-[-18rem] top-[10%] h-[34rem] w-[34rem] rounded-full bg-sonar/5 blur-3xl" />
        {/* Linie siatki */}
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(94,184,232,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(94,184,232,0.03)_1px,transparent_1px)] [background-size:100%_5rem,5rem_100%]" />
        <div className="absolute left-[11.5%] top-0 h-full w-px bg-bridge-dim/8" />
        <div className="absolute left-[16.5%] top-0 h-full w-px bg-bridge-dim/6" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative flex min-h-[calc(100dvh-var(--nav-height,4rem))] flex-col items-center justify-center py-16 pb-28 text-center sm:pb-32">

          <h1 className="max-w-[22ch] text-balance text-[clamp(2.4rem,5.5vw,4.75rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white sm:max-w-[20ch]">
            {hero.title
              .split(/(nawigacji|łączności|hydrografii|navigation|communications|hydrography)/i)
              .map((part, i) =>
                /nawigacji|łączności|hydrografii|navigation|communications|hydrography/i.test(part)
                  ? <span key={i} className="text-sonar">{part}</span>
                  : part
              )}
          </h1>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-8 bg-bridge-dim/40" />
            <span className="h-1 w-1 rounded-full bg-sonar/60" />
            <span className="h-px w-8 bg-bridge-dim/40" />
          </div>

          <p className="mt-6 max-w-[30rem] text-pretty text-[0.97rem] leading-[1.85] text-sea-200/72 sm:text-[1.02rem]">
            {hero.lead}
          </p>

        </div>
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-8 lg:bottom-10">
          <a href="#services" aria-label={hero.scrollHint}>
            <AnchorScrollHint />
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
