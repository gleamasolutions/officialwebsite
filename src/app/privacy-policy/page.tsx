import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageSchema } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read the privacy policy of Gleama (Pvt) Ltd regarding data collection and usage.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageSchema(
          "Privacy Policy",
          "/privacy-policy",
          "Gleama privacy policy.",
        )}
      />
      <PageHero
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information."
        compact
      />
      <Container className="py-16">
        <section aria-label="Privacy policy content placeholder">
          <p className="text-body-lg text-neutral-600">
            Privacy policy content will be developed in upcoming phases.
          </p>
        </section>
      </Container>
    </PageLayout>
  );
}
