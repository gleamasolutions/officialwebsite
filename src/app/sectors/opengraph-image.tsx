import { generateBrandOgImage, OG_IMAGE_SIZE } from "@/lib/og/generate-brand-image";
import { SECTORS_SEO } from "@/constants/sectors-content";

export const alt = "Gleama Investment Sectors";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return generateBrandOgImage({
    title: "Investment Sectors",
    subtitle: SECTORS_SEO.description,
    eyebrow: "Portfolio",
  });
}
