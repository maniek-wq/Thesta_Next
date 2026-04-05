import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-offer-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-offer-mono",
  display: "swap",
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${inter.variable} ${jetbrainsMono.variable} offer-page-scope min-h-[calc(100dvh-var(--nav-height,4rem))] bg-[#060A10]`}
    >
      {children}
    </div>
  );
}
