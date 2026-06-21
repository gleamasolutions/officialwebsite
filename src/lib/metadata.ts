import type { Metadata } from "next";
import { COMPANY, SEO_DEFAULTS, SITE_URL } from "@/constants/site";
import type { PageSeoConfig } from "@/types/seo.types";

function resolveUrl(path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

function resolveImageUrl(image: string): string {
  return image.startsWith("http") ? image : `${SITE_URL}${image}`;
}

function resolveOgImagePath(path: string, ogImage?: string): string | undefined {
  if (ogImage) {
    return resolveImageUrl(ogImage);
  }

  if (!path || path === "/") {
    return `${SITE_URL}/opengraph-image`;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}/opengraph-image`;
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
  const fullTitle =
    title === SEO_DEFAULTS.title
      ? title
      : SEO_DEFAULTS.titleTemplate.replace("%s", title);
  const imageUrl = resolveOgImagePath(path, ogImage);

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
      ...(imageUrl
        ? {
            images: [
              {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: fullTitle,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
      site: SEO_DEFAULTS.twitterHandle,
      creator: SEO_DEFAULTS.twitterHandle,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const rootMetadata: Metadata = {
  ...createPageMetadata({
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    path: "/",
  }),
  applicationName: COMPANY.shortName,
  authors: [{ name: COMPANY.name, url: SITE_URL }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  category: "Finance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  ...(gscVerification
    ? {
        verification: {
          google: gscVerification,
        },
      }
    : {}),
  other: {
    "msapplication-TileColor": "#000080",
  },
};

export const notFoundMetadata: Metadata = {
  title: "Page Not Found",
  description: "The requested page could not be found on Gleama (Pvt) Ltd.",
  robots: { index: false, follow: true },
};
