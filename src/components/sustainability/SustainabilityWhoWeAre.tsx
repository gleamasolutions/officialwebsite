import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { SUSTAINABILITY_WHO_WE_ARE } from "@/constants/sustainability";

export default function SustainabilityWhoWeAre() {
  return (
    <section
      className="relative bg-white py-20 lg:py-28"
      aria-labelledby="who-we-are-heading"
    >
      <SectionBackground tone="light" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle
              title={SUSTAINABILITY_WHO_WE_ARE.title}
              className="mb-8"
            />
            {SUSTAINABILITY_WHO_WE_ARE.paragraphs.map((paragraph, index) => (
              <SlideUp key={paragraph} delay={0.1 + index * 0.1}>
                <p className="mt-4 text-body-md leading-relaxed text-neutral-600 first:mt-0 lg:text-body-lg">
                  {paragraph}
                </p>
              </SlideUp>
            ))}
          </div>

          <SlideUp delay={0.3}>
            <div
              className="relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-primary via-primary to-[#000050] p-8 shadow-premium lg:p-10"
              aria-hidden="true"
            >
              <div className="absolute inset-x-0 top-0 h-1 gold-accent-bar opacity-80" />
              <p className="text-sm font-semibold tracking-[0.15em] text-accent uppercase">
                Our Focus
              </p>
              <ul className="mt-8 space-y-5">
                {SUSTAINABILITY_WHO_WE_ARE.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span className="text-lg font-medium text-white">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm leading-relaxed text-white/60">
                Building a diversified ecosystem for sustainable corporate growth
                across Sri Lanka and beyond.
              </p>
            </div>
          </SlideUp>
        </div>
      </Container>
    </section>
  );
}
