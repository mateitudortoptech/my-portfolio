const stages = [
  "Frontend",
  "API",
  "Backend",
  "AI Layer",
  "RAG / Vector DB",
  "Database",
  "Cloud",
];

export function HeroArchitecture() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/70 p-5 shadow-glow sm:p-6"
      aria-label="Application architecture from frontend through cloud"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-signal/20 blur-3xl ambient-orb" />
      <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-iris/20 blur-3xl ambient-orb" />

      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist-400">
        Production path
      </p>
      <p className="mt-2 text-sm text-mist-300">
        Client to model layer to data to cloud—one delivery path.
      </p>

      <ol className="relative mt-6 space-y-0">
        {stages.map((stage, index) => (
          <li key={stage} className="relative flex items-stretch gap-4">
            <div className="flex w-6 flex-col items-center">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-signal node-glow" />
              {index < stages.length - 1 ? (
                <span className="w-px flex-1 bg-gradient-to-b from-signal/70 to-white/10" />
              ) : (
                <span className="h-2" />
              )}
            </div>
            <div className="mb-3 flex min-h-11 w-full items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
              <span className="text-sm text-mist-50">{stage}</span>
              <span className="font-mono text-[10px] text-mist-500">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </li>
        ))}
      </ol>

      <svg
        className="pointer-events-none absolute right-4 top-16 hidden h-48 w-24 opacity-40 sm:block"
        viewBox="0 0 80 200"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="flow-path"
          d="M40 8 C70 40, 10 70, 40 100 S10 160, 40 192"
          stroke="#8fb0ff"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
