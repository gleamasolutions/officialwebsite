import { generateBrandOgImage, OG_IMAGE_SIZE } from "@/lib/og/generate-brand-image";
import { ABOUT_SEO } from "@/constants/about";

export const alt = "About Gleama (Pvt) Ltd";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return generateBrandOgImage({
    title: "About Gleama",
    subtitle: ABOUT_SEO.description,
    eyebrow: "Our Company",
  });
}
