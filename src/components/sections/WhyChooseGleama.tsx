"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { WHY_CHOOSE_FEATURES } from "@/constants/home";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

export default function WhyChooseGleama() {
  return (
    <section
      className="relative bg-white py-20 lg:py-28"
      aria-label="Why choose Gleama"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 section-fade-top-light"
        aria-hidden="true"
      />
      <SectionBackground tone="light" />

      <Container className="relative">
        <FadeIn>
          <SectionTitle
            title="Why Choose Gleama"
            subtitle="Business excellence, innovation and strategic growth combined with a commitment to sustainable, long-term value creation."
            align="center"
            className="mb-14"
          />
        </FadeIn>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          role="list"
          aria-label="Why choose Gleama features"
        >
          {WHY_CHOOSE_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                role="listitem"
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-neutral-100/80 bg-white p-6 lg:p-8",
                  "premium-card",
                )}
              >
                <div
                  className="absolute top-0 right-4 left-4 h-px gold-accent-bar opacity-0 transition-opacity duration-300 group-hover:opacity-60"
                  aria-hidden="true"
                />
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20 transition-all duration-300 group-hover:bg-accent/15 group-hover:ring-accent/30"
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
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
