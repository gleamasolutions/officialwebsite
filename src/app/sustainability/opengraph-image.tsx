import { generateBrandOgImage, OG_IMAGE_SIZE } from "@/lib/og/generate-brand-image";
import { SUSTAINABILITY_SEO } from "@/constants/sustainability";

export const alt = "Gleama Sustainability";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return generateBrandOgImage({
    title: SUSTAINABILITY_SEO.title,
    subtitle: SUSTAINABILITY_SEO.description,
    eyebrow: "Sustainable Growth",
  });
}
