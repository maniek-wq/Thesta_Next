"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { HomeContactBlock } from "@/components/home/home-contact-block";
import { HomeFaq } from "@/components/home/home-faq";
import { HomeHero } from "@/components/home/home-hero";
import { HomeIntroPanels } from "@/components/home/home-intro-panels";
import { HomeNews } from "@/components/home/home-news";
import { HomeProcess } from "@/components/home/home-process";
import { HomeServices } from "@/components/home/home-services";
import { HomeStats } from "@/components/home/home-stats";
import { HomeTestimonials } from "@/components/home/home-testimonials";

export function HomePage() {
  const { m } = useLocale();
  const h = m.home;
  const [heroIntroDone, setHeroIntroDone] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("home-hide-scrollbar");
    return () => root.classList.remove("home-hide-scrollbar");
  }, []);

  return (
    <div className="flex flex-col">
      <HomeIntroPanels
        intro={h.introPanels}
        onIntroEnd={() => setHeroIntroDone(true)}
      />
      <HomeHero hero={h.hero} introComplete={heroIntroDone} />
      <HomeServices services={h.services} section={h.servicesSection} />
      <HomeNews news={h.news} />
      <HomeStats stats={h.stats} />
      <HomeProcess process={h.process} />
      <HomeFaq faq={h.faq} />
      <HomeTestimonials testimonials={h.testimonials} />
      <HomeContactBlock contact={h.contact} />
    </div>
  );
}
