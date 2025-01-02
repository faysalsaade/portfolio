import React from "react";
import { data } from "../constants.js";
const Achievements = () => {
  return (
    <>
      <div
        id="works"
        className="m-auto lg:items-center -z-10 relative flex items-start justify-center flex-col  w-2/3  lg:w-3/4 lg:top-36 sm:top-40 top-40"
      >
        <div className="flex flex-col items-start w-full lg:w-8/12">
          <div className="flex relative left-3">
            <p className=" bg-orange-600 h-7 w-2 right-3 relative"></p>
            <p className="sm:text-xl font-bold text-sm ">
              Some things I've built
            </p>
          </div>
        </div>
        {data.map((ele) => (
          <>
            <p className="my-6  sm:text-xl font-bold text-sm ">{ele.title}</p>
            <img
              className="lg:w-3/6 sm:w-4/5 w-full "
              src={ele.img}
              alt="github"
            />
            <div className="flex flex-col text-xl gap-5 w-2/3 relative top-5 items-start ">
              <ul className="flex items-start justify-around w6">
                {ele.tags.map((lang) => (
                  <li className=" rounded text-xs px-3 py-1 mx-1 bg-[#E6DFD3] text-[#716D69]">
                    {lang}
                  </li>
                ))}
              </ul>
              <p className="text-[#716D69] text-base  lg:max-w-3xl  lg:w-full sm:text-lg lg:text-xl sm:w-full">
                {ele.text}
              </p>
            </div>
            <div className=" flex  justify-between w-48 sm:my-7   sm:text-xl text-sm ">
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
