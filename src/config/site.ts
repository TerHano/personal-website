export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Terry Hanoman",
  description: "Personal Site",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
  ],
  experience: [
    {
      jobTitle: "Software Engineer III",
      companyName: "Visual Lease",
      startDate: "9/1/2023",
      location: "Woodbridge, NJ",
      achievements: [
        "Redesigned the Visual Lease application using React 18 and implemented design mocks crafted in Figma",
        "Developed a component library that eased new page/feature development for engineers and guaranteed web accessibility for users",
        "Built API’s that interact with Arcadia (Energy Data Platform) to enhance customer lease data integration into the platform.",
      ],
    },
    {
      jobTitle: "Software Engineer II",
      companyName: "Visual Lease",
      startDate: "4/1/2022",
      endDate: "9/1/2023",
      location: "Woodbridge, NJ",
      achievements: [
        "Enhanced the Visual Lease application by creating new feature pages using Angular and supporting them with .NET API’s",
        "Improved financial report processing by 80% introducing multi-threading, increasing performance and user satisfaction",
        "Mentored juniors on best coding practices and design patterns",
      ],
    },
    {
      jobTitle: "Senior Technology Professional",
      companyName: "Public Service Enterprise Group",
      startDate: "1/1/2021",
      endDate: "3/1/2022",
      location: "Newark, NJ",
      achievements: [
        "Upgraded the Sitecore CMS platform from 8.2 to 10.1 and transitioned from IaaS to PaaS",
        "Integrated build and release pipelines to automate the build and deployment of .NET code to different Azure app services",
        ,
        "Developed and deployed API’s through AWS Lambda",
        "Wrote test cases using Selenium to ensure the stability of the website before each release",
      ],
    },
    {
      jobTitle: "Technology Professional",
      companyName: "Public Service Enterprise Group",
      startDate: "7/19/2019",
      endDate: "12/1/2020",
      location: "Newark, NJ",
      achievements: [
        "Developed the PSEG website using the ASP .NET framework and content driven from Sitecore",
        "Re-engineered and optimized workflows leading to a 40% reduction in IT labor",
        "Created analytical reports to analyze and improve customer satisfaction",
        "Created forms that replace traditional pen and paper applications for more efficient processing",
        "Developed Java web applications using the Spring Boot framework to perform the necessary lifecycle operations on users using OKTA API’s and SAP connectivity",
        "Fixed 100+ defects while also incorporating enhancements to improve the user experience",
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
      imageSrc:
        "https://images.unsplash.com/photo-1553260188-75a8d6205b6c?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Full Screen Media Apps In Your Tesla",
      link: "https://cartheater.terhano.com",
      subDescription: "Watch movies, listen to music, and more.",
    },
    {
      name: "EntryAlert",
      imageSrc:
        "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Global Entry Interview Tracker and Alert System",
      link: "https://entryalert.terhano.com",
      subDescription:
        "Track your Global Entry interview status and get alerts.",
    },
  ],
  links: {
    email: "hireme@terhano.com",
    github: "https://github.com/TerHano",
    linkedIn: "https://www.linkedin.com/in/terry-hanoman-90039b119/",
  },
};
