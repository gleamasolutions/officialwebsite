"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import Button from "@/components/shared/Button";
import SectionBackground from "@/components/shared/SectionBackground";
import { SUSTAINABILITY_HERO } from "@/constants/sustainability";

function GrowthVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_60px_rgba(212,175,55,0.08)] backdrop-blur-md" />
      <div className="absolute -top-px right-8 left-8 h-px gold-accent-bar opacity-60" />

      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-secondary/20 bg-secondary/5"
          style={{
            width: `${120 + i * 60}px`,
            height: `${120 + i * 60}px`,
            left: "50%",
            top: "50%",
            marginLeft: `${-(60 + i * 30)}px`,
            marginTop: `${-(60 + i * 30)}px`,
          }}
          animate={{ scale: [1, 1.04, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="text-center">
          <motion.p
            className="text-4xl font-bold text-accent lg:text-5xl"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Growth
          </motion.p>
          <p className="mt-2 text-sm tracking-[0.2em] text-white/50 uppercase">
            Diversified · Sustainable · Global
          </p>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-6 bottom-6 rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 backdrop-blur-md"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <p className="text-[10px] tracking-wider text-white/50 uppercase">
          Long-Term Value
        </p>
        <p className="text-lg font-semibold text-secondary">Sustainable</p>
      </motion.div>
    </div>
  );
}

export default function SustainabilityHero() {
  return (
    <section
      className="relative overflow-hidden bg-primary pt-28 pb-16 text-white lg:pt-36 lg:pb-20"
      aria-labelledby="sustainability-hero-heading"
    >
      <SectionBackground tone="dark" />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SlideUp delay={0.1}>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 gold-accent-bar" aria-hidden="true" />
                <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
                  {SUSTAINABILITY_HERO.eyebrow}
                </p>
              </div>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h1
                id="sustainability-hero-heading"
                className="text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl xl:text-display-md"
              >
                {SUSTAINABILITY_HERO.title}
              </h1>
            </SlideUp>
            <SlideUp delay={0.35}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-body-lg">
                {SUSTAINABILITY_HERO.subtitle}
              </p>
            </SlideUp>
            <SlideUp delay={0.5}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="w-full shadow-lg shadow-secondary/20 sm:w-auto"
                >
                  Contact Us
                </Button>
                <Button
                  href="/sectors"
                  size="lg"
                  className="w-full border-2 border-accent/40 bg-transparent text-white hover:border-accent hover:bg-accent/10 sm:w-auto"
                >
                  Explore Investments
                </Button>
              </div>
            </SlideUp>
          </div>

          <SlideUp delay={0.4} distance={40}>
            <GrowthVisual />
          </SlideUp>
        </div>
      </Container>
    </section>
  );
}
