import PageLayout from "@/components/layout/PageLayout";
import SustainabilitySections from "@/components/sustainability/SustainabilitySections";
import SeoSchema from "@/components/seo/SeoSchema";
import { SUSTAINABILITY_SEO } from "@/constants/sustainability";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageWithBreadcrumbSchemas } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: SUSTAINABILITY_SEO.title,
  description: SUSTAINABILITY_SEO.description,
  path: "/sustainability",
  keywords: [...SUSTAINABILITY_SEO.keywords],
});

export default function SustainabilityPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageWithBreadcrumbSchemas(
          "Sustainability",
          "/sustainability",
          SUSTAINABILITY_SEO.description,
          [
            { name: "Home", path: "/" },
            { name: "Sustainability", path: "/sustainability" },
          ],
        )}
      />
      <SustainabilitySections />
    </PageLayout>
  );
}
