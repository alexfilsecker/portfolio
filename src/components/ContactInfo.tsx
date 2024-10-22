import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";

type InfoProps = {
  name: string;
  icon: JSX.Element;
  onClick: () => void;
};

const Info = ({ name, icon, onClick }: InfoProps): JSX.Element => {
  return (
    <div
      className="transition-colors w-min text-slate-50 py-1 px-4 text-nowrap flex gap-3 text-2xl hover:border-emerald-400 border-2 rounded-md border-transparent cursor-pointer items-center"
      onClick={onClick}
    >
      {icon}
      <div>{name}</div>
    </div>
  );
};

const ContactInfo = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-3 md:w-1/2">
      <Info
        name="LinkedIn"
        icon={<LinkedIn fontSize="inherit" />}
        onClick={() => {
          console.log("añsldkja");
        }}
      />
      <Info
        name="GitHub"
        icon={<GitHub fontSize="inherit" />}
        onClick={() => {
          console.log("añsldkja");
        }}
      />
      <Info
        name="+61 405 241 772"
        icon={<Phone fontSize="inherit" />}
        onClick={() => {
          console.log("añsldkja");
        }}
      />
      <Info
        name="alexfilsecker@gmail.com"
        icon={<Email fontSize="inherit" />}
        onClick={() => {
          console.log("añsldkja");
        }}
      />
    </div>
  );
};

export default ContactInfo;
