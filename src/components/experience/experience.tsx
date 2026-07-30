import { Display } from "../typography";

import { siteConfig } from "@/config/site";

type ExperienceProps = (typeof siteConfig.experience)[number] & {
  isFirst?: boolean;
};

export const Experience = ({
  jobTitle,
  location,
  companyName,
  startDate,
  endDate,
  achievements,
  formerly,
  isFirst = false,
}: ExperienceProps & { formerly?: string; endDate?: string }) => {
  const startDateStr = new Date(startDate).toLocaleString("default", {
    month: "short",
    year: "numeric",
  });
  const endDateStr = endDate
    ? new Date(endDate).toLocaleString("default", {
        month: "short",
        year: "numeric",
      })
    : "Present";

  return (
    <article
      className={`grid grid-cols-1 gap-x-8 gap-y-1.5 py-6 sm:grid-cols-[9.5rem_minmax(0,1fr)] ${
        isFirst ? "border-t-0 pt-1" : "border-t border-rule"
      }`}
    >
      <p className="pt-1 font-mono text-xs tabular-nums text-muted">
        {startDateStr} — {endDateStr}
      </p>

      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <Display className="text-xl">{companyName}</Display>
          {formerly ? (
            <span className="font-display text-sm italic text-muted">
              formerly {formerly}
            </span>
          ) : null}
        </div>

        <p className="mt-0.5 text-[0.9375rem] text-ink-soft">
          {jobTitle}
          <span className="ml-2 font-mono text-xs text-muted">{location}</span>
        </p>

        <ul className="mt-3.5 flex max-w-[64ch] flex-col gap-2.5">
          {achievements.map((achievement) => (
            <li
              key={achievement}
              className="relative pl-[1.1rem] text-[0.9375rem] text-ink-soft text-pretty before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-[0.45rem] before:bg-teal"
            >
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
