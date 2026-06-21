import PageLayout from "@/components/layout/PageLayout";
import SectorPageContent from "@/components/sectors/SectorPageContent";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { CSE_CONTENT } from "@/constants/sectors-content";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageWithBreadcrumbSchemas } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: CSE_CONTENT.seo.title,
  description: CSE_CONTENT.seo.description,
  path: "/sectors/cse",
  keywords: CSE_CONTENT.seo.keywords,
});

export default function CsePage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageWithBreadcrumbSchemas(
          CSE_CONTENT.heroTitle,
          "/sectors/cse",
          CSE_CONTENT.seo.description,
          [
            { name: "Home", path: "/" },
            { name: "Sectors", path: "/sectors" },
            { name: CSE_CONTENT.heroTitle, path: "/sectors/cse" },
          ],
        )}
      />
      <PageHero
        title={CSE_CONTENT.heroTitle}
        description={CSE_CONTENT.heroSubtitle}
      />
      <SectorPageContent data={CSE_CONTENT} />
    </PageLayout>
  );
}
