"use client";

import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionShell } from "@/components/section-shell";
import { FaqSection } from "@/components/faq-section";
import type { Messages } from "@/lib/messages";

type Faq = Messages["home"]["faq"];

export function HomeFaq({ faq }: { faq: Faq }) {
  return (
    <SectionShell id="faq" variant="default" className="border-t border-bridge-dim/10">
      <RevealOnScroll>
        <FaqSection title={faq.title} items={faq.items} />
      </RevealOnScroll>
    </SectionShell>
  );
}
