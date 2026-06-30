"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import DirectorBiography from "@/components/about/DirectorBiography";
import type { Director } from "@/constants/directors";

interface DirectorProfileModalProps {
  director: Director | null;
  open: boolean;
  onClose: () => void;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function DirectorProfileModal({
  director,
  open,
  onClose,
}: DirectorProfileModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
        ).filter((el) => el.offsetParent !== null);

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {open && director && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          role="presentation"
        >
          <motion.div
            className="absolute inset-0 bg-primary/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="director-modal-name"
            className="relative z-10 flex max-h-[90vh] w-full max-w-[900px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_40px_120px_rgba(0,0,0,0.35)] md:flex-row"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition-colors hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:bg-white/10 md:text-white md:hover:bg-accent"
              aria-label="Close profile"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="relative flex shrink-0 flex-col items-center justify-center bg-gradient-to-b from-primary to-[#000050] p-8 text-center text-white md:w-[38%]">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px gold-accent-bar opacity-80"
                aria-hidden="true"
              />
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white/10 ring-2 ring-accent/30">
                <Image
                  src={director.image}
                  alt={`${director.name}, ${director.position}`}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-top"
                  sizes="160px"
                />
              </div>
              <h2
                id="director-modal-name"
                className="mt-6 text-heading-md font-semibold"
              >
                {director.name}
              </h2>
              <p className="mt-2 text-sm font-semibold tracking-wide text-accent uppercase">
                {director.position}
              </p>
            </div>

            <div className="flex-1 overflow-y-auto p-8 lg:p-10">
              <DirectorBiography sections={director.sections} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
