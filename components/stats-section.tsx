"use client";

import { useEffect, useRef, useState } from "react";

const TARGETS = { years: 15, projects: 120, focus: 100 };

function useCountUp(target: number, enabled: boolean, suffix = "") {
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const prefersReduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduce) {
      setV(target);
      return;
    }
    const dur = 1400;
    const t0 = performance.now();
    let id: number;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - (1 - p) ** 2;
      setV(Math.round(eased * target));
      if (p < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [enabled, target]);

  return suffix ? `${v}${suffix}` : String(v);
}

export function StatsSection({
  title,
  yearsLabel,
  projectsLabel,
  focusLabel,
  className = "",
}: {
  title: string;
  yearsLabel: string;
  projectsLabel: string;
  focusLabel: string;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setOn(true);
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const years = useCountUp(TARGETS.years, on);
  const projects = useCountUp(TARGETS.projects, on);
  const focus = useCountUp(TARGETS.focus, on, "%");

  return (
    <section
      ref={ref}
      className={`w-full ${className}`}
      aria-labelledby="stats-heading"
    >
      <h2
        id="stats-heading"
        className="text-center text-2xl font-bold tracking-tight text-white sm:text-[1.75rem]"
      >
        {title}
      </h2>
      <div className="mx-auto mt-10 grid max-w-[1100px] gap-6 sm:mt-12 sm:grid-cols-3 sm:gap-8">
        <StatCard value={years} label={yearsLabel} />
        <StatCard value={projects} label={projectsLabel} />
        <StatCard value={focus} label={focusLabel} />
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="flex min-h-[148px] flex-col items-center justify-center border border-[rgba(37,82,120,0.45)] px-6 py-9 text-center"
      style={{ backgroundColor: "rgba(22, 32, 48, 0.4)" }}
    >
      <p className="font-mono text-[clamp(2.25rem,4.5vw,2.75rem)] font-bold leading-none tracking-tight text-sonar-glow tabular-nums">
        {value}
      </p>
      <p className="mt-4 max-w-[14rem] text-[14px] font-normal leading-snug text-[#94A3B8]">
        {label}
      </p>
    </div>
  );
}
