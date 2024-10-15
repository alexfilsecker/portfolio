import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = (): JSX.Element => {
  return (
    <div className="text-white px-52 py-32 flex flex-col gap-10">
      <div className="text-6xl text-slate-200 font-extrabold">Contact Me</div>
      <div className="flex w-full gap-10">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
