"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useId, useRef } from "react";

type NewsItemModalProps = {
  open: boolean;
  title: string;
  body: string;
  imageCaption: string;
  closeLabel: string;
  onClose: () => void;
  image?: StaticImageData;
  imageAlt?: string;
};

export function NewsItemModal({
  open,
  title,
  body,
  imageCaption,
  closeLabel,
  onClose,
  image,
  imageAlt,
}: NewsItemModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] overflow-y-auto overscroll-contain"
      role="presentation"
    >
      <button
        type="button"
        className="animate-news-modal-backdrop fixed inset-0 z-0 bg-sea-950/80 backdrop-blur-sm"
        aria-label={closeLabel}
        onClick={onClose}
      />
      <div className="pointer-events-none relative z-[1] flex min-h-[100dvh] items-center justify-center p-4 py-8 sm:p-6 sm:py-10">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="news-modal-scroll animate-news-modal-panel pointer-events-auto w-full max-w-lg max-h-[min(85dvh,40rem)] overflow-y-auto border border-bridge-dim/25 bg-sea-900/98 p-6 shadow-2xl"
        >
          <div className="flex items-start justify-between gap-4">
            <h2 id={titleId} className="text-lg font-semibold text-white">
              {title}
            </h2>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="shrink-0 border border-bridge-dim/30 px-3 py-1.5 text-sm text-sea-200 transition-colors hover:border-bridge/50 hover:text-white"
            >
              {closeLabel}
            </button>
          </div>
          {image ? (
            <div className="relative mt-4 aspect-video w-full overflow-hidden border border-bridge-dim/20 bg-sea-850/80">
              <Image
                src={image}
                alt={imageAlt ?? title}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 32rem, 100vw"
              />
            </div>
          ) : (
            <div
              className="mt-4 aspect-video w-full border border-bridge-dim/20 bg-sea-850/80"
              role="img"
              aria-label={imageCaption}
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
                <span className="text-3xl text-sea-600" aria-hidden>
                  ▣
                </span>
                <span className="text-xs text-sea-500">{imageCaption}</span>
              </div>
            </div>
          )}
          <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-sea-300">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}
