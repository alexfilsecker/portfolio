import Image from "next/image";
import { LegacyRef, MutableRefObject, useState } from "react";

import { SkillInfo } from "@/data/skills";
import style from "@/style/skill.module.css";

type SkillCardProps = {
  translation: number;
  myref: LegacyRef<HTMLDivElement>;
  skillInfo: SkillInfo;
};

const SkillCard = ({
  translation,
  myref,
  skillInfo,
}: SkillCardProps): JSX.Element => {
  return (
    <div style={{ transform: `translateX(-${translation}px)` }}>
      <div
        className={`p-10 bg-slate-900 rounded-2xl min-w-60 flex flex-col justify-center items-center gap-10 hover:scale-105 transition-transform`}
        ref={myref}
      >
        <Image
          src={`/images/skills/${skillInfo.path}`}
          alt="skill-logo"
          width={200}
          height={100}
        />
        <div className="text-white text-xl font-extrabold">
          {skillInfo.name}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
