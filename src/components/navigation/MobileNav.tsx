"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { startTransition, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import BrandLockup from "@/components/shared/BrandLockup";
import { NAVIGATION } from "@/constants/site";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const handleClose = () => {
    setExpandedItem(null);
    onClose();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    startTransition(() => {
      setExpandedItem(null);
      onClose();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[9999] h-[100dvh] w-full lg:hidden"
          role="presentation"
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            aria-hidden="true"
          />

          <motion.nav
            id="mobile-navigation"
            className="absolute inset-0 flex flex-col bg-gradient-to-b from-[#000050] via-primary to-[#000060]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile navigation"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-30"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px gold-accent-bar opacity-70"
              aria-hidden="true"
            />

            <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-5">
              <Link href="/" onClick={handleClose} className="bg-transparent">
                <BrandLockup variant="header" />
              </Link>
              <button
                type="button"
                onClick={handleClose}
                className="rounded-full border border-white/15 p-2 text-white/80 transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <ul className="relative flex-1 overflow-y-auto px-5 py-6">
              {NAVIGATION.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  (item.children?.some((child) => pathname === child.href) ?? false);

                if (item.children) {
                  const isExpanded = expandedItem === item.href;

                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                      className="border-b border-white/10"
                    >
                      <button
                        type="button"
                        className={cn(
                          "flex w-full items-center justify-between py-4 text-left text-base font-medium transition-colors",
                          isActive ? "text-secondary" : "text-white",
                        )}
                        onClick={() =>
                          setExpandedItem(isExpanded ? null : item.href)
                        }
                        aria-expanded={isExpanded}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 text-accent transition-transform duration-300",
                            isExpanded && "rotate-180",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden border-l-2 border-accent/40 pb-4 pl-4"
                          >
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={handleClose}
                                  className={cn(
                                    "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                                    pathname === child.href
                                      ? "font-semibold text-secondary"
                                      : "text-white/75 hover:text-white",
                                  )}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                }

                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                    className="border-b border-white/10"
                  >
                    <Link
                      href={item.href}
                      onClick={handleClose}
                      className={cn(
                        "relative block py-4 text-base font-medium transition-colors",
                        isActive ? "text-secondary" : "text-white hover:text-white/90",
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                      {isActive && (
                        <span
                          className="absolute bottom-3 left-0 h-0.5 w-8 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
