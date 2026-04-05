"use client";

import { useId, useState } from "react";

export function FaqSection({
  title,
  items,
  className = "",
}: {
  title: string;
  items: readonly { q: string; a: string }[];
  className?: string;
}) {
  const baseId = useId();

  return (
    <section
      className={`w-full ${className}`}
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
      <h2
        id="faq-heading"
        className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl"
      >
        {title}
      </h2>
      <ul className="mt-10 space-y-2">
        {items.map((item, i) => (
          <FaqItem
            key={i}
            item={item}
            id={`${baseId}-${i}`}
          />
        ))}
      </ul>
      </div>
    </section>
  );
}

function FaqItem({
  item,
  id,
}: {
  item: { q: string; a: string };
  id: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border border-bridge-dim/15 bg-sea-850/40">
      <button
        type="button"
        id={`${id}-btn`}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-white hover:bg-sea-800/30 sm:text-base"
      >
        {item.q}
        <span
          className="text-bridge transition-transform motion-reduce:transition-none"
          style={{ transform: open ? "rotate(180deg)" : undefined }}
          aria-hidden
        >
          ▼
        </span>
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        hidden={!open}
        className={open ? "block" : "hidden"}
      >
        <p className="border-t border-bridge-dim/10 px-5 pb-4 pt-2 text-sm leading-relaxed text-sea-300">
          {item.a}
        </p>
      </div>
    </li>
  );
}
