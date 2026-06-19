import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageSchema } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Gleama (Pvt) Ltd, a diversified investment company committed to strategic growth and sustainable value creation.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageSchema(
          "About Us",
          "/about",
          "Learn about Gleama (Pvt) Ltd.",
        )}
      />
      <PageHero
        title="About Us"
        description="Discover our story, mission, and commitment to diversified investments."
      />
      <Container className="py-16">
        <section aria-label="About page content placeholder">
          <p className="text-body-lg text-neutral-600">
            About page content will be developed in upcoming phases.
          </p>
        </section>
      </Container>
    </PageLayout>
  );
}
