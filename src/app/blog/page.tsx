import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageSchema } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Insights, news, and updates from Gleama (Pvt) Ltd on investments and market trends.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageSchema(
          "Blog",
          "/blog",
          "Insights and updates from Gleama.",
        )}
      />
      <PageHero
        title="Blog"
        description="Stay informed with the latest insights and company updates."
      />
      <Container className="py-16">
        <section aria-label="Blog page content placeholder">
          <p className="text-body-lg text-neutral-600">
            Blog content will be developed in upcoming phases.
          </p>
        </section>
      </Container>
    </PageLayout>
  );
}
