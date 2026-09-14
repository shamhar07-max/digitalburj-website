import Link from "next/link";

/** Header lockup: full brand image, transparent blend — same placement as before. */
export function Logo({ className }: { className?: string; dark?: boolean }) {
  return (
    <Link href="/" className={className ?? "flex shrink-0 items-center"} aria-label="DigitalBurj home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/db-lockup-cyber.svg"
        alt="DigitalBurj — Learn, Build, Work, Grow, Go Global"
        width={400}
        height={120}
        className="h-10 w-auto sm:h-11"
        decoding="async"
      />
    </Link>
  );
}
