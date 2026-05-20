"use client";

import type { Project } from "@/lib/content/portfolio";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function CaseStudySheet({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!project) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="overflow-y-auto sm:max-w-xl">
        <div
          className={`mb-6 h-40 rounded-2xl bg-gradient-to-br ${project.gradient}`}
          aria-hidden
        />
        <SheetHeader>
          <Badge variant="outline" className="w-fit">
            {project.category}
          </Badge>
          <SheetTitle>{project.title}</SheetTitle>
          <SheetDescription>
            {project.client} · {project.year}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 space-y-6">
          <CaseBlock label="Overview" text={project.summary} />
          <Separator />
          <CaseBlock label="Challenge" text={project.challenge} />
          <CaseBlock label="Strategy" text={project.strategy} />
          <CaseBlock label="Execution" text={project.execution} />
          <Separator />
          <div>
            <p className="text-xs uppercase tracking-widest text-muted">Results</p>
            <ul className="mt-3 space-y-2">
              {project.results.map((r) => (
                <li key={r} className="flex gap-2 text-sm">
                  <span className="font-display text-accent">✦</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <p className="font-display text-4xl font-medium text-accent">
              {project.metric.value}
            </p>
            <p className="text-sm text-muted">{project.metric.label}</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function CaseBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-muted">{label}</p>
      <p className="mt-2 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
