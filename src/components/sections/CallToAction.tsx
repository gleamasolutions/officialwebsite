import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import Button from "@/components/shared/Button";
import SectionBackground from "@/components/shared/SectionBackground";

export default function CallToAction() {
  return (
    <section
      className="relative overflow-hidden bg-primary py-20 lg:py-28"
      aria-labelledby="cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent"
        aria-hidden="true"
      />
      <SectionBackground tone="dark" />

      <Container className="relative text-center">
        <SlideUp>
          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 gold-accent-bar" aria-hidden="true" />
            <span className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
              Partner With Us
            </span>
            <span className="h-px w-12 gold-accent-bar" aria-hidden="true" />
          </div>
        </SlideUp>
        <SlideUp delay={0.05}>
          <h2
            id="cta-heading"
            className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-display-sm"
          >
            Let&apos;s Build{" "}
            <span className="text-accent">Sustainable Wealth</span> Together
          </h2>
        </SlideUp>
        <SlideUp delay={0.15}>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-body-lg">
            Partner with Gleama to access institutional-grade investment
            solutions tailored for long-term prosperity.
          </p>
        </SlideUp>
        <SlideUp delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="w-full shadow-lg shadow-secondary/20 sm:w-auto"
            >
              Contact Us
            </Button>
            <Button
              href="/sectors"
              size="lg"
              className="w-full border-2 border-accent/40 bg-transparent text-white hover:border-accent hover:bg-accent/10 sm:w-auto"
            >
              Explore Investments
            </Button>
          </div>
        </SlideUp>
      </Container>
    </section>
  );
}
