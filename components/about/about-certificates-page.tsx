"use client";

import Image from "next/image";
import { AboutLayout } from "@/components/about/about-layout";
import { AboutSubpagesTabs } from "@/components/about/about-subpages-tabs";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { useLocale } from "@/components/locale-provider";
import { getCertificateSectionImage } from "@/lib/about-certificates-media";

const PANEL = "#0C1219";
const BORDER = "rgba(22,32,48,0.3)";
const BORDER_INNER = "rgba(22,32,48,0.4)";

export function AboutCertificatesPage() {
  const { m } = useLocale();
  const p = m.aboutPages.certificates;

  return (
    <AboutLayout>
      <AboutSubpagesTabs active="certificates" />
      <RevealOnScroll>
        <header className="mt-10 space-y-4">
          <p className="offer-font-mono text-[10px] font-normal uppercase tracking-[0.15em] text-[rgba(0,212,177,0.5)]">
            {p.sectionKicker}
          </p>
          <h1 className="max-w-[20ch] text-[clamp(1.85rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#dce3ed]">
            {p.title}
          </h1>
        </header>
      </RevealOnScroll>

      <div className="mt-12 space-y-10 sm:space-y-12">
        {p.sections.map((section, i) => {
          const img = getCertificateSectionImage(i);
          return (
            <RevealOnScroll key={i} delayMs={i === 0 ? 40 : Math.min(40 + i * 24, 120)}>
              <section
                className="border px-6 py-8 sm:px-8 sm:py-9"
                style={{ backgroundColor: PANEL, borderColor: BORDER }}
              >
                <h2 className="text-[clamp(1.05rem,2vw,1.25rem)] font-medium leading-snug text-[#dce3ed]">
                  {section.title}
                </h2>
                {img ? (
                  <div
                    className="relative mt-6 overflow-hidden border bg-[#060A10]"
                    style={{ borderColor: BORDER_INNER }}
                  >
                    <Image
                      src={img}
                      alt={section.title}
                      className="mx-auto h-auto max-h-[min(70vh,560px)] w-full object-contain object-top"
                      sizes="(max-width: 768px) 100vw, 864px"
                    />
                  </div>
                ) : null}
                <p className="mt-5 whitespace-pre-line text-[15px] leading-[1.8] text-[#556478]">
                  {section.body}
                </p>
                {"download" in section && section.download ? (
                  <p className="mt-6">
                    <a
                      href={section.download.href}
                      className="inline-flex items-center gap-2 bg-[#00D4B1] px-5 py-2.5 text-[13px] font-medium text-[#060A10] transition-[filter] hover:brightness-105"
                    >
                      {section.download.label}
                    </a>
                  </p>
                ) : null}
              </section>
            </RevealOnScroll>
          );
        })}
      </div>
    </AboutLayout>
  );
}
