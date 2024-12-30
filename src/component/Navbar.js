import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const asideRef = useRef(null);

  const toggle = () => setOpen((open) => !open);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (asideRef.current && !asideRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="fixedNav">
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
              <li>
                <a href="#works">Works</a>
              </li>
              <li>
                <a href="#posts">Posts</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <GiHamburgerMenu className="hamb" onClick={toggle} />
        </div>
      </div>

      {open && (
        <aside ref={asideRef} className="aside">
          <ul className="asideUl">
            <li>
              <a href="#works">Works</a>
            </li>
            <li>
              <a href="#posts">Posts</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Navbar;
