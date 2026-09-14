import React from "react";
import BackButton from "../components/BackButton";

const About = () => {
  return (
    <div className="text-2xl font-bold capitalize bg-pink-400 text-white flex flex-col items-center justify-center min-h-screen w-full">
      Hi 👋, Developer
      <BackButton />
    </div>
  );
};

export default About;
