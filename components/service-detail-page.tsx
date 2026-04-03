"use client";

import { OfferContentPage } from "@/components/offer-content-page";
import { useLocale } from "@/components/locale-provider";
import type { ServicePageSlug } from "@/lib/services";

export function ServiceDetailPage({ slug }: { slug: ServicePageSlug }) {
  const { m } = useLocale();
  const sp = m.servicePages;
  const page = sp.bySlug[slug];

  return (
    <OfferContentPage
      backHref="/offer"
      backLabel={sp.backToOffer}
      title={page.title}
      intro={page.intro}
      placeholderCaption={sp.placeholderCaption}
      blocks={page.blocks}
      cta={sp.cta}
    />
  );
}
