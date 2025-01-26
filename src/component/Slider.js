import React from "react";
import Slider from "react-slick";
import { data } from "../constants";
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="works" className="m-auto relative">
      <div className="slider-container">
        <div className="flex left-1 sm:left-9 relative  m-auto md:w-[68%] lg:w-[60%] xl:w-[60%] 4xl:max-w-[20%] 5xl:max-w-[16%] 3xl:max-w-[25%] 2xl:max-w-[37%] justify-start top-52 6xl:max-w-[14%] max-w-[80%] sm:max-w-[70%]">
          <p className=" bg-orange-600 h-7 w-2 right-[0.60rem] relative"></p>
          <p className="sm:text-xl font-bold text-lg ">
            Some things I've built
          </p>
        </div>
        <Slider {...settings}>
          {data.map((ele) => (
            <div
              className=" flex !flex flex-col top-[300px] m-auto  mt-[250px] lg:w-[82%]  2xl:max-w-full"
              key={ele.title}
            >
              <div className="mb-8 m-auto max-w-full 2xl:max-w-[100%] 3xl:max-w-[60%] 4xl:max-w-[50%] 5xl:max-w-[40%]">
                <div className="flex items-center justify-start sm:justify-center lg:justify-center  w-full relative left-0 sm:left-0 mt-5 mb-9 mx-auto max-w-[85%]">
                  <p className="sm:y-6  sm:text-xl font-bold text-base ">
                    {ele.title}
                  </p>
                </div>
                <img
                  className="lg:w-[33%] 2xl:!w-[18%] m-auto w-[80%] sm:w-[42%]"
                  src={ele.img}
                  alt="github"
                />
                <div className="flex flex-col sm:text-xl sm:gap-5  w-[80%] sm:w-[60%] lg:w-[56%] 2xl:w-[31%] relative top-5 items-start m-auto 3xl:w-[36%] 6xl:w-[32%]">
                  <ul className="flex items-start justify-around w-6 my-4">
                    {ele.tags.map((lang) => (
                      <li
                        className=" rounded  p-1 text-[11px] sm:text-xs sm:px-3 sm:py-1 mx-1 bg-[#E6DFD3] text-[#716D69] "
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
                className=" flex  max-w-[83%]   sm:w-[60%]
    justify-start w-full gap-10 sm:items-start   sm:mb-7 sm:mt-6 sm:text-xl text-sm lg:gap-20 xl:w-[46%]  m-auto relative xl:right-16 z-10 lg:w-[56%] 2xl:w-[24%] 3xl:w-[17%] 4xl:w-[11%] 6xl:w-[8%] "
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
        </Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;
