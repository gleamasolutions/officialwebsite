import Image from "next/image";
import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { BOARD_OF_DIRECTORS } from "@/constants/about";
import { cn } from "@/lib/utils";

export default function AboutBoardOfDirectors() {
  return (
    <section
      className="relative bg-white py-20 lg:py-28"
      aria-label="Board of directors"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 section-fade-top-light"
        aria-hidden="true"
      />
      <SectionBackground tone="light" />
      <Container className="relative">
        <SectionTitle
          title="Board of Directors"
          subtitle="Experienced leadership guiding Gleama's strategic vision and corporate governance."
          align="center"
          className="mb-14"
        />

        <div
          className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-12"
          role="list"
          aria-label="Board members"
        >
          {BOARD_OF_DIRECTORS.map((director, index) => (
            <SlideUp key={director.name} delay={0.12 * index}>
              <article
                role="listitem"
                className={cn(
                  "group overflow-hidden rounded-xl border border-neutral-200/60 bg-white",
                  "premium-card shadow-premium",
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-primary/5 sm:aspect-[2/1]">
                  <Image
                    src={`https://placehold.co/800x400/000080/D4AF37?text=${encodeURIComponent(director.imagePlaceholder)}`}
                    alt={`${director.name}, ${director.position}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-accent to-transparent"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-heading-md font-semibold text-primary">
                    {director.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium tracking-wide text-accent uppercase">
                    {director.position}
                  </p>
                  <div className="mt-5 space-y-4">
                    {director.biography.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 40)}
                        className="text-body-sm leading-relaxed text-neutral-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            </SlideUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
