import { generateBrandOgImage, OG_IMAGE_SIZE } from "@/lib/og/generate-brand-image";
import { GOLD_CONTENT } from "@/constants/sectors-content";

export const alt = GOLD_CONTENT.heroTitle;
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return generateBrandOgImage({
    title: GOLD_CONTENT.heroTitle,
    subtitle: GOLD_CONTENT.seo.description,
    eyebrow: "Investment Sector",
  });
}
