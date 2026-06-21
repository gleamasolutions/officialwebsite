import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import BlogArticleTemplate from "@/components/blog/BlogArticleTemplate";
import SeoSchema from "@/components/seo/SeoSchema";
import {
  BLOG_ARTICLES,
  getArticleBySlug,
  getArticlePath,
} from "@/constants/blog";
import { SITE_URL } from "@/constants/site";
import { createPageMetadata } from "@/lib/metadata";
import { createArticlePageSchemas } from "@/lib/json-ld";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const path = getArticlePath(slug);

  return createPageMetadata({
    title: article.seo.title,
    description: article.seo.description,
    path,
    keywords: article.seo.keywords,
    type: "article",
  });
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const path = getArticlePath(slug);

  return (
    <PageLayout>
      <SeoSchema
        schema={createArticlePageSchemas({
          headline: article.title,
          description: article.seo.description,
          path,
          datePublished: article.publishedDate,
          authorName: article.author,
          imageUrl: `${SITE_URL}${article.featuredImage}`,
        })}
      />
      <BlogArticleTemplate article={article} />
    </PageLayout>
  );
}
