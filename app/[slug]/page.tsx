import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/product-detail-page";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { isProductPageSlug, PRODUCT_SLUGS } from "@/lib/products";
import { isServicePageSlug, SERVICE_SLUGS } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...PRODUCT_SLUGS, ...SERVICE_SLUGS].map((slug) => ({ slug }));
}

export default async function OfferDetailSlugPage({ params }: Props) {
  const { slug } = await params;
  if (isProductPageSlug(slug)) return <ProductDetailPage slug={slug} />;
  if (isServicePageSlug(slug)) return <ServiceDetailPage slug={slug} />;
  notFound();
}
