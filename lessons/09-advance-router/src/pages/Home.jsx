import React from "react";
import MacFolder from "../components/MacFolder";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center gap-5 bg-[#f5f5f7]">
      <MacFolder label="Documents" count={24} color="blue" />
      <MacFolder label="Documents" count={24} color="purple" />
      <MacFolder label="Documents" count={24} color="green" />
      <MacFolder label="Documents" count={24} color="orange" />
    </div>
  );
};

export default Home;
