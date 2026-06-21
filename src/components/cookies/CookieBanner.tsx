"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Settings2, X } from "lucide-react";
import { startTransition, useEffect, useState } from "react";
import {
  createConsentState,
  getStoredConsent,
  hasConsentChoice,
  saveConsent,
  type CookieConsentState,
} from "@/lib/cookie-consent";
import { cn } from "@/lib/utils";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setVisible(!hasConsentChoice());
      const stored = getStoredConsent();
      if (stored) {
        setAnalytics(stored.analytics);
        setMarketing(stored.marketing);
      }
    });
  }, []);

  const applyConsent = (state: CookieConsentState) => {
    saveConsent(state);
    setVisible(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    applyConsent(createConsentState("all"));
  };

  const handleDecline = () => {
    applyConsent(createConsentState("essential"));
  };

  const handleSavePreferences = () => {
    applyConsent(
      createConsentState("custom", { analytics, marketing }),
    );
  };

  if (!visible) {
    return null;
  }

  return (
    <AnimatePresence>
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
        <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-primary p-5 shadow-2xl sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2
                id="cookie-banner-title"
                className="text-heading-sm font-semibold text-white"
              >
                Cookie Preferences
              </h2>
              <p
                id="cookie-banner-description"
                className="mt-2 text-sm leading-relaxed text-white/75"
              >
                We use cookies to enhance website functionality, analyze traffic,
                and improve your experience. You can accept all cookies, decline
                non-essential cookies, or manage your preferences.{" "}
                <Link
                  href="/cookie-policy"
                  className="font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Learn more
                </Link>
              </p>
            </div>
            <button
              type="button"
              onClick={handleDecline}
              className="shrink-0 rounded-md p-1 text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close cookie banner and decline non-essential cookies"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {showPreferences && (
            <div
              className="mt-5 space-y-4 rounded-lg border border-white/10 bg-white/5 p-4"
              aria-label="Cookie preference settings"
            >
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 h-4 w-4 rounded border-white/30"
                  aria-describedby="essential-cookies-desc"
                />
                <span>
                  <span className="block text-sm font-medium text-white">
                    Strictly Necessary
                  </span>
                  <span
                    id="essential-cookies-desc"
                    className="mt-1 block text-xs text-white/60"
                  >
                    Required for core website functionality and cannot be disabled.
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-white/30 accent-accent"
                />
                <span>
                  <span className="block text-sm font-medium text-white">
                    Analytics Cookies
                  </span>
                  <span className="mt-1 block text-xs text-white/60">
                    Help us understand how visitors use our website.
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(event) => setMarketing(event.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-white/30 accent-accent"
                />
                <span>
                  <span className="block text-sm font-medium text-white">
                    Marketing Cookies
                  </span>
                  <span className="mt-1 block text-xs text-white/60">
                    Used to deliver relevant content and measure campaign performance.
                  </span>
                </span>
              </label>
            </div>
          )}

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => {
                if (showPreferences) {
                  handleSavePreferences();
                } else {
                  setShowPreferences(true);
                }
              }}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              )}
            >
              <Settings2 className="h-4 w-4" aria-hidden="true" />
              {showPreferences ? "Save Preferences" : "Manage Preferences"}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
