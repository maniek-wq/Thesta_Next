"use client";

import Image from "next/image";
import { AboutLayout } from "@/components/about/about-layout";
import { useLocale } from "@/components/locale-provider";
import {
  getPartnerLogo,
  type PartnerLogoId,
} from "@/lib/about-media";

export function AboutPartnersPage() {
  const { m } = useLocale();
  const p = m.aboutPages.partners;

  return (
    <AboutLayout wide>
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-bridge/75">
        {p.eyebrow}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {p.title}
      </h1>
      <p className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-sea-200/95">
        {p.intro}
      </p>

      <ul className="mt-14 space-y-12 sm:space-y-14">
        {p.items.map((item, i) => {
          const logo = getPartnerLogo(item.logoId as PartnerLogoId);
          const reverse = i % 2 === 1;

          return (
            <li key={i}>
              <article
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-bridge-dim/20 bg-gradient-to-br from-sea-850/45 via-sea-900/35 to-sea-950/50 p-6 transition duration-300 ease-out motion-reduce:transition-none sm:flex-row sm:items-stretch sm:gap-10 sm:p-8 ${
                  reverse ? "sm:flex-row-reverse" : ""
                } hover:border-bridge-dim/35 hover:shadow-[0_24px_60px_-28px_rgba(62,184,232,0.18)] motion-reduce:hover:shadow-none`}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:opacity-0"
                  aria-hidden
                >
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-bridge/5 blur-3xl" />
                  <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-sonar/5 blur-3xl" />
                </div>

                <div
                  className={`relative mb-8 flex shrink-0 justify-center sm:mb-0 sm:w-[min(100%,280px)] sm:justify-center ${
                    reverse ? "sm:pl-2" : "sm:pr-2"
                  }`}
                >
                  {logo ? (
                    <div className="relative h-28 w-full max-w-[260px] rounded-2xl border border-bridge-dim/25 bg-gradient-to-b from-sea-900/90 to-sea-950/95 px-6 py-5 shadow-inner ring-1 ring-inset ring-white/[0.06] transition duration-300 group-hover:border-bridge/25 group-hover:ring-bridge/15 motion-reduce:transition-none sm:h-36">
                      <Image
                        src={logo}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 640px) 260px, 280px"
                      />
                    </div>
                  ) : (
                    <div className="flex h-28 w-full max-w-[260px] items-center justify-center rounded-2xl border border-dashed border-bridge-dim/35 bg-sea-950/50 px-4 text-center text-xs text-sea-500 sm:h-36">
                      {p.logoPlaceholder}
                    </div>
                  )}
                </div>

                <div className="relative min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="text-xl font-semibold text-sonar-glow sm:text-2xl">
                      {item.name}
                    </h2>
                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-bridge/45 sm:inline">
                      ·
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bridge/55 sm:translate-y-px">
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {String(p.items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-4 max-w-prose text-pretty text-[15px] leading-relaxed text-sea-300 sm:text-base">
                    {item.body}
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </AboutLayout>
  );
}
