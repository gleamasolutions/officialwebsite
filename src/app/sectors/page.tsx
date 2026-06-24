import PageLayout from "@/components/layout/PageLayout";
import SectorsGrid from "@/components/sectors/SectorsGrid";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { SECTORS_HERO, SECTORS_SEO } from "@/constants/sectors-content";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageWithBreadcrumbSchemas } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: SECTORS_SEO.title,
  description: SECTORS_SEO.description,
  path: "/sectors",
  keywords: [...SECTORS_SEO.keywords],
});

export default function SectorsPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageWithBreadcrumbSchemas(
          "Investment Sectors",
          "/sectors",
          SECTORS_SEO.description,
          [
            { name: "Home", path: "/" },
            { name: "Investments", path: "/sectors" },
          ],
        )}
      />
      <PageHero
        title={SECTORS_HERO.title}
        description={SECTORS_HERO.subtitle}
      />
      <SectorsGrid />
    </PageLayout>
  );
}
