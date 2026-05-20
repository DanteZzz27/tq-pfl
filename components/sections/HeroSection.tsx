"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Link2, Mail } from "lucide-react";
import { hero, site } from "@/lib/content/portfolio";
import { SplitHeadline } from "@/components/motion/RevealText";
import { KpiChip } from "@/components/motion/KpiChip";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ParallaxShapes } from "@/components/motion/ParallaxShapes";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pb-24 pt-32 md:px-8 lg:px-12"
      style={{ background: "var(--hero-gradient)" }}
    >
      <ParallaxShapes />

      <div className="container-editorial relative z-10 grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <motion.p
            className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {site.title}
          </motion.p>
          <SplitHeadline lines={hero.headline} />
          <motion.p
            className="mt-8 max-w-xl text-lg text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            {hero.subheadline}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <MagneticButton href="#contact" size="lg">
              Start a conversation
            </MagneticButton>
            <Button variant="outline" size="lg" asChild>
              <Link href={site.resumeUrl}>Download résumé</Link>
            </Button>
          </motion.div>
          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border p-3 transition-colors hover:border-accent hover:text-accent"
              aria-label="LinkedIn"
            >
              <Link2 className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-border p-3 transition-colors hover:border-accent hover:text-accent"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-3 gap-6 lg:col-span-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {hero.kpis.map((kpi) => (
            <KpiChip key={kpi.label} value={kpi.value} label={kpi.label} />
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted opacity-0 animate-fade-in animate-bounce-soft"
        style={{ animationDelay: "1.3s", animationFillMode: "forwards" }}
        aria-label="Scroll to about"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
