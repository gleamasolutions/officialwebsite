import { generateBrandOgImage, OG_IMAGE_SIZE } from "@/lib/og/generate-brand-image";
import { CSE_CONTENT } from "@/constants/sectors-content";

export const alt = CSE_CONTENT.heroTitle;
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return generateBrandOgImage({
    title: CSE_CONTENT.heroTitle,
    subtitle: CSE_CONTENT.seo.description,
    eyebrow: "Investment Sector",
  });
}
