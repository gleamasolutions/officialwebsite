"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { SUSTAINABILITY_APPROACH } from "@/constants/sustainability";

export default function SustainabilityInvestmentApproach() {
  return (
    <section
      className="relative bg-white py-20 lg:py-28"
      aria-label="Investment approach"
    >
      <SectionBackground tone="light" />
      <Container className="relative">
        <SectionTitle
          title="Investment Approach"
          subtitle="A disciplined framework spanning public shares, unit trusts, debentures and private investments."
          align="center"
          className="mb-14"
        />

        <div className="relative">
          <div
            className="absolute top-8 right-0 left-0 hidden h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SUSTAINABILITY_APPROACH.map((step, index) => {
              const Icon = step.icon;
              return (
                <SlideUp key={step.title} delay={0.1 * index}>
                  <motion.article
                    className="relative rounded-xl border border-neutral-200/60 bg-white p-6 shadow-premium transition-transform duration-300 hover:-translate-y-1 lg:p-8"
                    whileHover={{ boxShadow: "0 20px 40px -12px rgba(0,0,128,0.12)" }}
                  >
                    <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
                      Step {step.step}
                    </span>
                    <div
                      className="mt-4 mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-heading-sm font-semibold text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-body-sm leading-relaxed text-neutral-600">
                      {step.description}
                    </p>
                  </motion.article>
                </SlideUp>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
