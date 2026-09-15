# Lesson 2: React Hooks

In this lesson, I learned how React hooks help us manage state and make components interactive.

## What I built

This project focuses on small React examples that demonstrate:

- a counter with increment, decrement, and reset buttons
- form handling with submit events
- two-way binding for input fields
- updating state in React
- managing values using `useState`

## What I learned

- How to use `useState` to store data in a component
- How state updates trigger re-rendering in React
- How to handle click events and form submissions
- How to create controlled inputs using `value` and `onChange`
- How to keep state values in sync with user input
- How to update previous state safely using functional updates
- How React handles user interaction in a component-based app

## Main examples

### Counter component

```jsx
const [num, setNum] = useState(0);
```

This helped me understand how state can be changed and displayed in the UI.

### Two-way binding

```jsx
<input value={title} onChange={(e) => setTitle(e.target.value)} />
```

This taught me how to connect the input field with component state, so the value updates as the user types.

### Form handling

```jsx
const formHandler = (e) => {
  e.preventDefault();
  console.log("Form submitted :", title);
  setTitle("");
};
```

This showed me how to prevent default form behavior and react to form submissions.

## Key takeaway

React hooks are essential for making UI dynamic. `useState` allows components to remember and update data, while events and form logic let users interact with the app.

## Skills practiced

- `useState`
- Event handling
- Form handling
- Controlled inputs
- Two-way binding
- React re-rendering
- State updates
