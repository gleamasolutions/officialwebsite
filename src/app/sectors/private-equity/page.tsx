import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageSchema } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "Private Equity",
  description:
    "Gleama's private equity investments driving growth in high-potential businesses.",
  path: "/sectors/private-equity",
});

export default function PrivateEquityPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageSchema(
          "Private Equity",
          "/sectors/private-equity",
          "Private equity investment solutions.",
        )}
      />
      <PageHero
        title="Private Equity"
        description="Strategic investments in high-growth private companies."
      />
      <Container className="py-16">
        <section aria-label="Private equity sector content placeholder">
          <p className="text-body-lg text-neutral-600">
            Private equity sector content will be developed in upcoming phases.
          </p>
        </section>
      </Container>
    </PageLayout>
  );
}
