import fs from "fs";

import { useMediaQuery } from "@mui/material";
import axios, { AxiosError, AxiosResponse } from "axios";
import moment from "moment-timezone";
import { GetServerSideProps } from "next";
import { MutableRefObject, useEffect, useRef, useState } from "react";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import SideProjects from "@/components/SideProject";
import Skills from "@/components/Skills";
import ipCheck from "@/utils/ipCheck";
import logMessage from "@/utils/log";
import mQueries from "@/utils/mediaQueries";

export type SectionProps = {
  sectionRefs: MutableRefObject<HTMLDivElement[]>;
};

export type SectionPosition = {
  top: number;
  height: number;
  bottom: number;
};

export type WindowSize = {
  widht: number;
  height: number;
};

const Index = (): JSX.Element => {
  const notPhone = useMediaQuery(mQueries.md);

  const [sectionPositions, setSectionPositions] = useState<SectionPosition[]>(
    []
  );

  const sectionRefs = useRef<HTMLDivElement[]>([]);

  const [scroll, setScroll] = useState<number>(0);
  const [windowSize, setWindowSize] = useState<WindowSize>({
    widht: 0,
    height: 0,
  });
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    const handleResize = () => {
      setWindowSize({ widht: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const positions: SectionPosition[] = sectionRefs.current.map(
      (sectionRef) => {
        const rect = sectionRef.getBoundingClientRect();
        return {
          top: rect.top,
          height: rect.height,
          bottom: rect.bottom,
        };
      }
    );
    setSectionPositions(positions);
  }, [setSectionPositions, sectionRefs, scroll, windowSize]);

  return (
    <div className="w-full flex flex-col bg-slate-950 text-red gap-10">
      {sectionPositions.length > 0 && notPhone && (
        <NavBar sectionPositions={sectionPositions} windowSize={windowSize} />
      )}
      <Hero sectionRefs={sectionRefs} scrollY={scroll} />
      <Experience sectionRefs={sectionRefs} />
      <Skills sectionRefs={sectionRefs} />
      <SideProjects sectionRefs={sectionRefs} />
      <Contact sectionRefs={sectionRefs} />
      {/* {sectionPositions.map((section, i) => (
        <div key={i}>
          <div
            className="fixed text-white bg-blue-500 z-50 w-screen h-3"
            style={{ top: `${section.top}px` }}
          />

          <div
            className="fixed text-white bg-red-500 z-50 w-screen h-3"
            style={{ top: `${section.bottom - 12}px` }}
          />
        </div>
      ))} */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  let message: string;
  if (!(typeof ipAddress === "string")) {
    message = "ipAddress is not a string";
  } else {
    try {
      message = await ipCheck(ipAddress);
    } catch (e: unknown) {
      if (e instanceof TypeError) {
        message = e.message;
      } else {
        message = "ERROR";
      }
    }
  }

  logMessage(message);
  return { props: {} };
};

export default Index;
