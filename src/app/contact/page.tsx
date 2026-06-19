import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageSchema } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Gleama (Pvt) Ltd for investment inquiries and corporate information.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageSchema(
          "Contact",
          "/contact",
          "Contact Gleama (Pvt) Ltd.",
        )}
      />
      <PageHero
        title="Contact Us"
        description="Reach out to our team for inquiries and partnership opportunities."
      />
      <Container className="py-16">
        <section aria-label="Contact page content placeholder">
          <p className="text-body-lg text-neutral-600">
            Contact form and details will be developed in upcoming phases.
          </p>
        </section>
      </Container>
    </PageLayout>
  );
}
