"use client";

import { OfferContentPage } from "@/components/offer-content-page";
import { useLocale } from "@/components/locale-provider";
import type { ProductPageSlug } from "@/lib/products";

export function ProductDetailPage({ slug }: { slug: ProductPageSlug }) {
  const { m } = useLocale();
  const pp = m.productPages;
  const page = pp.bySlug[slug];

  return (
    <OfferContentPage
      backHref="/offer"
      backLabel={pp.backToOffer}
      title={page.title}
      intro={page.intro}
      placeholderCaption={pp.placeholderCaption}
      blocks={page.blocks}
    />
  );
}
