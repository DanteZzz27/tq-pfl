"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/content/portfolio";
import { SectionShell } from "@/components/motion/SectionShell";
import { CaseStudySheet } from "./CaseStudySheet";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const openCase = (project: Project) => {
    setSelected(project);
    setOpen(true);
  };

  return (
    <>
      <SectionShell
        id="projects"
        label="Selected Work"
        title="Campaigns that moved the needle"
        description="Campaigns and activations across Adidas sport products, retail, and live events."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              type="button"
              className="group glass relative overflow-hidden rounded-2xl text-left transition-[box-shadow,border-color] duration-200 hover:shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              custom={i}
              onClick={() => openCase(project)}
            >
              <div
                className={`aspect-[16/10] bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`}
              />
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted">
                      {project.category} · {project.year}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-medium">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{project.summary}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-3xl text-accent">
                    {project.metric.value}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted">
                    {project.metric.label}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </SectionShell>
      <CaseStudySheet
        project={selected}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}
