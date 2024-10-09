import { GitHub, OpenInNew } from "@mui/icons-material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { SideProjectInfo } from "@/data/sideProjects";

type ProjectcardProps = {
  projectInfo: SideProjectInfo;
  reverse: boolean;
};

const ProjectCard = ({
  projectInfo,
  reverse,
}: ProjectcardProps): JSX.Element => {
  const [imageSize, setImageSize] = useState(0);
  const sideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sideRef.current === null) {
      return;
    }

    const height = sideRef.current.getBoundingClientRect().height;
    setImageSize(height);
  }, [sideRef]);

  return (
    <div
      className={`flex w-full justify-start gap-2 from-slate-800 to-slate-950 rounded-2xl
        ${reverse ? "flex-row-reverse bg-gradient-to-l" : "bg-gradient-to-r"}`}
    >
      <div
        style={{ width: `${imageSize}px` }}
        className="flex-shrink-0 flex-grow-0 p-5"
      >
        <Image
          src={`/images/projects/${projectInfo.imagePath}`}
          alt=""
          width={5000}
          height={5000}
          className="h-full"
        />
      </div>
      <div
        className={`flex flex-col gap-5 p-5 ${reverse && "items-end"}`}
        ref={sideRef}
      >
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
          <button
            className="bg-transparent border-emerald-400 border-2 p-2 hover:bg-emerald-800 rounded-lg flex gap-2 text-xl transition-colors"
            onClick={() => {
              window.open(projectInfo.link);
            }}
          >
            <div>Demo</div>
            <OpenInNew className="text-emerald-400" />
          </button>
          <button
            className="border-emerald-400 bg-transparent border-2 p-2 hover:bg-emerald-800 rounded-lg flex gap-2 text-xl text-nowrap transition-colors"
            onClick={() => {
              window.open(projectInfo.source);
            }}
          >
            <div>Source Code</div>
            <GitHub className="text-emerald-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
