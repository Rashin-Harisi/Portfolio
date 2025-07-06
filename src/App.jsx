import React from "react";
import Hero from "./sections/Hero.jsx";
import Showcase from "./sections/Showcase.jsx";
import Navbar from "./sections/Navbar.jsx";
import TechnologiesSection from "./sections/TechnologiesSection.jsx";
import FeatureSection from "./sections/FeatureSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <TechnologiesSection />
      <FeatureSection />
      <ExperienceSection />
    </>
  );
};
export default App;
