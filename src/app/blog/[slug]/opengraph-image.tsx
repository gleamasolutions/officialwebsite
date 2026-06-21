import { generateBrandOgImage, OG_IMAGE_SIZE } from "@/lib/og/generate-brand-image";
import { getArticleBySlug } from "@/constants/blog";

export const alt = "Gleama Article";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

interface ImageProps {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return generateBrandOgImage({
      title: "Insights & Articles",
      subtitle: "Investment perspectives from Gleama (Pvt) Ltd",
      eyebrow: "Blog",
    });
  }

  return generateBrandOgImage({
    title: article.title,
    subtitle: article.excerpt,
    eyebrow: article.category,
  });
}
