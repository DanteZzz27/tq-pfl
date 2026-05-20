"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experience } from "@/lib/content/portfolio";
import { SectionShell } from "@/components/motion/SectionShell";
import { cn } from "@/lib/utils";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState<string | null>(experience[0]?.id ?? null);

  return (
    <SectionShell
      id="experience"
      label="Experience"
      title="Experience built around sport and live brand moments"
      description="Hands-on work with Adidas products, retail partners, and events—plus leadership at The University of Economics and Law along the way."
    >
      <div className="space-y-4">
        {experience.map((job, i) => {
          const isOpen = expanded === job.id;
          return (
            <motion.article
              key={job.id}
              className="glass overflow-hidden rounded-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              custom={i}
            >
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 p-6 text-left md:p-8"
                onClick={() => setExpanded(isOpen ? null : job.id)}
                aria-expanded={isOpen}
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent">
                    {job.period}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium">
                    {job.role}
                  </h3>
                  <p className="text-muted">
                    {job.company} · {job.location}
                  </p>
                </div>
                <ChevronDown
                  className={cn(
                    "mt-2 h-5 w-5 shrink-0 transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border px-6 pb-8 pt-4 md:px-8">
                      <p className="text-muted">{job.summary}</p>
                      <ul className="mt-4 space-y-2">
                        {job.highlights.map((h) => (
                          <li key={h} className="flex gap-2 text-sm">
                            <span className="text-accent">—</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {job.campaigns.map((c) => (
                          <div
                            key={c.name}
                            className="rounded-xl bg-accent-muted/30 p-4"
                          >
                            <p className="font-medium">{c.name}</p>
                            <p className="mt-1 text-sm text-accent">{c.result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
