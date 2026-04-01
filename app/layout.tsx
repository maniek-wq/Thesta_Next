import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/app/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Thesta — elektronika morska / marine electronics",
    template: "%s · Thesta",
  },
  description:
    "Nawigacja, łączność, hydrografia dla MW i floty cywilnej. Navigation, communications, hydrography — INS, GNSS, radar, ECDIS, VSAT.",
  metadataBase: new URL("https://thesta.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-dvh`}
      >
        <Providers>
          <Navbar />
          <main className="min-w-0 overflow-x-hidden pb-20 max-md:pb-24 md:pb-20">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
