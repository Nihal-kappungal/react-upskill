import { useState } from "react";
import { registerSchema } from "../schemas/registerSchema";

const From = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit clicked");
    const result = registerSchema.safeParse(formData);
    // console.log(result);

    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0];
        fieldErrors[fieldName] = issue.message;
      });

      setErrors(fieldErrors);

      return;
    }

    setErrors({});
    console.log("form is vaild");
    console.log(result.data);

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
        {errors.name && <p>{errors.name}</p>}
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="john@example.com"
          className="border border-blue-500 rounded-lg px-4 py-3 bg-white  w-full"
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="password"
          className="border border-blue-500 rounded-lg px-4 py-3 bg-white  w-full"
        />
        {errors.password && <p>{errors.password}</p>}
        <input
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          type="password"
          placeholder="confirm password"
          className="border border-blue-500 rounded-lg px-4 py-3 bg-white  w-full"
        />

        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        <button className="w-full bg-blue-500 p-3 rounded-full text-white text-sm font-semibold">
          Submit
        </button>
      </form>
    </section>
  );
};

export default From;
