import { Javascript } from "@mui/icons-material";

export type SkillInfo = {
  path: string;
  name: string;
  link: string;
};

type Skills =
  | "next"
  | "react"
  | "typescript"
  | "javascript"
  | "css"
  | "html"
  | "tailwind"
  | "C"
  | "cpp"
  | "ruby"
  | "rails"
  | "aws"
  | "postgres";

const skills: { [key in Skills]: SkillInfo } = {
  next: { path: "next.webp", name: "Next.js", link: "https://nextjs.org/" },
  react: { path: "react.png", name: "React", link: "" },
  typescript: { path: "typescript.png", name: "Typescript", link: "" },
  javascript: { path: "javascript.png", name: "Javascript", link: "" },
  css: { path: "css.png", name: "CSS", link: "" },
  html: { path: "html.png", name: "HTML", link: "" },
  tailwind: { path: "tailwind.png", name: "Tailwind CSS", link: "" },
  aws: { path: "aws.png", name: "AWS", link: "" },
  postgres: { path: "postgres.png", name: "Postgres", link: "" },
  C: { path: "c.png", name: "C", link: "" },
  cpp: { path: "cpp.png", name: "C++", link: "" },
  ruby: { path: "ruby.png", name: "Ruby", link: "" },
  rails: { path: "rails.png", name: "Ruby on Rails", link: "" },
};

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
