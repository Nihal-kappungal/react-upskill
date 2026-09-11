import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const Header = ({ index, setIndex }) => {
  return (
    <div className="w-full h-14 flex items-center justify-between border border-zinc-500">
      <div className="flex-1 h-full">
        <div
          className="w-14 h-full flex justify-center items-center
        font-medium border-r border-zinc-500"
        >
          {index}
        </div>
      </div>
      <div className="flex-1 h-full flex justify-center items-center">
        <h1 className="text-xl font-medium">Gallery Project</h1>
      </div>
      <div className="flex-1 h-full flex justify-end">
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
            }
          }}
          className="w-14 h-full flex items-center justify-center border-l border-zinc-500"
        >
          <ChevronLeft strokeWidth={1} />
        </button>
        <button
          onClick={() => {
            setIndex(index + 1);
          }}
          className="w-14 h-full flex items-center justify-center border-l border-zinc-500"
        >
          <ChevronRight strokeWidth={1} />
        </button>
      </div>
    </div>
  );
};

export default Header;
