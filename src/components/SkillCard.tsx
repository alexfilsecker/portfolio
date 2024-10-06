import Image from "next/image";

const SkillCard = (): JSX.Element => {
  return (
    <div className="p-10 bg-slate-900 rounded-2xl">
      <Image
        src="/images/skills/next.webp"
        alt="skill-logo"
        width={200}
        height={200}
      />
    </div>
  );
};

export default SkillCard;
