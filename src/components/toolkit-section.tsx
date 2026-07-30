import { Section } from "../layouts/Section";

import { siteConfig } from "@/config/site";

export const ToolkitSection = () => {
  return (
    <Section id="toolkit" label="Toolkit">
      <dl className="flex w-full flex-col">
        {siteConfig.toolkit.map((row, index) => (
          <div
            key={row.label}
            className={`grid grid-cols-1 gap-x-8 gap-y-1.5 py-3.5 sm:grid-cols-[9.5rem_minmax(0,1fr)] ${
              index === 0
                ? "border-t border-rule"
                : "border-t border-rule-faint"
            }`}
          >
            <dt className="pt-1 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
              {row.label}
            </dt>
            <dd className="flex flex-wrap gap-2">
              {row.items.map((item) => (
                <span
                  key={item}
                  className={`rounded-sm border px-2.5 py-1 font-mono text-xs ${
                    row.highlight
                      ? "border-teal bg-teal-soft text-teal"
                      : "border-rule bg-raised text-ink-soft"
                  }`}
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};
