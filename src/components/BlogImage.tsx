import Image from "next/image";
import type { Article } from "@/lib/articles";
import { assetPath } from "@/lib/assets";

type BlogImageProps = {
  article: Pick<Article, "image" | "imageAlt" | "imagePosition" | "imageVariants">;
  sizes: string;
  eager?: boolean;
};

export function BlogImage({ article, sizes, eager = false }: BlogImageProps) {
  const variants = article.imageVariants;
  // Use a modest fallback; the picture source selects the appropriate resolution.
  const fallback = variants?.find((variant) => variant.width >= 960)?.src ?? article.image;
  return (
    <picture>
      {variants?.length ? (
        <source
          type="image/webp"
          srcSet={variants.map((variant) => `${assetPath(`/img/${variant.src}`)} ${variant.width}w`).join(", ")}
          sizes={sizes}
        />
      ) : null}
      <Image
        src={assetPath(`/img/${fallback}`)}
        alt={article.imageAlt}
        fill
        unoptimized
        sizes={sizes}
        style={{ objectPosition: article.imagePosition }}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
      />
    </picture>
  );
}
