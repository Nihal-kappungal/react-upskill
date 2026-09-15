# Lesson 10: Context API

This lesson introduced the React Context API, which allows data to be shared across multiple components without passing props manually at every level.

## What I learned

- how to create a context using `createContext()`
- how to provide global data with a `Provider`
- how to access shared data with `useContext()`
- how to avoid prop drilling for app-wide values like theme
- how to update shared state from multiple components

## What this project does

This app has a simple theme toggle.

- the theme state is stored in a context
- the `Navbar` reads the current theme value from context
- the button in `App.jsx` changes the theme using the same shared state

## Main concept used

```jsx
export const ThemeDataContext = createContext();

<ThemeDataContext.Provider value={[theme, setTheme]}>
  {props.children}
</ThemeDataContext.Provider>;
```

This shows how data can be shared from a parent provider to any component in the tree.

## Example usage

```jsx
const [theme, setTheme] = useContext(ThemeDataContext);
```

Now any component can read or update the same data without passing it through props layer by layer.

## Why Context API is useful

It is helpful when many components need access to the same information, such as:

- theme
- user authentication
- language selection
- app settings
- cart state

## Key takeaway

Context API helps manage global state in a cleaner way. It reduces prop drilling and makes it easier to share data between components in a React app.

## Skills practiced

- `createContext()`
- `useContext()`
- `Provider`
- global state sharing
- prop drilling reduction
- React app state architecture
