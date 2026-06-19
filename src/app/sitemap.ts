import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";

const routes = [
  "",
  "/about",
  "/sectors",
  "/sectors/cse",
  "/sectors/unit-trust",
  "/sectors/private-equity",
  "/sectors/gold",
  "/blog",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/sectors") ? 0.8 : 0.7,
  }));
}
