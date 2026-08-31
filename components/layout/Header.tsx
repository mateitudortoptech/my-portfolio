"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/nav";
import { site } from "@/data/profile";
import { cn } from "@/lib/cn";

export function Header() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[height,background,border-color] duration-300 print:hidden",
        compact || open
          ? "glass-nav border-white/10"
          : "border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-page items-center justify-between px-5 sm:px-8",
          compact ? "h-14" : "h-16 sm:h-[4.5rem]",
        )}
      >
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 font-mono text-[11px] text-signal">
            MT
          </span>
          <span className="text-sm font-medium tracking-tight text-mist-50">
            {site.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-[13px] transition-colors",
                    active === item.id
                      ? "bg-white/10 text-mist-50"
                      : "text-mist-400 hover:text-mist-50",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-white/10 px-3.5 py-1.5 text-[13px] text-mist-50 transition-colors hover:bg-white/5 lg:inline-flex"
        >
          Contact
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-mist-50 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
            <span
              className={cn(
                "block h-px bg-current transition-transform",
                open && "translate-y-[4px] rotate-45",
              )}
            />
            <span className={cn("block h-px bg-current", open && "opacity-0")} />
            <span
              className={cn(
                "block h-px bg-current transition-transform",
                open && "-translate-y-[4px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-white/10 bg-ink-950 lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col px-5 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={cn(
                    "block rounded-md px-2 py-3 text-base",
                    active === item.id ? "text-mist-50" : "text-mist-400",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
