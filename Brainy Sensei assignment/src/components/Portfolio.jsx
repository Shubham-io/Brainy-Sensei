import React from "react";
import Card from "./Card";
import { ProjectData } from "../data/ProjectData";

const Portfolio = () => {
  return (
    <>
      <header className="bg-[#0E1F51] md:h-72 h-52 flex flex-col justify-center items-center">
        <h1 className="text-[48px] text-[#F45E31] font-bold">Portfolio</h1>
        <span className="text-[24px] text-white">Home/Portfolio</span>
      </header>

      <div className="flex flex-col justify-center items-center mt-8 ">
        <p className="text-[#F45E31] md:text-[24px] text-lg font-semibold">\ Up coming Projects \</p>
        <h2 className="md:text-4xl text-2xl">Our Upcoming projects</h2>
      </div>

      <div className="w-[80%] mx-auto mt-12 grid grid-cols-1   md:grid-cols-3 place-items-center gap-10">
        {ProjectData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
