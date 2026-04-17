"use client";

import Link from "next/link";
import {
  FigmaCtaArrow,
  FigmaMail,
  FigmaMapPin,
  FigmaPhone,
} from "@/components/icons/figma-icons";
import { useLocale } from "@/components/locale-provider";

const iconClass = "shrink-0 text-[rgba(0,212,177,0.4)]";

export function ContactPageView() {
  const { m } = useLocale();
  const p = m.contactPage;
  const h = m.home.contact;


  return (
    <div className="pb-20">
      <div className="mx-auto max-w-[1216px] px-4 sm:px-8">
        <Link
          href="/"
          className="offer-font-mono inline-block pt-10 text-[10px] uppercase tracking-[0.1em] text-[#8aafc8] transition-colors hover:text-[rgba(0,212,177,0.65)]"
        >
          ← {m.newsPage.back}
        </Link>

        <header className="mt-10 space-y-5">
          <p className="offer-font-mono text-[10px] font-normal uppercase tracking-[0.15em] text-[rgba(0,212,177,0.5)]">
            {p.sectionKicker}
          </p>
          <h1 className="max-w-[18ch] text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#dce3ed]">
            {p.headline}
          </h1>
          <p className="max-w-2xl text-[15px] leading-[1.8] text-[#8aafc8]">{p.intro}</p>
        </header>

        <div className="mt-14 flex flex-col gap-12 lg:mt-16 lg:flex-row lg:items-stretch lg:justify-between lg:gap-10 xl:gap-14">
          {/* Form — makiet ~704px */}
          <section
            className="w-full shrink-0 border border-[rgba(37,82,120,0.3)] lg:max-w-[704px] lg:flex-1"
            style={{ backgroundColor: "#122944" }}
            aria-label={p.formHeading}
          >
            <form
              className="flex flex-col gap-6 px-6 py-9 sm:px-10 sm:py-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="offer-font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-[rgba(85,100,120,0.6)]"
                  >
                    {p.form.name}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder={p.form.namePlaceholder}
                    className="border border-[rgba(37,82,120,0.4)] bg-sea-950 px-4 py-3 text-[14px] text-[#dce3ed] outline-none transition-[border-color,box-shadow] placeholder:text-[rgba(138,175,200,0.5)] focus-visible:border-[rgba(0,212,177,0.35)] focus-visible:ring-1 focus-visible:ring-[rgba(0,212,177,0.2)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="offer-font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-[rgba(85,100,120,0.6)]"
                  >
                    {p.form.email}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder={p.form.emailPlaceholder}
                    className="border border-[rgba(37,82,120,0.4)] bg-sea-950 px-4 py-3 text-[14px] text-[#dce3ed] outline-none transition-[border-color,box-shadow] placeholder:text-[rgba(138,175,200,0.5)] focus-visible:border-[rgba(0,212,177,0.35)] focus-visible:ring-1 focus-visible:ring-[rgba(0,212,177,0.2)]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-org"
                  className="offer-font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-[rgba(85,100,120,0.6)]"
                >
                  {p.form.organization}
                </label>
                <input
                  id="contact-org"
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  placeholder={p.form.organizationPlaceholder}
                  className="border border-[rgba(37,82,120,0.4)] bg-sea-950 px-4 py-3 text-[14px] text-[#dce3ed] outline-none transition-[border-color,box-shadow] placeholder:text-[rgba(138,175,200,0.5)] focus-visible:border-[rgba(0,212,177,0.35)] focus-visible:ring-1 focus-visible:ring-[rgba(0,212,177,0.2)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="offer-font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-[rgba(85,100,120,0.6)]"
                >
                  {p.form.inquiry}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder={p.form.messagePlaceholder}
                  className="min-h-[140px] resize-y border border-[rgba(37,82,120,0.4)] bg-sea-950 px-4 py-3 text-[14px] leading-normal text-[#dce3ed] outline-none transition-[border-color,box-shadow] placeholder:text-[rgba(138,175,200,0.5)] focus-visible:border-[rgba(0,212,177,0.35)] focus-visible:ring-1 focus-visible:ring-[rgba(0,212,177,0.2)]"
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#00D4B1] px-6 py-3 text-[13px] font-medium text-[#060A10] transition-[filter,transform] hover:brightness-105 active:scale-[0.99]"
                >
                  {p.form.submit}
                  <FigmaCtaArrow size={14} />
                </button>
                <p className="offer-font-mono max-w-[16rem] text-[9px] leading-normal text-[rgba(85,100,120,0.3)]">
                  {p.formDisclaimer}
                </p>
              </div>

              <label className="flex cursor-pointer gap-3 border-t border-[rgba(37,82,120,0.25)] pt-6">
                <input
                  id="contact-privacy-consent"
                  name="privacyConsent"
                  type="checkbox"
                  required
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 border border-[rgba(37,82,120,0.5)] bg-sea-950 accent-[#00D4B1]"
                />
                <span className="text-[13px] leading-relaxed text-[#8aafc8]">
                  {p.form.consent}{" "}
                  <Link
                    href="/privacy"
                    className="text-[#00D4B1]/80 underline-offset-2 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {p.form.consentPolicyLink}
                  </Link>
                  .
                </span>
              </label>
            </form>
          </section>

          {/* Prawa kolumna ~448px */}
          <aside className="flex w-full shrink-0 flex-col lg:w-[min(100%,448px)]">
            <div className="pt-0">
              <h2 className="text-[16px] font-medium text-[#dce3ed]">
                {p.contactAsideTitle}
              </h2>
              <div className="mt-6 flex flex-col gap-5">
                <div className="flex gap-4">
                  <FigmaMapPin className={iconClass} />
                  <div className="space-y-1 text-[14px] leading-normal">
                    <p className="font-medium text-[#dce3ed]">{h.company.split(" · ")[0]}</p>
                    <p className="text-[#8aafc8]">{p.addressLine1}</p>
                    <p className="text-[#8aafc8]">{p.addressLine2}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FigmaPhone className={iconClass} />
                  <a
                    href="tel:+48725105207"
                    className="text-[14px] text-[#dce3ed] transition-colors hover:text-[#00D4B1]"
                  >
                    +48 725 105 207
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FigmaMail className={iconClass} />
                  <a
                    href="mailto:biuro@thesta.pl"
                    className="text-[14px] text-[#dce3ed] transition-colors hover:text-[#00D4B1]"
                  >
                    biuro@thesta.pl
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa Google */}
            <div className="mt-10 flex min-h-[260px] flex-1 overflow-hidden border border-[rgba(37,82,120,0.35)]">
              <iframe
                title="Lokalizacja Thesta"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.6!2d14.5520!3d53.4285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa093b1c5b6b6b%3A0x1234567890abcdef!2sJaniny%20Smole%C5%84skiej%20ps.%20%E2%80%9EJachna%E2%80%9D%2017%2C%2071-005%20Szczecin!5e0!3m2!1spl!2spl!4v1713000000000!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
