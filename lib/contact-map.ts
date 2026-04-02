/** Zapytanie do Google Maps (embed + link „Otwórz w mapach”) */
export const THESTA_OFFICE_MAP_QUERY =
  "Janiny Smoleńskiej ps. Jachna 17, 71-005 Szczecin, Poland";

export function googleMapsEmbedSrc(locale: "pl" | "en"): string {
  const hl = locale === "pl" ? "pl" : "en";
  const q = encodeURIComponent(THESTA_OFFICE_MAP_QUERY);
  return `https://www.google.com/maps?q=${q}&hl=${hl}&z=16&output=embed`;
}

export function googleMapsExternalUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(THESTA_OFFICE_MAP_QUERY)}`;
}
