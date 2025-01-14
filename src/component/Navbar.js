import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { links } from "../constants.js";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const asideRef = useRef(null);

  const toggle = () => setOpen((open) => !open);

  useEffect(() => {
    const ClickOutside = (event) => {
      if (asideRef.current && !asideRef.current.contains(event.target)) {
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
        className="flex  justify-around items-center  z-20
       fixed w-full backdrop-blur h-16 m-auto"
      >
        <div className="flex items-center">
          <img
            src="https://www.howiework.com/static/media/logo.73fe7a7a.png"
            className="sm:w-16 w-14"
            alt="logo"
          />
          <p className="text-[18px] sm:text-3xl sm:font-medium ">
            Mahmoud Haddara
          </p>
        </div>

        {/* second part */}
        <div>
          <ul className="items-center gap-10 md:flex hidden font-medium">
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

        <GiHamburgerMenu
          className=" cursor-pointer md:hidden text-4xl "
          onClick={toggle}
        />

        {open && (
          <aside
            className="w-2/3 h-screen z-0  top-16 left-0
             bg-white md:hidden fixed
              flex flex-col items-center justify-center shadow-2xl"
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
                    <a
                      className="relative inline-block text-black before:content-[''] before:absolute before:left-1 before:bottom-0 before:w-0 before:h-0 before:bg-black transition-all duration-300 hover:before:w-full before:transition-all before:duration-300 hover:before:h-[2px]"
                      href={`#${link}`}
                    >
                      {link}
                    </a>
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
