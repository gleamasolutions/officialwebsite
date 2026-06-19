import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageSchema } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "Unit Trust",
  description:
    "Gleama's unit trust investment solutions for diversified portfolio growth.",
  path: "/sectors/unit-trust",
});

export default function UnitTrustPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageSchema(
          "Unit Trust",
          "/sectors/unit-trust",
          "Unit trust investment solutions.",
        )}
      />
      <PageHero
        title="Unit Trust"
        description="Professionally managed unit trust investment solutions."
      />
      <Container className="py-16">
        <section aria-label="Unit trust sector content placeholder">
          <p className="text-body-lg text-neutral-600">
            Unit trust sector content will be developed in upcoming phases.
          </p>
        </section>
      </Container>
    </PageLayout>
  );
}
