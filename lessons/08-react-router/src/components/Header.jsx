import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-5 py-7.5 bg-zinc-900">
      <h1>minimly</h1>
      <div className="flex items-center justify-center gap-3">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blogs</Link>
      </div>
    </div>
  );
};

export default Header;
