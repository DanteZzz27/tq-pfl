"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site, navSections } from "@/lib/content/portfolio";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-5 py-12 md:px-8">
      <motion.div
        className="container-editorial flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <div>
          <p className="font-display text-2xl font-medium">{site.name}</p>
          <p className="mt-2 text-sm text-muted">{site.title}</p>
        </div>
        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          {navSections.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-muted">© {year} {site.name}. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}
