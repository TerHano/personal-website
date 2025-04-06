import { Section } from "../layout/Section";

import { ProjectCard } from "./project-card";

import { siteConfig } from "@/config/site";

export const ProjectSection = () => {
  const projects = siteConfig.projects;

  return (
    <Section
      label="Projects"
      id="projects"
      description="What I've been working on"
    >
      <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map(
          ({ name, description, subDescription, imageSrc, link }) => (
            <ProjectCard
              key={name}
              description={description}
              imageSrc={imageSrc}
              link={link}
              name={name}
              subDescription={subDescription}
            />
          )
        )}
      </div>
    </Section>
  );
};
