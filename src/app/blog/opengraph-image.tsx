import { generateBrandOgImage, OG_IMAGE_SIZE } from "@/lib/og/generate-brand-image";
import { BLOG_LISTING_SEO } from "@/constants/blog";

export const alt = "Gleama Insights & Articles";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return generateBrandOgImage({
    title: BLOG_LISTING_SEO.title,
    subtitle: BLOG_LISTING_SEO.description,
    eyebrow: "Insights",
  });
}
