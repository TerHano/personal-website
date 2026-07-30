import { Section } from "../layouts/Section";

import { Display } from "./typography";

import { siteConfig } from "@/config/site";

export const EducationSection = () => {
  const education = siteConfig.education;

  return (
    <Section id="education" label="Education">
      <div className="flex w-full flex-col">
        {education.map((item) => (
          <div
            key={`${item.school}-${item.graduationDate}`}
            className="grid grid-cols-1 gap-x-8 gap-y-1.5 sm:grid-cols-[9.5rem_minmax(0,1fr)]"
          >
            <p className="pt-1 font-mono text-xs tabular-nums text-muted">
              {item.graduationDate}
            </p>
            <div>
              <Display className="text-xl">{item.school}</Display>
              <p className="mt-0.5 text-[0.9375rem] text-ink-soft">
                {item.degree}
                <span className="ml-2 font-mono text-xs text-muted">
                  {item.location}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
