import Link from "next/link";
import { site } from "@/data/profile";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[60vh] max-w-page flex-col justify-center px-5 py-24 sm:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">404</p>
      <h1 className="mt-4 font-serif text-4xl text-mist-50">Page not found</h1>
      <p className="mt-3 max-w-md text-mist-400">
        That route does not exist on {site.name}&apos;s site.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit rounded-full bg-mist-50 px-5 py-2.5 text-sm font-medium text-ink-950"
      >
        Back to home
      </Link>
    </main>
  );
}
