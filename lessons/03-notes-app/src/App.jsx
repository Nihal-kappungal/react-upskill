import React, { useEffect, useState } from 'react'
import Background from './components/Background'
import Card from './components/Card'
import AddNotes from './components/AddNotes'

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes')

    if (!savedNotes) return []

    try {
      const parsedNotes = JSON.parse(savedNotes)
      return Array.isArray(parsedNotes) ? parsedNotes : (parsedNotes.notes ?? [])
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify({ notes }))
  }, [notes])

  const addNote = (newNote) => {
    setNotes((prev) => [...prev, newNote])
  }

  return (
    <div className='relative w-full h-dvh bg-zinc-800'>
      <Background />
      <div className='fixed top-0 left-0 z-2 w-full h-dvh p-10 flex gap-14 flex-wrap'>
        <Card notes={notes} setNotes={setNotes} />
        <AddNotes onAddNote={addNote} />
      </div>
    </div>
  )
}

export default App
