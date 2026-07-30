import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
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

const sections = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Toolkit", href: "#toolkit" },
];

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
      className={`border-b transition-colors duration-300 ${
        isScrolled
          ? "border-rule bg-paper/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
      maxWidth="lg"
    >
      <NavbarBrand>
        <a
          className="font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-teal"
          href="#top"
        >
          {siteConfig.name}
        </a>
      </NavbarBrand>

      <NavbarContent className="hidden gap-6 sm:flex" justify="center">
        {sections.map((section) => (
          <NavbarItem key={section.href}>
            <a
              className="font-mono text-xs text-muted transition-colors hover:text-teal"
              href={section.href}
            >
              {section.label}
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Magnetic strength={10}>
            <Link
              isExternal
              aria-label="Email Terry"
              className="text-muted transition-colors hover:text-teal"
              href={`mailto:${siteConfig.links.email}`}
            >
              <IconMailbox size={20} />
            </Link>
          </Magnetic>
        </NavbarItem>
        <NavbarItem>
          <Magnetic strength={10}>
            <Link
              isExternal
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-teal"
              href={siteConfig.links.linkedIn}
            >
              <IconBrandLinkedin size={20} />
            </Link>
          </Magnetic>
        </NavbarItem>
        <NavbarItem>
          <Magnetic strength={10}>
            <Link
              isExternal
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-teal"
              href={siteConfig.links.github}
            >
              <IconBrandGithub size={20} />
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
