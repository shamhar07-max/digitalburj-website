/**
 * OrbitLines — shared orbital motif for home hero + all subpage heroes.
 * Pure SVG, zero JS, one language everywhere.
 */
export function OrbitLines({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 260" className={className} fill="none" aria-hidden>
      <circle cx="200" cy="130" r="96" stroke="currentColor" strokeOpacity="0.16" strokeWidth="1" />
      <circle cx="200" cy="130" r="64" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1" />
      <ellipse cx="200" cy="130" rx="150" ry="52" stroke="#D9481C" strokeOpacity="0.55" strokeWidth="1.3" strokeDasharray="5 6" transform="rotate(-16 200 130)" />
      <ellipse cx="200" cy="130" rx="150" ry="52" stroke="#0E7C6B" strokeOpacity="0.55" strokeWidth="1.3" transform="rotate(18 200 130)" />
      {[
        [200, 34, "#E8721C"],
        [330, 168, "#0E7C6B"],
        [200, 226, "#D9481C"],
        [70, 168, "#0B6B4F"],
      ].map(([x, y, c]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x as number} cy={y as number} r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
          <circle cx={x as number} cy={y as number} r="4" fill={c as string} />
        </g>
      ))}
      <circle cx="200" cy="130" r="13" fill="#0B6B4F" />
      <circle cx="200" cy="130" r="13" stroke="#FAF6EE" strokeWidth="1.5" />
      <circle cx="200" cy="130" r="4" fill="#FAF6EE" />
    </svg>
  );
}
