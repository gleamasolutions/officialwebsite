import PageLayout from "@/components/layout/PageLayout";
import LegalDocument from "@/components/legal/LegalDocument";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { TERMS_OF_SERVICE } from "@/constants/legal-content";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageSchema } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "Terms & Conditions",
  description:
    "Review the terms and conditions governing the use of Gleama (Pvt) Ltd website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageSchema(
          "Terms & Conditions",
          "/terms",
          "Gleama (Pvt) Ltd terms and conditions.",
        )}
      />
      <PageHero
        title="Terms & Conditions"
        description="Terms and conditions for using our website and services."
        compact
      />
      <LegalDocument
        content={TERMS_OF_SERVICE}
        ariaLabel="Terms and conditions document"
      />
    </PageLayout>
  );
}
