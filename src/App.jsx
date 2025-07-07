import Hero from "./sections/Hero.jsx";
import Showcase from "./sections/Showcase.jsx";
import Navbar from "./sections/Navbar.jsx";
import FeatureSection from "./sections/FeatureSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechSkillSection from "./sections/TechSkillSection.jsx";
import LearningPathSection from "./sections/LearningPathSection.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <FeatureSection />
      <ExperienceSection />
      <TechSkillSection />
      {/*Need to be updated
      <LearningPathSection />
      */}
      <Contact />
      <Footer />
    </>
  );
};
export default App;
