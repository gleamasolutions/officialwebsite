"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { startTransition, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import BrandLockup from "@/components/shared/BrandLockup";
import { NAVIGATION } from "@/constants/site";
import { useHash } from "@/hooks/useHash";
import { getNavExpandKey, isNavLinkActive, isNavTreeActive } from "@/lib/navigation";
import type { NavLink } from "@/types/navigation.types";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

function MobileNavLinks({
  items,
  parentKey,
  pathname,
  hash,
  expandedKeys,
  toggleKey,
  onNavigate,
  depth = 0,
}: {
  items: NavLink[];
  parentKey: string;
  pathname: string;
  hash: string;
  expandedKeys: Set<string>;
  toggleKey: (key: string) => void;
  onNavigate: () => void;
  depth?: number;
}) {
  return (
    <ul className={cn(depth > 0 && "border-l-2 border-accent/40 pl-4")}>
      {items.map((item) => {
        const itemKey = getNavExpandKey(parentKey, item);
        const isActive = isNavLinkActive(item.href, pathname, hash);
        const hasChildren = Boolean(item.children?.length);
        const isExpanded = expandedKeys.has(itemKey);

        if (item.disabled) {
          return (
            <li key={itemKey} className={cn(depth === 0 && "border-b border-white/10")}>
              <div
                className={cn(
                  "flex items-center justify-between py-3",
                  depth === 0 ? "text-base" : "px-3 py-2.5 text-sm",
                )}
                aria-disabled="true"
              >
                <span className="text-white/40">{item.label}</span>
                {item.badge && (
                  <span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] font-medium tracking-wide text-white/40 uppercase">
                    {item.badge}
                  </span>
                )}
              </div>
            </li>
          );
        }

        if (hasChildren) {
          return (
            <li key={itemKey} className={cn(depth === 0 && "border-b border-white/10")}>
              <button
                type="button"
                className={cn(
                  "flex w-full items-center justify-between py-3 text-left font-medium transition-colors",
                  depth === 0 ? "text-base" : "text-sm",
                  isActive ? "text-secondary" : "text-white",
                )}
                onClick={() => toggleKey(itemKey)}
                aria-expanded={isExpanded}
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-accent transition-transform duration-300",
                    isExpanded && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden pb-3"
                  >
                    <MobileNavLinks
                      items={item.children!}
                      parentKey={itemKey}
                      pathname={pathname}
                      hash={hash}
                      expandedKeys={expandedKeys}
                      toggleKey={toggleKey}
                      onNavigate={onNavigate}
                      depth={depth + 1}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        }

        return (
          <li key={itemKey} className={cn(depth === 0 && "border-b border-white/10")}>
            <Link
              href={item.href ?? "#"}
              onClick={onNavigate}
              className={cn(
                "block rounded-lg py-3 transition-colors",
                depth === 0 ? "text-base font-medium" : "px-3 py-2.5 text-sm",
                isActive
                  ? "font-semibold text-secondary"
                  : "text-white/75 hover:text-white",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const hash = useHash();
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  const handleClose = () => {
    setExpandedKeys(new Set());
    onClose();
  };

  const toggleKey = (key: string) => {
    setExpandedKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
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
      setExpandedKeys(new Set());
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

            <div className="relative flex-1 overflow-y-auto px-5 py-6">
              <ul>
                {NAVIGATION.map((item, index) => {
                  const isActive = isNavTreeActive(item, pathname, hash);

                  if (item.children?.length) {
                    const itemKey = getNavExpandKey("", item);
                    const isExpanded = expandedKeys.has(itemKey);

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
                          onClick={() => toggleKey(itemKey)}
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
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden pb-4 pl-1"
                            >
                              <MobileNavLinks
                                items={item.children}
                                parentKey={itemKey}
                                pathname={pathname}
                                hash={hash}
                                expandedKeys={expandedKeys}
                                toggleKey={toggleKey}
                                onNavigate={handleClose}
                                depth={1}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    );
                  }

                  return (
                    <motion.li
                      key={item.href ?? item.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                      className="border-b border-white/10"
                    >
                      <Link
                        href={item.href ?? "#"}
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
            </div>
          </motion.nav>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
