import { useState } from "react";

import { jobsInfo } from "@/data/descriptions";

import ExperienceCard from "./ExperienceCard";
import ExperienceDescription from "./ExperienceDescription";

const Experience = (): JSX.Element => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="flex flex-col text-white bg-slate-900 py-20 px-52">
      <div className="text-6xl w-min font-sans font-extrabold text-slate-300">
        Experience
      </div>
      <div className="h-full flex gap-10 justify-center items-center pt-10">
        <div className="flex flex-col gap-5 w-2/5 flex-grow">
          {jobsInfo.map((jobInfo, index) => (
            <ExperienceCard
              key={index}
              index={index}
              setActiveCard={setActiveCard}
              active={activeCard === index}
              {...jobInfo}
            />
          ))}
        </div>
        <ExperienceDescription {...jobsInfo[activeCard].description} />
      </div>
    </div>
  );
};

export default Experience;
