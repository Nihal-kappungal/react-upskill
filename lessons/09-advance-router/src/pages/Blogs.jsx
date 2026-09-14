import React from "react";
import { Link, Outlet } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="text-2xl font-bold capitalize bg-sky-400 text-white flex flex-col items-center justify-center gap-10 min-h-screen w-full">
      <div className=" flex items-center justify-center gap-5">
        <Link
          to="/blog/designer"
          className="text-sm font-medium uppercase rounded-full bg-white px-4 py-2 text-black hover:opacity-95"
        >
          Designer
        </Link>
        <Link
          to="/blog/developer"
          className="text-sm font-medium uppercase rounded-full bg-white px-4 py-2 text-black hover:opacity-95"
        >
          Developer
        </Link>
      </div>
      <div className="  bg-white  p-10 rounded-2xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Blogs;
