import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { ABOUT_MISSION, ABOUT_VISION } from "@/constants/about";
import { cn } from "@/lib/utils";

export default function AboutVisionMission() {
  return (
    <section
      id="our-vision"
      className="relative scroll-mt-28 bg-[#F8FAFC] py-20 lg:py-28"
      aria-labelledby="vision-mission-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 section-fade-top-muted"
        aria-hidden="true"
      />
      <SectionBackground tone="muted" />
      <Container className="relative">
        <SectionTitle
          title="Vision & Mission"
          subtitle="Guiding principles that define our commitment to sustainable investment excellence."
          align="center"
          className="mb-14"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {[ABOUT_VISION, ABOUT_MISSION].map((item, index) => (
            <SlideUp key={item.title} delay={0.1 * index}>
              <article
                className={cn(
                  "group relative h-full overflow-hidden rounded-xl border border-neutral-200/60 bg-white p-8 lg:p-10",
                  "premium-card shadow-premium",
                )}
              >
                <div
                  className="absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-accent/80 to-transparent"
                  aria-hidden="true"
                />
                <h3
                  id={index === 0 ? "vision-mission-heading" : undefined}
                  className="text-heading-md font-semibold text-primary"
                >
                  {item.title}
                </h3>
                <p className="mt-4 text-body-md leading-relaxed text-neutral-600">
                  {item.content}
                </p>
              </article>
            </SlideUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
