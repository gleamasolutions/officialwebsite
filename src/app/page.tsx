import PageLayout from "@/components/layout/PageLayout";
import HomeSections from "@/components/sections/HomeSections";
import SeoSchema from "@/components/seo/SeoSchema";
import { COMPANY } from "@/constants/site";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageSchema } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "Home",
  description: COMPANY.description,
  path: "/",
});

export default function HomePage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageSchema("Home", "/", COMPANY.description)}
      />
      <HomeSections />
    </PageLayout>
  );
}
