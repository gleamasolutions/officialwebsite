import PageLayout from "@/components/layout/PageLayout";
import BlogListingGrid from "@/components/blog/BlogListingGrid";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { BLOG_HERO, BLOG_LISTING_SEO } from "@/constants/blog";
import { createPageMetadata } from "@/lib/metadata";
import {
  createOrganizationSchema,
  createWebPageWithBreadcrumbSchemas,
} from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: BLOG_LISTING_SEO.title,
  description: BLOG_LISTING_SEO.description,
  path: "/blog",
  keywords: [...BLOG_LISTING_SEO.keywords],
});

export default function BlogPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={[
          createOrganizationSchema(),
          ...createWebPageWithBreadcrumbSchemas(
            BLOG_HERO.title,
            "/blog",
            BLOG_LISTING_SEO.description,
            [
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
            ],
          ),
        ]}
      />
      <PageHero
        title={BLOG_HERO.title}
        description={BLOG_HERO.subtitle}
      />
      <BlogListingGrid />
    </PageLayout>
  );
}
