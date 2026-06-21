import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { CORPORATE_INFO } from "@/constants/about";

export default function AboutCorporateInfo() {
  return (
    <section
      className="relative bg-[#F8FAFC] py-20 lg:py-28"
      aria-labelledby="corporate-info-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 section-fade-top-muted"
        aria-hidden="true"
      />
      <SectionBackground tone="muted" />
      <Container className="relative">
        <SectionTitle
          title="Corporate Information"
          subtitle="Key details about Gleama's corporate identity and strategic focus."
          align="center"
          className="mb-14"
        />

        <SlideUp>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-neutral-200/60 bg-white shadow-premium">
            <dl className="divide-y divide-neutral-100">
              {CORPORATE_INFO.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-2 px-6 py-5 sm:grid-cols-[200px_1fr] sm:gap-8 sm:px-8"
                >
                  <dt
                    id={item.label === "Company Name" ? "corporate-info-heading" : undefined}
                    className="text-sm font-semibold uppercase tracking-wider text-primary"
                  >
                    {item.label}
                  </dt>
                  <dd className="text-body-md leading-relaxed text-neutral-600">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </SlideUp>
      </Container>
    </section>
  );
}
