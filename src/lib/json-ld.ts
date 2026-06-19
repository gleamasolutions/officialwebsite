import { COMPANY, SITE_URL } from "@/constants/site";
import type { JsonLdOrganization, JsonLdSchema, JsonLdWebPage } from "@/types/seo.types";

export function createOrganizationSchema(): JsonLdOrganization {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    url: SITE_URL,
    description: COMPANY.description,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colombo",
      addressCountry: "LK",
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
  };
}

export function serializeJsonLd(schema: JsonLdSchema | JsonLdSchema[]): string {
  return JSON.stringify(schema);
}
