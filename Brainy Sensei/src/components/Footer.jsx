import React from "react";
import Logo from "./Logo";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      <footer className=" flex  md:justify-evenly justify-between bg-[#0E1F51] text-white gap-13 mt-48 md:mt-0 md:p-20 px-6">
        <nav className=" flex flex-col gap-8 items-center md:w-1/5 w-1/2 ">
          <div className="flex items-center w-full  cursor-pointer">
            <img src="/logo.png" alt="logo" className="w-12" />
            <span className="ml-4 mt-4 text-white text-3xl font-bold">
              Brainy Sensei
            </span>
          </div>
          <p className="text-justify leading-10 tracking-widest ">
            Better insights drive smarter decisions, stronger relationships, and
            new growth opportunities for long-term success.
          </p>

          <div className="hidden md:flex    gap-6 w-full ">
            <div className="bg-[#F45E31]  w-fit p-6  rounded-xl hover:cursor-pointer ">
              <img src="/linkedIn.png" alt="location" className="w-6" />
            </div>
            <div className="bg-[#F45E31] w-fit p-6  rounded-xl hover:cursor-pointer ">
              <img src="/insta.png" alt="location" className="w-6" />
            </div>
            <div className="bg-[#F45E31] w-fit p-6  rounded-xl hover:cursor-pointer ">
              <img src="/twitter.png" alt="location" className="w-6" />
            </div>
          </div>
        </nav>

        <nav className="hidden md:flex flex-col  gap-5 items-center  w-1/5 my-8 ">
          <div>
            <h6 className="text-3xl font-semibold mb-2 text-white ">
              Services
            </h6>
            <div className="h-1 rounded bg-[#F45E31] w-16"></div>
          </div>
          <a className="block mb-1">Software Development</a>
          <a className="block mb-1">Generative AI</a>
          <a className="block mb-1">LLM and Chatbot Development</a>
          <a className="block mb-1">AI Customization</a>
          <a className="block mb-1">Tech Team for Your Company</a>
          <a className="block mb-1">Edutech Solution</a>
        </nav>
        <nav className="flex flex-col gap-5 items-center md:w-1/5 w-1/2 my-8 ">
          <div>
            <h6 className="text-3xl font-semibold mb-2 text-white">
              Quick Link
            </h6>
            <div className="h-1 rounded bg-[#F45E31] w-16"></div>
          </div>
          <a className="block mb-1">Home</a>
          <a className="block mb-1">About</a>
          <a className="block mb-1">Service</a>
          <a className="block mb-1">Portfolio</a>
          <a className="block mb-1">Contact</a>
        </nav>
        <form className="hidden md:flex flex-col gap-4  w-1/5 my-8">
          <div>
            <h6 className="text-3xl font-semibold mb-2 text-white ">
              {" "}
              Get in touch
            </h6>
            <div className="h-1 rounded bg-[#F45E31] w-16"></div>
          </div>

          <label className="flex flex-col justify-start mb-2 italic font-light text-2xl">
            <span> Better Insights For</span>
            <span> Business Growth</span>
          </label>

          <div className="flex flex-col mt-12 ">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="text-end mt-6">
              <Button text="Submit" />
            </div>
          </div>
        </form>
      </footer>

      <div className="md:hidden flex  justify-center bg-[#0E1F51]  gap-6 w-full py-4">
        <div className="bg-[#F45E31]  w-fit p-4  rounded-xl hover:cursor-pointer ">
          <img src="/linkedIn.png" alt="location" className="w-6" />
        </div>
        <div className="bg-[#F45E31] w-fit p-4  rounded-xl hover:cursor-pointer ">
          <img src="/insta.png" alt="location" className="w-6" />
        </div>
        <div className="bg-[#F45E31] w-fit p-4  rounded-xl hover:cursor-pointer ">
          <img src="/twitter.png" alt="location" className="w-6" />
        </div>
      </div>
    </>
  );
};

export default Footer;
