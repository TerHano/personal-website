import { Section } from "../../layouts/Section";

import { Experience } from "./experience";

import { siteConfig } from "@/config/site";

export const ExperienceSection = () => {
  const workExperience = siteConfig.experience;

  return (
    <Section id="experience" label="Experience">
      <div className="flex w-full flex-col">
        {workExperience.map((experience, index) => (
          <Experience
            key={`${experience.companyName}-${experience.jobTitle}`}
            {...experience}
            isFirst={index === 0}
          />
        ))}
      </div>
    </Section>
  );
};
