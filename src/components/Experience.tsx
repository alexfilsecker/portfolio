import { MutableRefObject } from "react";

import { jobsInfo } from "@/data/descriptions";
import { SectionProps } from "@/pages";

import ExperienceCard from "./ExperienceCard";
import MarginContainer from "./MarginContainer";

const Experience = ({ sectionRefs }: SectionProps): JSX.Element => {
  return (
    <MarginContainer>
      <div
        className="flex flex-col gap-16"
        ref={(el) => {
          if (el !== null) {
            sectionRefs.current[1] = el;
          }
        }}
      >
        <div className="text-5xl md:text-6xl font-extrabold text-slate-100 text-center md:text-left">
          My Experience
        </div>
        <div className="flex items-center h-full">
          <div className="flex flex-col md:grid md:grid-cols-2 grid-rows-2 md:gap-10 gap-16 h-min">
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
    </MarginContainer>
  );
};

export default Experience;
