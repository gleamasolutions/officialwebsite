import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import DirectorProfileCard from "@/components/about/DirectorProfileCard";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { DIRECTORS } from "@/constants/directors";

export default function AboutBoardOfDirectors() {
  return (
    <section
      id="board-of-directors"
      className="relative scroll-mt-28 bg-white py-20 lg:py-28"
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
          {DIRECTORS.map((director, index) => (
            <SlideUp key={director.id} delay={0.12 * index}>
              <div role="listitem" className="h-full">
                <DirectorProfileCard director={director} />
              </div>
            </SlideUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
