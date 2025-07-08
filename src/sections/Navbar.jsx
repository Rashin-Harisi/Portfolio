import React from "react";
import { navLinks } from "../constants/index.jsx";

const Navbar = () => {
  return (
    <nav className="px-[20px] flex flex-row items-center justify-between h-[60px] md:px-5 mt-1 fixed top-0 left-8 right-8  backdrop-blur-md bg-[#1D1C22] rounded-xl z-60">
      <a href={"#hero"} className="font-semibold text-xl">
        Rashin Harisi
      </a>
      <div className="hidden lg:flex flex-row gap-3 w-[30%] justify-between text-[#D9ECFF] ">
        {navLinks.map((link) => (
          <a
            href={link.link}
            key={link.name}
            className="hover:underline hover:text-white"
          >
            {link.name}
          </a>
        ))}
      </div>
      <a
        href={"#contact"}
        className="bg-[#f7f7f7] rounded-xl w-[150px] h-[40px] flex items-center justify-center text-black border"
      >
        Contact Me
      </a>
    </nav>
  );
};
export default Navbar;
