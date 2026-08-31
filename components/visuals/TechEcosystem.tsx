import { ecosystem } from "@/data/expertise";

export function TechEcosystem() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 px-4 py-10 sm:px-8 sm:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(107,147,255,0.12),transparent_58%)]" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center">
        <div className="z-10 rounded-full border border-signal/40 bg-ink-950 px-6 py-4 text-center shadow-glow">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
            Center
          </p>
          <p className="mt-1 text-sm font-medium text-mist-50 sm:text-base">
            {ecosystem.center}
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
          {ecosystem.nodes.map((node) => (
            <li
              key={node.label}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-mist-300"
            >
              {node.label}
            </li>
          ))}
        </ul>

        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full opacity-30 lg:block"
          viewBox="0 0 800 360"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="400" cy="70" r="90" stroke="rgba(143,176,255,0.25)" />
          <circle cx="400" cy="70" r="160" stroke="rgba(143,176,255,0.12)" />
          <path
            className="flow-path"
            d="M400 70 L520 180 M400 70 L280 190 M400 70 L400 230"
            stroke="#8fb0ff"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
}
