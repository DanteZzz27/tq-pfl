"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const hydrated = useHydrated();
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!hydrated || isMobile || reducedMotion) return;

    const el = cursorRef.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    let visible = false;
    let rafId = 0;

    const render = () => {
      const scale = visible ? 1 : 0.5;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
      el.style.opacity = visible ? "1" : "0";
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      visible = true;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          render();
          rafId = 0;
        });
      }
    };

    const onLeave = () => {
      visible = false;
      render();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.body.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [hydrated, isMobile, reducedMotion]);

  if (!hydrated || isMobile || reducedMotion) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-6 w-6 rounded-full border border-foreground/30 will-change-transform md:block"
      style={{ opacity: 0 }}
      aria-hidden
    />
  );
}
