import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMailbox,
} from "@tabler/icons-react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl">
      {/* <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <IconFaceMask />
            <p className="font-bold text-inherit">ACME</p>
          </Link>
        </NavbarBrand>
      </NavbarContent> */}

      <NavbarContent justify="end">
        <NavbarItem>
          <Link isExternal href={`mailto:${siteConfig.links.email}`}>
            <IconMailbox className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link isExternal href={siteConfig.links.linkedIn}>
            <IconBrandLinkedin className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <IconBrandGithub className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
