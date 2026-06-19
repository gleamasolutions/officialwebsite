"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { NAVIGATION } from "@/constants/site";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  isScrolled: boolean;
}

export default function DesktopNav({ isScrolled }: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className="hidden lg:block"
      aria-label="Main navigation"
    >
      <ul className="flex items-center gap-1">
        {NAVIGATION.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.children?.some((child) => pathname === child.href) ?? false);

          if (item.children) {
            return (
              <li key={item.href} className="group relative">
                <button
                  type="button"
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                    isScrolled
                      ? isActive
                        ? "text-secondary"
                        : "text-neutral-700 hover:text-primary"
                      : isActive
                        ? "text-secondary"
                        : "text-white/90 hover:text-white",
                  )}
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {item.label}
                  <ChevronDown
                    className="h-4 w-4 transition-transform group-hover:rotate-180"
                    aria-hidden="true"
                  />
                </button>
                <ul
                  className={cn(
                    "invisible absolute left-0 top-full z-50 min-w-[200px] rounded-lg bg-white py-2 opacity-0 shadow-lg",
                    "transition-all duration-200 group-hover:visible group-hover:opacity-100",
                    "group-focus-within:visible group-focus-within:opacity-100",
                  )}
                  role="menu"
                >
                  {item.children.map((child) => (
                    <li key={child.href} role="none">
                      <Link
                        href={child.href}
                        role="menuitem"
                        className={cn(
                          "block px-4 py-2 text-sm transition-colors",
                          pathname === child.href
                            ? "bg-primary/5 text-primary"
                            : "text-neutral-700 hover:bg-neutral-50 hover:text-primary",
                        )}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                  isScrolled
                    ? isActive
                      ? "text-secondary"
                      : "text-neutral-700 hover:text-primary"
                    : isActive
                      ? "text-secondary"
                      : "text-white/90 hover:text-white",
                )}
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
