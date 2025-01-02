import React from "react";
import { data } from "../constants.js";
const Achievements = () => {
  return (
    <>
      <div
        id="works"
        className="-z-10 relative flex items-center justify-center flex-col m-auto w-2/3 lg:top-36"
      >
        <div className="flex flex-col items-start w-8/12">
          <div className="flex">
            <p className=" bg-orange-600 h-7 w-2 right-3 relative"></p>
            <p className="text-xl font-bold ">Some things I've built</p>
          </div>
        </div>
        {data.map((ele) => (
          <>
            <p className="my-6 text-xl font-bold">{ele.title}</p>
            <img className="w-2/4" src={ele.img} alt="github image "></img>
            <div className="flex flex-col text-xl gap-5 w-2/3 relative top-5">
              <ul className="flex items-start justify-around w-64">
                {ele.tags.map((lang) => (
                  <li className=" rounded text-xs px-3 py-1 mx-1 bg-[#E6DFD3] text-[#716D69]">
                    {lang}
                  </li>
                ))}
              </ul>
              <p className="text-[#716D69]">{ele.text}</p>
              <div className=" flex items-center justify-between w-48">
                <a href={ele.projectLink} className="">
                  View Project
                </a>
                <a href={ele.githubLink} className="">
                  Github
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Achievements;
