import skills, { SkillInfo } from "./skills";

export type SideProjectInfo = {
  title: string;
  description: string;
  imagePath: string;
  skills: SkillInfo[];
};

export const sideProjects: SideProjectInfo[] = [
  {
    title: "2048",
    description:
      "A copy of 2048 asdfkjaslñkdfj añsdklfj asñldkjf ñalsdkj fñlasdjf ",
    imagePath: "2048_logo.png",
    skills: [skills.react, skills.typescript, skills.css],
  },
  {
    title: "Hangman",
    description: "A basic hangman game",
    imagePath: "hangman.png",
    skills: [skills.react, skills.javascript, skills.css],
  },
];
