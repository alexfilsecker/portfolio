import { KeyboardArrowDownRounded } from "@mui/icons-material";
import Image from "next/image";
import { MutableRefObject, useEffect, useState } from "react";

import styles from "@/style/arrow.module.css";
import { SectionProps } from "@/pages";

// ponder una foto de perfil mirando al frente

const Hero = ({ sectionRefs }: SectionProps): JSX.Element => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="h-screen text-white flex flex-col gap-16 justify-center items-center bg-slate-950 "
      ref={(el) => {
        if (el !== null) {
          sectionRefs.current[0] = el;
        }
      }}
    >
      <div className="flex gap-36 items-center mx-52">
        <div className="flex flex-col gap-5">
          <div className="font-mono text-lg text-emerald-400">
            Hello, my name is
          </div>
          <div className="font-sans text-7xl font-extrabold">Alex</div>
          <div className="font-sans text-slate-500 text-5xl">
            A Full Stack Developer
          </div>
          <div className="text-gray-300 mt-4">
            I am a software engineer dedicated to perfection and yada añlskdjfla
            asdflñasd asñdlkfjñas dasñlkdjf asñdlkfjaslñkdjf asñlkdjfñaskljdff
            asdñllkfjaslñdkfj añsldkjfñalskdjf asdñlfkja sdñlfkj asdfñlk
            asdñfkfl j
          </div>
        </div>
        <Image
          alt="Profile Picture"
          src="/images/alex-profile.png"
          width={1500}
          height={1000}
          className="border-2 rounded-full border-emerald-500 bg-slate-900"
        />
      </div>
      <div
        className={`text-5xl transition-opacity absolute bottom-10 ${scrollY > 200 ? "opacity-0" : styles.arrow}`}
      >
        <KeyboardArrowDownRounded fontSize="inherit" />
      </div>
    </div>
  );
};

export default Hero;
