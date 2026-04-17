"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FigmaArrowDiagonal } from "@/components/icons/figma-icons";
import { SectionShell } from "@/components/section-shell";
import type { Messages } from "@/lib/messages";

type Services = Messages["home"]["services"];
type ServicesSection = Messages["home"]["servicesSection"];

function ServiceCard({
  title,
  body,
  tags,
  image,
  delay,
  visible,
}: {
  title: string;
  body: string;
  tags: string;
  image: string;
  delay: number;
  visible: boolean;
}) {
  const tagList = tags.split(" · ");

  return (
    <Link
      href="/offer"
      className="group relative flex flex-col gap-5 overflow-hidden bg-sea-900 p-6 outline-none transition-[box-shadow,opacity,transform] duration-500 ease-out hover:shadow-[inset_0_0_0_1px_rgba(0,212,177,0.22),0_0_36px_-10px_rgba(0,212,177,0.09)] focus-visible:ring-2 focus-visible:ring-sonar/45 focus-visible:ring-offset-2 focus-visible:ring-offset-sea-800 motion-reduce:transition-none motion-reduce:hover:shadow-none"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Hover image */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 motion-reduce:transition-none"
        aria-hidden
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
        />
        {/* Dark gradient so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e30]/95 via-[#0d2035]/80 to-[#0d2035]/60" />
        {/* Sonar tint overlay */}
        <div className="absolute inset-0 bg-sonar/5" />
      </div>

      {/* Header row: icon */}
      <div className="relative flex items-center justify-end">
        <span className="text-[#8aafc8] transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sonar motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0">
          <FigmaArrowDiagonal size={13} />
        </span>
      </div>

      {/* Title */}
      <div className="relative flex-1">
        <h2 className="text-[18px] font-medium leading-[1.5] text-[#dce3ed] transition-colors duration-300 ease-out group-hover:text-white motion-reduce:transition-none">
          {title}
        </h2>
        <p className="mt-3 text-[13px] leading-[1.75] text-[#8aafc8] transition-colors duration-300 ease-out group-hover:text-[#a8c0d4] motion-reduce:transition-none">
          {body}
        </p>
      </div>

      {/* Tags */}
      <div className="relative flex flex-wrap gap-x-3 gap-y-1.5 border border-[rgba(37,82,120,0.5)] px-0 py-0 transition-[border-color] duration-300 ease-out group-hover:border-[rgba(0,212,177,0.2)] motion-reduce:transition-none">
        {tagList.map((tag) => (
          <span
            key={tag}
            className="border border-[rgba(37,82,120,0.5)] px-2 py-1 font-mono text-[9px] tracking-[0.06em] text-[#8aafc8] transition-[border-color,color] duration-300 ease-out group-hover:border-[rgba(0,212,177,0.18)] group-hover:text-[#8a9aaa] motion-reduce:transition-none"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export function HomeServices({
  services,
  section,
}: {
  services: Services;
  section: ServicesSection;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e?.isIntersecting) setVisible(true); },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cards = [
    {
      ...services.nav,
      image: "https://images.unsplash.com/photo-1557318041-1ce374d55ebf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      ...services.comms,
      image: "https://images.unsplash.com/photo-1630621492284-dc91e6a7f2a8?auto=format&fit=crop&w=1200&q=80",
    },
    {
      ...services.hydro,
      image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <SectionShell
      id="services"
      variant="ridge"
      aria-labelledby="services-heading"
    >
      {/* Section header */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(12px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2
              id="services-heading"
              className="mt-3 text-[2rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#dce3ed] sm:text-[2.25rem]"
            >
              {section.title}
            </h2>
          </div>
          <Link
            href="/offer"
            className="group mb-1 hidden shrink-0 items-center gap-1.5 font-mono text-[11px] tracking-[0.04em] text-sonar transition-colors hover:text-sonar-glow sm:flex"
          >
            {section.link}
            <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <FigmaArrowDiagonal size={13} />
            </span>
          </Link>
        </div>
      </div>

      {/* Cards grid */}
      <div ref={ref} className="mt-10 bg-sea-700/50">
        <div className="grid grid-cols-1 gap-px md:grid-cols-3">
          {cards.map((card, i) => (
            <ServiceCard
              key={card.title}
              title={card.title}
              body={card.body}
              tags={card.tags}
              image={card.image}
              delay={i * 130}
              visible={visible}
            />
          ))}
        </div>
      </div>

      {/* Mobile "full offer" link */}
      <div
        className="mt-6 sm:hidden"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease-out",
          transitionDelay: "400ms",
        }}
      >
        <Link
          href="/offer"
          className="group flex items-center gap-1.5 font-mono text-[11px] tracking-[0.04em] text-sonar transition-colors hover:text-sonar-glow"
        >
          {section.link}
          <span className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0">
            <FigmaArrowDiagonal size={13} />
          </span>
        </Link>
      </div>
    </SectionShell>
  );
}
