"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  rootMargin?: string;
};

export function RevealOnScroll({
  children,
  className = "",
  delayMs = 0,
  rootMargin = "0px 0px -10% 0px",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    let timeoutId: ReturnType<typeof globalThis.setTimeout> | undefined;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e?.isIntersecting) return;
        obs.disconnect();
        if (delayMs > 0) {
          timeoutId = globalThis.setTimeout(() => setVisible(true), delayMs);
        } else {
          setVisible(true);
        }
      },
      { threshold: 0.08, rootMargin },
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      if (timeoutId !== undefined) globalThis.clearTimeout(timeoutId);
    };
  }, [delayMs, rootMargin]);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}
