"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function RevealText({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.p
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      custom={delay}
    >
      {children}
    </motion.p>
  );
}

export function SplitHeadline({
  lines,
  className,
}: {
  lines: string[];
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "font-display text-balance text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.95] tracking-tight",
        className,
      )}
    >
      {lines.map((line, i) => (
        <span key={`${line}-${i}`} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.15 + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
