"use client";

import type { ReactNode } from "react";
import { CookieBanner } from "@/components/cookie-banner";
import { LocaleProvider } from "@/components/locale-provider";
import { RadarLoader } from "@/components/radar-loader";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <RadarLoader />
      {children}
      <CookieBanner />
    </LocaleProvider>
  );
}
