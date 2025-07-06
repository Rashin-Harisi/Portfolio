import React, { useRef } from "react";

const ShiningCard = ({ index, card, children }) => {
  const cardsRef = useRef([]);
  const handleMouseMove = (index) => (e) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", angle + 60);
  };
  return (
    <div
      className="shining_card_container border border-black bg-black rounded-xl p-10 mb-5 break-inside-avoid-column timeline-card"
      onMouseMove={handleMouseMove(index)}
      ref={(el) => (cardsRef.current[index] = el)}
    >
      <div className="pointer-events-none absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-[10px] saturate-[200%]" />
      <div className="flex gap-1 items-center mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img
            src="./pictures/star.png"
            alt="star"
            key={i}
            className="size-5"
          />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-xl text-white">{card.review}</p>
      </div>
      {children}
    </div>
  );
};
export default ShiningCard;
