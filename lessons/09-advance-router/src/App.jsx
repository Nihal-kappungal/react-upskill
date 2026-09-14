import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import DesignerBlogs from "./pages/DesignerBlogs";
import DevelopementBlogs from "./pages/DevelopementBlogs";
import Course from "./pages/Course";
import CourseDetails from "./pages/CourseDetails";

const App = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blogs />}>
          <Route path="designer" element={<DesignerBlogs />} />
          <Route path="developer" element={<DevelopementBlogs />} />
        </Route>
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
