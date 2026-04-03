import type { StaticImageData } from "next/image";
import tom9331News1 from "@/assets/img/news/tom-9331_news1.jpg";
import thumb790x400Katfish from "@/assets/img/news/thumb790x400_KATFISH.jpg.webp";

/** Klucze `imageKey` z wpisów `messages.*.home.news.items` */
export const NEWS_ITEM_IMAGES: Record<string, StaticImageData> = {
  tom9331News1,
  thumb790x400Katfish,
};

export function getNewsItemImage(
  key: string | undefined,
): StaticImageData | undefined {
  if (!key) return undefined;
  return NEWS_ITEM_IMAGES[key];
}
