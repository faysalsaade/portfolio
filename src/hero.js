import React from "react";
const Hero = () => {
  return (
    <div className="-z-10 relative flex flex-col mx-auto  w-2/3 lg:left-28 lg:top-7">
      <div className="flex items-center  relative top-6 ">
        <div className="">
          <h4 className="lg:text-4xl lg:relative lg:top-4 sm:relative sm:-top-6 sm:text-2xl  ">
            Hi, I'm Mahmoud
          </h4>
          <p className="relative lg:top-8">
            <span className="lg:text-2xl font-bold text-white bg-orange-500 px-2 tracking-widest absolute -rotate-12">
              Passionate
            </span>
            <span className="relative lg:left-44 lg:text-2xl  lg:top-0 lg:w-64 sm:w-0 sm:left-32 sm:block">
              Software Developer
            </span>
          </p>
        </div>
        <div>
          <img
            className="w-52 my-12 lg:-right-40 lg:relative"
            src="https://omarwork-com.onrender.com/static/media/sy.5bbea357f77e8437585e.png"
            alt="Mahmoud Haddara"
          ></img>
        </div>
      </div>
      <div className="text-gray-700 flex flex-col justify-center lg:max-w-3xl lg:text-xl">
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
