import { MutableRefObject } from "react";

import { sideProjects } from "@/data/sideProjects";
import { SectionProps } from "@/pages";

import MarginContainer from "./MarginContainer";
import ProjectCard from "./ProjectCard";

const SideProjects = ({ sectionRefs }: SectionProps): JSX.Element => {
  return (
    <MarginContainer>
      <div
        className="flex flex-col gap-10 text-slate-100"
        ref={(el) => {
          if (el !== null) {
            sectionRefs.current[3] = el;
          }
        }}
      >
        <div className="text-6xl font-sans font-extrabold text-slate-100 text-center">
          Side Projects
        </div>
        <div className="flex flex-col items-center w-full gap-5">
          {sideProjects.map((project, index) => (
            <ProjectCard
              projectInfo={project}
              key={index}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </MarginContainer>
  );
};

export default SideProjects;
