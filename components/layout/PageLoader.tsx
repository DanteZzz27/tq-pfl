"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/content/portfolio";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

function useHasVisited() {
  return useSyncExternalStore(
    () => () => {},
    () => !!sessionStorage.getItem("portfolio-loaded"),
    () => false,
  );
}

export function PageLoader() {
  const hasVisited = useHasVisited();
  const reducedMotion = usePrefersReducedMotion();
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (hasVisited || reducedMotion) return;

    const timer = window.setTimeout(() => {
      sessionStorage.setItem("portfolio-loaded", "1");
      setFinished(true);
    }, 700);

    return () => window.clearTimeout(timer);
  }, [hasVisited, reducedMotion]);

  const loading = !hasVisited && !reducedMotion && !finished;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="font-display text-3xl font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {site.name.split(" ")[0]}
          </motion.p>
          <motion.div
            className="mt-6 h-px w-32 overflow-hidden bg-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
