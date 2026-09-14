import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
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
    </header>
  );
};

export default Navbar;
