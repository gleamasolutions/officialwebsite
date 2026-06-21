import PageLayout from "@/components/layout/PageLayout";
import SectorPageContent from "@/components/sectors/SectorPageContent";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { GOLD_CONTENT } from "@/constants/sectors-content";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageWithBreadcrumbSchemas } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: GOLD_CONTENT.seo.title,
  description: GOLD_CONTENT.seo.description,
  path: "/sectors/gold",
  keywords: GOLD_CONTENT.seo.keywords,
});

export default function GoldPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageWithBreadcrumbSchemas(
          GOLD_CONTENT.heroTitle,
          "/sectors/gold",
          GOLD_CONTENT.seo.description,
          [
            { name: "Home", path: "/" },
            { name: "Sectors", path: "/sectors" },
            { name: GOLD_CONTENT.heroTitle, path: "/sectors/gold" },
          ],
        )}
      />
      <PageHero
        title={GOLD_CONTENT.heroTitle}
        description={GOLD_CONTENT.heroSubtitle}
      />
      <SectorPageContent data={GOLD_CONTENT} />
    </PageLayout>
  );
}
