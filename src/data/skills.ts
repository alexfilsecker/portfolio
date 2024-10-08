export type SkillInfo = {
  path: string;
  name: string;
};

const skills: SkillInfo[] = [
  { path: "next.webp", name: "Next.js" },
  { path: "react.png", name: "React" },
  { path: "typescript.png", name: "Typescript" },
  { path: "javascript.png", name: "Javascript" },
  { path: "css.png", name: "CSS" },
  { path: "html.png", name: "HTML" },
  { path: "tailwind.png", name: "Tailwind CSS" },
  { path: "aws.png", name: "AWS" },
  { path: "postgres.png", name: "Postgres" },
];

export const randomizeList = (list: SkillInfo[]): SkillInfo[] => {
  // Create a copy of the list to avoid modifying the original
  const copy = [...list];

  // Shuffle the copy using Fisher-Yates algorithm
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
};

export default skills;
