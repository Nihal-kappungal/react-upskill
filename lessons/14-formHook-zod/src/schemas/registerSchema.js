import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(4, "Name need atleast one character"),
    email: z.email("enter valid email"),
    password: z.string().min(8, "password must be 8 character"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });
