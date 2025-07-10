import React from "react";
import TitleBox from "../components/TitleBox.jsx";

const Demo = () => {
  return (
    <section className="w-[90%] mx-auto my-20 flex flex-col items-center justify-center gap-5">
      <TitleBox title="Responsive Design" sub="" />
      <video
        autoPlay
        muted
        loop
        preload="none"
        playsInline
        className="w-[80%] mx-auto rounded-xl shadow-lg"
      >
        <source src="/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};
export default Demo;
