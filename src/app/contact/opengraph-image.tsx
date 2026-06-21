import { generateBrandOgImage, OG_IMAGE_SIZE } from "@/lib/og/generate-brand-image";

export const alt = "Contact Gleama (Pvt) Ltd";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return generateBrandOgImage({
    title: "Contact Gleama",
    subtitle:
      "Discuss investment opportunities, partnerships and business inquiries.",
    eyebrow: "Get In Touch",
  });
}
