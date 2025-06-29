import Hearo3DModel from "../components/3dModel/Hearo3DModel.jsx";
import { counterItems, words } from "../constants/index.jsx";
import React from "react";
import AnimatedButton from "../components/AnimatedButton/AnimatedButton.jsx";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="flex flex-col gap-10 ">
      <div className="background_image" />
      <div className="flex flex-row gap-3 items-center h-full relative pt-30 w-[80%] mx-auto min-h-[500px]">
        <header className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="flex flex-row gap-3">
              Shaping
              <span className="viewport">
                <span className="animation_container">
                  {words.map((word) => (
                    <span
                      key={word.text}
                      className="flex items-center gap-1 md:gap-3 pb-2 text-white"
                    >
                      <img
                        src={word.imgPath}
                        alt={`icon_${word.text}`}
                        className="xl:size-9 md:size-7 size-5 md:p-2 p-1 rounded-full bg-white"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>into Real Projects</h1>
            <h1>that Deliver Results</h1>
            <p>
              Hi, I’m Rashin, a developer based in Vienna with a passion for
              code.
            </p>
          </div>
          <AnimatedButton text="View My Work" id="counter" />
        </header>
        <figure>
          <div className="xl:w-[70%] w-full h-full min-h-[50vh] absolute xl:-top-0 top-24 xl:-right-20 right-0 ">
            <Hearo3DModel />
          </div>
        </figure>
      </div>
      <div className="grid_container">
        {counterItems.map((item) => (
          <div>
            <span className="text-2xl">
              <CountUp
                start={0}
                end={item.value}
                duration={2}
                suffix={item.suffix}
              />
            </span>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Hero;
