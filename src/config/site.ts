export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  experience: [
    {
      jobTitle: "Software Engineer III",
      companyName: "Visual Lease",
      startDate: "September 2023",
      achievements: [
        "Redesigned the Visual Lease application using React 18",
        "Developed a component library that eased new page/feature development for engineers and guaranteed web accessibility for users",
        "Built API’s that interact with Arcadia (Energy Data Platform) to enhance customer lease data integration into the platform.",
      ],
    },
    {
      jobTitle: "Software Engineer II",
      companyName: "Visual Lease",
      startDate: "April 2022",
      endDate: "September 2023",
      achievements: [
        "Did stuff Did stuff Did stuff Did stuff Did stuff Did stuff Did stuff",
        "Coded things",
      ],
    },
  ],

  projects: [
    {
      name: "Werewolf Party",
      description: "Cards for a party game full of lies, deceit, & accusations",
      subDescription: "Join friends and family for a thrilling experience.",
      imageSrc: "https://werewolfparty.terhano.com/rich-preview.png",
      link: "https://werewolfparty.terhano.com",
    },
    {
      name: "Car Theater",
      description: "Full Screen Media Apps In Your Tesla",
      link: "https://cartheater.terhano.com",
      subDescription: "Watch movies, listen to music, and more.",
    },
  ],
  links: {
    github: "https://github.com/TerHano",
    linkedIn: "https://www.linkedin.com/in/terry-hanoman-90039b119/",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
