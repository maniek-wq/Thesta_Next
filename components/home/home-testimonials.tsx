"use client";

import { useEffect, useRef, useState } from "react";
import { SectionShell } from "@/components/section-shell";
import type { Messages } from "@/lib/messages";

type Testimonials = Messages["home"]["testimonials"];

function TestimonialCard({
  quote,
  role,
  org,
  visible,
  delay,
}: {
  quote: string;
  role: string;
  org: string;
  visible: boolean;
  delay: number;
}) {
  return (
    <div
      className="group relative h-full border border-bridge-dim/15 bg-sea-900/60 p-6 transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-sonar/20 hover:shadow-[0_8px_32px_-10px_rgba(0,212,177,0.14)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.55s ease-out, transform 0.55s ease-out, border-color 0.3s, box-shadow 0.3s",
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Corner accent */}
      <span
        className="pointer-events-none absolute left-0 top-0 h-8 w-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "linear-gradient(135deg, rgba(0,212,177,0.15) 0%, transparent 60%)" }}
        aria-hidden
      />

      <blockquote className="relative text-sm leading-relaxed text-sea-200 transition-colors duration-300 group-hover:text-sea-100">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <footer className="mt-5 flex items-center gap-3">
        {/* Small sonar dot */}
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-sonar/40 transition-colors duration-300 group-hover:bg-sonar/70"
          aria-hidden
        />
        <div className="text-xs">
          <cite className="block not-italic font-medium text-sea-300 transition-colors duration-300 group-hover:text-white">
            {role}
          </cite>
          <span className="text-sea-500">{org}</span>
        </div>
      </footer>
    </div>
  );
}

export function HomeTestimonials({ testimonials }: { testimonials: Testimonials }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e?.isIntersecting) setVisible(true); },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <SectionShell id="opinie" variant="band" aria-labelledby="testimonials-heading">
      {/* Header */}
      <div
        ref={ref}
        className="mx-auto max-w-2xl text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(12px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
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

      {/* Cards */}
      <ul className="mt-12 grid list-none gap-6 p-0 md:grid-cols-3">
        {testimonials.items.map((item, i) => (
          <li key={i} className="min-h-0">
            <TestimonialCard
              quote={item.quote}
              role={item.role}
              org={item.org}
              visible={visible}
              delay={i * 120 + 150}
            />
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
