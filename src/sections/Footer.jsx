import React from "react";
import { socialImgs } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer className="w-[90%] mx-auto mt-20 flex items-center justify-between min-h-[100px]">
      <div className="flex gap-5">
        {socialImgs.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-center h-[40px] w-[40px] backdrop-blur-md bg-white/10 text-white rounded-lg shadow-lg border border-white/20"
          >
            <a href={item.url} target="_blank" rel="noreferrer">
              <img src={item.imgPath} alt={item.name} className="size-4" />
            </a>
          </div>
        ))}
      </div>
      <div>
        <p className="text-[#EBF3FA]">
          &copy; Rashin Harisi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
