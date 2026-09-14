import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ name, path }) => {
  return (
    <Link
      to={path}
      className="relative overflow-hidden rounded-full bg-green-500 px-4 py-2 text-white before:absolute  before:inset-x-0 before:bottom-0 before:h-0 before:bg-amber-300 before:transition-all before:duration-300 hover:before:h-full"
    >
      <span className="relative z-10">{name}</span>
    </Link>
  );
};

export default NavLinks;
