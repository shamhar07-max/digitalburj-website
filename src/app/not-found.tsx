import type { Metadata } from "next";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist — but the right door is one click away.",
};

export default function NotFound() {
  return (
    <section className="container-db max-w-2xl py-20 text-center sm:py-28">
      <p className="font-mono-d text-xs font-bold uppercase tracking-[0.24em] text-coral">Error 404</p>
      <h1 className="font-display mt-4 text-5xl font-extrabold tracking-tight text-ink sm:text-6xl">
        Wrong door.
      </h1>
      <p className="mx-auto mt-5 max-w-md leading-relaxed text-ink-soft">
        This page doesn&apos;t exist or moved. The right doors are below —
        pick one and keep going.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button href="/">Back home</Button>
        <Button href="/contact" variant="outline">Talk to us</Button>
      </div>
      <p className="font-mono-d mt-10 text-xs text-ink-faint">
        <a href="/journal" className="underline hover:text-cobalt">Journal</a>
        {" · "}
        <a href="/academy" className="underline hover:text-cobalt">Academy</a>
        {" · "}
        <a href="/services" className="underline hover:text-cobalt">Services</a>
      </p>
    </section>
  );
}
