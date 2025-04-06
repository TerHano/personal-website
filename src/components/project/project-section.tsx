import { BlackWhiteGradientText } from "../black-white-gradient-text";
import { useAppearOnScroll } from "../hooks/useAppearOnScroll";

import { ProjectCard } from "./project-card";

import { siteConfig } from "@/config/site";

export const ProjectSection = () => {
  const { ref, shouldAppear } = useAppearOnScroll();

  const projects = siteConfig.projects;

  return (
    <section
      ref={ref}
      className="flex flex-col items-center gap-2 justify-center mx-auto mb-8 sm:items-center animate-fade-in-up"
      id="projects"
      style={{ animationPlayState: shouldAppear ? "running" : "paused" }}
    >
      <BlackWhiteGradientText
        className="text-3xl font-bold text-center"
        label="Projects"
      />
      <BlackWhiteGradientText label="What I've Been Working On" />
      <div className="mx-12 grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3">
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
    </section>
  );
};
