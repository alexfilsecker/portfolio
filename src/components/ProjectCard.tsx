import { GitHub, OpenInNew } from "@mui/icons-material";
import { Button, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { SideProjectInfo } from "@/data/sideProjects";
import mQueries from "@/utils/mediaQueries";

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

  const notPhone = useMediaQuery(mQueries.md);

  useEffect(() => {
    if (sideRef.current === null) {
      return;
    }

    const height = sideRef.current.getBoundingClientRect().height;
    setImageSize(height);
  }, [sideRef]);

  return (
    <div
      className={`flex flex-col w-min md:w-full justify-start items-center gap-5 bg-gradient-to-b
         from-slate-800 to-slate-900 md:to-slate-950 rounded-2xl p-5
        ${notPhone && reverse ? "md:flex-row-reverse md:bg-gradient-to-l" : "md:flex-row md:bg-gradient-to-r"} `}
    >
      <div
        style={{ width: `${imageSize}px` }}
        className="flex-shrink-0 flex-grow-0"
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
        className={`flex flex-col gap-5 ${notPhone && reverse && "items-end"}`}
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
        <p className={`${notPhone && reverse && "text-right"}`}>
          {projectInfo.description}
        </p>
        <div className="flex gap-4">
          <Button
            onClick={() => {
              window.open(projectInfo.link);
            }}
            endIcon={<OpenInNew />}
            variant="outlined"
          >
            Demo
          </Button>
          <Button
            onClick={() => {
              window.open(projectInfo.source);
            }}
            endIcon={<GitHub />}
            variant="outlined"
          >
            source code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
