import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <div className="-z-10 relative">
      <div className="firstpage">
        <div className="text">
          <h4 className="h4">Hi, I'm Mahmoud</h4>
          <p className="pPas">
            <span className="passionate">Passionate</span>
            <span className="software">Software Developer</span>
          </p>
        </div>
        <div>
          <img
            className="imgPer"
            src="https://omarwork-com.onrender.com/static/media/sy.5bbea357f77e8437585e.png"
            alt="Mahmoud Haddara"
          ></img>
        </div>
      </div>
      <div className="container">
        <p className="telepaty">
          {" "}
          My name is Mahmoud Haddara. Currently working at{" "}
          <a className="A.telepaty" href="https://telepaty.com/">
            Telepaty Holding .
          </a>{" "}
        </p>
        <div className="description">
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
