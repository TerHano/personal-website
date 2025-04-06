import { siteConfig } from "@/config/site";
import { Card, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

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
      {/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-white/90 font-medium text-xl">{name}</h4>
      </CardHeader> */}
      <Image
        alt="Relaxing app background"
        className="z-0 w-full object-cover"
        src={imageSrc ?? "https://heroui.com/images/card-example-5.jpeg"}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          {/* <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="https://heroui.com/images/breathing-app-icon.jpeg"
          /> */}
          <div className="flex flex-col">
            <p className="text-sm text-white/80">{name}</p>
            <p className="text-tiny text-white/60">{description}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
