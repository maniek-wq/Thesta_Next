"use client";

import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionShell } from "@/components/section-shell";
import type { Messages } from "@/lib/messages";

type Services = Messages["home"]["services"];
type ServicesSection = Messages["home"]["servicesSection"];

function ServiceCard({
  title,
  body,
  tags,
}: {
  title: string;
  body: string;
  tags: string;
}) {
  return (
    <article className="rounded-2xl border border-bridge-dim/15 bg-sea-850/50 p-6 shadow-sm transition-colors hover:border-bridge-dim/40 hover:bg-sea-850/70">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-sea-300">{body}</p>
      <p className="mt-4 font-mono text-xs text-sonar-dim">{tags}</p>
    </article>
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
    <SectionShell id="services" variant="ridge" aria-labelledby="services-heading">
      <RevealOnScroll>
        <div className="border-b border-bridge-dim/10 pb-6">
          <p className="font-mono text-xs uppercase tracking-widest text-sonar-dim">
            {section.kicker}
          </p>
          <h2
            id="services-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            {section.title}
          </h2>
        </div>
      </RevealOnScroll>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <RevealOnScroll>
          <ServiceCard
            title={services.nav.title}
            body={services.nav.body}
            tags={services.nav.tags}
          />
        </RevealOnScroll>
        <RevealOnScroll delayMs={90}>
          <ServiceCard
            title={services.comms.title}
            body={services.comms.body}
            tags={services.comms.tags}
          />
        </RevealOnScroll>
        <RevealOnScroll delayMs={180}>
          <ServiceCard
            title={services.hydro.title}
            body={services.hydro.body}
            tags={services.hydro.tags}
          />
        </RevealOnScroll>
      </div>
    </SectionShell>
  );
}
