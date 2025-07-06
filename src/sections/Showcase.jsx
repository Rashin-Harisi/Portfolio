import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.inOut" },
    );
    const cards = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <section
      id="work"
      className="px-[20px] flex flex-col lg:flex-row gap-2 lg:gap-5 w-[95%] mx-auto mt-5 md:-mt-20 mb-5"
      ref={sectionRef}
    >
      <div ref={project1Ref}>
        <div className="">
          <img
            src="/pictures/project1.png"
            alt="project1"
            className="w-full m-auto h-full lg:h-170 object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="break-words whitespace-normal md:text-4xl font-semibold">
            On-Demand Rides Made Simple with a Powerful, User-Friendly App
            called Ryde
          </p>
          <p className="text-[#D9ECFF] text-lg">
            An app built with React Native, Expo, & TailwindCSS for a fast,
            user-friendly experience.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div ref={project2Ref}>
          <div className="bg-[#FFEFDB] rounded-xl">
            <img
              src="/pictures/project2.png"
              alt="project2"
              className="w-[90%] mx-auto lg:h-85 object-cover"
            />
          </div>
          <p className="break-words whitespace-normal md:text-xl lg:text-2xl font-semibold">
            The Library Management Platform
          </p>
        </div>
        <div ref={project3Ref}>
          <div className="bg-[#FFE7EB] rounded-xl ">
            <img
              src="/pictures/project3.png"
              alt="project3"
              className="w-[90%] mx-auto lg:h-85 object-cover"
            />
          </div>
          <p className="break-words whitespace-normal md:text-xl lg:text-2xl font-semibold">
            YC Directory - A Startup Showcase App
          </p>
        </div>
      </div>
    </section>
  );
};
export default Showcase;
