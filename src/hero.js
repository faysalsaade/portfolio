import React from "react";
const Hero = () => {
  return (
    <div className="-z-10 relative flex flex-col mx-auto  w-2/3 lg:left-28 lg:top-32 top-36">
      <div className="flex items-start  relative  sm:top-14 lg:top-20 sm:flex-row flex-col-reverse top-0 ">
        <div className="sm:right-0 relative  bottom-7 font-bold">
          <h4 className="lg:text-4xl lg:relative lg:top-4 sm:relative sm:-top-6 sm:text-2xl relative bottom-6 text-2xl  ">
            Hi, I'm Mahmoud
          </h4>
          <p className="relative lg:top-8">
            <span className="hidden sm:block lg:text-2xl font-bold text-white bg-orange-500 px-2 tracking-widest absolute -rotate-12">
              Passionate
            </span>
            <span className=" -w-0 block relative lg:left-44 lg:text-2xl  lg:top-0 lg:w-64 sm:w-0 sm:left-32 sm:block text-xl">
              Software Developer
            </span>
          </p>
        </div>
        <img
          className="sm:w-52  sm: y-12 lg:-right-40 lg:relative relative  w-36 bottom-20 sm:left-20 m-auto sm:m-0 md:mx-7    "
          src="https://omarwork-com.onrender.com/static/media/sy.5bbea357f77e8437585e.png"
          alt="Mahmoud Haddara"
        ></img>
      </div>
      <div className=" text-gray-700 flex flex-col justify-center lg:max-w-3xl lg:text-xl sm:m-auto  lg:m-0  lg:w-3/4 sm:text-xl sm:w-full">
        <p>
          {" "}
          My name is Mahmoud Haddara. Currently working at{" "}
          <a className="text-orange-600" href="https://telepaty.com/">
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
