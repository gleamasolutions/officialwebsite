"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { startTransition, useEffect, useState } from "react";
import {
  createConsentState,
  hasConsentChoice,
  saveConsent,
} from "@/lib/cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setVisible(!hasConsentChoice());
    });
  }, []);

  const handleAccept = () => {
    saveConsent(createConsentState("all"));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-[80] p-4 sm:p-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-description"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-primary/95 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <h2
                  id="cookie-banner-title"
                  className="text-heading-sm font-semibold text-white"
                >
                  We Value Your Privacy
                </h2>
                <p
                  id="cookie-banner-description"
                  className="mt-2 text-sm leading-relaxed text-white/75"
                >
                  We use cookies to improve your browsing experience, analyse
                  website traffic and enhance our services. By clicking
                  &apos;Accept&apos;, you agree to our use of cookies.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleAccept}
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Accept Cookies
                </button>
                <Link
                  href="/cookie-policy"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
