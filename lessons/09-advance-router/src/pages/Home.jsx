import React from "react";
import MacFolder, { colorMap } from "../components/MacFolder";

const Home = () => {
  return (
    <div className="grid xl:grid-cols-4 gap-10 items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center p-10 min-h-screen bg-[#f5f5f7] dark:bg-black">
      {Object.keys(colorMap).map((color) => (
        <div className="flex items-center justify-center flex-col gap-6">
          <MacFolder key={color} label="Documents" count={24} color={color} />
          <span className="text-md font-mono leading-none tracking-tighter dark:text-white">
            {color}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Home;
