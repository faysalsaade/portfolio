import React from "react";
import "./Achievements.css";
import { data } from "../constants.js";
const Achievements = () => {
  return (
    <div id="works">
      {data.map((ele) => (
        <>
          <div className="Achievements">
            <p className="things">Some things I've built</p>
            <p className="apps">{ele.title}</p>
            <img className="Img" src={ele.img} alt="github image "></img>
          </div>
          <ul className="liOfAch">
            {ele.tags.map((lang) => (
              <li>{lang}</li>
            ))}
          </ul>
          <p className="text">{ele.text}</p>
          <div className="allA">
            <a href={ele.projectLink} className="firA">
              View Project
            </a>
            <a href={ele.githubLink} className="secA">
              Github
            </a>
          </div>
        </>
      ))}
    </div>
  );
};

export default Achievements;
