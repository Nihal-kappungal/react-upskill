import React from "react";
import useCounter from "./hooks/useCounter";

const App = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <section className="w-full min-h-screen bg-green-400 flex items-center justify-center flex-col gap-10">
      <h3 className="text-6xl p-10 bg-green-900 rounded-2xl text-white">
        {count}
      </h3>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={increment}
          className="bg-green-900 text-white px-4 py-3 text-sm font-bold rounded-full"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-green-900 text-white px-4 py-3 text-sm font-bold rounded-full"
        >
          decrement
        </button>
      </div>
    </section>
  );
};

export default App;
