import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import {
  IconArrowDownRight,
  IconBriefcase,
  IconFileCv,
} from "@tabler/icons-react";
import { Link } from "@heroui/link";
import { useCallback } from "react";

import SelfImage from "@/assets/self-photo.jpeg";
import { CompanyShowcase } from "@/components/company-showcase";
import DefaultLayout from "@/layouts/default";
import { BlackWhiteGradientText } from "@/components/black-white-gradient-text";
import { Animate } from "@/components/animate";
import { ProjectSection } from "@/components/project/project-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { Group } from "@/components/layout/Group";

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
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex items-center justify-center flex-col gap-2 mx-8 ">
          <Animate
            animation="fade-in-up"
            className="flex flex-col items-center gap-2"
          >
            <Avatar
              isBordered
              color="default"
              className="w-20 h-20"
              src={SelfImage}
            />
            <div className="flex items-center gap-2">
              <BlackWhiteGradientText
                className="font-bold text-sm"
                label="Hey, I'm Terry Hanoman"
              />
              <span className="text-sm">👋</span>
            </div>
          </Animate>
          <Animate animation="fade-in-up" className="text-center" delay={200}>
            <BlackWhiteGradientText
              className="font-bold text-xl sm:text-2xl md:text-3xl "
              label="An Experienced Software Engineer and Developer with a Passion for Building Innovative Solutions"
            />
          </Animate>
          <Animate animation="fade-in-up" className="text-center" delay={200}>
            <Button
              as={Link}
              target="_blank"
              color="danger"
              endContent={<IconFileCv />}
              href="https://drive.google.com/file/d/1J9eqBIZKGyW_sX6upgbHkXtYd9ccgf-d/view"
              variant="flat"
            >
              Resume
            </Button>
          </Animate>

          <Animate animation="fade-in-up" delay={400}>
            <Group className="items-center gap-2">
              <Button
                color="warning"
                size="sm"
                endContent={<IconBriefcase size={14} />}
                variant="flat"
                onPress={() => scrollToSection("experience")}
              >
                Experience
              </Button>
              <Button
                size="sm"
                color="primary"
                endContent={<IconArrowDownRight size={14} />}
                variant="flat"
                onPress={() => scrollToSection("projects")}
              >
                Projects
              </Button>
            </Group>
          </Animate>
        </div>
        <CompanyShowcase />
        <ExperienceSection />
        <ProjectSection />
      </div>
    </DefaultLayout>
  );
}
