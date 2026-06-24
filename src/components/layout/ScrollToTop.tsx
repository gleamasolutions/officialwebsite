"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollToTopProps {
  variant?: "fixed" | "footer";
}

export default function ScrollToTop({ variant = "fixed" }: ScrollToTopProps) {
  const [visible, setVisible] = useState(false);
  const isFooter = variant === "footer";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isFooter) {
    return (
      <motion.button
        type="button"
        onClick={scrollToTop}
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
          "border-2 border-accent bg-transparent text-accent",
          "transition-all duration-300 hover:bg-accent hover:text-primary",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
          !visible && "opacity-50",
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </motion.button>
    );
  }

  if (!visible) return null;

  return (
    <motion.button
      type="button"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full",
        "border-2 border-accent bg-transparent text-accent shadow-lg shadow-primary/30",
        "transition-all duration-300 hover:bg-accent hover:text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </motion.button>
  );
}
