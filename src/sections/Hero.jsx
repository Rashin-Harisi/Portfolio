import Hearo3DModel from "../components/3dModel/Hero-section/Hearo3DModel.jsx";
import { counterItems, words } from "../constants/index.jsx";
import React from "react";
import AnimatedButton from "../components/AnimatedButton/AnimatedButton.jsx";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero_title h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" },
    );
  });
  return (
    <section id="hero" className="mt-25 w-[90%] mx-auto px-[20px]">
      <div className="background_image" />

      <header className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-6 p-5">
          <div className="flex flex-col gap-5">
            <div className="hero_title">
              <h1 className="flex flex-row gap-3">
                Shaping
                <span className="viewport">
                  <span className="animation_container">
                    {words.map((word, index) => (
                      <span
                        key={index}
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
            </div>
            <p>
              Hi, I’m Rashin, a developer based in Vienna with a passion for
              code.
            </p>
          </div>
          <AnimatedButton text="View My Work" id="counter" />
        </div>
        <div className="min-h-[600px] flex-1">
          <figure>
            <Hearo3DModel />
          </figure>
        </div>
      </header>

      <div className="grid_container" id="counter">
        {counterItems.map((item, index) => (
          <div key={index} className="">
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
