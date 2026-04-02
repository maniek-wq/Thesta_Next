"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { useLocale } from "@/components/locale-provider";

type OfferTab = "products" | "services";

export function OfferPageView() {
  const { m } = useLocale();
  const p = m.offerPage;
  const baseId = useId();
  const productsTabId = `${baseId}-tab-products`;
  const servicesTabId = `${baseId}-tab-services`;
  const productsPanelId = `${baseId}-panel-products`;
  const servicesPanelId = `${baseId}-panel-services`;

  const [tab, setTab] = useState<OfferTab>("products");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link href="/" className="text-sm text-bridge hover:underline">
        ← {m.newsPage.back}
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-white">{p.title}</h1>
      <p className="mt-4 text-lg text-sea-300">{p.intro}</p>

      <div
        className="mt-10 flex w-full max-w-md flex-col gap-6"
        role="tablist"
        aria-label={`${p.productsTitle} / ${p.servicesTitle}`}
      >
        <div className="flex rounded-full border border-bridge-dim/35 bg-sea-900/90 p-1 shadow-inner">
          <button
            id={productsTabId}
            type="button"
            role="tab"
            aria-selected={tab === "products"}
            aria-controls={productsPanelId}
            tabIndex={tab === "products" ? 0 : -1}
            className={`min-h-[44px] flex-1 rounded-full px-4 py-2.5 text-center text-sm font-semibold transition-colors duration-200 sm:text-base ${
              tab === "products"
                ? "bg-white text-sea-950 shadow-sm"
                : "text-white hover:text-sea-200"
            }`}
            onClick={() => setTab("products")}
          >
            {p.productsTitle}
          </button>
          <button
            id={servicesTabId}
            type="button"
            role="tab"
            aria-selected={tab === "services"}
            aria-controls={servicesPanelId}
            tabIndex={tab === "services" ? 0 : -1}
            className={`min-h-[44px] flex-1 rounded-full px-4 py-2.5 text-center text-sm font-semibold transition-colors duration-200 sm:text-base ${
              tab === "services"
                ? "bg-white text-sea-950 shadow-sm"
                : "text-white hover:text-sea-200"
            }`}
            onClick={() => setTab("services")}
          >
            {p.servicesTitle}
          </button>
        </div>
      </div>

      {tab === "products" ? (
        <div
          id={productsPanelId}
          role="tabpanel"
          aria-labelledby={productsTabId}
          className="mt-8"
        >
          <ul className="space-y-8">
            {p.productCategories.map((cat, i) => (
              <li
                key={i}
                className="rounded-2xl border border-bridge-dim/15 bg-sea-850/40 p-6 sm:p-8"
              >
                <h2 className="text-lg font-semibold text-white">{cat.title}</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sea-300 marker:text-bridge/60">
                  {cat.items.map((line, j) => (
                    <li key={j} className="leading-relaxed">
                      {line}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div
          id={servicesPanelId}
          role="tabpanel"
          aria-labelledby={servicesTabId}
          className="mt-8"
        >
          <div className="rounded-2xl border border-bridge-dim/15 bg-sea-850/40 p-6 sm:p-8">
            <ul className="list-disc space-y-2 pl-5 text-sea-300 marker:text-bridge/60">
              {p.serviceItems.map((line, j) => (
                <li key={j} className="text-lg leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
