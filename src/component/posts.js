import React from "react";
import { url } from "../constants";

const Posts = () => {
  return (
    <>
      <div
        className="relative top-40 left-7 sm:left-16 2xl:max-w-2xl xl:m-auto md:max-w-2xl  md:m-auto w-9/12 m-auto "
        id="posts"
      >
        <p className=" bg-orange-600 h-7 w-2 right-5 relative top-8"></p>
        <p className="text-2xl mb-6">Blogs</p>
      </div>
      <div className="grid md:grid-cols-2 2xl:max-w-2xl xl:m-auto md:max-w-xl  md:m-auto gap-5 md:w-8/12 m-auto w-6/12 grid-cols-1 left-10 relative">
        {url.map((ele) => (
          <>
            <article className="relative top-40 ">
              <a href={`${ele.tag}`}>
                <img
                  className="right-12 relative h-24 md:object-cover w-96  rounded-xl hover:scale-110 "
                  src={`${ele.url}`}
                  alt="Blogs"
                />
              </a>
              <div className="right-12 relative">
                <p className="w-68">
                  {`${ele.txt}`}
                  <a
                    className="text-orange-600"
                    href={`${ele.tag}`}
                  >{`${ele.tagNa}`}</a>
                </p>
              </div>
            </article>
          </>
        ))}
      </div>
      <div className="relative top-40 left-7 sm:left-16 2xl:max-w-2xl xl:m-auto md:max-w-2xl  md:m-auto w-9/12 m-auto ">
        <p className=" bg-orange-600 h-7 w-2 right-5 relative top-8"></p>
        <p className="text-2xl mb-6">Hobbies</p>
        <p className="font-normal relative right-4">
          Horseback Riding, Tennis, Checkers, Hiking, Art, Travelling
        </p>
      </div>
    </>
  );
};

export default Posts;
