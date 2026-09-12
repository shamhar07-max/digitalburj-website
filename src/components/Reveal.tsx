/** Static passthrough — entrances are CSS keyframes (no JS wait, no bundle). */
export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <div className={className}>{children}</div>;
}

export function RevealGroup({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function RevealItem({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
