import { Card, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";

type ProjectCardProps = (typeof siteConfig.projects)[0];

export const ProjectCard = ({
  name,
  imageSrc,
  link,
  description,
}: ProjectCardProps) => {
  return (
    <Card
      isFooterBlurred
      isPressable
      as={Link}
      className="w-full h-[200px] col-span-1"
      href={link}
    >
      <Image
        alt="Project Image"
        className="z-0 w-full object-contain"
        src={imageSrc ?? "https://heroui.com/images/card-example-5.jpeg"}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-sm text-white/80">{name}</p>
            <p className="text-tiny text-white/60">{description}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
