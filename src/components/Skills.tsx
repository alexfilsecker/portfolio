import { MutableRefObject, useEffect, useRef, useState } from "react";

import skills, { randomizeList, SkillInfo } from "@/data/skills";
import { SectionProps } from "@/pages";

import MarginContainer from "./MarginContainer";
import SkillCard from "./SkillCard";

const Skills = ({ sectionRefs }: SectionProps): JSX.Element => {
  const [translation, setTranslation] = useState(0);
  const [pxToBreak, setPxToBreak] = useState(0);
  const [shuffeledSkills, setShuffeledSkills] = useState<SkillInfo[]>([]);

  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setShuffeledSkills(randomizeList(Object.values(skills)));
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
    <div
      className="flex flex-col items-center gap-10"
      ref={(el) => {
        if (el !== null) {
          sectionRefs.current[2] = el;
        }
      }}
    >
      <MarginContainer>
        <div className="text-6xl text-slate-100 font-extrabold text-center">
          Technical Skills
        </div>
      </MarginContainer>
      <div className="flex items-center gap-6 w-full overflow-x-hidden py-10">
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
