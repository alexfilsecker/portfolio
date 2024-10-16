import { MutableRefObject, useEffect, useRef, useState } from "react";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import SideProjects from "@/components/SideProject";
import Skills from "@/components/Skills";

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
    <div className="w-full flex flex-col bg-slate-950 text-white">
      {/* {sectionPositions.length > 0 && (
        <NavBar sectionPositions={sectionPositions} windowSize={windowSize} />
      )} */}
      <Hero sectionRefs={sectionRefs} />
      <div className="h-96" />
      {/* <Experience sectionRefs={sectionRefs} /> */}
      {/* <Skills sectionRefs={sectionRefs} />
      <SideProjects sectionRefs={sectionRefs} />
      <Contact sectionRefs={sectionRefs} /> */}
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

export default Index;
