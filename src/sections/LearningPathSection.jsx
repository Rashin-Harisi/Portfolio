import React from "react";
import TitleBox from "../components/TitleBox.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WheelTimeline from "../components/educationTimeline/WheelTimeline.jsx";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);
//Need to be updated with my reality
const LearningPathSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <section
      id="education"
      className="flex-center md:mt-40 mt-10 px-5 md:px-10 xl:px-0 overflow-hidden"
    >
      <div className="w-full h-full lg:px-20">
        <div className="px-5">
          <TitleBox title="Education and Training" sub="📚 My Learning Path" />
        </div>
        <div className="relative rounded-2xl  mt-10 min-h-[600px] md:min-h-[500px] lg:min-h-[600px] has-dot-background">
          {!isMobile ? (
            <WheelTimeline />
          ) : (
            <div className="rounded-2xl">
              <img
                src="/pictures/timeline.png"
                alt="timeline"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default LearningPathSection;
