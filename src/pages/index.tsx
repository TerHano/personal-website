import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { IconArrowDownRight, IconFileCv } from "@tabler/icons-react";

import SelfImage from "@/assets/self-photo.jpeg";
import { CompanyShowcase } from "@/components/company-showcase/company-showcase";
import DefaultLayout from "@/layouts/default";
import { Animate } from "@/components/animate";
import { ProjectSection } from "@/components/project/project-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { EducationSection } from "@/components/education-section";
import { ToolkitSection } from "@/components/toolkit-section";
import { Display, Eyebrow } from "@/components/typography";
import { Magnetic } from "@/components/magnetic";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-16 pb-20 sm:gap-24">
        <header className="flex flex-col gap-6 pt-6 sm:pt-10">
          <Animate animation="fade-in" className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <img
                alt="Terry Hanoman"
                className="h-14 w-14 rounded-sm border border-rule object-cover grayscale-[0.15]"
                src={SelfImage}
              />
              <div className="flex flex-col">
                <Eyebrow>
                  {siteConfig.role} · {siteConfig.company}
                </Eyebrow>
                <Eyebrow tone="muted">{siteConfig.location}</Eyebrow>
              </div>
            </div>

            <Display
              as="h1"
              className="text-[clamp(2.75rem,8.5vw,4.75rem)] leading-[0.98] tracking-[-0.03em]"
            >
              {siteConfig.name}
            </Display>
          </Animate>

          <Animate animation="fade-in-up" delay={150}>
            <p className="max-w-[64ch] font-display text-[clamp(1.0625rem,2.3vw,1.3125rem)] leading-[1.55] text-ink-soft text-pretty">
              Software engineer with 4+ years building React and Angular
              applications backed by .NET, Java, and cloud APIs, with recent
              focus on AI-powered document processing using AWS Bedrock and
              Textract. I lead UI modernization work, build reusable component
              libraries, and integrate third-party data platforms to automate
              real estate and lease management workflows.
            </p>
          </Animate>

          <Animate animation="fade-in-up" delay={300}>
            <div className="flex flex-wrap items-center gap-2.5">
              <Magnetic strength={10}>
                <Button
                  as={Link}
                  className="rounded-sm border border-teal bg-teal-soft font-mono text-xs text-teal"
                  href={`mailto:${siteConfig.links.email}`}
                  size="md"
                  variant="flat"
                >
                  {siteConfig.links.email}
                </Button>
              </Magnetic>
              <Magnetic strength={10}>
                <Button
                  as={Link}
                  className="rounded-sm border border-rule bg-raised font-mono text-xs text-ink-soft"
                  href={siteConfig.resumeUrl}
                  size="md"
                  startContent={<IconFileCv size={15} />}
                  target="_blank"
                  variant="flat"
                >
                  Résumé PDF
                </Button>
              </Magnetic>
              <Magnetic strength={10}>
                <Button
                  as={Link}
                  className="rounded-sm border border-rule bg-raised font-mono text-xs text-ink-soft"
                  href="#projects"
                  size="md"
                  startContent={<IconArrowDownRight size={15} />}
                  variant="flat"
                >
                  Projects
                </Button>
              </Magnetic>
            </div>
          </Animate>
        </header>

        <CompanyShowcase />
        <ProjectSection />
        <ExperienceSection />
        <EducationSection />
        <ToolkitSection />
      </div>
    </DefaultLayout>
  );
}
