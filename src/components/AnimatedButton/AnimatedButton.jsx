// this component is used from https://prismic.io/blog/css-hover-effects

const AnimatedButton = ({ text, id }) => {
  return (
    <a
      className="holographic-container"
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById("counter");
        if (id && target) {
          const offset = window.innerHeight * 0.15;
          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
    >
      <div className="group relative w-[200px] h-[100px] bg-[#111] flex justify-center items-center overflow-hidden rounded-[15px] transition-all duration-500 ease-in-out cursor-pointer hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]">
        <span className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-b from-transparent via-transparent to-cyan-300/30 rotate-[-45deg] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-full pointer-events-none" />
        <h2 className="text-cyan-300 text-xl md:text-2xl lg:text-[1.5rem] relative z-[2]">
          {text}
        </h2>
      </div>
    </a>
  );
};
export default AnimatedButton;
