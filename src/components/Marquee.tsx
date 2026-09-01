import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-32" />
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap py-2 [will-change:transform] hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-xl font-display font-medium text-fg-faint transition-colors sm:text-2xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
