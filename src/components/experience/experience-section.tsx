import { Section } from "../../layouts/Section";

import { Experience } from "./experience";

import { siteConfig } from "@/config/site";

export const ExperienceSection = () => {
  const workExperience = siteConfig.experience;

  return (
    <Section id="experience" label="Experience">
      <div className="relative w-full max-w-4xl mx-auto flex flex-col gap-6">
        <span className="absolute left-2 sm:left-3 top-6 bottom-6 w-px bg-default-300" />
        {workExperience.map((experience) => {
          return <Experience key={experience.jobTitle} {...experience} />;
        })}
      </div>
    </Section>
  );
};
