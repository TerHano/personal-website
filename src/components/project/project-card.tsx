import { Card, CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useState } from "react";
import {
  IconBrandReact,
  IconClock,
  IconLock,
  IconServer,
} from "@tabler/icons-react";
import { Button } from "@heroui/button";

import { DiscordIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Magnetic } from "@/components/magnetic";

type ProjectCardProps = (typeof siteConfig.projects)[0];

const technologyColorMap: Record<
  string,
  "default" | "primary" | "secondary" | "success" | "warning" | "danger"
> = {
  React: "primary",
  SignalR: "secondary",
  ".NET": "success",
  Quartz: "warning",
  "Discord Webhooks": "secondary",
  "JWT Auth": "danger",
};

const getTechnologyIcon = (technology: string) => {
  switch (technology) {
    case "React":
      return <IconBrandReact size={14} />;
    case "SignalR":
      return <IconServer size={14} />;
    case ".NET":
      return <IconServer size={14} />;
    case "Quartz":
      return <IconClock size={14} />;
    case "Discord Webhooks":
      return <DiscordIcon size={14} />;
    case "JWT Auth":
      return <IconLock size={14} />;
    default:
      return <IconServer size={14} />;
  }
};

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
      <Card
        isFooterBlurred
        isPressable
        className="group w-full h-[220px] col-span-1 overflow-hidden border border-default-200/70 dark:border-default-100/15 transition-transform duration-300 ease-out hover:-translate-y-1"
        onClick={() => setIsOpen(true)}
      >
        <Image
          alt="Project Image"
          className="z-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          src={imageSrc ?? "https://heroui.com/images/card-example-5.jpeg"}
        />
        <CardFooter className="absolute bg-black/45 backdrop-blur-md bottom-0 z-10 border-t-1 border-white/10 w-full">
          <div className="flex flex-grow gap-2 items-center truncate">
            <div className="flex flex-col text-start">
              <p className="text-sm font-semibold text-white/90">{name}</p>
              <p className="text-tiny  text-white/60">{description}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        placement="center"
        scrollBehavior="inside"
        size="2xl"
        onOpenChange={(open) => setIsOpen(open)}
      >
        <ModalContent className="border border-default-200/70 dark:border-default-100/20">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-center">
                    <Image
                      alt={`${name} preview`}
                      className="max-w-md"
                      src={imageSrc}
                      width={420}
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-default-800 text-center">
                    {description}
                  </p>
                  {subDescription ? (
                    <p className="text-sm leading-relaxed text-default-500 text-center">
                      {subDescription}
                    </p>
                  ) : null}
                  {technologies?.length ? (
                    <div className="flex flex-wrap gap-2 justify-center">
                      {technologies.map((technology) => (
                        <Chip
                          key={technology}
                          color={technologyColorMap[technology] ?? "default"}
                          size="sm"
                          startContent={getTechnologyIcon(technology)}
                          variant="flat"
                        >
                          {technology}
                        </Chip>
                      ))}
                    </div>
                  ) : null}
                </div>
              </ModalBody>
              <ModalFooter>
                <Magnetic strength={10}>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </Magnetic>

                <Magnetic strength={10}>
                  <Button
                    showAnchorIcon
                    as={Link}
                    color="primary"
                    //endContent={<IconExternalLink />}
                    href={link}
                    target="_blank"
                  >
                    Visit
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
