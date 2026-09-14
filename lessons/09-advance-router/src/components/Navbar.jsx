import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const navigate = useNavigate();

  const LinkItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Blogs",
      path: "/blog",
    },
    {
      name: "Courses",
      path: "/course",
    },
  ];
  return (
    <header className="fixed top-0 left-0 flex items-center justify-center px-10 py-5 w-full h-[10vh] ">
      <nav className="flex items-center justify-center gap-3 text-sm font-medium uppercase">
        {LinkItems.map((link, idx) => (
          <NavLinks key={idx} name={link.name} path={link.path} />
        ))}
      </nav>
      <button
        onClick={() => navigate(-1)}
        className="absolute right-10 overflow-hidden rounded-full bg-black px-4 py-2 text-white before:absolute  before:inset-x-0 before:bottom-0 before:h-0 before:bg-red-700 before:transition-all before:duration-300 hover:before:h-full"
      >
        <span className="relative z-10">Back</span>
      </button>
    </header>
  );
};

export default Navbar;
