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
    title: "2048",
    description: "A copy of 2048 asñldkfj asñkldf ",
    imagePath: "2048_logo.png",
    skills: [],
  },
  {
    title: "2048",
    description: "A copy of 2048 asdlfkjasñdf ñalskdjf ñalsdjf ",
    imagePath: "2048_logo.png",
    skills: [],
  },
  {
    title: "2048",
    description: "A copy of 2048a añsdlkfjj ñakdjf lñlkajksd fñaskd f",
    imagePath: "2048_logo.png",
    skills: [],
  },
  {
    title: "2048",
    description: "A copy of 2048 adsñlkfja ñasdkfj asñldlkfj asñlkdfj ",
    imagePath: "2048_logo.png",
    skills: [],
  },
];
