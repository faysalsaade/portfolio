import React from "react";
import { descrption, url } from "../constants";

const Posts = () => {
  return (
    <>
      <div className="relative top-40">
        <p className=" bg-orange-600 h-7 w-2 right-3 relative"></p>
        <p className="text-2xl">Blogs</p>
      </div>
      <div className="grid relative top-40 grid-cols-2">
        {url.map((ele) => (
          <>
            <a href={`${ele.tag}`}>
              <img
                className="right-12 relative h-24 object-cover w-60 rounded-xl"
                src={`${ele.url}`}
                alt=""
              />
            </a>

            <p>{`${ele.txt}`}</p>
          </>
        ))}
      </div>
    </>
  );
};

export default Posts;
