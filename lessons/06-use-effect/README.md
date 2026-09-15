# Lesson 6: useEffect in React

This lesson focused on the `useEffect` hook and how it helps us run code after a component renders or when state changes.

## What I learned

- how `useEffect` works in React
- why it is useful for side effects
- how to run code when a component mounts
- how to run code when specific state values change
- how to separate effects for different values

## What this project demonstrates

The app contains examples where `useEffect` runs based on state updates.

### Example 1: effect depends on one state value

```jsx
useEffect(() => {
  console.log("useEffect is running......");
}, [num2]);
```

This means the effect will run whenever `num2` changes.

### Example 2: separate effects for different values

```jsx
useEffect(() => {
  ChangeA();
}, [a]);

useEffect(() => {
  ChangeB();
}, [b]);
```

This showed how each effect can respond to its own dependency, making logic more organized.

## Why useEffect is important

`useEffect` is used for tasks such as:

- fetching data
- updating the document title
- listening for events
- running logic after render
- syncing state with side effects

## Key takeaway

`useEffect` is React's way of handling side effects. It lets us react to state changes and lifecycle moments in a clean and predictable way.

## Skills practiced

- `useEffect`
- side effects
- dependency arrays
- state-based reactivity
- lifecycle thinking in React
