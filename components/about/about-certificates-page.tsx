"use client";

import Image from "next/image";
import { AboutLayout } from "@/components/about/about-layout";
import { useLocale } from "@/components/locale-provider";
import { getCertificateSectionImage } from "@/lib/about-certificates-media";

export function AboutCertificatesPage() {
  const { m } = useLocale();
  const p = m.aboutPages.certificates;

  return (
    <AboutLayout>
      <h1 className="mt-6 text-3xl font-semibold text-white">{p.title}</h1>
      <div className="mt-10 space-y-12">
        {p.sections.map((section, i) => {
          const img = getCertificateSectionImage(i);
          return (
          <section
            key={i}
            className="rounded-2xl border border-bridge-dim/15 bg-sea-850/40 p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold text-sonar-glow">
              {section.title}
            </h2>
            {img ? (
              <div className="relative mt-5 overflow-hidden rounded-xl border border-bridge-dim/20 bg-sea-900/40">
                <Image
                  src={img}
                  alt={section.title}
                  className="mx-auto h-auto max-h-[min(70vh,560px)] w-full object-contain object-top"
                  sizes="(max-width: 768px) 100vw, 864px"
                />
              </div>
            ) : null}
            <p className="mt-4 whitespace-pre-line text-sea-300">{section.body}</p>
            {"download" in section && section.download ? (
              <p className="mt-4">
                <a
                  href={section.download.href}
                  className="inline-flex items-center rounded-lg border border-bridge-dim/40 bg-sea-900/60 px-4 py-2 text-sm font-medium text-bridge hover:border-bridge/50 hover:text-bridge-glow"
                >
                  {section.download.label}
                </a>
              </p>
            ) : null}
          </section>
          );
        })}
      </div>
    </AboutLayout>
  );
}
