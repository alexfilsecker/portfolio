import { sideProjects } from "@/data/sideProjects";

import ProjectCard from "./ProjectCard";

const SideProjects = (): JSX.Element => {
  return (
    <div className="bg-slate-950 pt-20 flex flex-col gap-10 text-white">
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
