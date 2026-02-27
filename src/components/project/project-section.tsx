import { Section } from "../../layouts/Section";

import { ProjectCard } from "./project-card";

import { siteConfig } from "@/config/site";
import { Animate } from "@/components/animate";

export const ProjectSection = () => {
  const projects = siteConfig.projects;

  return (
    <Section id="projects" label="Projects">
      <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <Animate
            key={project.name}
            animation="fade-in-up"
            className="w-full"
            delay={index * 100}
            onView
          >
            <ProjectCard
              description={project.description}
              imageSrc={project.imageSrc}
              link={project.link}
              name={project.name}
              subDescription={project.subDescription}
              technologies={project.technologies}
            />
          </Animate>
        ))}
      </div>
    </Section>
  );
};
