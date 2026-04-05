"use client";

import Link from "next/link";
import { FigmaArrowDiagonal } from "@/components/icons/figma-icons";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionShell } from "@/components/section-shell";
import type { Messages } from "@/lib/messages";

type Services = Messages["home"]["services"];
type ServicesSection = Messages["home"]["servicesSection"];

function ServiceCard({
  num,
  title,
  body,
  tags,
}: {
  num: string;
  title: string;
  body: string;
  tags: string;
}) {
  const tagList = tags.split(" · ");

  return (
    <Link
      href="/offer"
      className="group flex flex-col gap-5 bg-[#0c1219] p-6 outline-none transition-[background-color,box-shadow] duration-300 ease-out hover:bg-[#0e151f] hover:shadow-[inset_0_0_0_1px_rgba(0,212,177,0.22),0_0_36px_-10px_rgba(0,212,177,0.09)] focus-visible:ring-2 focus-visible:ring-sonar/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#162030] motion-reduce:transition-none motion-reduce:hover:shadow-none"
    >
      {/* Header row: number + icon */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] font-normal text-sonar transition-colors duration-300 ease-out group-hover:text-sonar-glow motion-reduce:transition-none">
          {num}
        </span>
        <span className="text-[#556478] transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sonar motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0">
          <FigmaArrowDiagonal size={13} />
        </span>
      </div>

      {/* Title */}
      <div className="flex-1">
        <h2 className="text-[18px] font-medium leading-[1.5] text-[#dce3ed] transition-colors duration-300 ease-out group-hover:text-white motion-reduce:transition-none">
          {title}
        </h2>
        <p className="mt-3 text-[13px] leading-[1.75] text-[#556478] transition-colors duration-300 ease-out group-hover:text-[#7a8a9c] motion-reduce:transition-none">
          {body}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-x-3 gap-y-1.5 border border-[#162030] px-0 py-0 transition-[border-color] duration-300 ease-out group-hover:border-[rgba(0,212,177,0.2)] motion-reduce:transition-none">
        {tagList.map((tag) => (
          <span
            key={tag}
            className="border border-[#162030] px-2 py-1 font-mono text-[9px] tracking-[0.06em] text-[#556478] transition-[border-color,color] duration-300 ease-out group-hover:border-[rgba(0,212,177,0.18)] group-hover:text-[#8a9aaa] motion-reduce:transition-none"
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
  return (
    <SectionShell
      id="services"
      variant="ridge"
      aria-labelledby="services-heading"
    >
      {/* Section header */}
      <RevealOnScroll>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-sonar/60">
              {section.kicker}
            </p>
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
      </RevealOnScroll>

      {/* Cards grid */}
      <RevealOnScroll>
        <div className="mt-10 bg-[#162030]">
          <div className="grid grid-cols-1 gap-px md:grid-cols-3">
            <ServiceCard
              num="01"
              title={services.nav.title}
              body={services.nav.body}
              tags={services.nav.tags}
            />
            <ServiceCard
              num="02"
              title={services.comms.title}
              body={services.comms.body}
              tags={services.comms.tags}
            />
            <ServiceCard
              num="03"
              title={services.hydro.title}
              body={services.hydro.body}
              tags={services.hydro.tags}
            />
          </div>
        </div>
      </RevealOnScroll>

      {/* Mobile "full offer" link */}
      <div className="mt-6 sm:hidden">
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
