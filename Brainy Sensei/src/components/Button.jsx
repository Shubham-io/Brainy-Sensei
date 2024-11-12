import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-[#F45E31] text-lg  text-white font-medium px-4 py-3 rounded-md">
      {text}
    </button>
  );
};

export default Button;
