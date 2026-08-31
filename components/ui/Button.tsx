import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  download,
  className,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-mist-50 text-ink-950 hover:bg-white shadow-glow-sm border-transparent",
    secondary:
      "bg-white/5 text-mist-50 hover:bg-white/10 border-white/10",
    ghost:
      "bg-transparent text-mist-300 hover:text-mist-50 border-white/10 hover:border-white/20",
  }[variant];

  return (
    <a
      href={href}
      download={download || undefined}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200",
        styles,
        className,
      )}
    >
      {children}
    </a>
  );
}
