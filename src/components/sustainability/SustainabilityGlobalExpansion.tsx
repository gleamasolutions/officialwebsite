"use client";

import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { SUSTAINABILITY_EXPANSION } from "@/constants/sustainability";
import { cn } from "@/lib/utils";

export default function SustainabilityGlobalExpansion() {
  return (
    <section
      className="relative overflow-hidden bg-primary py-20 text-white lg:py-28"
      aria-label="Global expansion vision"
    >
      <SectionBackground tone="dark" />
      <Container className="relative">
        <SectionTitle
          title="Global Expansion Vision"
          subtitle="Pursuing international growth through strategic market entry, brand development and export excellence."
          align="center"
          className="mb-14 [&_h2]:text-white [&_p]:text-white/75"
        />

        <div className="mb-12 flex justify-center" aria-hidden="true">
          <motion.div
            className="relative flex h-32 w-32 items-center justify-center rounded-full border border-accent/30 bg-white/5"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Globe2 className="h-14 w-14 text-accent" />
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute inset-0 rounded-full border border-secondary/20"
                animate={{ scale: [1, 1.4 + i * 0.2], opacity: [0.5, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SUSTAINABILITY_EXPANSION.map((card, index) => (
            <SlideUp key={card.title} delay={0.1 * index}>
              <motion.article
                className={cn(
                  "group h-full rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm",
                  "transition-all duration-300 hover:border-accent/40 hover:bg-white/10",
                )}
                whileHover={{ y: -4 }}
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-secondary uppercase">
                  {card.region}
                </p>
                <h3 className="mt-3 text-heading-sm font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-body-sm leading-relaxed text-white/70">
                  {card.description}
                </p>
              </motion.article>
            </SlideUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
