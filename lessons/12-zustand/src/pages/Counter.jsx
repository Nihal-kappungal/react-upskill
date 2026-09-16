import React from "react";
import { useCounterStore } from "../store/CounterStore";

const Counter = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  return (
    <div className="w-full min-h-screen bg-zinc-800 flex items-center justify-center flex-col gap-8 text-white">
      <h1>Count : {count} </h1>
      <div className="flex gap-4">
        <button
          onClick={increment}
          className="w-10 h-10 bg-sky-400 text-sm rounded-full font-bold "
        >
          +
        </button>
        <button
          onClick={decrement}
          className="w-10 h-10 bg-red-400 text-sm rounded-full font-bold "
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
