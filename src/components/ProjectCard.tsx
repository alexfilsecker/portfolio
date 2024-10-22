import { GitHub, OpenInNew } from "@mui/icons-material";
import { Button, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
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
  const notPhone = useMediaQuery(mQueries.md);

  const router = useRouter();

  return (
    <div
      className={`flex flex-col w-96 md:w-full justify-start items-center gap-5 bg-gradient-to-b
         from-slate-800 to-slate-900 md:to-slate-950 rounded-2xl p-5
        ${notPhone && reverse ? "md:flex-row-reverse md:bg-gradient-to-l " : "md:flex-row md:bg-gradient-to-r "} `}
    >
      <Image
        src={`/images/projects/${projectInfo.imagePath}`}
        alt=""
        width={300}
        height={300}
        className="h-full"
      />
      <div
        className={`flex flex-col gap-5 ${notPhone && reverse && "items-end"}`}
      >
        <h2 className={`text-5xl font-extrabold text-nowrap`}>
          {projectInfo.title}
        </h2>
        <div className="flex flex-wrap gap-3 md:justify-start justify-center">
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
        <p className={`${notPhone && reverse && "text-right"} text-lg`}>
          {projectInfo.description}
        </p>
        <div className="flex gap-4">
          <Button
            onClick={() => {
              if (projectInfo.samePage) {
                router.push("/");
              } else {
                window.open(projectInfo.link);
              }
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
            className="text-nowrap"
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
