import { Card, CardBody } from "@heroui/card";

import { BlackWhiteGradientText } from "../black-white-gradient-text";
import { Group } from "../../layouts/Group";

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
    <div className="relative pl-0 sm:pl-8">
      <span className="hidden sm:block absolute left-[3px] sm:left-[7px] top-6 h-3 w-3 rounded-full bg-black dark:bg-white ring-2 ring-background" />

      <Card
        className="border border-default-200/65 dark:border-default-100/20 ring-1 ring-default-200/35 dark:ring-default-100/15 bg-default-100/70 dark:bg-default-100/15 backdrop-blur-md shadow-lg transition-all duration-250 hover:-translate-y-0.5 hover:shadow-xl"
        radius="sm"
      >
        <CardBody className="p-4 sm:p-6">
          <Group fullWidth className="gap-4 sm:gap-5" direction="vertical">
            <Group
              className="justify-between items-start gap-3 sm:gap-4 flex-wrap"
              direction="horizontal"
            >
              <BlackWhiteGradientText
                className="text-sm sm:text-lg"
                label={jobTitle}
              />
              <span className="text-xs px-3 py-1 rounded-full bg-default-100 text-default-700 whitespace-nowrap font-medium tracking-wide uppercase">
                {`${startDateStr} / ${endDateStr}`}
              </span>
            </Group>

            <Group
              className="justify-between text-xs sm:text-sm text-default-600 gap-3 flex-wrap"
              direction="horizontal"
            >
              <span className="font-medium">{companyName}</span>
              <span>{location}</span>
            </Group>

            <ul className="list-disc ml-5 space-y-1.5 sm:space-y-2 text-xs sm:text-sm leading-relaxed text-default-700 marker:text-default-500">
              {achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </Group>
        </CardBody>
      </Card>
    </div>
  );
};
