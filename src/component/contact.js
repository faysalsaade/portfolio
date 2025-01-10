import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { SocialMedia } from "../constants";
const Contact = () => {
  return (
    <>
      <div className="relative top-48 left-7 sm:left-16 2xl:max-w-2xl xl:m-auto md:max-w-2xl  md:m-auto w-9/12 m-auto  ">
        <p className=" bg-orange-600 h-7 w-2 right-5 relative top-8"></p>
        <p className="text-2xl mb-6">Get in touch</p>
        <div
          className="flex flex-col gap-4 items-start right-4 relative"
          id="contact"
        >
          {SocialMedia.map((ele) => (
            <a
              className="text-xl flex gap-3 relative inline-block text-black before:content-[''] before:absolute before:left-1 before:bottom-0 before:w-0 before:h-0 before:bg-black transition-all duration-300 hover:before:w-full before:transition-all before:duration-300 hover:before:h-[2px] "
              target="_blank"
              href={ele.url}
            >
              {ele.name}
              <MdOutlineArrowOutward />
            </a>
          ))}
          <button className="py-2  w-40 bg-orange-600 text-white rounded-md top-8 relative font-normal mb-[-55px] hover:bg-[#c34e1f]">
            Send Message
          </button>
        </div>
        <footer className=" top-40  relative w-[54%] m-auto  mb-[450px] text-[#43413E] right-10 ">
          © Designed & Built by Mahmoud Haddara, 2025
        </footer>
      </div>
    </>
  );
};

export default Contact;
