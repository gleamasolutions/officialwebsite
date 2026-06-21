"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NAVIGATION } from "@/constants/site";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  isTransparent: boolean;
}

export default function DesktopNav({ isTransparent }: DesktopNavProps) {
  const pathname = usePathname();

  const linkClass = (isActive: boolean) =>
    cn(
      "relative rounded-md px-3.5 py-2 text-sm font-medium tracking-wide transition-colors duration-300",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
      isTransparent
        ? isActive
          ? "text-accent"
          : "text-white/90 hover:text-white"
        : isActive
          ? "text-accent"
          : "text-white/85 hover:text-white",
    );

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-0.5">
        {NAVIGATION.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.children?.some((child) => pathname === child.href) ?? false);

          if (item.children) {
            return (
              <li key={item.href} className="group relative">
                <button
                  type="button"
                  className={cn(linkClass(isActive), "inline-flex items-center gap-1")}
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {item.label}
                  <ChevronDown
                    className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                    aria-hidden="true"
                  />
                </button>

                <motion.ul
                  className={cn(
                    "pointer-events-none absolute left-1/2 top-[calc(100%+0.5rem)] z-50 min-w-[280px] -translate-x-1/2 rounded-xl border border-white/15 p-2 opacity-0",
                    "bg-primary/95 shadow-2xl backdrop-blur-xl",
                    "group-hover:pointer-events-auto group-hover:opacity-100",
                    "group-focus-within:pointer-events-auto group-focus-within:opacity-100",
                    "transition-all duration-300",
                  )}
                  role="menu"
                  initial={false}
                >
                  {item.children.map((child) => (
                    <li key={child.href} role="none">
                      <Link
                        href={child.href}
                        role="menuitem"
                        className={cn(
                          "block rounded-lg px-4 py-2.5 text-sm transition-all duration-200",
                          pathname === child.href
                            ? "bg-accent/20 font-medium text-accent"
                            : "text-white/90 hover:bg-white/10 hover:text-white",
                        )}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              </li>
            );
          }

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={linkClass(isActive)}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
