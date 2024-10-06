import SkillCard from "./SkillCard";

const Skills = (): JSX.Element => {
  return (
    <div className="bg-slate-950 py-10 px-52 flex flex-col items-center gap-10">
      <div className="text-6xl text-slate-300 font-extrabold">
        Technical Skills
      </div>
      <SkillCard />
    </div>
  );
};

export default Skills;
