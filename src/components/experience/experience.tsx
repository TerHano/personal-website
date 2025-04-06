import { BlackWhiteGradientText } from "../black-white-gradient-text";
import { Group } from "../layout/Group";

import { siteConfig } from "@/config/site";

type ExperienceProps = (typeof siteConfig.experience)[0];

export const Experience = ({
  jobTitle,
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
      <BlackWhiteGradientText className="text-md sm:text-lg" label={jobTitle} />
      <Group
        className="justify-between text-sm sm:text-md mb-1"
        direction="horizontal"
      >
        <BlackWhiteGradientText
          className="text-tiny sm:text-base"
          label={companyName}
        />
        <BlackWhiteGradientText
          className="text-tiny sm:text-base"
          label={`${startDateStr} / ${endDateStr}`}
        />
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
