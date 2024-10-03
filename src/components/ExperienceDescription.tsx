import { JobDescription } from "@/data/descriptions";

const ExperienceDescription = ({ sumary }: JobDescription): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 text-slate-300 w-3/5">
      <div className="text-slate-200 text-2xl text-center">{sumary}</div>
    </div>
  );
};

export default ExperienceDescription;
