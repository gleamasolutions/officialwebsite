import Link from "next/link";
import Container from "@/components/layout/Container";
import type { LegalDocumentContent } from "@/constants/legal-content";
import { cn } from "@/lib/utils";

interface LegalDocumentProps {
  content: LegalDocumentContent;
  ariaLabel: string;
}

export default function LegalDocument({
  content,
  ariaLabel,
}: LegalDocumentProps) {
  return (
    <Container className="py-16 lg:py-20">
      <article
        className="mx-auto max-w-4xl"
        aria-label={ariaLabel}
      >
        <p className="text-sm font-medium text-neutral-500">
          Last Updated: {content.lastUpdated}
        </p>
        <p className="mt-6 text-body-lg leading-relaxed text-neutral-700">
          {content.introduction}
        </p>

        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              className="scroll-mt-28"
            >
              <h2
                id={`${section.id}-heading`}
                className="text-heading-md font-semibold text-primary"
              >
                {section.title}
              </h2>

              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-body-md leading-relaxed text-neutral-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.list && (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-body-md text-neutral-600">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <aside
          className={cn(
            "mt-14 rounded-xl border border-neutral-200/70 bg-neutral-50 p-6",
          )}
          aria-label="Related legal documents"
        >
          <h3 className="text-heading-sm font-semibold text-primary">
            Related Documents
          </h3>
          <ul className="mt-3 flex flex-wrap gap-4 text-sm">
            <li>
              <Link
                href="/privacy-policy"
                className="font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/cookie-policy"
                className="font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </aside>
      </article>
    </Container>
  );
}
