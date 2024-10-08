import Image from "next/image";
import { Router, useRouter } from "next/router";
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
  const router = useRouter();
  return (
    <div style={{ transform: `translateX(-${translation}px)` }}>
      <div
        className={`p-5 bg-slate-900 rounded-2xl w-40 flex flex-col 
          justify-center items-center gap-10 hover:scale-105 hover:border-2 border-emerald-400 transition-all
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
        <div className="text-white text-xl font-extrabold text-nowrap">
          {skillInfo.name}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
