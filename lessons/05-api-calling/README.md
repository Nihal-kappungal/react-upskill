# Lesson 5: API Calling in React

This lesson introduced me to fetching data from an API and displaying it in a React app.

## What I learned

- how to call APIs using `fetch()`
- how to call APIs using `axios`
- how to use `async` and `await` in JavaScript
- how to store API response data in React state
- how to render data from an external source in the UI
- how to work with JSON data returned by an API

## What this project does

The app uses the JSONPlaceholder API to fetch user data and then shows the names on the screen.

### Fetch example

```jsx
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
```

This helped me understand that fetching data is asynchronous, so we need to wait for the response before using it.

### Axios example

```jsx
const response = await axios.get("https://jsonplaceholder.typicode.com/users");
setUser(response.data);
```

Axios makes API calls cleaner and easier to read, especially when working with data in a React app.

## Main concepts practiced

- asynchronous JavaScript
- `fetch` API
- `axios`
- React state updates
- displaying API data in the UI
- mapping over arrays to render list items

## Key takeaway

API integration is one of the most important parts of real-world React apps. This lesson taught me how to request data from a server and show it dynamically in the interface.

## Skills practiced

- `async/await`
- HTTP requests
- JSON parsing
- `useState`
- API response handling
- rendering fetched data
