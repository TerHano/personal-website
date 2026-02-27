import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import {
  IconArrowDownRight,
  IconBriefcase,
  IconFileCv,
} from "@tabler/icons-react";
import { Link } from "@heroui/link";
import { useCallback } from "react";
import { Divider } from "@heroui/divider";

import SelfImage from "@/assets/self-photo.jpeg";
import { CompanyShowcase } from "@/components/company-showcase/company-showcase";
import DefaultLayout from "@/layouts/default";
import { BlackWhiteGradientText } from "@/components/black-white-gradient-text";
import { Animate } from "@/components/animate";
import { ProjectSection } from "@/components/project/project-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { Group } from "@/layouts/Group";
import { EducationSection } from "@/components/education-section";
import { Magnetic } from "@/components/magnetic";

export default function IndexPage() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 60;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  return (
    <DefaultLayout>
      <Group
        className="items-center justify-center gap-10 pb-28"
        direction="vertical"
      >
        <Group
          className="relative isolate items-center justify-center gap-3 mx-4 sm:mx-8 rounded-3xl px-4 py-6 sm:px-10 sm:py-10 overflow-hidden"
          direction="vertical"
        >
          <div className="absolute -top-20 -left-14 h-44 w-44 rounded-full bg-primary-300/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-10 h-52 w-52 rounded-full bg-warning-300/20 blur-3xl" />

          <Animate
            animation="scale-in"
            className="flex flex-col items-center gap-2"
          >
            <Avatar
              isBordered
              className="w-20 h-20 animate-float"
              color="default"
              radius="lg"
              src={SelfImage}
            />
            <div className="flex items-center gap-2 rounded-full border border-default-200/80 dark:border-default-100/20 bg-default-100/40 dark:bg-default-100/10 px-3 py-1 backdrop-blur-sm">
              <BlackWhiteGradientText
                className="font-bold text-sm"
                label="Hey, I'm Terry Hanoman"
              />
              <span className="text-sm">👋</span>
            </div>
          </Animate>
          <Animate
            animation="fade-in-up"
            className="text-center max-w-4xl"
            delay={200}
          >
            <BlackWhiteGradientText
              className="font-bold text-2xl sm:text-3xl md:text-5xl leading-tight"
              label="An Experienced Software Engineer and Developer with a Passion for Building Innovative Solutions"
            />
          </Animate>
          <Animate animation="fade-in" className="text-center" delay={350}>
            <Magnetic>
              <Button
                as={Link}
                color="danger"
                className="font-semibold"
                href="https://drive.google.com/file/d/1J9eqBIZKGyW_sX6upgbHkXtYd9ccgf-d/view"
                size="md"
                startContent={<IconFileCv />}
                target="_blank"
                variant="flat"
              >
                Resume
              </Button>
            </Magnetic>
          </Animate>

          <Animate animation="fade-in-up" delay={500}>
            <Group className="items-center gap-2">
              <Magnetic>
                <Button
                  color="warning"
                  className="font-medium"
                  size="md"
                  startContent={<IconBriefcase size={14} />}
                  variant="flat"
                  onPress={() => scrollToSection("experience")}
                >
                  Experience
                </Button>
              </Magnetic>
              <Magnetic>
                <Button
                  color="primary"
                  className="font-medium"
                  size="md"
                  startContent={<IconArrowDownRight size={14} />}
                  variant="flat"
                  onPress={() => scrollToSection("projects")}
                >
                  Projects
                </Button>
              </Magnetic>
            </Group>
          </Animate>
        </Group>
        <CompanyShowcase />
        <EducationSection />
        <Divider className="w-11/12" />
        <ExperienceSection />
        <Divider className="w-11/12" />
        <ProjectSection />
      </Group>
    </DefaultLayout>
  );
}
