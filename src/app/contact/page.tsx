import PageLayout from "@/components/layout/PageLayout";
import ContactSections from "@/components/contact/ContactSections";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { createContactPageSchemas } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Gleama (Pvt) Ltd to discuss investment opportunities, partnerships and business inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageLayout>
      <SeoSchema schema={createContactPageSchemas()} />
      <PageHero
        title="Contact Gleama"
        description="Let's discuss investment opportunities, partnerships and business inquiries."
      />
      <ContactSections />
    </PageLayout>
  );
}
