/** Static compat block — old pages keep building; renders a quiet paper rule, no glow. */
export function GradientBackdrop({ variant = "section" }: { variant?: "hero" | "section" }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {variant === "hero" && <div className="absolute inset-x-0 top-0 h-1.5 bg-gold" />}
      <div className="absolute inset-0 bg-paper-deep/40" />
    </div>
  );
}

export function Skyline() {
  return null;
}
