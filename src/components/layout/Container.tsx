import { cn } from "@/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

interface ContainerProps {
  children: React.ReactNode;
  size?: ContainerSize;
  className?: string;
  as?: "div" | "section" | "article" | "main";
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-container-sm",
  md: "max-w-container-md",
  lg: "max-w-container-lg",
  xl: "max-w-container-xl",
  full: "max-w-full",
};

export default function Container({
  children,
  size = "lg",
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </Component>
  );
}
