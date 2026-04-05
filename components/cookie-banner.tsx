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
      className="fixed z-[100] max-h-[min(50vh,28rem)] w-[min(28rem,calc(100vw-2rem))] overflow-y-auto overflow-x-clip border border-bridge-dim/35 bg-sea-900/97 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-md sm:p-5"
      style={{
        left: "max(1rem, env(safe-area-inset-left, 0px))",
        bottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
      }}
      role="dialog"
      aria-label="Cookies"
    >
      <div className="flex min-w-0 flex-col gap-4">
        <p className="min-w-0 text-sm leading-relaxed text-sea-200">
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
            className="border border-sea-600 px-4 py-2 text-sm text-sea-100 hover:bg-sea-800"
          >
            {t("cookies.reject")}
          </button>
          <button
            type="button"
            onClick={accept}
            className="bg-sonar-dim px-4 py-2 text-sm font-medium text-sea-950 hover:bg-sonar"
          >
            {t("cookies.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
