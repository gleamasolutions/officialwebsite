"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/shared/Button";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { LEADERSHIP } from "@/constants/home";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export default function LeadershipPreview() {
  return (
    <section
      className="relative bg-[#F8FAFC] py-20 lg:py-28"
      aria-label="Leadership team"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 section-fade-top-muted"
        aria-hidden="true"
      />
      <SectionBackground tone="muted" />

      <Container className="relative">
        <FadeIn>
          <SectionTitle
            title="Leadership"
            subtitle="Experienced leaders guiding Gleama's vision for sustainable investment excellence."
            align="center"
            className="mb-14"
          />
        </FadeIn>

        <motion.div
          className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          role="list"
          aria-label="Leadership team"
        >
          {LEADERSHIP.map((leader) => (
            <motion.article
              key={leader.name}
              variants={cardVariants}
              role="listitem"
              className={cn(
                "group overflow-hidden rounded-xl border border-neutral-200/60 bg-white",
                "premium-card",
              )}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                <Image
                  src={`https://placehold.co/600x450/000080/ffffff?text=${encodeURIComponent(leader.name.split(" ").pop() ?? "Leader")}`}
                  alt={`${leader.name}, ${leader.position}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent"
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-80"
                  aria-hidden="true"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-heading-sm font-semibold text-primary">
                  {leader.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {leader.position}
                </p>
                <p className="mt-3 text-body-sm leading-relaxed text-neutral-600">
                  {leader.preview}
                </p>
                <Link
                  href="/about"
                  className="mt-5 inline-block text-sm font-medium text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                  aria-label={`View profile of ${leader.name}`}
                >
                  View Profile
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <FadeIn className="mt-12 text-center">
          <Button href="/about" variant="outline">
            Meet Our Team
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
