import React from "react";
import { data } from "../constants.js";
const Achievements = () => {
  return (
    <>
      <div
        id="works"
        className="m-auto lg:items-center  relative flex items-start justify-center flex-col  w-2/3  lg:w-3/4 lg:top-36 sm:top-40 top-40"
      >
        <div className="flex flex-col items-start w-full lg:w-2/3 2xl:max-w-lg 2xl:m-auto ">
          <div className="flex relative left-3">
            <p className=" bg-orange-600 h-7 w-2 right-3 relative"></p>
            <p className="sm:text-xl font-bold text-base ">
              Some things I've built
            </p>
          </div>
        </div>
        {data.map((ele) => (
          <>
            <div className="mx-auto flex flex-col lg:items-center my-8">
              <div className="flex items-center justify-start lg:justify-center w-3/6 mx-auto">
                <p className="my-6  sm:text-xl font-bold text-base ">
                  {ele.title}
                </p>
              </div>
              <img
                className="lg:w-96  m-auto sm:w-3/4 w-3/4 "
                src={ele.img}
                alt="github"
              />
              <div className="flex flex-col sm:text-xl sm:gap-5  w-5/6 sm:w-2/3 relative top-5 items-start ">
                <ul className="flex items-start justify-around w-6 my-4">
                  {ele.tags.map((lang) => (
                    <li className=" rounded  p-1 text-[9.6px] sm:text-xs sm:px-3 sm:py-1 mx-1 bg-[#E6DFD3] text-[#716D69] ">
                      {lang}
                    </li>
                  ))}
                </ul>
                <p className="text-[#716D69] text-base  lg:max-w-3xl   sm:text-lg lg:text-xl sm:w-full">
                  {ele.text}
                </p>
              </div>
            </div>
            <div
              className=" flex   lg:w-2/3 ;
    justify-start w-11/12 gap-10 sm:items-start   sm:my-7 sm:text-xl text-sm lg:gap-10 xl:w-96  m-auto "
            >
              <a href={ele.projectLink} className="cursor-pointer">
                View Project
              </a>
              <a href={ele.githubLink} className="cursor-pointer">
                Github
              </a>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Achievements;
