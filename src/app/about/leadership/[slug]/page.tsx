import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/PageLayout";
import DirectorProfilePage from "@/components/about/DirectorProfilePage";
import SeoSchema from "@/components/seo/SeoSchema";
import {
  DIRECTORS,
  getDirectorBySlug,
  getDirectorProfilePath,
} from "@/constants/directors";
import { createPageMetadata } from "@/lib/metadata";
import { createWebPageWithBreadcrumbSchemas } from "@/lib/json-ld";

interface DirectorPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return DIRECTORS.map((director) => ({ slug: director.slug }));
}

export async function generateMetadata({ params }: DirectorPageProps) {
  const { slug } = await params;
  const director = getDirectorBySlug(slug);

  if (!director) {
    return createPageMetadata({
      title: "Leadership Profile",
      description: "Gleama (Pvt) Ltd leadership profile.",
      path: "/about",
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `${director.name} — ${director.position}`,
    description: director.shortDescription,
    path: getDirectorProfilePath(director.slug),
    keywords: ["Gleama leadership", director.name, director.position],
  });
}

export default async function DirectorProfileRoute({ params }: DirectorPageProps) {
  const { slug } = await params;
  const director = getDirectorBySlug(slug);

  if (!director) {
    notFound();
  }

  const profilePath = getDirectorProfilePath(director.slug);

  return (
    <PageLayout>
      <SeoSchema
        schema={createWebPageWithBreadcrumbSchemas(
          `${director.name} — ${director.position}`,
          profilePath,
          director.shortDescription,
          [
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: director.name, path: profilePath },
          ],
        )}
      />
      <DirectorProfilePage director={director} />
    </PageLayout>
  );
}
