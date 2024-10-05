import { useState } from "react";

import { jobsInfo } from "@/data/descriptions";

import ExperienceCard from "./ExperienceCard";
import ExperienceDescription from "./ExperienceDescription";

const Experience = (): JSX.Element => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="flex flex-col gap-10 text-white bg-slate-900 pt-20 px-52">
      <div className="text-6xl font-sans font-extrabold text-slate-300 text-center">
        My Experience
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-10">
        {jobsInfo.map((jobInfo, index) => (
          <ExperienceCard
            key={index}
            index={index}
            setActiveCard={setActiveCard}
            active={activeCard === index}
            {...jobInfo}
            description={jobInfo.description.sumary}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
