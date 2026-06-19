"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import Container from "@/components/layout/Container";
import DesktopNav from "@/components/navigation/DesktopNav";
import MobileNav from "@/components/navigation/MobileNav";
import Logo from "@/components/shared/Logo";
import { COMPANY } from "@/constants/site";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

export default function Header() {
  const { isScrolled } = useScrollPosition({ threshold: 20 });
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent",
      )}
      role="banner"
    >
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link
            href="/"
            className="group"
            aria-label={`${COMPANY.name} - Home`}
          >
            <Logo
              variant={isScrolled ? "dark" : "light"}
              showTagline
              priority
              className="transition-opacity group-hover:opacity-90"
            />
          </Link>

          <DesktopNav isScrolled={isScrolled} />

          <button
            type="button"
            className={cn(
              "inline-flex items-center justify-center rounded-md p-2 lg:hidden",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
              isScrolled ? "text-primary" : "text-white",
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

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
