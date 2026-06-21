import PageLayout from "@/components/layout/PageLayout";
import AboutBoardOfDirectors from "@/components/about/AboutBoardOfDirectors";
import AboutCoreValues from "@/components/about/AboutCoreValues";
import AboutCorporateInfo from "@/components/about/AboutCorporateInfo";
import AboutOurCompany from "@/components/about/AboutOurCompany";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import SeoSchema from "@/components/seo/SeoSchema";
import PageHero from "@/components/shared/PageHero";
import { ABOUT_HERO, ABOUT_SEO } from "@/constants/about";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageWithBreadcrumbSchemas } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: ABOUT_SEO.title,
  description: ABOUT_SEO.description,
  path: "/about",
  keywords: [...ABOUT_SEO.keywords],
});

export default function AboutPage() {
  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageWithBreadcrumbSchemas(
          "About Gleama",
          "/about",
          ABOUT_SEO.description,
          [
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ],
        )}
      />
      <PageHero
        title={ABOUT_HERO.title}
        description={ABOUT_HERO.subtitle}
      />
      <AboutOurCompany />
      <AboutVisionMission />
      <AboutCoreValues />
      <AboutCorporateInfo />
      <AboutBoardOfDirectors />
    </PageLayout>
  );
}
