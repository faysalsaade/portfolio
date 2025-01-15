import React from "react";
const Hero = () => {
  return (
    <div className=" relative flex flex-col mx-auto w-5/6 sm:w-2/3 lg:left-12 2 xl:left-20 lg:top-44 top-36 2xl:max-w-2xl m-auto">
      <div className="flex items-start  relative  sm:top-14 lg:top-20 sm:flex-row flex-col-reverse top-0 ">
        <div className="sm:right-0 relative  bottom-14 font-bold">
          <h4 className="lg:text-[35px] lg:relative sm:relative sm:-top-6 sm:text-2xl relative bottom-4 text-[25px] sm:text-[25px] md:text-[29px] lg:top-[-8px] font-semibold">
            Hi, I'm Mahmoud
          </h4>
          <p className="relative lg:top-8 sm:right-[178px] md:right-0">
            <span className="hidden md:block lg:text-[22px] font-bold text-white bg-[#EB5E28] px-2 tracking-widest absolute -rotate-12 text-[20px] top-[20px] lg:top-[-17px]">
              Passionate
            </span>
            <span className=" -w-0 block relative lg:left-40 text-[1.7rem]  lg:top-[-20px] lg:w-64 sm:w-0 sm:left-44 sm:block text-2xl font-light w-full  ">
              Software Developer
            </span>
          </p>
        </div>
        <img
          className="sm:w-48  sm y-12 lg:-right-40  relative  w-32 bottom-20 md:left-44 m-auto sm:m-0 md:mr-7 lg:ml-16 md:bottom-36"
          src="https://omarwork-com.onrender.com/static/media/sy.5bbea357f77e8437585e.png"
          alt="Mahmoud Haddara"
        ></img>
      </div>
      <div className=" text-gray-700 flex flex-col justify-center lg:max-w-3xl lg:text-xl sm:m-auto  lg:m-0  lg:w-[81%] sm:text-xl sm:w-full relative bottom-7">
        <p>
          {" "}
          My name is Mahmoud Haddara. Currently working at{" "}
          <a
            className="text-[20px] text-orange-600 cursor-pointer"
            href="https://telepaty.com/"
          >
            Telepaty Holding .
          </a>{" "}
        </p>
        <div className="relative top-6">
          <p>
            As a software developer, I have a passion for creating innovative
            solutions using cutting-edge technology.
          </p>
          <br></br>
          <p>
            I am constantly learning and staying up-to-date with the latest
            developments in the field, and I bring this expertise and drive to
            every project I work on. Whether working independently or as part of
            a team, I consistently strive to deliver the best possible outcome.
          </p>
          <br></br>
          <p>
            In my spare time, I enjoy doing some freelancing work. My goal is to
            use technology to help clients articulate what’s in their mind to
            better express themselves.
          </p>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Hero;
