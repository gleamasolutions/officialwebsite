import type { MetadataRoute } from "next";
import { COMPANY, SITE_URL } from "@/constants/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY.name,
    short_name: COMPANY.shortName,
    description: COMPANY.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#000080",
    theme_color: "#000080",
    orientation: "portrait-primary",
    lang: "en-LK",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
    id: SITE_URL,
    categories: ["business", "finance"],
    related_applications: [],
    prefer_related_applications: false,
    screenshots: [],
    shortcuts: [
      {
        name: "Contact",
        url: "/contact",
        description: "Contact Gleama",
      },
      {
        name: "Investments",
        url: "/sectors",
        description: "Explore investment sectors",
      },
    ],
  };
}
