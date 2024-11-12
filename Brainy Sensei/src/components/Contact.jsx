import React from "react";
import Button from "./Button";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div
      className="relative bg-cover  bg-center h-[124vh] mt-10"
      style={{ backgroundImage: "url('/bg-img.jpg')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#0E1F51E5] opacity-100"></div>

      <div className="absolute left-1/2 -translate-x-1/2 top-20   ">
        <h3 className="text-3xl font-bold text-[#F45E31] text-center">
          Get In Touch
        </h3>
        <h2 className="text-5xl font-bold leading-12 text-white">
          Hey! Let’s Talk
        </h2>
      </div>
      {/* Content container */}
      <div className="relative z-10 mt-40 flex flex-col md:flex-row items-end  justify-center pb-20 gap-20 h-full ">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full   md:w-1/2 md:h-[570px]">
          {/* Form */}
          <form className="space-y-6  ">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-4 border bg-[#f7f7f7] text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-4 border bg-[#f7f7f7] text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Phone"
                className="w-full px-4 py-4 border bg-[#f7f7f7] text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-4 border bg-[#f7f7f7] text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
              ></textarea>
            </div>

            <Button text="Send Now" />
          </form>
        </div>

        <div className="md:w-1/4 md:h-[570px] md:space-y-10 space-y-4 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <div className="flex items-center gap-10 w-full">
            <span className="bg-[#f7f7f7] p-5 rounded-xl hover:cursor-pointer">
              <img src="/call.png" alt="call" className="w-10" />
            </span>
            <div className="flex justify-center  flex-col mb-2">
              <span className="text-2xl font-bold text-[#F45E31]">
                Call Anytime
              </span>
              <span className="font-semibold ">+ 91 8130587803</span>
            </div>
          </div>

          <div className="flex items-center gap-10 w-full">
            <span className="bg-[#f7f7f7] p-5 rounded-xl hover:cursor-pointer">
              <img src="/mail.png" alt="mail" className="w-10" />
            </span>
            <div className="flex justify-center   flex-col mb-2">
              <span className="text-2xl font-bold text-[#F45E31]">
                Send Email
              </span>
              <span className="font-semibold ">support@brainysensei.com</span>
            </div>
          </div>

          <div className="flex items-center gap-10 w-full">
            <span className="bg-[#f7f7f7] py-5 px-7 rounded-xl hover:cursor-pointer">
              <img src="/location.png" alt="location" className="w-12" />
            </span>
            <div className="flex justify-center   flex-col mb-2">
              <span className="text-2xl font-bold text-[#F45E31]">
                Visit Us
              </span>
              <span className="font-semibold ">
                59-60, Block E, Noida Sector 3, Noida, Uttar Pradesh 201301
              </span>
            </div>
          </div>

          <h2 className="text-center text-2xl font-bold text-[#004AAB]">
            Follow us
          </h2>

          <div className="flex gap-6">
            <div className="bg-[#F45E31] w-fit p-6  rounded-xl hover:cursor-pointer ">
              <img src="/linkedIn.png" alt="location" className="w-6" />
            </div>
            <div className="bg-[#F45E31] w-fit p-6  rounded-xl hover:cursor-pointer ">
              <img src="/insta.png" alt="location" className="w-6" />
            </div>
            <div className="bg-[#F45E31] w-fit p-6  rounded-xl hover:cursor-pointer ">
              <img src="/twitter.png" alt="location" className="w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
