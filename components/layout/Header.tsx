"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site, navSections } from "@/lib/content/portfolio";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/button";

const sectionIds = navSections.map((s) => s.id);

export function Header() {
  const activeId = useScrollSpy(sectionIds);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 md:px-8">
      <nav
        className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2 md:px-6"
        aria-label="Main navigation"
      >
        <Link
          href="#"
          className="font-display text-lg font-medium"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {site.name.split(" ")[0]}
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {navSections.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "text-sm transition-colors hover:text-accent",
                  activeId === item.id ? "text-accent" : "text-muted",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MagneticButton href="#contact" size="sm" className="hidden sm:inline-flex">
            Let&apos;s talk
          </MagneticButton>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="glass mt-2 rounded-2xl p-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {navSections.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block py-2 text-sm"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <MagneticButton href="#contact" className="w-full">
                Let&apos;s talk
              </MagneticButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
