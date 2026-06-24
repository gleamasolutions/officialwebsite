import Link from "next/link";
import type { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/layout/Container";
import BrandLockup from "@/components/shared/BrandLockup";
import { COMPANY } from "@/constants/site";

const FOOTER_COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Leadership", href: "/about" },
  { label: "Vision & Mission", href: "/about" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact Us", href: "/contact" },
];

const FOOTER_INVESTMENT_LINKS = [
  { label: "Colombo Stock Exchange", href: "/sectors/cse" },
  { label: "Unit Trust", href: "/sectors/unit-trust" },
  { label: "Private Equity", href: "/sectors/private-equity" },
  { label: "Gold Investments", href: "/sectors/gold" },
];

const FOOTER_RESOURCE_LINKS = [
  { label: "Insights & Articles", href: "/blog" },
  { label: "News & Updates", href: "/blog" },
  { label: "FAQs", href: "/contact" },
  { label: "Contact", href: "/contact" },
];

const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "X", href: "#", icon: XIcon },
  { label: "YouTube", href: "#", icon: YouTubeIcon },
];

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
        {title}
      </h3>
      <div
        className="mt-3 mb-5 h-px w-12 bg-gradient-to-r from-accent via-secondary to-transparent"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative footer-premium-gradient text-white" role="contentinfo">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(80,200,120,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_100%,rgba(212,175,55,0.12),transparent_50%)]" />
        <div className="absolute inset-0 pattern-grid-dark opacity-[0.35]" />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px gold-accent-bar opacity-90"
        aria-hidden="true"
      />

      <Container className="relative py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-6 inline-block max-w-full bg-transparent">
              <BrandLockup variant="footer" />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              Gleama (Pvt) Ltd is a diversified company focused on sustainable
              growth, innovation, strategic investments and long-term value
              creation.
            </p>
            <div
              className="mt-6 flex items-center gap-3"
              aria-label="Social media links"
            >
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterColumn title="Company">
            <ul className="space-y-3">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Investments">
            <ul className="space-y-3">
              {FOOTER_INVESTMENT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Resources">
            <ul className="space-y-3">
              {FOOTER_RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Get In Touch">
            <address className="space-y-4 text-sm not-italic text-white/70">
              <p className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY.email}
                </a>
              </p>
              <p className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY.phone}
                </a>
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                <span>{COMPANY.address}</span>
              </p>
            </address>
          </FooterColumn>
        </div>
      </Container>

      <div className="relative border-t border-accent/25 bg-black/25">
        <Container className="flex flex-col items-center justify-between gap-5 py-6 sm:flex-row">
          <p className="text-center text-sm text-white/55 sm:text-left">
            &copy; 2026 {COMPANY.name}. All Rights Reserved.
          </p>

          <nav aria-label="Legal links" className="flex flex-wrap items-center justify-center gap-1">
            {FOOTER_LEGAL_LINKS.map((link, index) => (
              <span key={link.href} className="flex items-center">
                {index > 0 && (
                  <span className="mx-3 text-white/25" aria-hidden="true">
                    |
                  </span>
                )}
                <Link
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>
        </Container>
      </div>
    </footer>
  );
}
