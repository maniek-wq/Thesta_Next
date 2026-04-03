import Image, { type StaticImageData } from "next/image";
import { NewsCardImagePlaceholder } from "@/components/news/news-card-image-placeholder";

export function NewsCardMedia({
  image,
  alt,
}: {
  image?: StaticImageData;
  alt: string;
}) {
  if (image) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-sea-900">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 28rem, (min-width: 640px) 90vw, 100vw"
        />
      </div>
    );
  }
  return <NewsCardImagePlaceholder />;
}
