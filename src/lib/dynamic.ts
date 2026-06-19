import dynamic from "next/dynamic";

/**
 * Lazy-load client components that are not needed for initial paint.
 * Use this pattern for animation wrappers, mobile nav drawers, etc.
 */
export const LazyFadeIn = dynamic(
  () => import("@/components/animations/FadeIn"),
  { ssr: false },
);

export const LazySlideUp = dynamic(
  () => import("@/components/animations/SlideUp"),
  { ssr: false },
);
