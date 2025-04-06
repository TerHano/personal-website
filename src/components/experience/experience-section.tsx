import { siteConfig } from "@/config/site";
import { BlackWhiteGradientText } from "../black-white-gradient-text";
import { useAppearOnScroll } from "../hooks/useAppearOnScroll";
import { Group } from "../layout/Group";
import { Experience } from "./experience";

export const ExperienceSection = () => {
  const { ref, shouldAppear } = useAppearOnScroll();

  const workExperience = siteConfig.experience;

  return (
    <section
      ref={ref}
      id="experience"
      style={{ animationPlayState: shouldAppear ? "running" : "paused" }}
      className="w-full px-8 animate-fade-in-up"
    >
      <Group fullWidth direction="vertical" className="gap-3 items-center">
        <BlackWhiteGradientText
          label="Experience"
          className="text-xl sm:text-2xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workExperience.map(
            ({ jobTitle, companyName, startDate, endDate, achievements }) => {
              return (
                <Experience
                  key={jobTitle}
                  jobTitle={jobTitle}
                  companyName={companyName}
                  startDate={startDate}
                  endDate={endDate}
                  achievements={achievements}
                />
              );
            }
          )}

          {/* <Experience
            jobTitle="Software Engineer II"
            companyName="Visual Lease"
            startDate="April 2022"
            endDate="September 2023"
            achievements={["Did work"]}
          /> */}
        </div>
      </Group>
    </section>
  );
};
