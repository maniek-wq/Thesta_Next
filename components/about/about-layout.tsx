"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

export function AboutLayout({
  children,
  /** Szerszy kontener (np. partnerzy z układem naprzemiennym). */
  wide = false,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) {
  const { m } = useLocale();

  return (
    <div
      className={`mx-auto px-4 py-16 sm:px-6 ${wide ? "max-w-6xl" : "max-w-[1216px]"}`}
    >
      <Link
        href="/"
        className="offer-font-mono text-[10px] uppercase tracking-[0.1em] text-[#556478] transition-colors hover:text-[rgba(0,212,177,0.65)]"
      >
        ← {m.aboutPages.common.back}
      </Link>
      {children}
    </div>
  );
}
