import { jobsInfo } from "@/data/descriptions";

import ExperienceCard from "./ExperienceCard";

const Experience = (): JSX.Element => {
  return (
    <div className="flex flex-col text-white bg-slate-900 py-20 px-52">
      <div className="text-6xl w-min font-sans font-extrabold ">Experience</div>
      <div className="h-full  flex gap-10 justify-center items-center pt-10">
        <div className="flex flex-col gap-5 w-1/3">
          {jobsInfo.map((jobInfo, index) => (
            <ExperienceCard key={index} {...jobInfo} />
          ))}
        </div>
        <div className="bg-slate-700 flex-grow">hola</div>
      </div>
    </div>
  );
};

export default Experience;
