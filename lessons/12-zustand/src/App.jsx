import { useCounterStore } from "./store/CounterStore";

const App = () => {
  const count = useCounterStore((state) => state.count);

  const increment = useCounterStore((state) => state.increment);

  return (
    <div className="w-full min-h-screen bg-green-400 flex items-center justify-center flex-col gap-8">
      <h1>Count : {count}</h1>
      <button
        onClick={increment}
        className="px-4 py-3 bg-sky-400 text-sm rounded-full font-bold text-white"
      >
        Add
      </button>
    </div>
  );
};

export default App;
