// basic noteapp created during tutorials
import React, { useState } from 'react'

const BasicNoteApp = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [notes, setNotes] = useState([])

  const formHandler = (e) => {
    e.preventDefault()

    const copyNotes = [...notes]
    copyNotes.push({ title, details })
    setNotes(copyNotes)

    // console.log(notes);
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyNotes = [...notes]
    // console.log("deleted",idx);
    copyNotes.splice(idx, 1)

    setNotes(copyNotes)
  }
  return (
    <div className='flex items-center justify-between h-dvh w-full p-10'>
      <form
        className='flex items-center justify-center flex-col gap-5 border p-10 rounded-2xl'
        onSubmit={(e) => {
          formHandler(e)
        }}
      >
        <h3 className='text-2xl font-bold'>Notes App</h3>
        <input
          type='text'
          placeholder='Title'
          className=' px-6 py-4 border rounded-xl'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <textarea
          type='text'
          placeholder='Write notes...'
          className=' px-6 py-4 border rounded-xl w-full'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />
        <button className='bg-green-400 px-4 py-2 text-white font-bold rounded-xl w-full'>
          Add notes
        </button>
      </form>
      <div className='flex flex-wrap gap-4  w-1/2 h-full '>
        {notes.map(function (note, idx) {
          return (
            <div key={idx} className='bg-gray-100 w-50 h-40 border rounded-2xl p-4 '>
              <h4 className='text-2xl font-bold leading-tight '>
                {idx} {note.title}
              </h4>
              <hr />
              <p className='mt-2.5 text-sm text-gray-500 '>{note.details}</p>
              <button
                onClick={() => {
                  deleteNote(idx)
                }}
                className='mt-6 bg-red-500 rounded px-4 py-1.5 w-full text-white font-bold'
              >
                delete
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BasicNoteApp
