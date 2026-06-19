import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import Button from "@/components/shared/Button";
import PageHero from "@/components/shared/PageHero";

export default function NotFound() {
  return (
    <PageLayout>
      <PageHero
        title="Page Not Found"
        description="The page you are looking for does not exist or has been moved."
        compact
      />
      <Container className="py-16">
        <section aria-labelledby="not-found-heading">
          <h2 id="not-found-heading" className="sr-only">
            Error 404
          </h2>
          <p className="text-body-lg text-neutral-600">
            Please check the URL or return to the homepage.
          </p>
          <div className="mt-8">
            <Button href="/">Back to Home</Button>
          </div>
        </section>
      </Container>
    </PageLayout>
  );
}
