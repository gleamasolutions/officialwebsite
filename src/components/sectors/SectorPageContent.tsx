import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import PageCta from "@/components/shared/PageCta";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import type { SectorPageData } from "@/constants/sectors-content";
import { cn } from "@/lib/utils";

interface SectorPageContentProps {
  data: SectorPageData;
}

export default function SectorPageContent({ data }: SectorPageContentProps) {
  return (
    <>
      {data.sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={cn(
            "relative py-20 lg:py-28",
            index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]",
          )}
          aria-labelledby={`${section.id}-heading`}
        >
          {index % 2 === 1 && (
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-16 section-fade-top-muted"
              aria-hidden="true"
            />
          )}
          {index % 2 === 0 && index > 0 && (
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-16 section-fade-top-light"
              aria-hidden="true"
            />
          )}
          <SectionBackground tone={index % 2 === 0 ? "light" : "muted"} />
          <Container className="relative">
            <SlideUp>
              <SectionTitle title={section.title} />
            </SlideUp>
            <div className="mt-6 max-w-3xl space-y-4">
              {section.paragraphs.map((paragraph, pIndex) => (
                <SlideUp key={paragraph.slice(0, 48)} delay={0.1 + pIndex * 0.08}>
                  <p className="text-body-md leading-relaxed text-neutral-600">
                    {paragraph}
                  </p>
                </SlideUp>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <PageCta
        headline={data.cta.headline}
        description={data.cta.description}
        primaryLabel={data.cta.primaryLabel}
        primaryHref={data.cta.primaryHref}
        secondaryLabel={data.cta.secondaryLabel}
        secondaryHref={data.cta.secondaryHref}
        ariaLabel={`${data.heroTitle} call to action`}
      />
    </>
  );
}
