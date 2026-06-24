import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import SectionBackground from "@/components/shared/SectionBackground";
import { SUSTAINABILITY_VISION } from "@/constants/sustainability";

export default function SustainabilityVision() {
  return (
    <section
      className="relative overflow-hidden bg-primary py-24 text-white lg:py-32"
      aria-labelledby="vision-heading"
    >
      <SectionBackground tone="dark" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px gold-accent-bar opacity-60"
        aria-hidden="true"
      />

      <Container className="relative text-center">
        <SlideUp>
          <p className="text-sm font-semibold tracking-[0.25em] text-accent uppercase">
            {SUSTAINABILITY_VISION.title}
          </p>
        </SlideUp>
        <SlideUp delay={0.15}>
          <h2
            id="vision-heading"
            className="mx-auto mt-8 max-w-4xl text-2xl font-bold leading-[1.2] tracking-tight sm:text-3xl lg:text-4xl xl:text-display-sm"
          >
            &ldquo;{SUSTAINABILITY_VISION.statement}&rdquo;
          </h2>
        </SlideUp>
        <SlideUp delay={0.3}>
          <p className="mx-auto mt-8 max-w-2xl text-body-lg leading-relaxed text-white/70">
            {SUSTAINABILITY_VISION.supporting}
          </p>
        </SlideUp>
        <SlideUp delay={0.45}>
          <div
            className="mx-auto mt-10 h-1 w-24 rounded-full bg-gradient-to-r from-secondary via-accent to-secondary"
            aria-hidden="true"
          />
        </SlideUp>
      </Container>
    </section>
  );
}
