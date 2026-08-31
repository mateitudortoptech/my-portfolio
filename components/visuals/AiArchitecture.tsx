import { aiSection } from "@/data/content";

export function AiArchitecture() {
  return (
    <div
      className="rounded-2xl border border-white/10 bg-ink-900/80 p-5 sm:p-6"
      aria-label="AI engineering architecture from user to cloud"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-iris">
        System diagram
      </p>
      <ol className="mt-5">
        {aiSection.pipeline.map((node, index) => (
          <li key={node} className="flex flex-col items-center">
            <div
              className={
                index === 0 || index === aiSection.pipeline.length - 1
                  ? "w-full rounded-lg border border-signal/30 bg-signal/10 px-3 py-2.5 text-center text-sm text-mist-50"
                  : index === 5 || index === 6 || index === 7
                    ? "w-full rounded-lg border border-iris/30 bg-iris/10 px-3 py-2.5 text-center text-sm text-mist-50"
                    : "w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-center text-sm text-mist-50"
              }
            >
              {node}
            </div>
            {index < aiSection.pipeline.length - 1 ? (
              <span
                className="my-1.5 flex h-4 w-px items-center justify-center bg-white/15"
                aria-hidden="true"
              >
                <span className="sr-only">then</span>
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
