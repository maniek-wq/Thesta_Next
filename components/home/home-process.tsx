"use client";

import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionShell } from "@/components/section-shell";
import type { Messages } from "@/lib/messages";

type Process = Messages["home"]["process"];

export function HomeProcess({ process }: { process: Process }) {
  return (
    <SectionShell id="wspolpraca" variant="ridge" aria-labelledby="process-heading">
      <RevealOnScroll>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="process-heading"
            className="text-2xl font-semibold text-white sm:text-3xl"
          >
            {process.title}
          </h2>
        </div>
      </RevealOnScroll>
      <ol className="mt-12 grid list-none gap-6 p-0 md:grid-cols-2">
        {process.steps.map((step, i) => (
          <li key={i} className="min-h-0">
            <RevealOnScroll delayMs={i * 80} className="h-full">
              <div className="relative h-full rounded-2xl border border-bridge-dim/15 bg-sea-850/35 p-6 pl-14 transition-colors hover:border-bridge-dim/30">
                <span className="absolute left-5 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-sonar-dim/30 font-mono text-sm text-sonar-glow">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sea-300">
                  {step.body}
                </p>
              </div>
            </RevealOnScroll>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
