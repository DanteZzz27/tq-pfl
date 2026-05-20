"use client";

import Link from "next/link";
import { useIsMobile } from "@/hooks/useMediaQuery";

export function MobileContactPill() {
  const isMobile = useIsMobile();
  if (!isMobile) return null;

  return (
    <Link
      href="#contact"
      className="fixed bottom-6 left-1/2 z-30 -translate-x-1/2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-lg dark:text-background lg:hidden"
    >
      Let&apos;s talk
    </Link>
  );
}
