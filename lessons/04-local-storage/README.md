# Lesson 4: Local Storage

This lesson introduced me to browser storage and how data can be saved and retrieved in a React app using `localStorage`.

## What I learned

- how to store data in the browser using `localStorage.setItem()`
- how to read saved data using `localStorage.getItem()`
- how to convert JavaScript objects into strings using `JSON.stringify()`
- how to parse stored data back into JavaScript objects using `JSON.parse()`
- how data can persist even after refreshing the page
- how to clear stored data with `localStorage.clear()` or `localStorage.removeItem()`

## What this project demonstrates

The app stores a sample user list in local storage and reads it back from the browser.

```jsx
const userDetails = [
  {
    name: "James",
    age: 23,
    gender: "Male",
    city: "LA",
  },
];

localStorage.setItem("user", JSON.stringify(userDetails));

const user = JSON.parse(localStorage.getItem("user"));
```

This helped me understand how browser storage works for small frontend data persistence.

## Why localStorage is useful

It is useful for saving simple app data such as:

- user preferences
- saved notes
- form drafts
- toggles and settings

It is not ideal for sensitive data because it is stored in the browser and can be accessed by the user.

## Key takeaway

`localStorage` is a simple way to persist data on the client side. It helps React apps remember information without a backend.

## Skills practiced

- browser storage
- `localStorage`
- `JSON.stringify()`
- `JSON.parse()`
- data persistence
- frontend state storage
