export function GradientBackdrop({ variant = "hero" }: { variant?: "hero" | "section" }) {
  if (variant === "section") {
    return (
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo/10 blur-[120px]" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="grid-fade absolute inset-0" />
      <div className="animate-float absolute -left-32 top-[-120px] h-[420px] w-[420px] rounded-full bg-indigo/25 blur-[110px]" />
      <div
        className="animate-float absolute -right-24 top-10 h-[380px] w-[380px] rounded-full bg-gold/15 blur-[110px]"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="animate-float absolute left-1/3 top-[280px] h-[320px] w-[320px] rounded-full bg-violet/15 blur-[110px]"
        style={{ animationDelay: "3s" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
    </div>
  );
}

export function Skyline() {
  const buildings = [
    { x: 0, w: 46, h: 90 },
    { x: 48, w: 34, h: 130 },
    { x: 84, w: 40, h: 70 },
    { x: 126, w: 28, h: 160 },
    { x: 156, w: 50, h: 110 },
    { x: 208, w: 22, h: 200 },
    { x: 232, w: 10, h: 340, spire: true },
    { x: 244, w: 34, h: 180 },
    { x: 280, w: 46, h: 100 },
    { x: 328, w: 30, h: 150 },
    { x: 360, w: 40, h: 80 },
    { x: 402, w: 26, h: 120 },
    { x: 430, w: 44, h: 95 },
  ];

  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      className="h-full w-full opacity-90"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <linearGradient id="skylineFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f2c14e" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#5b6ef5" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="spireFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdeeb0" />
          <stop offset="100%" stopColor="#d4a94a" />
        </linearGradient>
      </defs>
      {buildings.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={360 - b.h}
          width={b.w}
          height={b.h}
          fill={b.spire ? "url(#spireFill)" : "url(#skylineFill)"}
          opacity={b.spire ? 0.9 : 0.5}
        />
      ))}
    </svg>
  );
}
