import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { links } from "../constants.js";
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
      <div
        id="about"
        className="flex justify-around items-center top-0 fixed w-full backdrop-blur h-16"
      >
        <div className="flex items-center">
          <img
            // src="https://www.howiework.com/static/media/logo.73fe7a7a.png"
            src="images/logo192.png"
            className="w-12"
            alt="logo"
          />
          <p className="text-3xl font-medium">Mahmoud Haddara</p>
        </div>

        {/* second part */}
        <div>
          <ul className="  items-center gap-10 md:flex hidden font-medium">
            {links.map((link) => (
              <>
                <li
                  className="text-2xl"
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  <a href={`#${link}`}>{link}</a>
                </li>
              </>
            ))}
          </ul>
        </div>

        <GiHamburgerMenu
          className=" cursor-pointer md:hidden text-4xl "
          onClick={toggle}
        />

        {open && (
          <aside
            className="w-2/3 h-screen z-50  top-16 left-0
             bg-red-500 md:hidden fixed
              flex flex-col items-center justify-center"
            ref={asideRef}
          >
            <ul>
              {links.map((link) => (
                <>
                  <li
                    className="text-2xl py-6"
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    <a href={`#${link}`}>{link}</a>
                  </li>
                </>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </>
  );
};

export default Navbar;
