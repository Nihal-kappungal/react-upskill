import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute right-10 top-5 overflow-hidden rounded-full text-sm font-medium uppercase bg-black px-4 py-2 text-white before:absolute  before:inset-x-0 before:bottom-0 before:h-0 before:bg-red-700 before:transition-all before:duration-300 hover:before:h-full"
    >
      <span className="relative z-10">Back</span>
    </button>
  );
};

export default BackButton;
