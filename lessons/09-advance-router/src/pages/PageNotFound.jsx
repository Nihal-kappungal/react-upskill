import React from "react";
import BackButton from "../components/BackButton";

const PageNotFound = () => {
  return (
    <div className="text-2xl font-bold capitalize bg-black text-white flex flex-col items-center justify-center min-h-screen w-full">
      404🍀
      <BackButton />
    </div>
  );
};

export default PageNotFound;
