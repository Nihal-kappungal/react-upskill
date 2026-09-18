# Lesson 14: React Hook Form + Zod

This lesson taught me how to build cleaner and more powerful forms using `react-hook-form` together with `Zod` validation.

## What I learned

- how to manage form state with `useForm()`
- how to register inputs with `register()`
- how to validate form data using `zodResolver`
- how to handle form submission with `handleSubmit()`
- how to show validation errors from the form state
- how to reset the form after successful submission

## What this project does

The app contains a registration form with:

- name
- email
- password
- confirm password

The form uses a Zod schema to validate all fields before allowing submission.

### Example setup

```jsx
const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm({
  resolver: zodResolver(registerSchema),
  mode: "onBlur",
});
```

This makes validation easier and reduces manual form logic.

### Zod schema

```jsx
export const registerSchema = z
  .object({
    name: z.string().min(4, "Name need atleast one character"),
    email: z.email("enter valid email"),
    password: z
      .string()
      .min(8, "password must be 8 character")
      .regex(/[A-Z]/, "Password must contain an uppercase")
      .regex(/[^A-Za-z0-9]/, "Password must contain a special character"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });
```

This combines multiple validation rules in one clean schema.

## Why this is better

`react-hook-form` reduces the amount of manual state handling in forms, and Zod makes validation predictable and reusable.

## Key takeaway

This lesson showed me that real-world form validation is much easier and cleaner when using a form library with a schema validator.

## Skills practiced

- `react-hook-form`
- `zodResolver`
- form validation
- controlled form state
- error handling
- schema-based validation
