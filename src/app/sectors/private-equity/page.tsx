import PageLayout from "@/components/layout/PageLayout";
import SectorPageContent from "@/components/sectors/SectorPageContent";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { PRIVATE_EQUITY_CONTENT } from "@/constants/sectors-content";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageWithBreadcrumbSchemas } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: PRIVATE_EQUITY_CONTENT.seo.title,
  description: PRIVATE_EQUITY_CONTENT.seo.description,
  path: "/sectors/private-equity",
  keywords: PRIVATE_EQUITY_CONTENT.seo.keywords,
});

export default function PrivateEquityPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageWithBreadcrumbSchemas(
          PRIVATE_EQUITY_CONTENT.heroTitle,
          "/sectors/private-equity",
          PRIVATE_EQUITY_CONTENT.seo.description,
          [
            { name: "Home", path: "/" },
            { name: "Sectors", path: "/sectors" },
            {
              name: PRIVATE_EQUITY_CONTENT.heroTitle,
              path: "/sectors/private-equity",
            },
          ],
        )}
      />
      <PageHero
        title={PRIVATE_EQUITY_CONTENT.heroTitle}
        description={PRIVATE_EQUITY_CONTENT.heroSubtitle}
      />
      <SectorPageContent data={PRIVATE_EQUITY_CONTENT} />
    </PageLayout>
  );
}
