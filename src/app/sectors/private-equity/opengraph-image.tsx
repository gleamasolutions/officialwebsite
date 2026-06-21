import { generateBrandOgImage, OG_IMAGE_SIZE } from "@/lib/og/generate-brand-image";
import { PRIVATE_EQUITY_CONTENT } from "@/constants/sectors-content";

export const alt = PRIVATE_EQUITY_CONTENT.heroTitle;
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return generateBrandOgImage({
    title: PRIVATE_EQUITY_CONTENT.heroTitle,
    subtitle: PRIVATE_EQUITY_CONTENT.seo.description,
    eyebrow: "Investment Sector",
  });
}
