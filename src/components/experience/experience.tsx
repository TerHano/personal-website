import { BlackWhiteGradientText } from "../black-white-gradient-text";
import { Group } from "../layout/Group";

import { siteConfig } from "@/config/site";

type ExperienceProps = (typeof siteConfig.experience)[0];

export const Experience = ({
  jobTitle,
  location,
  companyName,
  startDate,
  endDate,
  achievements,
}: ExperienceProps) => {
  const startDateStr = new Date(startDate).toLocaleString("default", {
    month: "short",
    year: "numeric",
  });
  const endDateStr = endDate
    ? new Date(endDate).toLocaleString("default", {
        month: "short",
        year: "numeric",
      })
    : "Current";

  return (
    <Group fullWidth direction="vertical">
      <Group className="text-sm sm:text-lg justify-between gap-4">
        <BlackWhiteGradientText className="truncate" label={jobTitle} />
        <BlackWhiteGradientText
          className="truncate"
          label={`${startDateStr} / ${endDateStr}`}
        />
      </Group>
      <Group
        className="justify-between text-tiny sm:text-md mb-1 gap-4"
        direction="horizontal"
      >
        <BlackWhiteGradientText label={companyName} />
        <BlackWhiteGradientText label={location} />

        {/* <span className="text-tiny sm:text-base">{`${startDateStr} / ${endDateStr}`}</span> */}
      </Group>
      <ul className="list-disc mx-6 text-tiny sm:text-sm">
        {achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </Group>
  );
};
