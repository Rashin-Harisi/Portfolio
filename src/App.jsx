import React from "react";
import Hero from "./sections/Hero.jsx";
import Showcase from "./sections/Showcase.jsx";
import Navbar from "./sections/Navbar.jsx";
import TechnologiesSection from "./sections/TechnologiesSection.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <TechnologiesSection />
    </>
  );
};
export default App;
