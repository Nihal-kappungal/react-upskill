import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="h-dvh w-full bg-zinc-600 text-white flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>
    </div>
  );
};

export default App;
