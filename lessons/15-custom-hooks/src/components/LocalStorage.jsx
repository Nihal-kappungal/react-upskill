import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorage = () => {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <div
      className="flex flex-col items-center justify-center gap-10
    w-full min-h-screen"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-3 border rounded-full"
        placeholder="Enter your name"
      />

      <h1 className="text-6xl">Hello {name}</h1>
    </div>
  );
};

export default LocalStorage;
