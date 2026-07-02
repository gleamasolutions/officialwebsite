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
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    addressCountry?: string;
  };
}

export interface JsonLdWebPage {
  "@context": "https://schema.org";
  "@type": "WebPage";
  name: string;
  description?: string;
  url: string;
  isPartOf?: {
    "@type": "WebSite";
    name: string;
    url: string;
  };
}

export interface JsonLdBreadcrumbList {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

export interface JsonLdContactPage {
  "@context": "https://schema.org";
  "@type": "ContactPage";
  name: string;
  description?: string;
  url: string;
  mainEntity: {
    "@type": "Organization";
    name: string;
    url: string;
    email?: string;
    telephone?: string;
  };
}

export interface JsonLdBlogPosting {
  "@context": "https://schema.org";
  "@type": "BlogPosting" | "Article";
  headline: string;
  description?: string;
  url: string;
  datePublished: string;
  author: {
    "@type": "Organization" | "Person";
    name: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
    url: string;
    logo?: {
      "@type": "ImageObject";
      url: string;
    };
  };
  image?: string;
  mainEntityOfPage?: {
    "@type": "WebPage";
    "@id": string;
  };
}

export type JsonLdSchema =
  | JsonLdOrganization
  | JsonLdWebPage
  | JsonLdBlogPosting
  | JsonLdBreadcrumbList
  | JsonLdContactPage
  | Record<string, unknown>;

export type PageMetadata = Metadata;
