import { useEffect, useRef, useState } from "react";
import { animateScroll } from "react-scroll";

import { SectionPosition, WindowSize } from "@/pages";

type Section = {
  name: string;
  topLeave: number;
  bottomLeave: number;
};

const sections: Section[] = [
  { name: "About", topLeave: NaN, bottomLeave: 0.4 },
  { name: "Experience", topLeave: 0.8, bottomLeave: 0.4 },
  { name: "Technical Skills", topLeave: 0.5, bottomLeave: 0.4 },
  { name: "Side Projects", topLeave: 0.5, bottomLeave: 0.4 },
  { name: "Contact", topLeave: 0.5, bottomLeave: NaN },
];

type NavBarProps = {
  sectionPositions: SectionPosition[];
  windowSize: WindowSize;
};

const NavBar = ({ sectionPositions, windowSize }: NavBarProps): JSX.Element => {
  const { height: windowHeight } = windowSize;

  const itemsRefs = useRef<HTMLDivElement[]>([]);
  const [rects, setRects] = useState<DOMRect[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerPos, setContainerPos] = useState<DOMRect | null>(null);

  const [current, setCurrent] = useState<number>(0);

  const [deviation, setDeviation] = useState<number>(0);

  useEffect(() => {
    const rects = itemsRefs.current.map((el) => el.getBoundingClientRect());
    setRects(rects);
    if (containerRef.current) {
      setContainerPos(containerRef.current.getBoundingClientRect());
    }
  }, [containerRef, itemsRefs, windowSize]);

  useEffect(() => {
    if (rects.length === 0) {
      return;
    }

    const currSectionBotLeave = sections[current].bottomLeave * windowHeight;
    const currSectionTopLeave = sections[current].topLeave * windowHeight;

    const exitBottomD =
      current < sections.length - 1 && // Not the last one
      sectionPositions[current].bottom - currSectionBotLeave;

    const exitTopD =
      current > 0 && sectionPositions[current].top - currSectionTopLeave;

    const currentSectionHeight = sectionPositions[current].height;
    let normalizedDeviation: number = 0;
    if (exitBottomD && exitTopD) {
      const maxAbsouluteDev =
        currentSectionHeight + currSectionTopLeave - currSectionBotLeave;
      normalizedDeviation = -(exitTopD + exitBottomD) / maxAbsouluteDev;
    } else if (exitBottomD) {
      const maxAbsouluteDev = currentSectionHeight - currSectionBotLeave;
      normalizedDeviation = 1 - exitBottomD / maxAbsouluteDev;
    } else if (exitTopD) {
      const maxAbsouluteDev = currSectionTopLeave;
      normalizedDeviation = -(1 + exitTopD / maxAbsouluteDev);
    }
    const pxDeviation = normalizedDeviation * rects[current].width * 0.03;
    setDeviation(pxDeviation);

    if (exitTopD && exitTopD > 0) {
      setCurrent((curr) => curr - 1);
    } else if (exitBottomD && exitBottomD < 0) {
      setCurrent((curr) => curr + 1);
    }
  }, [sectionPositions, current, windowHeight, rects]);

  return (
    <>
      <div className="fixed w-screen flex justify-center top-5 text-white z-50">
        <div
          className="w-min flex gap-3 py-3 px-10 bg-slate-900 rounded-full text-nowrap text-lg font-bold"
          ref={containerRef}
        >
          {sections.map((section, index) => (
            <div
              key={index}
              className="px-3 py-1 rounded-full cursor-pointer z-50 hover:text-emerald-200 transition-colors"
              ref={(el) => {
                if (el !== null) {
                  itemsRefs.current[index] = el;
                }
              }}
              onClick={() => {
                if (containerPos !== null && containerPos.bottom) {
                  const scrollDistance =
                    sectionPositions[index].top - containerPos.bottom;
                  animateScroll.scrollMore(scrollDistance, { duration: 300 });
                }
              }}
            >
              {section.name}
            </div>
          ))}
          {!rects.some((rect) => rect === undefined) &&
            containerPos !== null && (
              <div
                className="absolute bg-emerald-600 text-transparent rounded-full transition-all"
                style={{
                  left: `${rects[current].x + deviation}px`,
                  top: `${rects[current].top - containerPos.top}px`,
                  width: `${rects[current].width + Math.abs(deviation)}px`,
                  height: `${rects[current].height}px`,
                }}
              />
            )}
        </div>
      </div>

      {/* {current < sections.length - 1 && (
        <div
          className="w-full h-1 bg-red-400 fixed z-10"
          style={{
            top: `${sections[current].bottomLeave * windowHeight}px`,
          }}
        />
      )}
      {current > 0 && (
        <div
          className="w-full h-1 bg-blue-400 fixed z-10"
          style={{
            top: `${sections[current].topLeave * windowHeight}px`,
          }}
        />
      )} */}
    </>
  );
};

export default NavBar;
