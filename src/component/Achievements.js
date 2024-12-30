import React from "react";
import "./Achievements.css";
const Achievements = () => {
  return (
    <>
      <div id="works">
        <div className="Achievements">
          <p className="things">Some things I've built</p>
          <p className="apps">Snap App</p>
          <img
            className="Img"
            src="https://github.com/omarsaade/omarsaade/raw/main/assets/pp.jpg?raw=true"
            alt="github image "
          ></img>
        </div>
        <ul className="liOfAch">
          <li>React</li>
          <li>Node</li>
          <li>ExpressJS</li>
          <li>MongoDB </li>
        </ul>
        <p className="text">
          Snap App focus on creating a photo sharing platform for people who
          love architecture. It integrates sharing, navigation, architecture
          information and tour planning together.
        </p>
        <div className="allA">
          <a className="firA">View Project</a>
          <a className="secA">Github</a>
        </div>
        <div className="Achievements">
          <p className="apps">Al Markazia News App</p>
          <img
            className="Img"
            src="https://user-images.githubusercontent.com/49005530/235341454-724e8957-a55b-4d8c-a51c-d2d088c5f333.jpg"
            alt="github image "
          ></img>
        </div>
        <ul className="liOfAch">
          <li>ReactNative</li>
          <li>Redux</li>
          <li>Redux Toolkit</li>
        </ul>
        <p className="text">
          Almarkazia is a news app designed to keep users informed and connected
          to the world. It offers curated news from various categories,
          personalized recommendations, and real-time updates.
        </p>
        <div className="allA">
          <a className="firA">View Project</a>
          <a className="secA">Github</a>
        </div>

        <div className="Achievements">
          <p className="apps">CryptoFinder App</p>
          <img
            className="Img"
            src="https://omarwork-com.onrender.com/static/media/Untitled1.939f34a0bf394b4cbd80.jpg"
            alt="github image "
          ></img>
        </div>
        <ul className="liOfAch">
          <li>React</li>
          <li>Firebase</li>
          <li>Redux Toolkit</li>
          <li>Render</li>
        </ul>
        <p className="text">
          CryptoFinder App focus on using the latest version of redux (Redux
          Toolkit) and React Router (V6)
        </p>
        <div className="allA">
          <a className="firA">View Project</a>
          <a className="secA">Github</a>
        </div>
      </div>
    </>
  );
};

export default Achievements;
