import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/layout/Container";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Logo from "@/components/shared/Logo";
import SectionBackground from "@/components/shared/SectionBackground";
import { COMPANY } from "@/constants/site";

const FOOTER_COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Vision & Mission", href: "/about" },
  { label: "Leadership", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const FOOTER_SECTOR_LINKS = [
  { label: "Colombo Stock Exchange", href: "/sectors/cse" },
  { label: "Unit Trust Funds", href: "/sectors/unit-trust" },
  { label: "Private Equity Investments", href: "/sectors/private-equity" },
  { label: "Gold Investments", href: "/sectors/gold" },
];

const FOOTER_RESOURCE_LINKS = [
  { label: "Insights & Articles", href: "/blog" },
  { label: "Market Updates", href: "/blog" },
  { label: "Reports", href: "/blog" },
  { label: "FAQs", href: "/contact" },
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
  { label: "Twitter/X", href: "#", icon: XIcon },
  { label: "YouTube", href: "#", icon: YouTubeIcon },
];

export default function Footer() {
  return (
    <footer className="relative bg-primary text-white" role="contentinfo">
      <SectionBackground tone="dark" pattern />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px gold-accent-bar opacity-80"
        aria-hidden="true"
      />

      <Container className="relative py-14 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Logo variant="footer" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/75">
              Gleama (Pvt) Ltd is a diversified company focused on strategic
              business ventures, sustainable growth, innovation and long-term
              value creation.
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
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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

          <nav aria-label="Company links">
            <h3 className="text-sm font-semibold tracking-[0.15em] text-accent uppercase">
              Company
            </h3>
            <div className="mt-3 mb-4 h-px w-10 bg-secondary/60" aria-hidden="true" />
            <ul className="space-y-2.5">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Investments links">
            <h3 className="text-sm font-semibold tracking-[0.15em] text-accent uppercase">
              Investments
            </h3>
            <div className="mt-3 mb-4 h-px w-10 bg-secondary/60" aria-hidden="true" />
            <ul className="space-y-2.5">
              {FOOTER_SECTOR_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources links">
            <h3 className="text-sm font-semibold tracking-[0.15em] text-accent uppercase">
              Resources
            </h3>
            <div className="mt-3 mb-4 h-px w-10 bg-secondary/60" aria-hidden="true" />
            <ul className="space-y-2.5">
              {FOOTER_RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div aria-label="Contact information">
            <h3 className="text-sm font-semibold tracking-[0.15em] text-accent uppercase">
              Get In Touch
            </h3>
            <div className="mt-3 mb-4 h-px w-10 bg-secondary/60" aria-hidden="true" />
            <address className="space-y-3 text-sm not-italic text-white/75">
              <p className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY.phone}
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY.email}
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                <span>{COMPANY.address}</span>
              </p>
            </address>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10 bg-black/20">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-white/55">
            &copy; 2026 {COMPANY.name}. All Rights Reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>

      <ScrollToTop />
    </footer>
  );
}
