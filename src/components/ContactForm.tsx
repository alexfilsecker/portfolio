import { Button, TextField } from "@mui/material";

const ContactForm = (): JSX.Element => {
  const handleClick = async () => {
    const response = await fetch("api/mail");
    const body = await response.json();
    console.log(body);
  };

  return (
    <div className="w-1/2 flex flex-col gap-3">
      <div className="flex gap-3 w-full">
        <TextField className="flex-grow" label="Name" variant="outlined" />
        <TextField className="flex-grow" label="Last Name" variant="outlined" />
      </div>
      <TextField label="Email" variant="outlined" />
      <TextField label="Message" variant="outlined" multiline rows={4} />
      <Button
        variant="contained"
        className="self-end mt-5"
        onClick={handleClick}
      >
        Send
      </Button>
    </div>
  );
};

export default ContactForm;
