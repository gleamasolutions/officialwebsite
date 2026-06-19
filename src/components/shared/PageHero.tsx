import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  className?: string;
  compact?: boolean;
}

export default function PageHero({
  title,
  description,
  className,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "bg-primary text-white",
        compact ? "pt-24 pb-12 lg:pt-28" : "pt-28 pb-16 lg:pt-36 lg:pb-20",
        className,
      )}
      aria-labelledby="page-hero-title"
    >
      <Container>
        <div className="max-w-3xl">
          <h1
            id="page-hero-title"
            className="text-display-md font-bold tracking-tight"
          >
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-body-lg text-white/80">{description}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
