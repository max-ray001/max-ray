import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      },
      {
        title: "C#",
        level: SkillLevel.Intermediate,
        icon: "/skills/csharp.svg",
      },
      {
        title: "Python",
        level: SkillLevel.Intermediate,
        icon: "/skills/python.svg",
      },
      {
        title: "PHP",
        level: SkillLevel.Intermediate,
        icon: "/skills/php.svg",
      },
      {
        title: "Dart",
        level: SkillLevel.Expert,
        icon: "/skills/dart.svg",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "Vue.js",
        level: SkillLevel.Expert,
        icon: "/skills/vuejs.svg",
      },
      {
        title: "Bootstrap",
        level: SkillLevel.Intermediate,
        icon: "/skills/bootstrap.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "SASS",
        level: SkillLevel.Intermediate,
        icon: "/skills/sass.svg",
      },
      {
        title: "Tailwind CSS",
        level: SkillLevel.Expert,
        icon: "/skills/tailwindcss.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Express.js",
        level: SkillLevel.Expert,
        icon: "/skills/express.svg",
      },
      {
        title: "ASP.NET",
        level: SkillLevel.Intermediate,
        icon: "/skills/dotnet.svg",
      },
      {
        title: "Django",
        level: SkillLevel.Beginner,
        icon: "/skills/django.svg",
      },
      {
        title: "Laravel",
        level: SkillLevel.Beginner,
        icon: "/skills/laravel.svg",
      },
      {
        title: "Nest.js",
        level: SkillLevel.Beginner,
        icon: "/skills/nestjs.svg",
      },
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      {
        title: "Flutter",
        level: SkillLevel.Expert,
        icon: "/skills/flutter.svg",
      },
      {
        title: "Riverpod",
        level: SkillLevel.Expert,
        icon: "/skills/riverpod.png",
      },
      {
        title: "GetX",
        level: SkillLevel.Expert,
        icon: "/skills/getx.png",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "SQL Server",
        level: SkillLevel.Intermediate,
        icon: "/skills/sqlserver.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Beginner,
        icon: "/skills/mysql.svg",
      },
      {
        title: "SQLite",
        level: SkillLevel.Beginner,
        icon: "/skills/sqlite.svg",
      },
    ],
  },
  {
    title: "DevOps/VCS",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Beginner,
        icon: "/skills/docker.png",
      },
      {
        title: "Azure",
        level: SkillLevel.Intermediate,
        icon: "/skills/azure.svg",
      },
      {
        title: "AWS",
        level: SkillLevel.Intermediate,
        icon: "/skills/aws.svg",
      },
      {
        title: "Jira",
        level: SkillLevel.Intermediate,
        icon: "/skills/jira.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
      {
        title: "GitLab",
        level: SkillLevel.Expert,
        icon: "/skills/gitlab.svg",
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        title: "Firebase",
        level: SkillLevel.Intermediate,
        icon: "/skills/firebase.svg",
      },
      {
        title: "Ubuntu",
        level: SkillLevel.Intermediate,
        icon: "/skills/ubuntu.png",
      },
      {
        title: "Jitsi",
        level: SkillLevel.Intermediate,
        icon: "/skills/jitsi.svg",
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;
