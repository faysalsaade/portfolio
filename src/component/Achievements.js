import React from "react";
import { data } from "../constants.js";
const Achievements = () => {
  return (
    <div
      id="works"
      className="m-auto lg:items-center  relative flex items-start justify-center flex-col w-5/6 lg:w-3/4 lg:top-48  top-40 sm:mb-12"
    >
      <div className="flex relative sm:left-16 lg:left-[-1rem] flex-col items-start w-full lg:w-2/3 2xl:max-w-lg 2xl:m-auto 5xl:max-w-[17%]">
        <div className="flex left-1 sm:left-9 relative">
          <p className=" bg-orange-600 h-7 w-2 right-[0.60rem] relative"></p>
          <p className="sm:text-xl font-bold text-lg ">
            Some things I've built
          </p>
        </div>
      </div>
      {data.map((ele) => (
        <div
          className="mb-8 sm:mb-0 lg:w-[82%]  2xl:max-w-4xl "
          key={ele.title}
        >
          <div className="mb-8">
            <div className="flex items-center justify-start sm:justify-center lg:justify-center w-full relative left-0 sm:left-0 mt-5 mb-9">
              <p className="sm:y-6  sm:text-xl font-bold text-base ">
                {ele.title}
              </p>
            </div>
            <img
              className="lg:w-[50%] m-auto w-5/6 sm:w-[65%]"
              src={ele.img}
              alt="github"
            />
            <div className="flex flex-col sm:text-xl sm:gap-5  w-full sm:w-[79.7%] 2xl:w-[56%]  relative top-5 items-start m-auto">
              <ul className="flex items-start justify-around w-6 my-4">
                {ele.tags.map((lang) => (
                  <li
                    className=" rounded  p-1 text-[14px] sm:text-xs sm:px-3 sm:py-1 mx-1 bg-[#E6DFD3] text-[#716D69] "
                    key={lang}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
              <p className="text-[#716D69] text-base  lg:max-w-[47rem]   sm:text-lg lg:text-xl sm:w-full">
                {ele.text}
              </p>
            </div>
          </div>
          <div
            className=" flex lg:left-0  xl:left-[-4rem]  sm:left-16 
    justify-start w-full gap-10 sm:items-start   sm:mb-7 sm:mt-14 sm:text-xl text-sm lg:gap-20 xl:w-[33rem]  m-auto relative xl:right-16 z-10 lg:w-[79%] 2xl:w-[23rem]"
          >
            <a
              href={ele.projectLink}
              className="cursor-pointer  before:top-8 gap-3 relative inline-block text-[14px] sm:text-[17px] text-black before:content-[''] before:absolute before:left-1 before:bottom-0 before:w-0 before:h-0 before:bg-black transition-all duration-300 hover:before:w-full before:transition-all before:duration-300 hover:before:h-[2px] "
            >
              View Project
            </a>
            <a
              href={ele.githubLink}
              className="text-[14px] cursor-pointer  before:top-8 gap-3 relative inline-block text-black before:content-[''] before:absolute before:left-1 before:bottom-0 before:w-0 before:h-0 before:bg-black transition-all duration-300 hover:before:w-full before:transition-all before:duration-300 hover:before:h-[2px] sm:text-[17px]  "
            >
              Github
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
