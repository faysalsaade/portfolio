import React from "react";
import { url } from "../constants";

const Posts = () => {
  return (
    <>
      <div
        className="relative top-[40px]  sm:left-16   2xl:max-w-[44rem] xl:m-auto  md:m-auto md:w-[68%] m-auto "
        id="posts"
      >
        <p className=" bg-orange-600 h-7 w-2 right-5 relative top-8"></p>
        <p className="text-2xl mb-10">Blogs</p>
      </div>
      <div className="grid md:grid-cols-2 md:max-w-[50%] 2xl:max-w-[30%] 3xl:max-w-[20%] 4xl:max-w-[16%] 5xl:max-w-[12%] 2xl:m-auto sm:max-w-[32rem]   gap-5 md:w-8/12 m-auto sm:w-2/4 w-[79%] grid-cols-1  ml-[25%] mt-[-9%] ">
        {url.map((ele) => (
          <article className="relative top-40 " key={ele.txt}>
            <a href={`${ele.tag}`}>
              <img
                className="right-12 relative h-24 object-cover w-96  rounded-xl  transition-all duration-300 ease-in-out transform hover:w-[400px] hover:scale-105 "
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
        ))}
      </div>

      <div className="relative top-40 left-3 sm:left-16 2xl:max-w-[41%] 3xl:max-w-[31%] 4xl:max-w-[21%] 5xl:max-w-[16%] xl:m-auto lg:max-w-[62%]   md:m-auto md:w-[68%] m-auto ">
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
