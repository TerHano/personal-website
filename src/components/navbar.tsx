import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { useEffect, useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMailbox,
} from "@tabler/icons-react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Magnetic } from "@/components/magnetic";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <HeroUINavbar
      className={`transition-all duration-300 border-b ${
        isScrolled
          ? "bg-default-100/65 dark:bg-default-100/10 backdrop-blur-xl border-default-200/70 dark:border-default-100/20"
          : "bg-transparent border-transparent"
      }`}
      maxWidth="xl"
    >
      <NavbarContent justify="end">
        <NavbarItem>
          <Magnetic strength={10}>
            <Link
              isExternal
              className="transition-transform duration-200 hover:-translate-y-0.5"
              href={`mailto:${siteConfig.links.email}`}
            >
              <IconMailbox className="text-default-500" />
            </Link>
          </Magnetic>
        </NavbarItem>
        <NavbarItem>
          <Magnetic strength={10}>
            <Link
              isExternal
              className="transition-transform duration-200 hover:-translate-y-0.5"
              href={siteConfig.links.linkedIn}
            >
              <IconBrandLinkedin className="text-default-500" />
            </Link>
          </Magnetic>
        </NavbarItem>
        <NavbarItem>
          <Magnetic strength={10}>
            <Link
              isExternal
              className="transition-transform duration-200 hover:-translate-y-0.5"
              href={siteConfig.links.github}
              title="GitHub"
            >
              <IconBrandGithub className="text-default-500" />
            </Link>
          </Magnetic>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
