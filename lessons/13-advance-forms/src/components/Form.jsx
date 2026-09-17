import { useState } from "react";
import { registerSchema } from "../schemas/registerSchema";

const From = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
    const result = registerSchema.safeParse(formData);
    console.log(result);

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-col items-center justify-center gap-3 bg-white p-10 rounded-2xl"
      >
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Enter name"
          className="border border-blue-500 rounded-lg px-4 py-3 bg-white  w-full"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="john@example.com"
          className="border border-blue-500 rounded-lg px-4 py-3 bg-white  w-full"
        />
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
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
