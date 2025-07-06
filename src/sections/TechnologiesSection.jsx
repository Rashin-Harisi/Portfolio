import { logoIconsList } from "../constants/index.jsx";

const TechnologiesSection = () => {
  return (
    <section className="p-0 relative my-10">
      <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="w-[100%] overflow-hidden relative h-15">
        <div className="logo_animation gap-5 md:gap-12">
          {logoIconsList.map((log, index) => (
            <div className="flex-none flex-center float-left">
              <img
                key={index}
                src={log.imgPath}
                alt="Logo_Technologies"
                className=""
              />
            </div>
          ))}
          {logoIconsList.map((log, index) => (
            <div className="flex-none flex-center float-left">
              <img
                key={index}
                src={log.imgPath}
                alt="Logo_Technologies"
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechnologiesSection;
