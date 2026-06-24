"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Container from "@/components/layout/Container";
import DesktopNav from "@/components/navigation/DesktopNav";
import ScrollProgress from "@/components/layout/ScrollProgress";
import MobileNav from "@/components/navigation/MobileNav";
import BrandLockup from "@/components/shared/BrandLockup";
import { COMPANY } from "@/constants/site";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const { isScrolled } = useScrollPosition({ threshold: 32 });
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <ScrollProgress />
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
          isTransparent
            ? "h-[4.5rem] bg-transparent lg:h-24"
            : "h-[4.5rem] border-b border-accent/50 bg-primary/95 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:h-20",
        )}
        initial={false}
        role="banner"
      >
        <Container className="h-full">
          <div className="flex h-full items-center justify-between gap-4 lg:gap-8">
            <Link
              href="/"
              className="inline-flex shrink-0 bg-transparent"
              aria-label={`${COMPANY.name} - Home`}
            >
              <BrandLockup variant="header" priority />
            </Link>

            <div className="hidden flex-1 justify-center lg:flex">
              <DesktopNav />
            </div>

            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden",
                "transition-colors hover:text-accent",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              )}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </motion.header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
