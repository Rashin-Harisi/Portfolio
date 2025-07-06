import React from "react";
import { abilities } from "../constants/index.jsx";

const FeatureSection = () => {
  return (
    <section className="w-[90%] mx-auto my-3">
      <div className="grid grid-rows-1 md:grid-cols-3 gap-5">
        {abilities.map((ability) => (
          <div
            className="flex flex-col gap-2 bg-[#0E0E10] rounded-xl px-5 py-5"
            key={ability.title}
          >
            <img src={ability.imgPath} alt="ability" className="w-10 h-10" />
            <h3>{ability.title}</h3>
            <p className="break-words whitespace-normal">{ability.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FeatureSection;
