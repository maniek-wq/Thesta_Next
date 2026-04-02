"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

export function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { m } = useLocale();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link href="/" className="text-sm text-bridge hover:underline">
        ← {m.aboutPages.common.back}
      </Link>
      {children}
    </div>
  );
}
