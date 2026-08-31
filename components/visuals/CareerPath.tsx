import { careerPath } from "@/data/experience";

export function CareerPath() {
  return (
    <ol className="grid gap-0 border border-white/10 md:grid-cols-4">
      {careerPath.map((step, index) => (
        <li
          key={step.title}
          className="relative border-white/10 p-5 md:border-r md:last:border-r-0 max-md:border-b max-md:last:border-b-0"
        >
          <p className="font-mono text-[11px] text-signal">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 text-base font-medium text-mist-50">{step.title}</h3>
          <p className="mt-1 text-xs uppercase tracking-wider text-mist-500">
            {step.period}
          </p>
          <p className="mt-1 text-sm text-mist-400">{step.company}</p>
          <p className="mt-3 text-sm leading-relaxed text-mist-400">{step.note}</p>
        </li>
      ))}
    </ol>
  );
}
