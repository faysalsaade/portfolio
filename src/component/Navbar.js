import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { links } from "../constants.js";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const asideRef = useRef(null);
  const fifi = useRef(null);

  const toggle = () => setOpen((prevOpen) => !prevOpen);

  useEffect(() => {
    const ClickOutside = (event) => {
      if (
        asideRef.current &&
        !asideRef.current.contains(event.target) &&
        fifi.current &&
        !fifi.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", ClickOutside);

    return () => {
      document.removeEventListener("mousedown", ClickOutside);
    };
  }, []);

  return (
    <>
      <div
        id="about"
        className="flex justify-around items-center z-20 fixed lg:w-[125%] w-full backdrop-blur h-16 m-auto 2xl:w-[120%]"
      >
        <div className="flex items-center">
          <img
            src="https://www.howiework.com/static/media/logo.73fe7a7a.png"
            className="sm:w-16 w-14"
            alt="logo"
          />
          <p className="text-[18px] sm:text-2xl sm:font-semibold ">
            Mahmoud Haddara
          </p>
        </div>

        <div>
          <ul className="items-center gap-10 md:flex hidden font-normal">
            {links.map((link) => (
              <li
                key={link}
                className="text-2xl"
                style={{
                  textTransform: "capitalize",
                }}
              >
                <a
                  href={`#${link}`}
                  className="relative inline-block text-black before:content-[''] before:absolute before:left-1 before:bottom-0 before:w-0 before:h-0 before:bg-black transition-all duration-300 hover:before:w-full before:transition-all before:duration-300 hover:before:h-[2px]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div ref={fifi}>
          <GiHamburgerMenu
            className="cursor-pointer md:hidden text-4xl"
            onClick={toggle}
          />
        </div>

        <aside
          className={`w-[70%] h-screen z-0 top-16 left-0 bg-white md:hidden fixed flex flex-col items-center justify-center shadow-2xl transform transition-transform duration-600 ease-in-out ${
            open ? "translate-x-0px" : "-translate-x-full"
          }`}
          ref={asideRef}
        >
          <ul>
            {links.map((link) => (
              <li
                className="text-2xl py-6"
                style={{
                  textTransform: "capitalize",
                }}
                key={link}
              >
                <a
                  className="relative inline-block text-black before:content-[''] before:absolute before:left-1 before:bottom-0 before:w-0 before:h-0 before:bg-black transition-all duration-300 hover:before:w-full before:transition-all before:duration-300 hover:before:h-[2px]"
                  href={`#${link}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
