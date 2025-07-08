import React from "react";

const TitleBox = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <p className="border rounded-2xl flex items-center justify-center bg-[#282732] font-medium px-8 py-1 text-sm sm:text-base">
        {sub}
      </p>
      <p className="font-semibold text-2xl sm:text-5xl">{title}</p>
    </div>
  );
};
export default TitleBox;
