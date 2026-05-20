"use client";

import { useIsMobile, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

export function ParallaxShapes() {
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  if (isMobile || reducedMotion) {
    return (
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-accent/15" />
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-accent/20 animate-float-slow" />
      <div className="absolute left-10 top-1/3 h-48 w-48 rounded-full bg-accent-muted/50 animate-float-slower" />
      <div className="absolute bottom-20 right-1/4 h-32 w-32 rotate-12 rounded-3xl border border-border/50 bg-surface/40" />
    </div>
  );
}
