# Lesson 3: Notes App Mini Project

This project is a mini application that combines the main concepts from the previous lessons: components, props, state, event handling, and forms.

## What I built

I created a simple notes app where a user can:

- add a note with a title and description
- store notes in the app state
- view all notes as cards
- delete notes from the list
- keep notes saved in local storage after refresh

## What I learned

This lesson helped me connect everything together in a practical app:

- how to split UI into reusable components
- how to pass data and functions through props
- how to manage multiple pieces of state with React
- how to handle form input and form submission
- how to update arrays in state without mutating the original data
- how to render dynamic lists from saved data
- how to persist user data using localStorage
- how to build a small real-world app using previous concepts

## Main ideas used from earlier lessons

### Components and props

The project uses separate components for the form and the notes cards.

- `AddNotes.jsx` handles the input form
- `Card.jsx` displays each saved note
- `App.jsx` manages the notes array and passes data to child components

### State and forms

I used React state to store the note title and details, and then push them into an array of notes.

```jsx
const [title, setTitle] = useState('')
const [details, setDetails] = useState('')
```

This taught me how to create controlled inputs and update values as the user types.

### Rendering a list of notes

Notes are displayed dynamically using `.map()`.

```jsx
{
  notes.map((note, idx) => <div key={idx}>{note.title}</div>)
}
```

This made the app flexible and data-driven instead of hard-coded.

### Local storage

The app saves the notes list in localStorage so the data remains after a refresh.

```jsx
localStorage.setItem('notes', JSON.stringify({ notes }))
```

This introduced the idea of persistent frontend data.

## Key takeaway

This mini project showed me how the earlier React concepts work together in a real app. Components, props, state, events, and rendering all come together to create a useful interface.

## Skills practiced

- React components
- Props
- `useState`
- Controlled inputs
- Form handling
- Array updates
- Dynamic rendering
- Local storage
- Building a complete mini project
