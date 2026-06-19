import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        className,
      )}
    >
      <h2 className="text-display-sm font-bold tracking-tight text-primary">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 max-w-2xl text-body-lg text-neutral-600",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-secondary via-accent to-secondary",
          align === "center" && "mx-auto",
        )}
        aria-hidden="true"
      />
    </div>
  );
}
