import { generateBrandOgImage, OG_IMAGE_SIZE } from "@/lib/og/generate-brand-image";
import { UNIT_TRUST_CONTENT } from "@/constants/sectors-content";

export const alt = UNIT_TRUST_CONTENT.heroTitle;
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return generateBrandOgImage({
    title: UNIT_TRUST_CONTENT.heroTitle,
    subtitle: UNIT_TRUST_CONTENT.seo.description,
    eyebrow: "Investment Sector",
  });
}
