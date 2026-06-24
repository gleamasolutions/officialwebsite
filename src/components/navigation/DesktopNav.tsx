"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NAVIGATION } from "@/constants/site";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative px-3.5 py-2 text-sm font-medium tracking-wide transition-colors duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
        isActive
          ? "text-secondary"
          : "text-white/90 hover:text-white",
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
      <span
        className={cn(
          "absolute right-3.5 bottom-0 left-3.5 h-0.5 origin-center rounded-full transition-all duration-300",
          isActive
            ? "scale-x-100 bg-accent"
            : "scale-x-0 bg-accent group-hover:scale-x-100",
        )}
        aria-hidden="true"
      />
    </Link>
  );
}

export default function DesktopNav() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-1">
        {NAVIGATION.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.children?.some((child) => pathname === child.href) ?? false);

          if (item.children) {
            const isOpen = openDropdown === item.href;

            return (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={cn(
                    "group relative inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium tracking-wide transition-colors duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    isActive
                      ? "text-secondary"
                      : "text-white/90 hover:text-white",
                  )}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                  <span
                    className={cn(
                      "absolute right-3.5 bottom-0 left-3.5 h-0.5 origin-center rounded-full transition-all duration-300",
                      isActive
                        ? "scale-x-100 bg-accent"
                        : "scale-x-0 bg-accent group-hover:scale-x-100",
                    )}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="absolute top-[calc(100%+0.75rem)] left-1/2 z-50 min-w-[280px] -translate-x-1/2"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                      <ul
                        className="overflow-hidden rounded-xl border border-neutral-100 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
                        role="menu"
                      >
                        {item.children.map((child) => (
                          <li key={child.href} role="none">
                            <Link
                              href={child.href}
                              role="menuitem"
                              className={cn(
                                "block rounded-lg px-4 py-2.5 text-sm transition-all duration-200",
                                pathname === child.href
                                  ? "bg-primary/5 font-semibold text-primary"
                                  : "text-neutral-700 hover:bg-neutral-50 hover:text-primary",
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          }

          return (
            <li key={item.href}>
              <NavLink href={item.href} label={item.label} isActive={isActive} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
