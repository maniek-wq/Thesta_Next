"use client";

import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionShell } from "@/components/section-shell";
import type { Messages } from "@/lib/messages";

type Testimonials = Messages["home"]["testimonials"];

export function HomeTestimonials({ testimonials }: { testimonials: Testimonials }) {
  return (
    <SectionShell
      id="opinie"
      variant="band"
      aria-labelledby="testimonials-heading"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-bridge/70">
            {testimonials.eyebrow}
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-2xl font-semibold text-white sm:text-3xl"
          >
            {testimonials.title}
          </h2>
          <p className="mt-4 text-sm text-sea-300">{testimonials.intro}</p>
        </div>
      </RevealOnScroll>
      <ul className="mt-12 grid list-none gap-6 p-0 md:grid-cols-3">
        {testimonials.items.map((item, i) => (
          <li key={i} className="min-h-0">
            <RevealOnScroll delayMs={i * 100} className="h-full">
              <div className="h-full border border-bridge-dim/15 bg-sea-900/60 p-6">
                <blockquote className="text-sm leading-relaxed text-sea-200">
                  “{item.quote}”
                </blockquote>
                <footer className="mt-4 text-xs text-sea-500">
                  <cite className="not-italic font-medium text-sea-300">
                    {item.role}
                  </cite>
                  <br />
                  {item.org}
                </footer>
              </div>
            </RevealOnScroll>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
