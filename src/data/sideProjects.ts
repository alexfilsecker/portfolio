import skills, { SkillInfo } from "./skills";

export type SideProjectInfo = {
  title: string;
  description: string;
  imagePath: string;
  skills: SkillInfo[];
  link: string;
  samePage?: boolean;
  source: string;
};

export const sideProjects: SideProjectInfo[] = [
  {
    title: "This Portfolio",
    description:
      "This portfolio is hosted on my own Droplet in Digital Ocean on a Docker container. It has it's own domain alexfilsecker.com. Made using Next.js and the mailing part uses Mailjet.",
    imagePath: "portfolio.png",
    skills: [
      skills.tailwind,
      skills.next,
      skills.css,
      skills.typescript,
      skills.digitalOcean,
      skills.mailjet,
      skills.docker,
      skills.cloudflare,
    ],
    link: "/",
    samePage: true,
    source: "",
  },
  {
    title: "2048",
    description:
      'A copy of the game "2048" using React.js with typescript and custom CSS. Hosted in Google Firebase.',
    imagePath: "2048.png",
    skills: [skills.react, skills.typescript, skills.css, skills.firebase],
    link: "https://a-2048.web.app/",
    source: "https://github.com/alexfilsecker/2048",
  },
  {
    title: "Hangman",
    description: "A basic hangman game using React.js and custom CSS.",
    imagePath: "hangman.png",
    skills: [skills.react, skills.typescript, skills.css, skills.firebase],
    link: "https://hangman-f8613.web.app/",
    source: "https://github.com/alexfilsecker/Hangman/",
  },
];
