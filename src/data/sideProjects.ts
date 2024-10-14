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
      "A copy of 2048 asdfkjaslñkdfj añsdklfj asñldkjf ñalsdkj fñlasdjf ",
    imagePath: "2048.png",
    skills: [skills.react, skills.typescript, skills.css],
    link: "https://a-2048.web.app/",
    source: "https://github.com/alexfilsecker/2048",
  },
  {
    title: "Hangman",
    description: "A basic hangman game",
    imagePath: "hangman.png",
    skills: [skills.react, skills.javascript, skills.css],
    link: "",
    source: "",
  },
];
