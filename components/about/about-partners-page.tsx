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
    <AboutLayout>
      <h1 className="mt-6 text-3xl font-semibold text-white">{p.title}</h1>
      <p className="mt-4 whitespace-pre-line text-lg text-sea-300">{p.intro}</p>
      <ul className="mt-12 space-y-10">
        {p.items.map((item, i) => {
          const logo = getPartnerLogo(item.logoId as PartnerLogoId);
          return (
            <li
              key={i}
              className="rounded-2xl border border-bridge-dim/15 bg-sea-850/40 p-6 sm:flex sm:gap-8 sm:p-8"
            >
              <div className="mb-6 flex shrink-0 justify-center sm:mb-0 sm:w-48 sm:justify-start">
                {logo ? (
                  <div className="relative h-20 w-full max-w-[200px] rounded-xl border border-bridge-dim/20 bg-white/95 p-4">
                    <Image
                      src={logo}
                      alt=""
                      fill
                      className="object-contain p-1"
                      sizes="200px"
                    />
                  </div>
                ) : (
                  <div className="flex h-24 w-full max-w-[200px] items-center justify-center rounded-xl border border-dashed border-bridge-dim/30 bg-sea-950/40 px-3 text-center text-xs text-sea-500">
                    {p.logoPlaceholder}
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-xl font-semibold text-sonar-glow">
                  {item.name}
                </h2>
                <p className="mt-3 text-sea-300">{item.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </AboutLayout>
  );
}
