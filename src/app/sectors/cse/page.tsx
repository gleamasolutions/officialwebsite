import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageSchema } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "CSE",
  description:
    "Gleama's capital market investments on the Colombo Stock Exchange (CSE).",
  path: "/sectors/cse",
});

export default function CsePage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageSchema(
          "CSE",
          "/sectors/cse",
          "Colombo Stock Exchange investments.",
        )}
      />
      <PageHero
        title="CSE"
        description="Capital market investments on the Colombo Stock Exchange."
      />
      <Container className="py-16">
        <section aria-label="CSE sector content placeholder">
          <p className="text-body-lg text-neutral-600">
            CSE sector content will be developed in upcoming phases.
          </p>
        </section>
      </Container>
    </PageLayout>
  );
}
