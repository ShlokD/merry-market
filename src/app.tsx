import { Fragment } from "preact";
import { useState } from "preact/hooks";
import Events from "./events";
import Food from "./food";
import Home from "./home";
import Retail from "./retail";
const sections = [
  {
    background: "bg-white",
    title: "Home",
    content: <Home />,
  },
  {
    background: "bg-blue-300",
    title: "Events",
    content: <Events />,
  },
  {
    background: "bg-yellow-400",
    title: "Food",
    content: <Food />,
  },
  {
    background: "bg-green-500",
    title: "Retail",
    content: <Retail />,
  },
];
export function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const handleAnimationEnd = (index: number) => {
    if (index === 1) {
      setShouldAnimate(false);
    }
  };
  const currentSection = sections[currentSectionIndex];
  return (
    <div className="h-screen w-full flex flex-col">
      <main className="h-screen w-full flex flex-col">
        <div
          className={`h-screen w-full flex items-center ${currentSection.background}`}
        >
          {sections.map((section, i) => {
            const open = i === currentSectionIndex;
            return (
              <Fragment key={`section-${i}`}>
                <button
                  className={`${
                    section.background
                  } h-screen px-4 py-2 font-bold text-4xl shadow-xl overflow-y-hidden ${
                    shouldAnimate ? "animate-down" : ""
                  }`}
                  onAnimationEnd={() => handleAnimationEnd(i)}
                  style={{
                    animationDuration:
                      shouldAnimate && i !== 0
                        ? `${(sections.length - i) * 600}ms`
                        : "0ms",
                  }}
                  onClick={() => setCurrentSectionIndex(i)}
                >
                  <p
                    style={{
                      transform: "rotate(270deg)",
                    }}
                    className={open ? "invisible" : "visible"}
                  >
                    {section.title}
                  </p>
                </button>
                <div
                  className={`${
                    section.background
                  } duration-500 transition-width ${
                    open ? "grow shrink-0 h-screen p-2" : ""
                  }`}
                  style={{
                    width: open ? "72%" : "0",
                  }}
                >
                  <div
                    className={`transition-opacity delay-500 duration-500 ${
                      open ? "opacity-100" : "opacity-0 invisible h-0"
                    }`}
                  >
                    {section.content}
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </main>
    </div>
  );
}
