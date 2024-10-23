import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";
import { Tooltip, Button } from "@mui/material";
import Link from "next/link";
import React, { forwardRef, useState } from "react";

type InfoProps = {
  name: string;
  icon: JSX.Element;
  onClick?: () => void;
};

const Info = forwardRef<HTMLDivElement, InfoProps>(function MyInfo(
  { name, icon, onClick },
  ref
): JSX.Element {
  return (
    <div
      className="transition-colors w-min text-slate-50 py-1 px-4 text-nowrap flex gap-3 text-2xl hover:border-emerald-400 border-2 rounded-md border-transparent cursor-pointer items-center"
      onClick={onClick}
      ref={ref}
    >
      {icon}
      <div>{name}</div>
    </div>
  );
});

const ContactInfo = (): JSX.Element => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex flex-col gap-3 md:w-1/2">
      <Info
        name="LinkedIn"
        icon={<LinkedIn fontSize="inherit" />}
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/alexander-filsecker-4a961412a"
          );
        }}
      />
      <Info
        name="GitHub"
        icon={<GitHub fontSize="inherit" />}
        onClick={() => {
          window.open("https://github.com/alexfilsecker");
        }}
      />
      <Tooltip title="Copied!" disableTouchListener open={copied} arrow>
        <Info
          name="+61 405 241 772"
          icon={<Phone fontSize="inherit" />}
          onClick={() => {
            setCopied(true);
            navigator.clipboard.writeText("+61 405 241 772");
            const interval = setTimeout(() => {
              setCopied(false);
            }, 1000);
          }}
        />
      </Tooltip>

      <Link href="mailto:alexfilsecker@gmail.com">
        <Info
          name="alexfilsecker@gmail.com"
          icon={<Email fontSize="inherit" />}
        />
      </Link>
    </div>
  );
};

export default ContactInfo;
