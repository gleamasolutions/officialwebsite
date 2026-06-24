"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { SUSTAINABILITY_INNOVATION } from "@/constants/sustainability";
import { cn } from "@/lib/utils";

export default function SustainabilityInnovation() {
  return (
    <section
      className="relative bg-[#F8FAFC] py-20 lg:py-28"
      aria-label="Innovation and sustainability"
    >
      <SectionBackground tone="muted" />
      <Container className="relative">
        <SectionTitle
          title="Innovation & Sustainability"
          subtitle="Advancing responsible growth with global standards, business resilience and long-term vision."
          align="center"
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SUSTAINABILITY_INNOVATION.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <SlideUp key={feature.title} delay={0.08 * index}>
                <motion.article
                  className={cn(
                    "group h-full rounded-xl border border-neutral-200/60 bg-white p-6 lg:p-8",
                    "premium-card transition-transform duration-300 hover:-translate-y-1",
                  )}
                >
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#0000B3] text-white shadow-md"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-heading-sm font-semibold text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-body-sm leading-relaxed text-neutral-600">
                    {feature.description}
                  </p>
                </motion.article>
              </SlideUp>
            );
          })}
        </div>

        <SlideUp delay={0.4}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-body-md text-neutral-500">
            We uphold global standards of governance, transparency and operational
            excellence — ensuring every venture contributes to a resilient and
            sustainable business future.
          </p>
        </SlideUp>
      </Container>
    </section>
  );
}
