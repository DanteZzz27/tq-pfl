"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SectionShell({
  id,
  label,
  title,
  description,
  children,
  className,
}: {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("section-padding section-block", className)}>
      <div className="container-editorial">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-12 max-w-2xl md:mb-16"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {label}
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-muted">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
