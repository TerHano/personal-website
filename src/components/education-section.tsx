import { Group } from "../layouts/Group";
import { Section } from "../layouts/Section";

import { BlackWhiteGradientText } from "./black-white-gradient-text";
import { Animate } from "./animate";
import { IconSchool } from "@tabler/icons-react";
import { siteConfig } from "@/config/site";

export const EducationSection = () => {
  const education = siteConfig.education;

  return (
    <Section id="education" label="Education">
      <Group className="w-full gap-4" direction="vertical">
        {education.map((item, index) => (
          <Animate
            key={`${item.school}-${item.graduationDate}`}
            animation="scale-in"
            className="w-full flex justify-center"
            delay={index * 100}
            onView
          >
            <Group
              className="w-full max-w-2xl mx-auto rounded-2xl border border-default-300/80 dark:border-default-100/35 bg-default-100/50 dark:bg-default-100/10 backdrop-blur-md p-5 sm:p-6 gap-4"
              direction="vertical"
            >
              <Group className="items-center gap-2 text-default-600" fullWidth>
                <IconSchool size={18} />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Degree
                </span>
              </Group>

              <Group
                className="flex text-sm sm:text-base justify-between items-start gap-4"
                fullWidth
              >
                <BlackWhiteGradientText
                  className="font-semibold"
                  label={item.school}
                />
                <span className="text-default-500 text-xs sm:text-sm whitespace-nowrap">
                  {item.graduationDate}
                </span>
              </Group>

              <Group
                className="flex text-tiny sm:text-sm justify-between items-start gap-4"
                fullWidth
              >
                <span className="text-default-700 dark:text-default-300 font-medium">
                  {item.degree}
                </span>
                <span className="text-default-500 text-xs sm:text-sm whitespace-nowrap">
                  {item.location}
                </span>
              </Group>
            </Group>
          </Animate>
        ))}
      </Group>
    </Section>
  );
};
