"use client";

import Image from "next/image";
import { BRAND, COMPANY } from "@/constants/site";
import { cn } from "@/lib/utils";

interface BrandLockupProps {
  variant?: "header" | "footer";
  priority?: boolean;
  className?: string;
}

export default function BrandLockup({
  variant = "header",
  priority = false,
  className,
}: BrandLockupProps) {
  const isFooter = variant === "footer";

  return (
    <div
      className={cn(
        "flex min-w-0 items-center",
        isFooter
          ? "flex-col items-start gap-4"
          : "gap-3",
        className,
      )}
    >
      <Image
        src={BRAND.logo.src}
        alt=""
        width={BRAND.logo.width}
        height={BRAND.logo.height}
        priority={priority}
        sizes={isFooter ? "180px" : "(max-width: 1024px) 160px, 200px"}
        className={cn(
          "h-auto w-auto shrink-0 object-contain",
          isFooter
            ? "h-[3.25rem] w-auto sm:h-[4.375rem] lg:h-[5.625rem]"
            : "h-10 w-auto lg:h-12",
        )}
        aria-hidden="true"
      />

      <div className={cn("flex min-w-0 flex-col", isFooter ? "gap-1.5" : "gap-0.5")}>
        <span
          className={cn(
            "font-[family-name:var(--font-playfair)] font-semibold leading-none tracking-[0.12em] text-white",
            isFooter ? "text-xl sm:text-2xl lg:text-3xl" : "text-lg lg:text-xl",
          )}
        >
          {COMPANY.shortName.toUpperCase()}
        </span>
        <span
          className={cn(
            "font-medium tracking-[0.22em] text-white/60 uppercase",
            isFooter ? "text-[11px] sm:text-xs" : "text-[10px] lg:text-[11px]",
          )}
        >
          {COMPANY.tagline}
        </span>
      </div>
    </div>
  );
}
