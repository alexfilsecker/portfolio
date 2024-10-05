import { JobInfoCard } from "@/data/descriptions";

type Props = JobInfoCard & {
  index: number;
  setActiveCard: (index: number) => void;
  active: boolean;
};

const ExperienceCard = ({
  dateRange,
  jobTitle,
  location,
  companyName,
  index,
  setActiveCard,
  active,
}: Props): JSX.Element => {
  const activeClass = `${active ? "border-emerald-400 bg-slate-800" : "border-slate-400"}`;

  return (
    <div
      className={`bg-slate-900 
        ${!active && "hover:border-emerald-700"} ${activeClass}
        transition-all flex flex-col p-4 gap-2 rounded-2xl border-2 cursor-pointer`}
      onMouseDown={() => {
        setActiveCard(index);
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className={`font-extrabold text-xl text-slate-200`}>
          {jobTitle}
        </div>
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
