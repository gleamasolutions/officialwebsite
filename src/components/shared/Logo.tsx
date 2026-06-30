"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND, COMPANY } from "@/constants/site";
import { cn } from "@/lib/utils";

type LogoVariant = "header" | "footer" | "preloader";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
}

const LOGO_RESET = "w-auto border-none bg-transparent object-contain shadow-none";

const variantClasses: Record<LogoVariant, string> = {
  header: `${LOGO_RESET} h-12 lg:h-14`,
  footer: `${LOGO_RESET} h-[72px] lg:h-20`,
  preloader: `${LOGO_RESET} h-[72px] sm:h-20`,
};

const sizesByVariant: Record<LogoVariant, string> = {
  header: "(max-width: 1024px) 180px, 220px",
  footer: "220px",
  preloader: "220px",
};

const MotionImage = motion.create(Image);

export default function Logo({
  variant = "header",
  className,
  priority = false,
}: LogoProps) {
  const sharedProps = {
    src: BRAND.logo.src,
    alt: COMPANY.name,
    width: BRAND.logo.width,
    height: BRAND.logo.height,
    sizes: sizesByVariant[variant],
    priority,
    className: cn(variantClasses[variant], className),
  };

  const { alt, ...imageProps } = sharedProps;

  if (variant === "preloader") {
    return (
      <MotionImage
        alt={alt}
        {...imageProps}
        initial={{ opacity: 0.7, scale: 0.97 }}
        animate={{ opacity: [0.75, 1, 0.75], scale: [0.98, 1, 0.98] }}
        transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
      />
    );
  }

  return <Image alt={alt} {...imageProps} />;
}
