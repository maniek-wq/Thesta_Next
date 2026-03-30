Thesta Next — wizytówka (Next.js 15, App Router, TypeScript, Tailwind).

Uruchomienie:
  npm install
  npm run dev

Struktura (główne elementy):
  app/
    layout.tsx, page.tsx, globals.css, providers.tsx
    contact/, offer/, news/, privacy/, cookies/ — podstrony
    public/legal/*.txt — skrócone pliki tekstowe z odesłaniem do /privacy i /cookies
  components/
    locale-provider.tsx — PL/EN + localStorage (thesta-locale)
    radar-loader.tsx — overlay radaru przy każdym załadowaniu/odświeżeniu (pomijany przy prefers-reduced-motion)
    navbar.tsx — linki + przełącznik PL | EN
    footer.tsx,     cookie-banner.tsx
    scroll-dock.tsx — dolny panel po scrollu (Zadzwoń, Umów się, Oferta, do góry)
    reveal-on-scroll.tsx — fade + slide przy wejściu w viewport
    section-shell.tsx — wspólna obudowa sekcji (id, wariant tła/obramowania)
    home-page.tsx — składa sekcje z components/home/*
    home/ — home-hero, home-services, home-stats, home-news, home-faq, home-contact-block, home-process, home-testimonials
    stats-section.tsx, faq-section.tsx
    contact-page.tsx, offer-page.tsx, news-page.tsx, privacy-page.tsx
  lib/messages.ts — słowniki PL i EN

Komponenty UI: RadarLoader, Navbar (LanguageSwitch), Hero/sekcje w HomePage, ServiceCards, Stats, NewsTeaser, FAQ, ContactBlock, Process, Testimonials, Footer, CookieBanner.

Paleta: ciemne odcienie morskie (sea-*), akcenty sonar (zieleń) i bridge (błękit) w tailwind.config.ts.
