import type { Metadata } from "next";

export interface SeoDefaults {
  title: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterHandle: string;
  locale: string;
  type: "website" | "article";
}

export interface PageSeoConfig {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
  type?: "website" | "article";
}

export interface JsonLdOrganization {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
  description?: string;
  email?: string;
  telephone?: string;
  address?: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressCountry: string;
  };
}

export interface JsonLdWebPage {
  "@context": "https://schema.org";
  "@type": "WebPage";
  name: string;
  description?: string;
  url: string;
}

export type JsonLdSchema = JsonLdOrganization | JsonLdWebPage | Record<string, unknown>;

export type PageMetadata = Metadata;
