import Image from "next/image";
import { Router, useRouter } from "next/router";
import { LegacyRef, MutableRefObject, useState } from "react";

import { SkillInfo } from "@/data/skills";
import style from "@/style/skill.module.css";

type SkillCardProps = {
  translation: number;
  myref: LegacyRef<HTMLDivElement>;
  skillInfo: SkillInfo;
  hovered: boolean;
};

const SkillCard = ({
  translation,
  myref,
  skillInfo,
  hovered,
}: SkillCardProps): JSX.Element => {
  const router = useRouter();
  return (
    <div style={{ transform: `translateX(-${translation}px)` }}>
      <div
        className={`p-5 bg-slate-900 rounded-2xl w-32 md:w-40 lg:w-48 flex flex-col 
          justify-center items-center gap-10 ${hovered && "scale-105 border-2"} border-emerald-400 transition-all
          cursor-pointer`}
        ref={myref}
        onClick={() => {
          router.push(skillInfo.link);
        }}
      >
        <Image
          src={`/images/skills/${skillInfo.path}`}
          alt="skill-logo"
          width={200}
          height={100}
        />
        <div className="text-slate-100 text-lg md:text-xl font-extrabold text-nowrap">
          {skillInfo.name}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
