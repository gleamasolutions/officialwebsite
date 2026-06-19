"use client";

import Image from "next/image";
import { useState } from "react";
import { BRAND, COMPANY } from "@/constants/site";
import { cn } from "@/lib/utils";

type LogoVariant = "light" | "dark";

interface LogoProps {
  variant?: LogoVariant;
  showTagline?: boolean;
  className?: string;
  priority?: boolean;
}

export default function Logo({
  variant = "dark",
  showTagline = false,
  className,
  priority = false,
}: LogoProps) {
  const [imgError, setImgError] = useState(false);
  const src =
    variant === "light" ? BRAND.logo.light : BRAND.logo.dark;

  if (imgError) {
    return (
      <span className={cn("inline-flex flex-col", className)}>
        <span
          className={cn(
            "text-lg font-bold tracking-tight lg:text-xl",
            variant === "light" ? "text-white" : "text-primary",
          )}
        >
          {COMPANY.shortName}
        </span>
        {showTagline && (
          <span
            className={cn(
              "text-xs font-medium",
              variant === "light" ? "text-white/80" : "text-neutral-600",
            )}
          >
            {COMPANY.tagline}
          </span>
        )}
      </span>
    );
  }

  return (
    <span className={cn("inline-flex flex-col", className)}>
      <Image
        src={src}
        alt={COMPANY.name}
        width={BRAND.logo.width}
        height={BRAND.logo.height}
        className="h-8 w-auto lg:h-10"
        priority={priority}
        onError={() => setImgError(true)}
      />
      {showTagline && (
        <span
          className={cn(
            "mt-0.5 text-xs font-medium",
            variant === "light" ? "text-white/80" : "text-neutral-600",
          )}
        >
          {COMPANY.tagline}
        </span>
      )}
    </span>
  );
}
