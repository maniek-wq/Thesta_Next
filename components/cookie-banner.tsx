"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/locale-provider";

const STORAGE_KEY = "thesta-cookie-consent";

export function CookieBanner() {
  const { t } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v !== "accept" && v !== "reject") setVisible(true);
  }, []);

  if (!visible) return null;

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, "accept");
    setVisible(false);
  }

  function reject() {
    window.localStorage.setItem(STORAGE_KEY, "reject");
    setVisible(false);
  }

  return (
    <div
      className="fixed bottom-[5.75rem] left-0 right-0 z-[90] max-w-full overflow-x-hidden border-t border-bridge-dim/20 bg-sea-900/95 p-4 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md sm:p-5"
      role="dialog"
      aria-label="Cookies"
    >
      <div className="mx-auto flex min-w-0 max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="min-w-0 text-sm text-sea-200">
          {t("cookies.text")}{" "}
          <Link href="/cookies" className="text-bridge underline-offset-2 hover:underline">
            {t("footer.cookies")}
          </Link>
          {" · "}
          <Link href="/privacy" className="text-bridge underline-offset-2 hover:underline">
            {t("nav.privacy")}
          </Link>
          .
        </p>
        <div className="flex flex-shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={reject}
            className="rounded-lg border border-sea-600 px-4 py-2 text-sm text-sea-100 hover:bg-sea-800"
          >
            {t("cookies.reject")}
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-lg bg-sonar-dim px-4 py-2 text-sm font-medium text-sea-950 hover:bg-sonar"
          >
            {t("cookies.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
