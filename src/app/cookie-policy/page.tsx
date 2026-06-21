import PageLayout from "@/components/layout/PageLayout";
import LegalDocument from "@/components/legal/LegalDocument";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { COOKIE_POLICY } from "@/constants/legal-content";
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
          "Gleama (Pvt) Ltd cookie policy.",
        )}
      />
      <PageHero
        title="Cookie Policy"
        description="Information about cookies and tracking technologies we use."
        compact
      />
      <LegalDocument content={COOKIE_POLICY} ariaLabel="Cookie policy document" />
    </PageLayout>
  );
}
