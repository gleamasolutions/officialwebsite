import { generateBrandOgImage, OG_IMAGE_SIZE } from "@/lib/og/generate-brand-image";
import { COMPANY } from "@/constants/site";

export const alt = `${COMPANY.name} — Diversified Investment Company`;
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return generateBrandOgImage({
    title: COMPANY.shortName,
    subtitle: COMPANY.description,
    eyebrow: "Invest With Confidence",
  });
}
