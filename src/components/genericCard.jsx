import React from "react";

const genericCard = (props) => {
  const { title, subtitle, image } = props;

  return (
    <div className="min-h-[30%] min-w-[30%] h-auto border-0 p-5 rounded-2xl bg-gray-100 text-black">
      <h1 className="">{title} </h1>
    </div>
  );
};

export default genericCard;
