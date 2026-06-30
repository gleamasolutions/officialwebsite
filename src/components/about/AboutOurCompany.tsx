import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { ABOUT_COMPANY } from "@/constants/about";

export default function AboutOurCompany() {
  return (
    <section
      id="overview"
      className="relative scroll-mt-28 bg-white py-20 lg:py-28"
      aria-labelledby="our-company-heading"
    >
      <SectionBackground tone="light" />
      <Container className="relative">
        <SectionTitle title={ABOUT_COMPANY.title} />
        <SlideUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-body-lg leading-relaxed text-neutral-600">
            {ABOUT_COMPANY.content}
          </p>
        </SlideUp>
        <SlideUp delay={0.25}>
          <p className="mt-4 max-w-3xl text-body-md leading-relaxed text-neutral-600">
            {ABOUT_COMPANY.extended}
          </p>
        </SlideUp>
      </Container>
    </section>
  );
}
