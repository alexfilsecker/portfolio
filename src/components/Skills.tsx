import { useEffect, useRef, useState } from "react";

import skills, { randomizeList, SkillInfo } from "@/data/skills";

import SkillCard from "./SkillCard";

const Skills = (): JSX.Element => {
  const [translation, setTranslation] = useState(0);
  const [pxToBreak, setPxToBreak] = useState(0);
  const [shuffeledSkills, setShuffeledSkills] = useState<SkillInfo[]>([]);

  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setShuffeledSkills(randomizeList(skills));
  }, []);

  useEffect(() => {
    if (refs.current.length >= 2) {
      const x0 = refs.current[0].getBoundingClientRect().x;
      const x1 = refs.current[1].getBoundingClientRect().x;
      const distance = x1 - x0;
      setPxToBreak(distance);
    }
  }, [refs.current.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (translation >= pxToBreak) {
        setTranslation(0);
        setShuffeledSkills((prev) => {
          const first = prev.shift();
          if (first === undefined) {
            return prev;
          }
          prev.push(first);
          return prev;
        });
      }
      setTranslation((t) => t + 1);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, [translation, pxToBreak]);

  return (
    <div className="bg-slate-950 py-10 flex flex-col items-center gap-10">
      <div className="text-6xl text-slate-300 font-extrabold ">
        Technical Skills
      </div>
      <div className="flex items-center gap-6 h-96 w-full overflow-x-hidden">
        {shuffeledSkills.map((skill, i) => (
          <SkillCard
            key={i}
            skillInfo={skill}
            translation={translation}
            myref={(el) => {
              if (el !== null) {
                refs.current[i] = el;
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
