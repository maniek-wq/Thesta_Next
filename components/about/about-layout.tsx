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
      className={`mx-auto px-4 py-16 sm:px-6 ${wide ? "max-w-6xl" : "max-w-4xl"}`}
    >
      <Link href="/" className="text-sm text-bridge hover:underline">
        ← {m.aboutPages.common.back}
      </Link>
      {children}
    </div>
  );
}
