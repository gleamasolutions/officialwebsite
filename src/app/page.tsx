import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
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
      <section
        className="flex min-h-[70vh] items-center bg-primary pt-20 text-white lg:pt-24"
        aria-labelledby="home-hero-title"
      >
        <Container>
          <h1
            id="home-hero-title"
            className="max-w-3xl text-display-lg font-bold tracking-tight"
          >
            {COMPANY.name}
          </h1>
          <p className="mt-4 max-w-2xl text-body-lg text-white/80">
            {COMPANY.tagline}
          </p>
        </Container>
      </section>

      <Container className="py-16">
        <section aria-label="Home page content placeholder">
          <p className="text-body-lg text-neutral-600">
            Welcome to {COMPANY.shortName}. Full page content will be developed
            in upcoming phases.
          </p>
        </section>
      </Container>
    </PageLayout>
  );
}
