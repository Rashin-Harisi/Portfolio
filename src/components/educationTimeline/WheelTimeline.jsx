import "./WheelTimeline.css";
import "../../components/styles/dotBachground.css";
import { learningPath } from "../../constants/index.jsx";

const WheelTimeline = () => {
  return (
    <div className="cards-container">
      <ul className="cards" style={{ "--items": `${learningPath.length}` }}>
        {learningPath.map((item, index) => (
          <li key={index} style={{ "--i": index }}>
            <input
              type="radio"
              id={`item-${index}`}
              name="gallery-item"
              defaultChecked={index === 11}
            />
            <label htmlFor={`item-${index}`}>
              {item.year} {/* use start year for label */}
            </label>
            <h2>{item.name}</h2>
            <p>
              {item.institute} <br />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WheelTimeline;
