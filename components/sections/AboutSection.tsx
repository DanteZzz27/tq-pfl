"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content/portfolio";
import { SectionShell } from "@/components/motion/SectionShell";
import { Badge } from "@/components/ui/badge";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      label="About"
      title="Sport brands, real-world energy"
      description={about.intro}
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          className="font-display text-2xl leading-snug md:text-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <blockquote>&ldquo;{about.philosophy}&rdquo;</blockquote>
        </motion.div>

        <div>
          <p className="mb-6 text-sm uppercase tracking-widest text-muted">
            Core expertise
          </p>
          <div className="flex flex-wrap gap-2">
            {about.expertise.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * stagger, duration: 0.4 }}
              >
                <Badge variant="outline">{skill}</Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 overflow-x-auto pb-4">
        <div className="flex min-w-max gap-8 md:gap-12">
          {about.timeline.map((item, i) => (
            <motion.div
              key={item.year}
              className="w-56 shrink-0 border-l border-border pl-6"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <span className="font-display text-3xl text-accent">{item.year}</span>
              <p className="mt-2 font-medium">{item.title}</p>
              <p className="text-sm text-muted">{item.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
