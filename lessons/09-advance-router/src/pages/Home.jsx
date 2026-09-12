import React from "react";
import MacFolder, { colorMap } from "../components/MacFolder";

const Home = () => {
  return (
    <div className="grid grid-cols-4 gap-10 items-center justify-center p-10 min-h-screen bg-[#f5f5f7]">
      {Object.keys(colorMap).map((color) => (
        <div className="flex items-center justify-center flex-col gap-6">
          <MacFolder key={color} label="Documents" count={24} color={color} />
          <span className="text-md font-mono leading-none tracking-tighter">
            {color}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Home;
