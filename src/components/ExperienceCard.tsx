import { JobInfo } from "@/data/descriptions";

const ExperienceCard = ({
  dateRange,
  jobTitle,
  location,
  companyName,
}: JobInfo): JSX.Element => {
  return (
    <div className="bg-slate-900 flex flex-col p-4 gap-2 rounded-2xl border-2 border-slate-400">
      <div className="flex items-center gap-4 text-2xl">
        <div className="font-extrabold">{jobTitle}</div>
        <div className="text-slate-300">{companyName}</div>
      </div>
      <div className="flex flex-col gap-1">
        <div>{dateRange}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
