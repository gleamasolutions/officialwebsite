import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { COMPANY_STATS } from "@/constants/home";
import { COMPANY } from "@/constants/site";
import { cn } from "@/lib/utils";

export default function CompanyOverview() {
  return (
    <section
      className="relative bg-white py-20 lg:py-28"
      aria-label="About Gleama"
    >
      <SectionBackground tone="light" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionTitle
              title="About Gleama"
              subtitle={`${COMPANY.name} is a diversified company focused on strategic business ventures, sustainable growth, innovation and long-term value creation across Sri Lanka's most promising sectors.`}
            />
            <SlideUp delay={0.2}>
              <p className="mt-6 text-body-md leading-relaxed text-neutral-600">
                With a disciplined approach to capital allocation and deep market
                expertise, we partner with investors and enterprises to build
                resilient portfolios that withstand market cycles and deliver
                enduring returns.
              </p>
            </SlideUp>
          </div>

          <div
            className="grid grid-cols-[repeat(2,minmax(8.75rem,1fr))] items-stretch gap-4 sm:grid-cols-[repeat(2,minmax(9.75rem,1fr))] sm:gap-6"
            role="list"
            aria-label="Company highlights"
          >
            {COMPANY_STATS.map((stat, index) => (
              <SlideUp key={stat.label} delay={0.1 * index} className="h-full">
                <div
                  className={cn(
                    "group relative flex h-full min-h-[7.25rem] flex-col justify-center overflow-hidden rounded-xl border border-neutral-100/80 bg-white p-6",
                    "premium-card",
                  )}
                  role="listitem"
                >
                  <div
                    className="absolute top-0 right-4 left-4 h-px gold-accent-bar opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <p className="whitespace-nowrap text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-secondary sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-600">
                    {stat.label}
                  </p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
