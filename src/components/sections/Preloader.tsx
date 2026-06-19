"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "@/components/shared/Logo";
import SectionBackground from "@/components/shared/SectionBackground";
import { COMPANY } from "@/constants/site";

const DURATION_MS = 1800;

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / DURATION_MS) * 100, 100);
      setProgress(pct);
      if (elapsed < DURATION_MS) {
        frame = requestAnimationFrame(tick);
      } else {
        setVisible(false);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          role="status"
          aria-label="Loading Gleama website"
          aria-live="polite"
        >
          <SectionBackground tone="dark" />

          <div className="relative flex flex-col items-center">
            <div className="relative overflow-hidden rounded-xl px-6 py-5">
              <Logo variant="light" priority />
              <motion.div
                className="pointer-events-none absolute inset-0 gold-accent-bar opacity-40"
                initial={{ x: "-120%", opacity: 0 }}
                animate={{ x: "120%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                  repeat: 1,
                  repeatDelay: 0.15,
                }}
              />
            </div>
            <p className="mt-4 text-sm tracking-[0.25em] text-white/50 uppercase">
              {COMPANY.tagline}
            </p>
          </div>

          <div className="absolute bottom-16 left-1/2 w-48 -translate-x-1/2 md:w-64">
            <div
              className="h-0.5 w-full overflow-hidden rounded-full bg-white/15"
              aria-hidden="true"
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent/60 via-accent to-accent/60"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-3 text-center text-xs tracking-wider text-white/40 uppercase">
              Loading
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
