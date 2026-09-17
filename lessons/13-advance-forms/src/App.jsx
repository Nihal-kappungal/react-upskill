import From from "./components/From";
import { registerSchema } from "./schemas/registerSchema";

const App = () => {
  const user = {
    name: "Nihal",
    email: "nox@example.com",
    password: "qwerty",
  };

  const result = registerSchema.safeParse(user);
  console.log(result);

  return (
    <div className="w-full min-h-screen bg-zinc-800">{/* <From /> */}</div>
  );
};

export default App;
