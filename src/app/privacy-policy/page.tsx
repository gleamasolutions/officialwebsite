import PageLayout from "@/components/layout/PageLayout";
import LegalDocument from "@/components/legal/LegalDocument";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { PRIVACY_POLICY } from "@/constants/legal-content";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageSchema } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read the privacy policy of Gleama (Pvt) Ltd regarding data collection, usage, and protection.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageSchema(
          "Privacy Policy",
          "/privacy-policy",
          "Gleama (Pvt) Ltd privacy policy.",
        )}
      />
      <PageHero
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information."
        compact
      />
      <LegalDocument
        content={PRIVACY_POLICY}
        ariaLabel="Privacy policy document"
      />
    </PageLayout>
  );
}
