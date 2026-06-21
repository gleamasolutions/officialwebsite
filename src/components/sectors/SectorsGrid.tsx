"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { SECTORS_GRID } from "@/constants/sectors-content";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function SectorsGrid() {
  return (
    <section
      className="relative bg-[#F8FAFC] py-20 lg:py-28"
      aria-label="Investment sector cards"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 section-fade-top-muted"
        aria-hidden="true"
      />
      <SectionBackground tone="muted" />
      <Container className="relative">
        <FadeIn>
          <SectionTitle
            title="Our Investment Verticals"
            subtitle="Four strategic sectors forming the foundation of Gleama's diversified portfolio."
            align="center"
            className="mb-14"
          />
        </FadeIn>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          role="list"
          aria-label="Investment sectors"
        >
          {SECTORS_GRID.map((sector) => {
            const Icon = sector.icon;
            return (
              <motion.div key={sector.href} variants={cardVariants} role="listitem">
                <Link
                  href={sector.href}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200/60 bg-white p-8",
                    "premium-card",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
                  )}
                  aria-label={`Read more about ${sector.title}`}
                >
                  <div
                    className="absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-accent/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-secondary/10 group-hover:text-secondary group-hover:ring-secondary/20"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-heading-sm font-semibold text-primary">
                    {sector.title}
                  </h2>
                  <p className="mt-3 flex-1 text-body-sm leading-relaxed text-neutral-600">
                    {sector.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary transition-all group-hover:gap-3">
                    Read More
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
