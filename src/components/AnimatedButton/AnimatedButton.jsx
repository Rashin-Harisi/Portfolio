import "./AnimatedButton.css";

// this component is used from https://prismic.io/blog/css-hover-effects

const AnimatedButton = ({ text, id }) => {
  return (
    <a
      className="holographic-container"
      onAbort={(e) => {
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
      <div className="holographic-card">
        <h2>{text}</h2>
      </div>
    </a>
  );
};
export default AnimatedButton;
