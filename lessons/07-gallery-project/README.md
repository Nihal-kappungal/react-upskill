# Lesson 7: Gallery Project

This project is a mini gallery app that brings together the earlier React concepts into one practical UI: state, effects, API calls, reusable components, and dynamic rendering.

## What I built

I created a photo gallery that:

- fetches images from the Picsum API
- displays them in a responsive grid
- changes the gallery page using previous/next buttons
- updates the content whenever the page index changes
- separates the UI into reusable components like `Header` and `ImageContainer`

## What I learned

- how to fetch data from an external API in React
- how to use `useEffect` to run code when state changes
- how to update data with `useState`
- how to build a reusable layout with smaller components
- how to render a dynamic list of images
- how to work with pagination-like behavior using a page index

## Main concepts used

### API call with Axios

```jsx
const response = await axios.get(
  `https://picsum.photos/v2/list?page=${index}&limit=15`,
);

setUser(response.data);
```

This taught me how to pull data from a real API and store it in React state.

### useEffect for automatic fetch

```jsx
useEffect(() => {
  GalleryData();
}, [index]);
```

The gallery updates every time the page index changes, which is a common pattern in real apps.

### Reusable components

The app is split into:

- `Gallery.jsx` for the main logic
- `Header.jsx` for pagination controls
- `ImageContainer.jsx` for rendering image cards

This helps keep the app easier to maintain and understand.

## Key takeaway

This project showed me how previous concepts combine into a real-world app. React state, effects, API calls, and component structure all work together to build a dynamic gallery experience.

## Skills practiced

- `useEffect`
- `useState`
- Axios
- API fetching
- conditional UI logic
- component-based design
- list rendering
- dynamic page updates
