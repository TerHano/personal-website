export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Terry Hanoman",
  role: "Software Engineer III",
  company: "CoStar Group",
  location: "Burlington Township, NJ",
  description:
    "Software engineer building React and Angular applications backed by .NET, Java, and cloud APIs.",
  summary:
    "Software engineer with 4+ years building React and Angular applications backed by .NET, Java, and cloud APIs, with recent focus on AI-powered document processing using AWS Bedrock and Textract. I lead UI modernization work, build reusable component libraries, and integrate third-party data platforms to automate real estate and lease management workflows.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
  ],
  education: [
    {
      school: "Rutgers University",
      degree: "B.S. in Computer Science, Minor in Mathematics",
      graduationDate: "May 2019",
      location: "New Brunswick, NJ",
    },
  ],
  experience: [
    {
      jobTitle: "Software Engineer III",
      companyName: "CoStar Group",
      formerly: "Visual Lease",
      startDate: "9/1/2023",
      location: "Woodbridge, NJ",
      achievements: [
        "Revamped the Visual Lease app with React 18, working from Figma design mocks for a modern UI",
        "Created a component library from scratch that eased new page and feature development for engineers and guaranteed web accessibility for users",
        "Built an AI-powered parsing solution with AWS Textract and Bedrock that extracts tenant names, lease terms, rent amounts, property addresses, and renewal options from unstructured PDFs and scanned images",
        "Reduced a multi-step manual lease abstraction process to near-zero touch, automatically processing hundreds of customer leases to date",
        "Engineered APIs integrating Arcadia (Energy Data Platform) and AWS to streamline customer lease data into the platform",
      ],
    },
    {
      jobTitle: "Software Engineer II",
      companyName: "CoStar Group",
      formerly: "Visual Lease",
      startDate: "4/1/2022",
      endDate: "9/1/2023",
      location: "Woodbridge, NJ",
      achievements: [
        "Enhanced the Visual Lease application by creating new feature pages using Angular and supporting them with .NET APIs",
        "Improved financial report processing by 80% by introducing multi-threading, increasing performance and user satisfaction",
        "Mentored junior engineers on best coding practices and design patterns to elevate code quality and accelerate team development",
      ],
    },
    {
      jobTitle: "Senior Technology Professional",
      companyName: "Public Service Enterprise Group",
      startDate: "1/1/2021",
      endDate: "3/1/2022",
      location: "Newark, NJ",
      achievements: [
        "Upgraded the Sitecore CMS platform from 8.2 to 10.1 and transitioned infrastructure from IaaS to PaaS for better scalability and cost efficiency",
        "Integrated build and release pipelines to automate the build and deployment of .NET code to different Azure app services",
        "Developed and deployed APIs through AWS Lambda, giving backend services an event-driven architecture",
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
        "Developed the PSEG website using the ASP.NET framework with content driven from Sitecore",
        "Re-engineered and optimized workflows leading to a 40% reduction in IT labor",
        "Created analytical reports to analyze and improve customer satisfaction",
        "Created forms that replace traditional pen and paper applications for more efficient processing",
        "Developed Java web applications using Spring Boot to perform lifecycle operations on users via Okta APIs and SAP connectivity",
        "Fixed 100+ defects while also incorporating enhancements to improve the user experience",
      ],
    },
  ],

  projects: [
    {
      name: "Werewolf Party",
      description:
        "A companion app for playing the social deduction game in person",
      subDescription:
        "One person opens a room, everyone joins on their own phone with a five-character code, and the app deals the secret roles. The moderator gets a guided night-by-night panel: step through each role's call, queue the actions, end the night, and see who died once heals, kills, and revives resolve. Game rules live entirely on the server, so the client only renders what the server says is legal.",
      technologies: ["React", "SignalR", ".NET"],
      imageSrc: "https://werewolfparty.terhano.com/rich-preview.png",
      link: "https://werewolfparty.terhano.com",
    },
    {
      name: "Car Theater",
      imageSrc:
        "https://images.unsplash.com/photo-1553260188-75a8d6205b6c?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A full-screen media hub designed for an immersive in-car experience",
      link: "https://cartheater.terhano.com",
      subDescription:
        "Movies, music, and entertainment in a streamlined interface optimized for Tesla displays.",
      technologies: ["React"],
    },
    {
      name: "EntryAlert",
      imageSrc:
        "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A tracker and alert platform for faster Global Entry interview scheduling",
      link: "https://entryalert.terhano.com",
      subDescription:
        "Monitors appointment openings in real time and notifies you when interview slots become available.",
      technologies: ["React", ".NET", "Quartz", "Discord Webhooks", "JWT Auth"],
    },
  ],

  toolkit: [
    {
      label: "Certification",
      items: ["Sitecore Experience Solution 9 Developer"],
      highlight: true,
    },
    {
      label: "Languages",
      items: [
        "React",
        "Angular",
        "TypeScript",
        "C#",
        ".NET",
        "Java",
        "Spring",
        "SQL",
      ],
    },
    {
      label: "Cloud & AI",
      items: [
        "AWS Bedrock",
        "AWS Textract",
        "AWS Lambda",
        "Azure",
        "Okta",
        "SAP",
      ],
    },
    {
      label: "Practices",
      items: [
        "Figma",
        "Selenium",
        "Git",
        "Multi-threading",
        "Web accessibility",
      ],
    },
    {
      label: "Away from work",
      items: ["Reading", "Video games", "Volunteering", "Playing music"],
    },
  ],

  resumeUrl: "/Terry_Hanoman_Resume_2026.pdf",

  links: {
    email: "terry.hanoman@outlook.com",
    github: "https://github.com/TerHano",
    linkedIn: "https://www.linkedin.com/in/terry-hanoman-90039b119/",
  },
};
