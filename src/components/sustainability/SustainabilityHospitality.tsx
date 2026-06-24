import { Building2 } from "lucide-react";
import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { SUSTAINABILITY_HOSPITALITY } from "@/constants/sustainability";

export default function SustainabilityHospitality() {
  return (
    <section
      className="relative bg-white py-20 lg:py-28"
      aria-label="Hospitality and management services"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 section-fade-top-light"
        aria-hidden="true"
      />
      <SectionBackground tone="light" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SlideUp>
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-primary/90 to-[#000050] shadow-premium"
              aria-hidden="true"
            >
              <div className="absolute inset-x-0 top-0 h-1 gold-accent-bar opacity-80" />
              <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-accent ring-1 ring-accent/30">
                  <Building2 className="h-8 w-8" />
                </div>
                <p className="mt-6 text-2xl font-bold text-white">
                  Hospitality Excellence
                </p>
                <p className="mt-2 max-w-xs text-sm text-white/60">
                  Professional management services for hotels, resorts and tourism
                  ventures across Sri Lanka.
                </p>
              </div>
            </div>
          </SlideUp>

          <div>
            <SectionTitle
              title={SUSTAINABILITY_HOSPITALITY.title}
              subtitle={SUSTAINABILITY_HOSPITALITY.subtitle}
              className="mb-6"
            />
            {SUSTAINABILITY_HOSPITALITY.paragraphs.map((paragraph, index) => (
              <SlideUp key={paragraph} delay={0.1 + index * 0.1}>
                <p className="mt-4 text-body-md leading-relaxed text-neutral-600">
                  {paragraph}
                </p>
              </SlideUp>
            ))}
            <SlideUp delay={0.4}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {SUSTAINABILITY_HOSPITALITY.pillars.map((pillar) => (
                  <li
                    key={pillar}
                    className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-4 py-3 text-sm font-medium text-primary"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    {pillar}
                  </li>
                ))}
              </ul>
            </SlideUp>
          </div>
        </div>
      </Container>
    </section>
  );
}
