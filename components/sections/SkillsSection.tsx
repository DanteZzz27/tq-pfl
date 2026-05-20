"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/content/portfolio";
import { SectionShell } from "@/components/motion/SectionShell";
import { fadeUp, viewportOnce } from "@/lib/motion";
export function SkillsSection() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <SectionShell
      id="skills"
      label="Capabilities"
      title="Skills honed in the field"
      description="From pitch decks to event run-of-shows—the skills I use every day in sport brand marketing."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        {categories.map((category, ci) => (
          <motion.div
            key={category}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            custom={ci}
          >
            <h3 className="mb-6 text-sm uppercase tracking-widest text-accent">
              {category}
            </h3>
            <div className="space-y-5">
              {skills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <div
                    key={skill.name}
                    className="group rounded-xl p-3 transition-colors hover:bg-surface"
                  >
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-border">
                      <motion.div
                        className="h-full w-full origin-left rounded-full bg-accent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: skill.level / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
