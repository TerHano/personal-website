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
        direction="vertical"
        className="items-center justify-center gap-10 pb-28"
      >
        <Group
          direction="vertical"
          className="items-center justify-center gap-2 mx-8 "
        >
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
              startContent={<IconFileCv />}
              href="https://drive.google.com/file/d/1J9eqBIZKGyW_sX6upgbHkXtYd9ccgf-d/view"
              variant="flat"
              size="md"
            >
              Resume
            </Button>
          </Animate>

          <Animate animation="fade-in-up" delay={400}>
            <Group className="items-center gap-2">
              <Button
                color="warning"
                size="md"
                startContent={<IconBriefcase size={14} />}
                variant="flat"
                onPress={() => scrollToSection("experience")}
              >
                Experience
              </Button>
              <Button
                size="md"
                color="primary"
                startContent={<IconArrowDownRight size={14} />}
                variant="flat"
                onPress={() => scrollToSection("projects")}
              >
                Projects
              </Button>
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
