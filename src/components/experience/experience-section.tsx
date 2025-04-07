import { siteConfig } from "@/config/site";
import { Experience } from "./experience";
import { Section } from "../../layouts/Section";

export const ExperienceSection = () => {
  const workExperience = siteConfig.experience;

  return (
    <Section id="experience" label="Experience">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workExperience.map((experience) => {
          return <Experience key={experience.jobTitle} {...experience} />;
        })}
      </div>
    </Section>
  );
};
