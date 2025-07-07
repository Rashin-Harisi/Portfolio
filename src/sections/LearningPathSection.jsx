import React from "react";
import TitleBox from "../components/TitleBox.jsx";
import { expCards } from "../constants/index.jsx";
import ShiningCard from "../components/ShiningCard.jsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
//Need to be updated with my reality
const LearningPathSection = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        transformOrigin: "left left",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", { scaleY: 1 - self.progress });
        },
      },
    });
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);
  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-10 px-5 md:px-10 xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        {/*//main inner container*/}

        <TitleBox
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        {/*container of each card of expCards*/}
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div
                className="flex flex-col-reverse xl:flex-row xl:gap-20 gap-10 justify-between"
                key={card.title}
              >
                <div className="xl:w-2/6">
                  <ShiningCard card={card} index={index}>
                    <img src={card.imgPath} alt="Compony_logo" />
                  </ShiningCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="absolute top-0 xl:left-[35.5vw] md:left-10 left-5 h-full flex justify-center">
                      <div className="absolute z-30 h-[110%] -top-10 w-14 md:w-28 bg-black timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="flex xl:gap-20 md:gap-10 gap-5 relative z-20 expText">
                      <div className="md:size-20 size-10 flex-none rounded-full flex justify-center items-center md:-translate-y-7 border border-black bg-[#1C1C21]">
                        <img src={card.logoPath} alt="Compony_logo" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="text-[#D9ECFF] my-5">
                          🗓️&nbsp; {card.date}{" "}
                        </p>
                        <p className="italic text-[#839CB5]">
                          Responsibilities
                        </p>
                        <ul className="list-disc flex flex-col gap-2 mt-5">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg">
                                {responsibility}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default LearningPathSection;
