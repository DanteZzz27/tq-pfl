"use client";

import { useCallback, useRef } from "react";
import { usePrefersReducedMotion } from "./useMediaQuery";

export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (reducedMotion || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [reducedMotion, strength],
  );

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
