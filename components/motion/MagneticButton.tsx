"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";
import { Button, type ButtonProps } from "@/components/ui/button";

type MagneticButtonProps = ButtonProps & {
  href?: string;
};

export function MagneticButton({
  href,
  className,
  children,
  ...props
}: MagneticButtonProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic();
  const classes = cn(
    "transition-transform duration-200",
    className,
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Button asChild className={classes} {...props}>
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            ref={ref as React.RefObject<HTMLAnchorElement>}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            {children}
          </a>
        ) : (
          <Link
            href={href}
            ref={ref as React.RefObject<HTMLAnchorElement>}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            {children}
          </Link>
        )}
      </Button>
    );
  }

  return (
    <Button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={classes}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </Button>
  );
}
