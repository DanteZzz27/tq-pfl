"use client";

import { Calendar, Link2, Mail } from "lucide-react";
import { site } from "@/lib/content/portfolio";
import { SectionShell } from "@/components/motion/SectionShell";
import { ContactForm } from "./ContactForm";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      label="Contact"
      title="Let's build something remarkable"
      description="Open to marketing, account, and brand events roles—or collaborations with sport and lifestyle brands."
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <ContactForm />
        <div className="flex flex-col justify-between gap-8">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block font-display text-2xl transition-colors hover:text-accent"
              >
                {site.email}
              </a>
            </div>
            <MagneticButton
              href={site.bookingUrl}
              size="lg"
              className="w-full sm:w-auto"
            >
              <Calendar className="h-4 w-4" />
              Schedule a call
            </MagneticButton>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="icon" asChild>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Link2 className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={`mailto:${site.email}`} aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
