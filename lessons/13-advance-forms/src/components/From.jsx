import React, { useState } from "react";
import { z } from "zod";

const From = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    console.log("submitted");
    console.log(email, password);

    setEmail("");
    setPassword("");
  };
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={(e) => {
          handleForm(e);
        }}
        className="flex flex-col items-center justify-center gap-3 bg-white p-10 rounded-2xl"
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="john@example.com"
          className="border border-blue-500 rounded-lg px-4 py-3 bg-white  w-full"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          className="border border-blue-500 rounded-lg px-4 py-3 bg-white  w-full"
        />

        <button className="w-full bg-blue-500 p-3 rounded-full text-white text-sm font-semibold">
          Submit
        </button>
      </form>
    </section>
  );
};

export default From;
