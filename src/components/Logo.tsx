import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className ?? "group flex items-center gap-2.5"}>
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect width="32" height="32" rx="9" fill="url(#logoGrad)" />
        <path
          d="M16 6L18.4 13.2L25.6 13.2L19.8 17.6L22.1 24.8L16 20.4L9.9 24.8L12.2 17.6L6.4 13.2L13.6 13.2L16 6Z"
          fill="#0a0a12"
        />
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F2C14E" />
            <stop offset="1" stopColor="#5B6EF5" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-display text-lg font-bold tracking-tight text-fg">
        Digital<span className="text-gradient-gold">Burj</span>
      </span>
    </Link>
  );
}
