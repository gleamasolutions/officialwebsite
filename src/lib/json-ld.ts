import { BRAND, COMPANY, SITE_URL } from "@/constants/site";
import { getPublicContactEmail } from "@/lib/env";
import type {
  JsonLdBlogPosting,
  JsonLdBreadcrumbList,
  JsonLdContactPage,
  JsonLdOrganization,
  JsonLdSchema,
  JsonLdWebPage,
} from "@/types/seo.types";

export function createOrganizationSchema(): JsonLdOrganization {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    url: SITE_URL,
    logo: `${SITE_URL}${BRAND.logo.src}`,
    description: COMPANY.description,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No 79/11, Dayagunasekara Mawatha, Welagedara",
      addressLocality: "Badulla",
      addressCountry: "Sri Lanka",
    },
  };
}

export function createWebPageSchema(
  name: string,
  path: string,
  description?: string,
): JsonLdWebPage {
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: COMPANY.name,
      url: SITE_URL,
    },
  };
}

export function createWebPageWithBreadcrumbSchemas(
  name: string,
  path: string,
  description: string | undefined,
  breadcrumbs: Array<{ name: string; path: string }>,
): JsonLdSchema[] {
  return [
    createWebPageSchema(name, path, description),
    createBreadcrumbSchema(breadcrumbs),
  ];
}

export function serializeJsonLd(schema: JsonLdSchema | JsonLdSchema[]): string {
  return JSON.stringify(schema);
}

export function createBlogPostingSchema(params: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  authorName: string;
  imageUrl?: string;
  schemaType?: "BlogPosting" | "Article";
}): JsonLdBlogPosting {
  const url = `${SITE_URL}${params.path.startsWith("/") ? params.path : `/${params.path}`}`;
  const imageUrl = params.imageUrl ?? `${SITE_URL}/og-image?title=${encodeURIComponent(params.headline)}`;

  return {
    "@context": "https://schema.org",
    "@type": params.schemaType ?? "BlogPosting",
    headline: params.headline,
    description: params.description,
    url,
    datePublished: params.datePublished,
    author: {
      "@type": "Organization",
      name: params.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${BRAND.logo.src}`,
      },
    },
    image: imageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function createArticlePageSchemas(params: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  authorName: string;
  imageUrl?: string;
}): JsonLdSchema[] {
  return [
    createOrganizationSchema(),
    createBlogPostingSchema({ ...params, schemaType: "BlogPosting" }),
    createBlogPostingSchema({ ...params, schemaType: "Article" }),
    createBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: params.headline, path: params.path },
    ]),
  ];
}

export function createBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
): JsonLdBreadcrumbList {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
}

export function createContactOrganizationSchema(): JsonLdOrganization {
  return {
    ...createOrganizationSchema(),
    email: getPublicContactEmail(),
  };
}

export function createContactPageSchema(): JsonLdContactPage {
  const url = `${SITE_URL}/contact`;

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Gleama",
    description:
      "Contact Gleama (Pvt) Ltd for business inquiries, partnership opportunities and general corporate inquiries.",
    url,
    mainEntity: {
      "@type": "Organization",
      name: COMPANY.name,
      url: SITE_URL,
      email: getPublicContactEmail(),
      telephone: COMPANY.phone,
    },
  };
}

export function createContactPageSchemas(): JsonLdSchema[] {
  return [
    createContactOrganizationSchema(),
    createContactPageSchema(),
    createBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  ];
}
