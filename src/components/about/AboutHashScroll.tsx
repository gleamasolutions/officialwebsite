"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/navigation";

export default function AboutHashScroll() {
  useEffect(() => {
    const handleHashScroll = () => {
      const { hash } = window.location;

      if (!hash) {
        return;
      }

      requestAnimationFrame(() => {
        window.setTimeout(() => scrollToSection(hash), 50);
      });
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);

    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return null;
}
