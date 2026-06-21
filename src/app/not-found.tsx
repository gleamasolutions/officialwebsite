import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import Button from "@/components/shared/Button";
import PageHero from "@/components/shared/PageHero";

function NotFoundIllustration() {
  return (
    <svg
      viewBox="0 0 480 280"
      className="mx-auto h-auto w-full max-w-md"
      role="img"
      aria-label="404 page not found illustration"
    >
      <rect x="0" y="0" width="480" height="280" rx="24" fill="#F8FAFC" />
      <rect x="32" y="32" width="416" height="216" rx="16" fill="#ffffff" stroke="#E5E7EB" />
      <rect x="56" y="56" width="120" height="12" rx="6" fill="#000080" opacity="0.15" />
      <rect x="56" y="82" width="200" height="8" rx="4" fill="#000080" opacity="0.08" />
      <rect x="56" y="98" width="160" height="8" rx="4" fill="#000080" opacity="0.08" />
      <circle cx="360" cy="140" r="56" fill="#000080" opacity="0.06" />
      <text
        x="360"
        y="154"
        textAnchor="middle"
        fontSize="42"
        fontWeight="700"
        fill="#000080"
      >
        404
      </text>
      <rect x="56" y="180" width="96" height="28" rx="8" fill="#D4AF37" opacity="0.25" />
      <rect x="168" y="180" width="120" height="28" rx="8" fill="#50C878" opacity="0.2" />
      <path
        d="M56 230 H424"
        stroke="#D4AF37"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export default function NotFound() {
  return (
    <PageLayout>
      <PageHero
        title="Page Not Found"
        description="The page you are looking for does not exist or may have been moved."
        compact
      />
      <Container className="py-16 lg:py-20">
        <section
          className="mx-auto max-w-3xl text-center"
          aria-labelledby="not-found-heading"
        >
          <NotFoundIllustration />
          <h2
            id="not-found-heading"
            className="mt-10 text-heading-lg font-semibold text-primary"
          >
            We couldn&apos;t find that page
          </h2>
          <p className="mt-4 text-body-lg text-neutral-600">
            The link may be outdated or the page may have been relocated. Return
            to the homepage or contact our team for assistance.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/">Back To Home</Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </section>
      </Container>
    </PageLayout>
  );
}
