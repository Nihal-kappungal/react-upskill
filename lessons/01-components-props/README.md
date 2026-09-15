# Lesson 1: Components and Props

In this lesson, I learned the basics of building a React app using reusable components and passing data with props.

## What I built

This project renders a list of job cards for different companies. Each card is created from a reusable `Card` component and data is passed into it dynamically using props.

## What I learned

- How to create and use React components
- How to split UI into smaller reusable pieces
- How props are used to pass data from a parent component to a child component
- How to render lists using `map()` in JSX
- How to use `key` while rendering repeated items
- How to keep code cleaner and more maintainable by reusing components
- How JavaScript data structures can be used to generate UI

## Project structure

- `App.jsx` contains the job data and maps it into cards
- `components/Card.jsx` defines the reusable card UI
- Each card receives props like company name, salary, role, location, and job type

## Example concept used

```jsx
jobs.map((item) => (
  <Card key={item.id} company={item.company} salary={item.salary} />
));
```

This taught me that React components can be reused with different data instead of writing the same markup again and again.

## Key takeaway

I learned that components are the building blocks of React, and props are the way to pass information into those components to create dynamic, scalable interfaces.

## Skills practiced

- JSX
- Functional components
- Props
- Array mapping
- Reusable UI design
- Data-driven rendering
