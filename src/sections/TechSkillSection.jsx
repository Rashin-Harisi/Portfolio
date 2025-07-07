import React from "react";
import TitleBox from "../components/TitleBox.jsx";
import { techStackIcons } from "../constants/index.jsx";
import Tech3DModel from "../components/3dModel/Tech-section/Tech3DModel.jsx";

const TechSkillSection = () => {
  return (
    <section id="skills" className="w-[90%] mx-auto my-20">
      <div>
        <TitleBox
          title="How I Can Contribute & My Key Skills"
          sub="🤝What I Bring to the Table"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 mt-10">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="bg-[#1C1C21] rounded-3xl gap-2 py-5 tech-card group relative overflow-hidden"
            >
              <div className="absolute left-0 bottom-[-100%] w-full h-full bg-[#2D3240] group-hover:bottom-0 transition-all duration-700" />
              <div className="flex flex-col items-center justify-center gap-2 relative z-10">
                <div>
                  <Tech3DModel icon={icon} />
                </div>
                <div>
                  <p className="text-[#DAE3FF] font-semibold text-2xl">
                    {icon.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechSkillSection;
