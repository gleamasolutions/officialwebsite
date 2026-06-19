import type { Metadata } from "next";
import { COMPANY, SEO_DEFAULTS, SITE_URL } from "@/constants/site";
import type { PageSeoConfig } from "@/types/seo.types";

function resolveUrl(path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

function resolveImageUrl(image?: string): string {
  const src = image ?? SEO_DEFAULTS.ogImage;
  return src.startsWith("http") ? src : `${SITE_URL}${src}`;
}

export function createPageMetadata(config: PageSeoConfig): Metadata {
  const {
    title,
    description = SEO_DEFAULTS.description,
    path = "",
    keywords,
    ogImage,
    noIndex = false,
    type = SEO_DEFAULTS.type,
  } = config;

  const canonicalUrl = resolveUrl(path);
  const imageUrl = resolveImageUrl(ogImage);
  const fullTitle =
    title === SEO_DEFAULTS.title
      ? title
      : SEO_DEFAULTS.titleTemplate.replace("%s", title);

  return {
    title: fullTitle,
    description,
    keywords: keywords ?? SEO_DEFAULTS.keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: COMPANY.name,
      locale: SEO_DEFAULTS.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
      site: SEO_DEFAULTS.twitterHandle,
      creator: SEO_DEFAULTS.twitterHandle,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const rootMetadata: Metadata = createPageMetadata({
  title: SEO_DEFAULTS.title,
  description: SEO_DEFAULTS.description,
  path: "/",
});
