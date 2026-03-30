"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionShell } from "@/components/section-shell";
import type { Messages } from "@/lib/messages";

type Contact = Messages["home"]["contact"];

export function HomeContactBlock({ contact }: { contact: Contact }) {
  return (
    <SectionShell id="kontakt" variant="band" aria-labelledby="contact-heading">
      <RevealOnScroll>
        <div className="rounded-3xl border border-bridge-dim/25 bg-gradient-to-br from-sea-850/90 to-sea-900/90 p-8 shadow-inner sm:p-12">
          <h2
            id="contact-heading"
            className="text-2xl font-semibold text-white sm:text-3xl"
          >
            {contact.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sea-300">{contact.body}</p>
          <p className="mt-6 text-sm text-sea-400">{contact.company}</p>
          <p className="mt-2 text-sm text-sea-300">
            {contact.phoneLabel}{" "}
            <a href="tel:+48725105207" className="text-bridge hover:underline">
              +48 725 105 207
            </a>
            {" · "}
            <a
              href="mailto:biuro@thesta.pl"
              className="text-bridge hover:underline"
            >
              biuro@thesta.pl
            </a>
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-bridge-dim/30 px-6 py-3 text-sm font-medium text-white ring-1 ring-bridge/30 hover:bg-bridge-dim/50"
          >
            {contact.formCta}
          </Link>
        </div>
      </RevealOnScroll>
    </SectionShell>
  );
}
