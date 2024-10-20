import { Mail, OpenInNew } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";

const ContactForm = (): JSX.Element => {
  const handleClick = async () => {
    const response = await fetch("api/mail");
    const body = await response.json();
    console.log(body);
  };

  return (
    <div className="flex flex-col gap-3 md:w-1/2">
      <div className="flex gap-3 w-full">
        <TextField className="flex-grow" label="Name" variant="outlined" />
        <TextField className="flex-grow" label="Last Name" variant="outlined" />
      </div>
      <TextField label="Email" variant="outlined" />
      <TextField label="Message" variant="outlined" multiline rows={4} />
      <button className="bg-transparent border-emerald-400 border-2 p-2 hover:bg-emerald-800 rounded-lg flex gap-2 text-lg md:text-xl transition-colors w-min self-center md:self-end">
        <div className="text-slate-100">Send</div>
        <Mail className="text-emerald-400 " />
      </button>
    </div>
  );
};

export default ContactForm;
