import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageSchema } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "Investment Sectors",
  description:
    "Explore Gleama's diversified investment sectors including CSE, unit trusts, private equity, and gold.",
  path: "/sectors",
});

export default function SectorsPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageSchema(
          "Investment Sectors",
          "/sectors",
          "Gleama investment sectors.",
        )}
      />
      <PageHero
        title="Investment Sectors"
        description="A diversified portfolio across key investment verticals."
      />
      <Container className="py-16">
        <section aria-label="Sectors page content placeholder">
          <p className="text-body-lg text-neutral-600">
            Sector overview content will be developed in upcoming phases.
          </p>
        </section>
      </Container>
    </PageLayout>
  );
}
