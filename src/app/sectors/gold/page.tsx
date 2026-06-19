import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageSchema } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "Gold",
  description:
    "Gleama's gold investment offerings as a strategic store of value.",
  path: "/sectors/gold",
});

export default function GoldPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageSchema(
          "Gold",
          "/sectors/gold",
          "Gold investment offerings.",
        )}
      />
      <PageHero
        title="Gold"
        description="Strategic gold investments as a hedge and store of value."
      />
      <Container className="py-16">
        <section aria-label="Gold sector content placeholder">
          <p className="text-body-lg text-neutral-600">
            Gold sector content will be developed in upcoming phases.
          </p>
        </section>
      </Container>
    </PageLayout>
  );
}
