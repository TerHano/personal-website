import { Link } from "@heroui/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useState } from "react";
import { Button } from "@heroui/button";

import { Display } from "@/components/typography";
import { siteConfig } from "@/config/site";
import { Magnetic } from "@/components/magnetic";

type ProjectCardProps = (typeof siteConfig.projects)[0];

export const ProjectCard = ({
  name,
  imageSrc,
  link,
  description,
  subDescription,
  technologies,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="group flex h-full w-full flex-col overflow-hidden rounded-sm border border-rule bg-raised text-left transition-colors duration-200 hover:border-teal"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-[16/10] w-full overflow-hidden border-b border-rule bg-paper">
          <img
            alt={`${name} preview`}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
            src={imageSrc}
          />
        </div>

        <div className="flex flex-1 flex-col gap-1.5 p-4">
          <Display className="text-lg">{name}</Display>
          <p className="text-sm text-ink-soft text-pretty">{description}</p>

          {technologies?.length ? (
            <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-sm border border-rule px-2 py-0.5 font-mono text-[0.6875rem] text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </button>

      <Modal
        backdrop="blur"
        isOpen={isOpen}
        placement="center"
        scrollBehavior="inside"
        size="2xl"
        onOpenChange={(open) => setIsOpen(open)}
      >
        <ModalContent className="rounded-sm border border-rule bg-raised">
          {(onClose) => (
            <>
              <ModalHeader className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                {name}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <img
                    alt={`${name} preview`}
                    className="w-full rounded-sm border border-rule object-cover"
                    src={imageSrc}
                  />
                  <p className="font-display text-lg leading-relaxed text-ink-soft text-pretty">
                    {description}
                  </p>
                  {subDescription ? (
                    <p className="text-sm leading-relaxed text-ink-soft text-pretty">
                      {subDescription}
                    </p>
                  ) : null}
                  {technologies?.length ? (
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-sm border border-rule px-2.5 py-1 font-mono text-xs text-ink-soft"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="rounded-sm font-mono text-xs text-muted"
                  variant="light"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Magnetic strength={10}>
                  <Button
                    as={Link}
                    className="rounded-sm border border-teal bg-teal-soft font-mono text-xs text-teal"
                    href={link}
                    rel="noopener"
                    target="_blank"
                    variant="flat"
                  >
                    Visit site ↗
                  </Button>
                </Magnetic>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
