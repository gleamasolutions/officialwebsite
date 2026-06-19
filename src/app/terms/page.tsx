import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageSchema } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Review the terms of service governing the use of Gleama (Pvt) Ltd website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageSchema(
          "Terms of Service",
          "/terms",
          "Gleama terms of service.",
        )}
      />
      <PageHero
        title="Terms of Service"
        description="Terms and conditions for using our website and services."
        compact
      />
      <Container className="py-16">
        <section aria-label="Terms of service content placeholder">
          <p className="text-body-lg text-neutral-600">
            Terms of service content will be developed in upcoming phases.
          </p>
        </section>
      </Container>
    </PageLayout>
  );
}
