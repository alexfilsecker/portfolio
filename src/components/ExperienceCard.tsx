import { JobInfoCard } from "@/data/descriptions";

const ExperienceCard = ({
  dateRange,
  jobTitle,
  location,
  companyName,
}: JobInfoCard): JSX.Element => {
  return (
    <div className="bg-slate-900 flex flex-col p-4 gap-2 rounded-2xl border-2 border-slate-600">
      <div className="flex items-center justify-between gap-4">
        <div className="font-extrabold text-xl text-slate-200">{jobTitle}</div>
        <div className="text-slate-300">{dateRange}</div>
      </div>
      <div className="flex gap-1 text-slate-300">
        <div>{companyName}</div>
        <div>|</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
