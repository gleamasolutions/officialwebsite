import Image from "next/image";
import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { BOARD_OF_DIRECTORS } from "@/constants/about";
import { cn } from "@/lib/utils";

const LEADERSHIP_IMAGE = "/images/Leadership/Leadership.png";

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
          className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 sm:gap-10"
          role="list"
          aria-label="Board members"
        >
          {BOARD_OF_DIRECTORS.map((director, index) => (
            <SlideUp key={director.name} delay={0.12 * index}>
              <article
                role="listitem"
                className={cn(
                  "group relative flex h-full flex-col items-center rounded-xl border border-neutral-200/60 bg-white p-6 text-center shadow-premium sm:p-8",
                  "premium-card transition-all duration-300 hover:-translate-y-1",
                )}
              >
                <div
                  className="absolute top-0 right-6 left-6 h-px gold-accent-bar opacity-80"
                  aria-hidden="true"
                />

                <div className="relative mt-2 mb-6">
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-full border-4 border-white bg-primary/5 shadow-md ring-2 ring-accent/20",
                      "h-32 w-32 sm:h-40 sm:w-40 lg:h-[13.5rem] lg:w-[13.5rem]",
                      "transition-shadow duration-300 group-hover:shadow-lg group-hover:ring-accent/40",
                    )}
                  >
                    <Image
                      src={LEADERSHIP_IMAGE}
                      alt={`${director.name}, ${director.position}`}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover object-top"
                      sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 216px"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="text-heading-md font-semibold text-primary">
                    {director.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold tracking-wide text-accent uppercase">
                    {director.position}
                  </p>
                  <p className="mt-5 flex-1 text-body-sm leading-relaxed text-neutral-600">
                    {director.biography[0]}
                  </p>
                </div>
              </article>
            </SlideUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
