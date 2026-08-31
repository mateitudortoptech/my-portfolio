import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  children,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center")}>
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
        {eyebrow}
      </p>
      <h2 className="mt-3 max-w-3xl text-3xl font-medium leading-tight tracking-tight text-mist-50 sm:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist-400 sm:text-lg">
          {body}
        </p>
      ) : null}
      {children}
    </div>
  );
}
