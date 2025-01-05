import React from "react";
import { url } from "../constants";

const Posts = () => {
  return (
    <>
      <div className="relative top-40 left-5 2xl:max-w-2xl xl:m-auto md:max-w-2xl  md:m-auto ">
        <p className=" bg-orange-600 h-7 w-2 right-5 relative top-8"></p>
        <p className="text-2xl">Blogs</p>
      </div>
      <div className="grid grid-cols-2 2xl:max-w-2xl xl:m-auto md:max-w-xl  md:m-auto gap-7 m:w-8/12 ">
        {url.map((ele) => (
          <>
            <article className="relative top-40 ">
              <a href={`${ele.tag}`}>
                <img
                  className="right-12 relative h-24 object-cover w-96  rounded-xl"
                  src={`${ele.url}`}
                  alt=""
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
    </>
  );
};

export default Posts;
