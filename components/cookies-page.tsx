"use client";

import { LegalDocumentView } from "@/components/legal-document-view";
import { useLocale } from "@/components/locale-provider";

export function CookiesPageView() {
  const { m } = useLocale();
  const p = m.cookiesPage;

  return (
    <LegalDocumentView
      title={p.title}
      intro={p.intro}
      disclaimer={p.disclaimer}
      sections={p.sections}
      backLabel={m.newsPage.back}
    />
  );
}
