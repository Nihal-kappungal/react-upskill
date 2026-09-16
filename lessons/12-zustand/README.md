# Lesson 12: Zustand

This lesson introduced me to Zustand, a lightweight state management library for React.

## What I learned

- how to create a global store with `create()` from Zustand
- how to keep state outside of React components
- how to update shared state from anywhere in the app
- how to combine async fetching with global state
- how Zustand is simpler than storing everything in context for small to medium applications

## What this project does

This project demonstrates two examples:

1. a counter store
2. a user details store that fetches data from an API

### Counter store

```jsx
export const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
```

This shows how state can be managed globally and used by components without prop drilling.

### User details store

```jsx
export const useUserDetailsStore = create((set) => ({
  user: "",
  loading: false,
  error: null,

  fetchDetails: async (id) => {
    set({ loading: true });
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    const data = await response.json();
    set({ user: data, loading: false });
  },
}));
```

This demonstrates how Zustand can also manage async data fetching and loading states.

## Why Zustand is useful

Zustand is useful for:

- app-wide state
- shared data between many components
- simple state management without heavy setup
- cleaner code than prop drilling in larger apps

## Key takeaway

Zustand makes global state management easier and more readable. It helps keep React apps organized when multiple components need access to the same data.

## Skills practiced

- Zustand
- global state
- `create()`
- async state updates
- API data storage
- state-driven UI
