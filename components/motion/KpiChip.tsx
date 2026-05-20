import { cn } from "@/lib/utils";

export function KpiChip({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="font-display text-2xl font-medium text-accent md:text-3xl">
        {value}
      </span>
      <span className="text-xs uppercase tracking-widest text-muted">{label}</span>
    </div>
  );
}
