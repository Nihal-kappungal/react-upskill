# Lesson 9: Advanced React Router

This lesson expanded on basic routing and introduced more advanced React Router patterns such as nested routes, dynamic route parameters, and page fallback handling.

## What I learned

- how to create nested routes inside a parent route
- how to use `Outlet` to render child routes inside a parent page
- how to access URL parameters with `useParams()`
- how to handle invalid routes with a `PageNotFound` page
- how to use `useNavigate()` to move back or redirect programmatically
- how to build a more realistic multi-page app structure

## What this project does

The app includes multiple sections:

- Home
- About
- Contact
- Blogs
- Courses

### Nested routes

```jsx
<Route path="/blog" element={<Blogs />}>
  <Route path="designer" element={<DesignerBlogs />} />
  <Route path="developer" element={<DevelopementBlogs />} />
</Route>
```

This allowed the blog section to have sub-pages for different content categories.

### Dynamic route parameter

```jsx
<Route path="/course/:id" element={<CourseDetails />} />
```

The route includes a dynamic `id`, and the component can read it using `useParams()`.

### Fallback route

```jsx
<Route path="*" element={<PageNotFound />} />
```

This handles routes that do not exist and shows a 404-style page.

## Main concepts practiced

- nested routing
- dynamic parameters
- `Outlet`
- `useParams()`
- `useNavigate()`
- route fallback handling
- programmatic navigation

## Key takeaway

Advanced routing helps build apps with structured sections, nested pages, and dynamic content paths. It is closer to how real websites and dashboards are organized.

## Skills practiced

- React Router
- nested routes
- route params
- `Outlet`
- navigation logic
- handling missing pages
