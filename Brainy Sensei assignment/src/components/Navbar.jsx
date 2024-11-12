import React, { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = ["Home", "About", "Service", "Portfolio", "Contact"];

  return (
    <nav className="flex justify-between items-center  px-6  md:px-32  h-[100px] w-full bg-white">
      <Logo />

      {/* desktop nav items  */}
      <div className="hidden md:flex items-center gap-20">
        <ul className="flex space-x-8 font-regular text-lg">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer font-medium hover:underline hover:text-[#F45E31] underline-offset-8 decoration-4 duration-100"
            >
              {item}
            </li>
          ))}
        </ul>

        <Button text="Get In Touch" />
      </div>

      {/* hamburger on mobile view  */}
      <div className="md:hidden mt-3 z-10">
        <button onClick={() => setMenu(!menu)}>
          {menu ? <IoMdClose size={24} /> : <FiMenu size={24} />}
        </button>
      </div> 
      
      {/* mobile nav items  */}
      {menu && (
        <ul className="md:hidden flex flex-col items-center justify-center space-y-3 bg-white text-lg font-medium mt-0 absolute  inset-0 w-full h-[300px] ">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer font-medium hover:underline hover:text-[#F45E31] underline-offset-8 decoration-4 "
            >
              {item}
            </li>
          ))}
        <Button text="Get In Touch" />
        </ul>

      )}

    </nav>
  );
};

export default Navbar;
