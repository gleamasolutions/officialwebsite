import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageSchema } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "Cookie Policy",
  description:
    "Understand how Gleama (Pvt) Ltd uses cookies and similar technologies on this website.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageSchema(
          "Cookie Policy",
          "/cookie-policy",
          "Gleama cookie policy.",
        )}
      />
      <PageHero
        title="Cookie Policy"
        description="Information about cookies and tracking technologies we use."
        compact
      />
      <Container className="py-16">
        <section aria-label="Cookie policy content placeholder">
          <p className="text-body-lg text-neutral-600">
            Cookie policy content will be developed in upcoming phases.
          </p>
        </section>
      </Container>
    </PageLayout>
  );
}
