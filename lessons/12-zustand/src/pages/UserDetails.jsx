import React, { useState } from "react";
import { useUserDetailsStore } from "../store/UserDetailsStore";

const UserDetails = () => {
  const name = useUserDetailsStore((state) => state.name);
  const age = useUserDetailsStore((state) => state.age);
  const setName = useUserDetailsStore((state) => state.setName);
  const setAge = useUserDetailsStore((state) => state.setAge);
  const [active, setActive] = useState(false);

  const handleUserDetails = () => {
    setName();
    setAge();
    setActive((prev) => !prev);
  };
  return (
    <section className="w-full min-h-screen bg-zinc-800 flex items-center justify-center gap-6 text-white flex-col">
      <button
        onClick={handleUserDetails}
        className={`px-4 py-3 ${active === false ? "bg-green-400" : "bg-red-400"} bg-green-400 rounded text-sm font-black`}
      >
        {active == false ? "view user " : "hide user"}
      </button>
      {active && (
        <div className="p-10 text-2xl bg-violet-400 flex items-center justify-center flex-col rounded-4xl ">
          <h1>name : {name} </h1>
          <h3>age : {age} </h3>
        </div>
      )}
    </section>
  );
};

export default UserDetails;
