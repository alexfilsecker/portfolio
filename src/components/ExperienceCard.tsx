import { JobInfoCard } from "@/data/descriptions";

type Props = JobInfoCard & {
  index: number;
  setActiveCard: (index: number) => void;
  active: boolean;
  description: string;
};

const ExperienceCard = ({
  dateRange,
  jobTitle,
  location,
  companyName,
  index,
  setActiveCard,
  active,
  description,
}: Props): JSX.Element => {
  const activeClass = `${active ? "border-emerald-400 bg-slate-800" : "border-slate-400"}`;

  return (
    <div
      className={`bg-slate-900 w-1/4
        ${!active && "hover:border-emerald-700"} ${activeClass}
        transition-all p-4 rounded-2xl border-2 cursor-pointer h-96`}
      onMouseDown={() => {
        setActiveCard(index);
      }}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="text-slate-300 text-sm">{dateRange}</div>
          <div className="flex flex-col gap 1">
            <div className={`font-extrabold text-2xl text-slate-100`}>
              {jobTitle}
            </div>
            <div className="flex gap-1 text-slate-300">
              <div>{companyName}</div>
              <div>|</div>
              <div>{location}</div>
            </div>
          </div>
        </div>
        <div className="text-slate-300 text-justify">{description}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
