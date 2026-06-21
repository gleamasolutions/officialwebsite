import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import Button from "@/components/shared/Button";
import SectionBackground from "@/components/shared/SectionBackground";

interface PageCtaProps {
  headline: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  ariaLabel?: string;
}

export default function PageCta({
  headline,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  ariaLabel = "Call to action",
}: PageCtaProps) {
  return (
    <section
      className="relative overflow-hidden bg-primary py-20 lg:py-28"
      aria-label={ariaLabel}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#F8FAFC] to-transparent"
        aria-hidden="true"
      />
      <SectionBackground tone="dark" />

      <Container className="relative text-center">
        <SlideUp>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-display-sm">
            {headline}
          </h2>
        </SlideUp>
        <SlideUp delay={0.15}>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-body-lg">
            {description}
          </p>
        </SlideUp>
        <SlideUp delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={primaryHref}
              variant="secondary"
              size="lg"
              className="w-full shadow-lg shadow-secondary/20 sm:w-auto"
            >
              {primaryLabel}
            </Button>
            <Button
              href={secondaryHref}
              size="lg"
              className="w-full border-2 border-accent/40 bg-transparent text-white hover:border-accent hover:bg-accent/10 sm:w-auto"
            >
              {secondaryLabel}
            </Button>
          </div>
        </SlideUp>
      </Container>
    </section>
  );
}
