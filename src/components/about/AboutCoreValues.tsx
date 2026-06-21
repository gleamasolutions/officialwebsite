import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { CORE_VALUES } from "@/constants/about";
import { cn } from "@/lib/utils";

export default function AboutCoreValues() {
  return (
    <section
      className="relative bg-white py-20 lg:py-28"
      aria-label="Core values"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 section-fade-top-light"
        aria-hidden="true"
      />
      <SectionBackground tone="light" />
      <Container className="relative">
        <SectionTitle
          title="Core Values"
          subtitle="The principles that guide every decision we make and every relationship we build."
          align="center"
          className="mb-14"
        />

        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Gleama core values"
        >
          {CORE_VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <SlideUp key={value.title} delay={0.08 * index}>
                <article
                  role="listitem"
                  className={cn(
                    "group h-full rounded-xl border border-neutral-100/80 bg-white p-6 lg:p-8",
                    "premium-card",
                  )}
                >
                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-heading-sm font-semibold text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-body-sm leading-relaxed text-neutral-600">
                    {value.description}
                  </p>
                </article>
              </SlideUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
