"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { SUSTAINABILITY_ECOSYSTEM } from "@/constants/sustainability";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

export default function SustainabilityEcosystem() {
  return (
    <section
      className="relative bg-[#F8FAFC] py-20 lg:py-28"
      aria-labelledby="ecosystem-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 section-fade-top-muted"
        aria-hidden="true"
      />
      <SectionBackground tone="muted" />
      <Container className="relative">
        <SectionTitle
          id="ecosystem-heading"
          title="Diversified Business Ecosystem"
          subtitle="A multi-sector platform spanning investments, brands, services and emerging ventures."
          align="center"
          className="mb-14"
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SUSTAINABILITY_ECOSYSTEM.map((card) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                variants={cardVariants}
                className={cn(
                  "group flex h-full flex-col rounded-xl border border-neutral-200/60 bg-white p-6",
                  "premium-card transition-transform duration-300 hover:-translate-y-1",
                )}
              >
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary ring-1 ring-primary/10 transition-colors group-hover:bg-accent/10 group-hover:text-accent group-hover:ring-accent/20"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-heading-sm font-semibold text-primary">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-body-sm leading-relaxed text-neutral-600">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
