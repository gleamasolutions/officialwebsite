import { CONTACT_DETAILS } from "@/constants/contact";
import { cn } from "@/lib/utils";

interface ContactInfoProps {
  className?: string;
}

export default function ContactInfo({ className }: ContactInfoProps) {
  return (
    <aside
      className={cn(
        "rounded-xl border border-neutral-200/60 bg-white p-6 shadow-premium sm:p-8",
        className,
      )}
      aria-label="Contact information"
    >
      <h2 className="text-heading-sm font-semibold text-primary">
        Contact Information
      </h2>
      <p className="mt-2 text-body-sm text-neutral-600">
        Reach our team for business inquiries, partnership opportunities, and
        general corporate information.
      </p>

      <ul className="mt-8 space-y-6">
        {CONTACT_DETAILS.map((item) => {
          const Icon = item.icon;
          const content = (
            <>
              <span className="text-xs font-semibold tracking-[0.12em] text-accent uppercase">
                {item.label}
              </span>
              <span className="mt-1 block text-body-md text-neutral-700">
                {item.value}
              </span>
            </>
          );

          return (
            <li key={item.label} className="flex gap-4">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary"
                aria-hidden="true"
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                {"href" in item && item.href ? (
                  <a
                    href={item.href}
                    className="block transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
