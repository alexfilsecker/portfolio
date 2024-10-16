import { MutableRefObject } from "react";

import { sideProjects } from "@/data/sideProjects";

import ProjectCard from "./ProjectCard";
import { SectionProps } from "@/pages";

const SideProjects = ({ sectionRefs }: SectionProps): JSX.Element => {
  return (
    <div
      className="bg-slate-950 pt-20 flex flex-col gap-10 text-white"
      ref={(el) => {
        if (el !== null) {
          sectionRefs.current[3] = el;
        }
      }}
    >
      <div className="text-6xl font-sans font-extrabold text-slate-300 text-center">
        Side Projects
      </div>
      <div className="px-52 flex flex-col w-full gap-5">
        {sideProjects.map((project, index) => (
          <ProjectCard
            projectInfo={project}
            key={index}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default SideProjects;
