import { GitHub, OpenInNew } from "@mui/icons-material";
import Image from "next/image";

import { SideProjectInfo } from "@/data/sideProjects";

type ProjectcardProps = {
  projectInfo: SideProjectInfo;
  reverse: boolean;
};

const ProjectCard = ({
  projectInfo,
  reverse,
}: ProjectcardProps): JSX.Element => {
  return (
    <div
      className={`flex w-full justify-start gap-6 from-slate-800 to-slate-950 
        ${reverse ? "flex-row-reverse bg-gradient-to-l" : "bg-gradient-to-r"}`}
    >
      <div className="h-max w-1/4">
        <Image
          src={`/images/projects/${projectInfo.imagePath}`}
          alt=""
          width={50000}
          height={5000}
          className="h-full"
        />
      </div>
      <div className={`flex flex-col gap-5 p-10 ${reverse && "items-end"}`}>
        <h2 className={`text-5xl font-extrabold`}>{projectInfo.title}</h2>
        <div className="flex gap-3">
          {projectInfo.skills.map((s, i) => (
            <Image
              key={i}
              src={`/images/skills/${s.path}`}
              alt=""
              width={30}
              height={30}
            />
          ))}
        </div>
        <p className={`${reverse && "text-right"}`}>
          {projectInfo.description}
        </p>
        <div className="flex gap-4">
          <button className="w-min bg-transparent border-emerald-400 border-2 p-2 hover:bg-emerald-800 rounded-lg flex gap-2 text-xl">
            <div>Demo</div>
            <OpenInNew className="text-emerald-400" />
          </button>
          <button className="border-emerald-400 bg-transparent border-2 p-2 hover:bg-emerald-800 rounded-lg flex gap-2 text-xl">
            <div>Source Code</div>
            <GitHub className="text-emerald-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
