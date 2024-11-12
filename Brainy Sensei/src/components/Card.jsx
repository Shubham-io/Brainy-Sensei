import React from "react";

const Card = ({ title, image }) => {
  return (
    <div className="md:w-[400px] md:h-[320] bg-white shadow-lg rounded-lg hover:scale-105 duration-300">
      <img
        src={image}
        alt={title}
        className=" rounded-lg w-[400px] h-[260px] object-cover"
      />
      <div className="flex flex-col space-y-2 px-8 py-2 my-2">
        <h2 className="text-xl font-bold cursor-pointer">{title}</h2>
        <span className="text-[#F45E31] cursor-pointer text-lg">
          Read more...
        </span>
      </div>
    </div>
  );
};

export default Card;
