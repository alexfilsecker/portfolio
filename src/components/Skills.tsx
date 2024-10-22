import { MutableRefObject, useEffect, useRef, useState } from "react";

import skills, { randomizeList, SkillInfo } from "@/data/skills";
import { SectionProps } from "@/pages";

import MarginContainer from "./MarginContainer";
import SkillCard from "./SkillCard";

type MousePos = {
  x: number;
  y: number;
};

const Skills = ({ sectionRefs }: SectionProps): JSX.Element => {
  const [translation, setTranslation] = useState(0);
  const [pxToBreak, setPxToBreak] = useState(0);
  const [shuffeledSkills, setShuffeledSkills] = useState<SkillInfo[]>([]);
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setShuffeledSkills(randomizeList(Object.values(skills)));

    const handleMouseMove = (ev: MouseEvent) => {
      setMousePos({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
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
      setTranslation((t) => t + 1.5);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, [translation, pxToBreak]);

  useEffect(() => {
    if (refs.current.length === 0) return;
    const containerBox = refs.current[0].getBoundingClientRect();
    if (mousePos.y < containerBox.top || mousePos.y > containerBox.bottom) {
      setHoveredIndex(null);
      return;
    }

    let i = 0;
    let foundIndex: null | number = null;
    while (i < refs.current.length && foundIndex === null) {
      const box = refs.current[i].getBoundingClientRect();
      if (box.left < mousePos.x && box.right > mousePos.x) {
        foundIndex = i;
      }
      i += 1;
    }
    setHoveredIndex(foundIndex);
  }, [mousePos, translation]);

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
      <div className="flex gap-6 w-full overflow-x-hidden py-2">
        {shuffeledSkills.map((skill, i) => (
          <SkillCard
            hovered={i === hoveredIndex}
            key={skill.name}
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
