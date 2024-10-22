import skills, { SkillInfo } from "./skills";

export type SideProjectInfo = {
  title: string;
  description: string;
  imagePath: string;
  skills: SkillInfo[];
  link: string;
  source: string;
};

export const sideProjects: SideProjectInfo[] = [
  {
    title: "2048",
    description:
      'A copy of the game "2048" using React.js with typescript and custom CSS. Hosted in firebase.',
    imagePath: "2048.png",
    skills: [skills.react, skills.typescript, skills.css],
    link: "https://a-2048.web.app/",
    source: "https://github.com/alexfilsecker/2048",
  },
  {
    title: "Hangman",
    description: "A basic hangman game using React.js and custom CSS.",
    imagePath: "hangman.png",
    skills: [skills.react, skills.typescript, skills.css],
    link: "https://hangman-f8613.web.app/",
    source: "https://github.com/alexfilsecker/Hangman/",
  },
];
