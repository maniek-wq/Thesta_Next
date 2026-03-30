"use client";

import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionShell } from "@/components/section-shell";
import { StatsSection } from "@/components/stats-section";
import type { Messages } from "@/lib/messages";

type Stats = Messages["home"]["stats"];

export function HomeStats({ stats }: { stats: Stats }) {
  return (
    <SectionShell id="statystyki" variant="band" aria-labelledby="stats-heading">
      <RevealOnScroll>
        <StatsSection
          title={stats.title}
          yearsLabel={stats.years}
          projectsLabel={stats.projects}
          focusLabel={stats.focus}
        />
      </RevealOnScroll>
    </SectionShell>
  );
}
