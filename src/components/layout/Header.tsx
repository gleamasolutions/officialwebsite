"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Container from "@/components/layout/Container";
import DesktopNav from "@/components/navigation/DesktopNav";
import MobileNav from "@/components/navigation/MobileNav";
import Logo from "@/components/shared/Logo";
import { COMPANY } from "@/constants/site";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const { isScrolled } = useScrollPosition({ threshold: 24 });
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
          isTransparent
            ? "h-20 bg-transparent lg:h-24"
            : "h-16 border-b border-white/10 bg-primary/95 shadow-lg shadow-primary/20 backdrop-blur-xl",
        )}
        initial={false}
        role="banner"
      >
        <Container className="h-full">
          <div className="grid h-full grid-cols-[auto_1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
            <div className="flex items-center lg:justify-start">
              <Link
                href="/"
                className="inline-flex shrink-0 transition-opacity hover:opacity-90"
                aria-label={`${COMPANY.name} - Home`}
              >
                <Logo variant="header" priority />
              </Link>
            </div>

            <div className="hidden justify-center lg:flex">
              <DesktopNav isTransparent={isTransparent} />
            </div>

            <div className="flex items-center justify-end gap-3">
              <Link
                href="/contact"
                className={cn(
                  "hidden rounded-md border-2 px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-300 lg:inline-flex",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                  isTransparent
                    ? "border-accent text-white hover:bg-accent hover:text-primary"
                    : "border-accent text-accent hover:bg-accent hover:text-primary",
                )}
              >
                Invest With Us
              </Link>

              <button
                type="button"
                className={cn(
                  "inline-flex items-center justify-center rounded-md p-2 lg:hidden",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isTransparent ? "text-white" : "text-white",
                )}
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
