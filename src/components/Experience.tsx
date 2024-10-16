import { MutableRefObject } from "react";

import { jobsInfo } from "@/data/descriptions";
import { SectionProps } from "@/pages";

import ExperienceCard from "./ExperienceCard";

const Experience = ({ sectionRefs }: SectionProps): JSX.Element => {
  return (
    <div
      className="flex flex-col gap-10 text-white bg-slate-950 px-52"
      ref={(el) => {
        if (el !== null) {
          sectionRefs.current[1] = el;
        }
      }}
    >
      <div className="text-6xl font-sans font-extrabold text-slate-300">
        My Experience
      </div>
      <div className="flex items-center h-full">
        <div className="grid grid-cols-2 grid-rows-2 gap-10 h-min">
          {jobsInfo.map((jobInfo, index) => (
            <ExperienceCard
              key={index}
              index={index}
              {...jobInfo}
              description={jobInfo.description.sumary}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
