import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-center items-center px-2 cursor-pointer">
      <img src="/logo.png" alt="logo" className="w-12" />
      <span className="ml-1 mt-2 text-[#0E1F51] text-2xl font-bold">
        Brainy Sensei
      </span>
    </div>
  );
};

export default Logo;
