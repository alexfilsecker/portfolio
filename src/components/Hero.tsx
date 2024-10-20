import { KeyboardArrowDownRounded } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import { MutableRefObject, useEffect, useState } from "react";

import { SectionProps } from "@/pages";
import styles from "@/style/arrow.module.css";
import mQueries from "@/utils/mediaQueries";

import MarginContainer from "./MarginContainer";

type HeroProps = {
  scrollY: number;
};

const Hero = ({
  sectionRefs,
  scrollY,
}: SectionProps & HeroProps): JSX.Element => {
  const showProfile = useMediaQuery(mQueries.md);

  return (
    <MarginContainer>
      <div
        className="h-screen flex justify-center items-center"
        ref={(el) => {
          if (el !== null) {
            sectionRefs.current[0] = el;
          }
        }}
      >
        <div className="flex gap-10 lg:gap-32 items-center xl">
          <div className="flex flex-col gap-5">
            <div className="font-mono text-lg text-emerald-400 text-center md:text-left">
              Hello, my name is
            </div>
            <div className="text-6xl lg:text-7xl font-extrabold text-slate-50 text-center md:text-left">
              Alexander Filsecker
            </div>
            <div className="text-slate-400 text-3xl text-center md:text-left">
              But you can call me {!showProfile && <br />}
              <span className="text-emerald-400 font-extrabold">Alex</span>
            </div>
            <div className="text-slate-200 mt-2 text-xl text-center md:text-left">
              I am a software engineer dedicated to perfection and continious
              growth.
            </div>
          </div>
          {showProfile && (
            <Image
              alt="Profile Picture"
              src="/images/alex-profile.png"
              width={1500}
              height={1000}
              className="border-2 rounded-full border-emerald-500 bg-slate-900 max-w-96"
            />
          )}
        </div>
        <div
          className={`text-5xl text-slate-50 transition-opacity absolute bottom-10 ${scrollY > 200 ? "opacity-0" : styles.arrow}`}
        >
          <KeyboardArrowDownRounded fontSize="inherit" />
        </div>
      </div>
    </MarginContainer>
  );
};

export default Hero;
