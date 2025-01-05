import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "intent-career",
    title: "Intent-Career",
    description:
      "A job matching system for engineers and talents in Japan and abroad.",
    icon: "/skills/dotnet.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "https://github.com/max-ray001/HR-System",
    url: "#",
    tags: ["Asp.Net Core", "SQL Server", "PWA", "Stripe", "Sendgrid"],
  },
  {
    id: "casino-game",
    title: "Casino Game",
    description:
      "A mobile game application for android and iOS developed by Flutter.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "https://github.com/max-ray001/monorepo",
    url: "#",
    tags: ["Flutter", "Dart", "Riverpod", "Socket"],
  },
  {
    id: "web-groupware",
    title: "Web Groupware",
    description:
      "A groupware system for inner business management of companies.",
    icon: "/skills/dotnet.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "https://github.com/max-ray001/AST-GROUPWARE",
    url: "https://github.com/max-ray001#",
    tags: ["Asp.Net Core", "SQL Server", "Bootstrap", "IIS", "Full Calendar"],
  },
  {
    id: "sauna-booking-system",
    title: "Sauna Booking System",
    description:
      "An Asp.Net based Booking System integrated with Google Calendar and Stripe.",
    icon: "/skills/dotnet.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "https://github.com/max-ray001/sauna-reservation",
    url: "https://github.com/max-ray001#",
    tags: ["Asp.Net Core", "SQL Server", "Google Calendar", "Stripe"],
  },
  {
    id: "aisle-school",
    title: "Aisle Meet",
    description:
      "A Jitsi-Meet based WebRTC application for online lesson.",
    icon: "/skills/jitsi.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/max-ray001/aisle-meet-electron",
    url: "https://meet.aisleschool.co.jp",
    tags: ["Jitsi-Meet", "React", "Electron", "Nginx", "Ubuntu"],
  },
  {
    id: "travel-booking-system",
    title: "Travel Booking System",
    description:
      "A Travel Booking System built by React, Node.js and MongoDB.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/max-ray001/travel-booking",
    url: "https://github.com/max-ray001#",
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  },
  {
    id: "drug-simulation-system",
    title: "Drug Simulation System",
    description:
      "A drug simulation system for a Japanese pharmaceutical company developed by MERN structure",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/max-ray001/drug-simulation",
    url: "https://github.com/max-ray001#",
    tags: ["React", "Node.js", "MongoDB", "React-Redux"],
  },
  {
    id: "ai-hanako",
    title: "AI-Hanako",
    description:
      "AI image generating service's homepage developed by Next.js",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.JobWork,
    githubUrl: "https://github.com/max-ray001/ai-hanako",
    url: "https://ai-hanako.vercel.app/",
    tags: ["Next.js", "Sass", "Website"],
  },
  {
    id: "aifx",
    title: "AIFX-LP/HP",
    description:
      "A landing page for a company that provides AI service for successful blockchain trading.",
    icon: "/skills/bootstrap.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/max-ray001/bitrater",
    url: "https://bitrater.vercel.app/",
    tags: ["Landing Page", "Website", "Bootstrap"],
  },
  {
    id: "chatcraft",
    title: "Chatcraft",
    description:
      "A landing page for a service that generates social media contents in seconds utilizing the AI.",
    icon: "/skills/bootstrap.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/max-ray001/chatcraft",
    url: "https://chatcraft-theta.vercel.app/",
    tags: ["Landing Page", "Website", "Bootstrap"],
  },
  {
    id: "necomeme",
    title: "Neco Meme",
    description:
      "A landing page for a Necomeme token developed by HTML and CSS.",
    icon: "/skills/html.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/max-ray001/nekomeme",
    url: "https://nekomeme.vercel.app/",
    tags: ["Landing Page", "Website", "HTML", "CSS"],
  },
];
export default projects;
