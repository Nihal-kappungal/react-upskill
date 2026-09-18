# Lesson 13: Advanced Forms with Zod

This lesson focused on validating form data more professionally using Zod, a schema validation library.

## What I learned

- how to define a validation schema for form fields
- how to validate required fields and minimum length rules
- how to validate email format
- how to compare two fields like password and confirm password
- how to show validation errors in the UI
- how to stop form submission when validation fails

## What this project does

The app has a registration form with:

- name
- email
- password
- confirm password

Before submitting, the data is validated using a schema.

### Validation schema

```jsx
export const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.email("Enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });
```

This enforces proper form input and confirms password matching.

## Main concepts practiced

- Zod schema validation
- `safeParse()`
- field-level error messages
- controlled form inputs
- validation on submit
- form error handling

## Key takeaway

Using a validation library like Zod makes forms more reliable. It keeps validation logic clean, reusable, and easier to manage than writing complex checks manually.

## Skills practiced

- React forms
- Zod
- schema validation
- field validation
- input error handling
- password confirmation
