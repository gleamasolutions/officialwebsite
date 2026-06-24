"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { startTransition, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Logo from "@/components/shared/Logo";
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
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

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
          className="fixed inset-0 top-0 left-0 z-[9999] h-[100vh] w-full lg:hidden"
          role="presentation"
        >
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            aria-hidden="true"
          />

          <motion.nav
            id="mobile-navigation"
            className="absolute top-0 right-0 flex h-full w-full max-w-sm flex-col bg-primary shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
            aria-label="Mobile navigation"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <Logo variant="header" />
              <button
                type="button"
                onClick={handleClose}
                className="rounded-md p-2 text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <ul className="flex-1 overflow-y-auto px-4 py-4">
              {NAVIGATION.map((item) => {
                const isActive = pathname === item.href;

                if (item.children) {
                  const isExpanded = expandedItem === item.href;
                  return (
                    <li key={item.href} className="border-b border-white/10">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-white"
                        onClick={() =>
                          setExpandedItem(isExpanded ? null : item.href)
                        }
                        aria-expanded={isExpanded}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform duration-300",
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
                            className="overflow-hidden pb-3 pl-3"
                          >
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={handleClose}
                                  className={cn(
                                    "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                                    pathname === child.href
                                      ? "bg-accent/20 font-medium text-accent"
                                      : "text-white/75 hover:bg-white/5 hover:text-white",
                                  )}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                return (
                  <li key={item.href} className="border-b border-white/10">
                    <Link
                      href={item.href}
                      onClick={handleClose}
                      className={cn(
                        "block py-4 text-base font-medium transition-colors",
                        isActive ? "text-accent" : "text-white hover:text-accent",
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
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
