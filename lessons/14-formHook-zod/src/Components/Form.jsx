import React from "react";
import { registerSchema } from "../schemas/registerSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log("Vaild data : ", data);
    console.log("clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-800 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Name
          </label>

          <input
            {...register("name")}
            placeholder="Enter your name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.name && (
            <span className="text-xs text-red-400 lowercase leading-none tracking-tight">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email
          </label>

          <input
            {...register("email")}
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.email && (
            <span className="text-xs text-red-400 lowercase leading-none tracking-tight">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Password
          </label>

          <input
            {...register("password")}
            placeholder="Enter your password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.password && (
            <span className="text-xs text-red-400 lowercase leading-none tracking-tight">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>

          <input
            {...register("confirmPassword")}
            placeholder="Confirm your password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.confirmPassword && (
            <span className="text-xs text-red-400 lowercase leading-none tracking-tight">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-[0.98]"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Form;
