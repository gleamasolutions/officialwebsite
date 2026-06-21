"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { COMPANY } from "@/constants/site";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/images/logo/gleama-logo.jpeg";
const LOGO_WIDTH = 300;
const LOGO_HEIGHT = 120;

type LogoVariant = "header" | "footer" | "preloader";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
}

const variantClasses: Record<LogoVariant, string> = {
  header: "h-[45px] w-auto object-contain lg:h-[60px]",
  footer: "h-[80px] w-auto object-contain",
  preloader: "h-[72px] w-auto object-contain sm:h-[80px]",
};

const sizesByVariant: Record<LogoVariant, string> = {
  header: "(max-width: 1024px) 200px, 300px",
  footer: "300px",
  preloader: "300px",
};

const MotionImage = motion.create(Image);

export default function Logo({
  variant = "header",
  className,
  priority = false,
}: LogoProps) {
  const sharedProps = {
    src: LOGO_SRC,
    alt: COMPANY.name,
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
    sizes: sizesByVariant[variant],
    priority,
    className: cn("h-auto w-auto object-contain", variantClasses[variant], className),
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
