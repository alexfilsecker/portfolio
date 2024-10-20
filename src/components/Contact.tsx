import { MutableRefObject } from "react";

import { SectionProps } from "@/pages";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import MarginContainer from "./MarginContainer";

const Contact = ({ sectionRefs }: SectionProps): JSX.Element => {
  return (
    <MarginContainer>
      <div
        className="flex flex-col gap-10 h-screen pt-10"
        ref={(el) => {
          if (el !== null) {
            sectionRefs.current[4] = el;
          }
        }}
      >
        <div className="text-6xl text-slate-200 font-extrabold text-center">
          Contact Me
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full gap-10 justify-center">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </MarginContainer>
  );
};

export default Contact;
