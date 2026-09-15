# Lesson 8: React Router Basics

This lesson introduced me to React Router, which is used to create multiple pages in a React app without reloading the browser.

## What I learned

- how to set up routes in a React application
- how to create different pages for different URLs
- how to navigate between pages using `Link`
- how `Routes` and `Route` work together
- how to organize pages in a small app structure

## What this project does

The app has a simple navigation bar with links to:

- Home
- About
- Blogs

Each link loads a different page based on the route.

### Example

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/blog" element={<Blogs />} />
</Routes>
```

This showed me how React apps can behave like multi-page websites while still using components.

## Main concepts practiced

- `BrowserRouter` setup
- `Routes`
- `Route`
- `Link`
- page-based navigation
- component structure for pages

## Key takeaway

React Router allows a single-page application to feel like a multi-page app by changing the URL and rendering the correct component for each route.

## Skills practiced

- routing
- page navigation
- React Router
- component-based page design
- SPA structure
