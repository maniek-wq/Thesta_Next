"use client";

import { useLocale } from "@/components/locale-provider";
import { HomeContactBlock } from "@/components/home/home-contact-block";
import { HomeHero } from "@/components/home/home-hero";
import { HomeProcess } from "@/components/home/home-process";
import { HomeServices } from "@/components/home/home-services";
import { HomeStats } from "@/components/home/home-stats";

export function HomePage() {
  const { m } = useLocale();
  const h = m.home;

  return (
    <div className="flex flex-col">
      <HomeHero hero={h.hero} />
      <HomeServices services={h.services} section={h.servicesSection} />
      <HomeStats stats={h.stats} />
      <HomeProcess process={h.process} />
      <HomeContactBlock contact={h.contact} />
    </div>
  );
}
