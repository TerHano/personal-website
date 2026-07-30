import { Section } from "../../layouts/Section";

import { ProjectCard } from "./project-card";

import { siteConfig } from "@/config/site";
import { Animate } from "@/components/animate";

export const ProjectSection = () => {
  const projects = siteConfig.projects;

  return (
    <Section
      description="Things I've built and shipped outside of work — each one is live, click through for the detail."
      id="projects"
      label="Projects"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Animate
            key={project.name}
            animation="fade-in-up"
            className="h-full w-full"
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
