"use client";

import type { ReactNode } from "react";
import { CookieBanner } from "@/components/cookie-banner";
import { LocaleProvider } from "@/components/locale-provider";
import { RadarLoader } from "@/components/radar-loader";
import { ScrollDock } from "@/components/scroll-dock";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <RadarLoader />
      {children}
      <ScrollDock />
      <CookieBanner />
    </LocaleProvider>
  );
}
