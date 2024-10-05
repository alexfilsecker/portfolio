import { Code, Coffee, Engineering, Groups, Lan } from "@mui/icons-material";

import { JobInfoCard } from "@/data/descriptions";

type Props = JobInfoCard & {
  index: number;
  setActiveCard: (index: number) => void;
  active: boolean;
  description: string;
};

type IconDict = {
  [key: number]: JSX.Element;
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

  const iconProps = {
    className: "text-emerald-400",
    fontSize: "inherit",
  };
  const icons: { [key: number]: JSX.Element } = {
    0: <Groups className="text-emerald-400" fontSize="inherit" />,
    1: <Code className="text-emerald-400" fontSize="inherit" />,
    2: <Lan className="text-emerald-400" fontSize="inherit" />,
    3: <Coffee className="text-emerald-400" fontSize="inherit" />,
  };

  return (
    <div
      className={`bg-slate-900 transition-all  rounded-2xl`}
      onMouseDown={() => {
        setActiveCard(index);
      }}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-start gap-4 text-4xl">
            {icons[index]}
            <div className="font-extrabold text-slate-100 text-3xl">
              {jobTitle}
            </div>
          </div>

          <div className="flex gap-1 text-slate-400 text-lg">
            <div>{companyName}</div>
            <div>|</div>
            {dateRange}
          </div>
        </div>

        <div className="text-slate-200 text-xl">{description}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
