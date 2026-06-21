import PageLayout from "@/components/layout/PageLayout";
import SectorPageContent from "@/components/sectors/SectorPageContent";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { UNIT_TRUST_CONTENT } from "@/constants/sectors-content";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageWithBreadcrumbSchemas } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: UNIT_TRUST_CONTENT.seo.title,
  description: UNIT_TRUST_CONTENT.seo.description,
  path: "/sectors/unit-trust",
  keywords: UNIT_TRUST_CONTENT.seo.keywords,
});

export default function UnitTrustPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageWithBreadcrumbSchemas(
          UNIT_TRUST_CONTENT.heroTitle,
          "/sectors/unit-trust",
          UNIT_TRUST_CONTENT.seo.description,
          [
            { name: "Home", path: "/" },
            { name: "Sectors", path: "/sectors" },
            { name: UNIT_TRUST_CONTENT.heroTitle, path: "/sectors/unit-trust" },
          ],
        )}
      />
      <PageHero
        title={UNIT_TRUST_CONTENT.heroTitle}
        description={UNIT_TRUST_CONTENT.heroSubtitle}
      />
      <SectorPageContent data={UNIT_TRUST_CONTENT} />
    </PageLayout>
  );
}
