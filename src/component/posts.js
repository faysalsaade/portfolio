import React from "react";
import { descrption, url } from "../constants";

const Posts = () => {
  return (
    <>
      <div className="grid">
        <p className=" bg-orange-600 h-7 w-2 right-3 relative"></p>
        <p className="text-2xl">Blogs</p>

        {url.map((ele) => (
          <>
            <a href="https://omarsaade.hashnode.dev/an-alternative-to-googles-geocoding-api-that-doesnt-use-a-credit-card">
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
