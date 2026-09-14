import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar = () => {
  const data = useContext(ThemeDataContext);
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center text-2xl font-semibold uppercase w-full h-[10vh] bg-violet-400">
      hello, {data}
    </div>
  );
};

export default Navbar;
