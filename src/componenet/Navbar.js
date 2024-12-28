import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="mainNav">
        <div className="nav">
          <img
            src="https://www.howiework.com/static/media/logo.73fe7a7a.png"
            className="imgNav"
            alt="logo"
          />
          <p className="name">Mahmoud Haddara</p>
        </div>
        {/* second part */}
        <div className="options">
          <ul>
            <li>Works</li>
            <li>Posts</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="firstpage">
        <div className="parent">
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
      </div>
    </>
  );
};

export default Navbar;
