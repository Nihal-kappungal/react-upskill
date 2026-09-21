# Lesson 15: Custom Hooks

This lesson taught me how to extract reusable logic into custom hooks, making React components cleaner and easier to maintain.

## What I learned

- how to create a custom hook in React
- how to reuse logic across multiple components
- how to separate UI from behavior
- how custom hooks can handle state and side effects
- how to write small reusable utilities for common patterns

## What this project does

This project contains multiple custom hooks for different use cases:

1. `useCounter` for counter logic
2. `useDocumentTitle` for updating the page title
3. `useLocalStorage` for storing values in browser storage

### Custom counter hook

```jsx
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return { count, increment, decrement };
}
```

This keeps the counter logic out of the component and makes the component easier to read.

### Custom document title hook

```jsx
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
```

This lets a component update the browser tab title without mixing it into component UI logic.

### Custom localStorage hook

```jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
```

This is a reusable pattern for persisting data in the browser.

## Key takeaway

Custom hooks are a great way to extract reusable behavior and keep components focused on presentation. They help make code cleaner, more modular, and easier to reuse in future projects.

## Skills practiced

- custom hooks
- reusable logic
- `useState`
- `useEffect`
- localStorage integration
- cleaner component architecture
