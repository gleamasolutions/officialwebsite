import { cn } from "@/lib/utils";

type SectionTone = "dark" | "light" | "muted";

interface SectionBackgroundProps {
  tone: SectionTone;
  pattern?: boolean;
  className?: string;
}

export default function SectionBackground({
  tone,
  pattern = true,
  className,
}: SectionBackgroundProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {tone === "dark" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(80,200,120,0.12),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(212,175,55,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0.04),transparent_70%)]" />
        </>
      )}

      {tone === "light" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(0,0,128,0.03),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_100%,rgba(80,200,120,0.04),transparent_45%)]" />
        </>
      )}

      {tone === "muted" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(212,175,55,0.05),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(0,0,128,0.04),transparent_45%)]" />
        </>
      )}

      {pattern && (
        <div
          className={cn(
            "absolute inset-0 opacity-[0.35]",
            tone === "dark" ? "pattern-grid-dark" : "pattern-grid-light",
          )}
        />
      )}
    </div>
  );
}
