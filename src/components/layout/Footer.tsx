import Link from "next/link";
import { Globe, Link2, Share2 } from "lucide-react";
import Container from "@/components/layout/Container";
import { COMPANY, FOOTER_SECTIONS, SOCIAL_LINKS } from "@/constants/site";

const socialIcons = {
  linkedin: Link2,
  facebook: Share2,
  twitter: Globe,
} as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold">{COMPANY.shortName}</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              {COMPANY.description}
            </p>
            <address className="mt-4 space-y-1 text-sm not-italic text-white/70">
              <p>{COMPANY.address}</p>
              <p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-secondary"
                >
                  {COMPANY.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-secondary"
                >
                  {COMPANY.phone}
                </a>
              </p>
            </address>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <nav
              key={section.title}
              aria-label={`${section.title} links`}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/60">
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4" aria-label="Social media links">
            {SOCIAL_LINKS.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
