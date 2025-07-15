import { Card, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { useState } from "react";
import { Button } from "@heroui/button";
import { IconExternalLink } from "@tabler/icons-react";

import { siteConfig } from "@/config/site";

type ProjectCardProps = (typeof siteConfig.projects)[0];

export const ProjectCard = ({
  name,
  imageSrc,
  link,
  description,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        isFooterBlurred
        isPressable
        // as={Button}
        className="w-full h-[200px] col-span-1"
        onClick={() => setIsOpen(true)}
      >
        <Image
          alt="Project Image"
          className="z-0 w-full"
          src={imageSrc ?? "https://heroui.com/images/card-example-5.jpeg"}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center truncate">
            <div className="flex flex-col text-start">
              <p className="text-sm text-white/80">{name}</p>
              <p className="text-tiny  text-white/60">{description}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
      <Drawer
        backdrop="blur"
        isOpen={isOpen}
        placement="bottom"
        radius="sm"
        onOpenChange={(open) => setIsOpen(open)}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                {name}
              </DrawerHeader>
              <DrawerBody>
                <div className="flex flex-col gap-4 justify-center items-center">
                  <Image src={imageSrc} width={400} />
                  <p>{description}</p>
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  as={Link}
                  color="primary"
                  endContent={<IconExternalLink />}
                  href={link}
                  target="_blank"
                >
                  Visit
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
