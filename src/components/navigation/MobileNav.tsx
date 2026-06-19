"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAVIGATION } from "@/constants/site";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setExpandedItem(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.nav
            id="mobile-navigation"
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            aria-label="Mobile navigation"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex h-16 items-center justify-between border-b border-neutral-100 px-4">
              <span className="text-lg font-bold text-primary">Menu</span>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md p-2 text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <ul className="overflow-y-auto px-4 py-4">
              {NAVIGATION.map((item) => {
                const isActive = pathname === item.href;

                if (item.children) {
                  const isExpanded = expandedItem === item.href;
                  return (
                    <li key={item.href} className="border-b border-neutral-100">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-neutral-800"
                        onClick={() =>
                          setExpandedItem(isExpanded ? null : item.href)
                        }
                        aria-expanded={isExpanded}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform",
                            isExpanded && "rotate-180",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      {isExpanded && (
                        <ul className="pb-4 pl-4">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={cn(
                                  "block py-2 text-sm",
                                  pathname === child.href
                                    ? "font-medium text-secondary"
                                    : "text-neutral-600",
                                )}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.href} className="border-b border-neutral-100">
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-4 text-base font-medium",
                        isActive ? "text-secondary" : "text-neutral-800",
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
        </>
      )}
    </AnimatePresence>
  );
}
