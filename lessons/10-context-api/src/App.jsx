import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import { ThemeDataContext } from "./context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div className="w-full min-h-screen bg-zinc-700 flex items-center justify-center">
      <Navbar />
      <button
        onClick={() => handleTheme()}
        className="px-4 py-3 bg-green-400 text-sm font-medium rounded-full "
      >
        Toggle theme
      </button>
    </div>
  );
};

export default App;
