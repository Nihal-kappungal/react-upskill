import React, { useState } from 'react'

const AddNotes = ({ onAddNote }) => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    onAddNote({ title, details })

    setTitle('')
    setDetails('')
  }
  return (
    <div className='group absolute bottom-10 right-10'>
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
        className=' bg-zinc-900/90 text-white w-70 h-60 p-5 flex flex-col gap-5 rounded-[20px]'
      >
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          type='text'
          placeholder='title'
          className='bg-zinc-800  p-3 rounded-2xl'
        />
        <textarea
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
          className='bg-zinc-800 p-3 rounded-2xl'
          placeholder='note...'
        />
        <button className='bg-sky-400 px-4 py-2 rounded-2xl font-bold'>Add</button>
      </form>
    </div>
  )
}

export default AddNotes
