import type { MetadataRoute } from "next";
import { BLOG_ARTICLES, getArticlePath } from "@/constants/blog";
import { SITE_URL } from "@/constants/site";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/sectors", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/sectors/cse", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/sectors/unit-trust", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/sectors/private-equity", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/sectors/gold", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/privacy-policy", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/cookie-policy", priority: 0.5, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries = BLOG_ARTICLES.map((article) => ({
    url: `${SITE_URL}${getArticlePath(article.slug)}`,
    lastModified: new Date(article.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticEntries, ...blogEntries];
}
