"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { NAVIGATION } from "@/constants/site";
import { useHash } from "@/hooks/useHash";
import { getNavExpandKey, isNavLinkActive, isNavTreeActive } from "@/lib/navigation";
import type { NavLink as NavLinkItem } from "@/types/navigation.types";
import { cn } from "@/lib/utils";

function TopLevelNavLink({
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
        isActive ? "text-secondary" : "text-white/90 hover:text-white",
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

function rowClass(isActive: boolean) {
  return cn(
    "flex items-center justify-between gap-2 rounded-lg px-4 py-2.5 text-sm transition-all duration-200",
    isActive
      ? "bg-primary/5 font-semibold text-primary"
      : "text-neutral-700 hover:bg-neutral-50 hover:text-primary hover:[&_.nav-accent]:text-accent",
  );
}

/**
 * Renders a single dropdown row. If the item has children it becomes a
 * hoverable parent that reveals its own flyout submenu to the right.
 * Fully recursive — supports unlimited nesting depth.
 */
function DropdownItem({
  item,
  parentKey,
  pathname,
  hash,
}: {
  item: NavLinkItem;
  parentKey: string;
  pathname: string;
  hash: string;
}) {
  const [open, setOpen] = useState(false);
  const itemKey = getNavExpandKey(parentKey, item);
  const hasChildren = Boolean(item.children?.length);
  const isActive = isNavTreeActive(item, pathname, hash);

  if (item.disabled) {
    return (
      <li role="none">
        <div
          className="flex cursor-not-allowed items-center justify-between gap-2 rounded-lg px-4 py-2.5 text-sm text-neutral-400"
          aria-disabled="true"
        >
          <span>{item.label}</span>
          {item.badge && (
            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium tracking-wide text-neutral-400 uppercase">
              {item.badge}
            </span>
          )}
        </div>
      </li>
    );
  }

  if (!hasChildren) {
    return (
      <li role="none">
        <Link
          href={item.href ?? "#"}
          role="menuitem"
          className={rowClass(isNavLinkActive(item.href, pathname, hash))}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      role="none"
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {item.href ? (
        <Link href={item.href} role="menuitem" className={rowClass(isActive || open)}>
          <span className="flex-1">{item.label}</span>
          <ChevronRight className="nav-accent h-4 w-4 shrink-0 text-neutral-400" aria-hidden="true" />
        </Link>
      ) : (
        <button type="button" className={cn(rowClass(isActive || open), "w-full text-left")} aria-haspopup="true" aria-expanded={open}>
          <span className="flex-1">{item.label}</span>
          <ChevronRight className="nav-accent h-4 w-4 shrink-0 text-neutral-400" aria-hidden="true" />
        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-[-0.5rem] left-full z-50 pl-2"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="menu"
          >
            <ul className="min-w-[240px] rounded-xl border border-neutral-100 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
              {item.children!.map((child) => (
                <DropdownItem
                  key={getNavExpandKey(itemKey, child)}
                  item={child}
                  parentKey={itemKey}
                  pathname={pathname}
                  hash={hash}
                />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function DesktopNav() {
  const pathname = usePathname();
  const hash = useHash();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-1">
        {NAVIGATION.map((item) => {
          const isActive = isNavTreeActive(item, pathname, hash);

          if (item.children?.length) {
            const isOpen = openDropdown === item.label;

            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={cn(
                    "group relative inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium tracking-wide transition-colors duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    isActive ? "text-secondary" : "text-white/90 hover:text-white",
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
                      className="absolute top-[calc(100%+0.5rem)] left-1/2 z-50 -translate-x-1/2 pt-2"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      role="menu"
                    >
                      <ul className="min-w-[260px] rounded-xl border border-neutral-100 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                        {item.children.map((child) => (
                          <DropdownItem
                            key={getNavExpandKey(item.label, child)}
                            item={child}
                            parentKey={item.label}
                            pathname={pathname}
                            hash={hash}
                          />
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          }

          return (
            <li key={item.href ?? item.label}>
              <TopLevelNavLink
                href={item.href ?? "#"}
                label={item.label}
                isActive={pathname === item.href}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
