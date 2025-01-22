import React, { useState, useEffect, useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { SocialMediaLinks } from "../constants";
import { isItValidEmail } from "valid-utils";
import emailjs from "@emailjs/browser";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./Slider";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const toggle = () => setOpen((open) => !open);

  useEffect(() => {
    const ClickOutside = (event) => {
      if (form.current && !form.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", ClickOutside);

    return () => {
      document.removeEventListener("mousedown", ClickOutside);
    };
  }, []);

  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });
  const name = nameRef.current?.value;
  const email = emailRef.current?.value;
  const message = messageRef.current?.value;
  const checkingName = () => {
    const name = nameRef.current.value;
    if (!name) {
      setError({
        ...error,
        name: "Name must not be empty",
      });
    } else {
      setError({
        ...error,
        name: "",
      });
    }
  };

  const checkingEmail = () => {
    const email = emailRef.current.value;
    const { result, isValid } = isItValidEmail(email);

    if (!email) {
      setError({
        ...error,
        email: "Email must not be empty",
      });
    } else {
      if (isValid) {
        setError({
          ...error,
          email: "",
        });
      } else {
        setError({
          ...error,
          email: result,
        });
      }
    }
  };

  const checkingMessage = () => {
    const message = messageRef.current.value;

    if (!message) {
      setError({
        ...error,
        message: "Message must not be empty",
      });
    } else {
      setError({
        ...error,
        message: "",
      });
    }
  };
  const colorization = (e) => {
    if (e.target.id === "name") {
      setInput({
        ...input,
        name: e.target.value,
      });
    }
    if (e.target.id === "email") {
      setInput({
        ...input,
        email: e.target.value,
      });
    }
    if (e.target.id === "message") {
      setInput({
        ...input,
        message: e.target.value,
      });
    }
  };
  const submit = (event) => {
    event.preventDefault();

    if (
      input.name === "" ||
      input.email === "" ||
      input.message === "" ||
      isItValidEmail(email).isValid === false
    ) {
      return;
    } else {
      emailjs.send("service_7cirdt9", "template_upg2ve1", {
        name: name,
        email: email,
        message: message,
      });
    }
  };
  return (
    <>
      <div className="relative top-48 left-3 sm:left-16 2xl:max-w-2xl xl:m-auto md:max-w-[47rem] md:m-auto w-[78%] m-auto">
        <p className="bg-orange-600 h-7 w-2 right-5 relative top-8"></p>
        <p className="text-2xl mb-6">Get in touch</p>
        <div
          className="flex flex-row gap-6 items-start right-4 relative"
          id="contact"
        >
          {SocialMediaLinks.map((ele) => (
            <a
              className="text-xl flex  gap-3 relative text-black before:content-[''] before:absolute before:left-1 before:bottom-0 before:w-0 before:h-0 before:bg-black transition-all duration-300 hover:before:w-full before:transition-all before:duration-300 hover:before:h-[2px]"
              key={ele.name}
              target="_blank"
              rel="noreferrer"
              href={ele.url}
            >
              {ele.name}
            </a>
          ))}
          <button
            className="py-2 w-40 bg-orange-600 text-white rounded-md top-8 relative font-normal mb-[-55px] hover:bg-[#c34e1f]"
            onClick={toggle}
          >
            Send Message
          </button>
        </div>
        <footer className="top-40 relative w-[80%] lg:w-[54%] m-auto mb-[450px] text-[#43413E] right-10">
          © Designed & Built by Mahmoud Haddara, 2025
        </footer>
      </div>

      <SimpleSlider />
      {open && (
        <div className="backdrop-blur-sm bg-[hsla(0,0%,100%,.95)] rounded-2xl shadow-md fixed left-4 w-5/6 sm:left-[28%]  top-[180px]  sm:w-[37vw] z-30">
          <form
            className="flex flex-col h-fit py-2 px-8"
            onSubmit={submit}
            ref={form}
          >
            <div className="my-5 mx-0">
              <label className="text-[#252422] font-bold text-s mb-2">
                Name
              </label>
              <input
                className="border border-[#ccc] rounded-[2px] py-1 px-2 w-[100%]"
                id="name"
                type="text"
                ref={nameRef}
                onBlur={checkingName}
                onChange={colorization}
                value={input.name}
              />
              <span>{error.name}</span>
            </div>
            <div className="my-5 mx-0">
              <label className="text-[#252422] font-bold text-s mb-2">
                Email
              </label>
              <input
                className="border border-[#ccc] rounded-[2px] py-1 px-2 w-[100%]"
                id="email"
                ref={emailRef}
                onBlur={checkingEmail}
                onChange={colorization}
                value={input.email}
              />
              <span>{error.email}</span>
            </div>
            <div className="my-5 mx-0">
              <label className="text-[#252422] font-bold text-s mb-2">
                Message
              </label>
              <textarea
                className="bg-[#fff] border border-[#ccc] rounded-[2px] p-[0.2rem] px-[0.4rem] w-full"
                id="message"
                ref={messageRef}
                onBlur={checkingMessage}
                onChange={colorization}
                value={input.message}
              ></textarea>
              <span>{error.message}</span>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className={`bg-[#d36d45] text-[#bebdbd] cursor-not-allowed    sm:px-[17px] p-[12px] sm:text-base rounded-[5px] border-white border text-[14px] ${
                  input.name.length > 0 &&
                  input.email.length > 0 &&
                  input.message.length > 0 &&
                  isItValidEmail(email).isValid === true &&
                  " bg-orange-600 text-white cursor-pointer"
                }`}
              >
                {" "}
                Send Message
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Contact;
