import { FileText, Shredder, Trash } from 'lucide-react'
import React from 'react'

const Card = ({ notes, setNotes }) => {
  const handleDelete = (idx) => {
    const copyNote = [...notes]
    copyNote.splice(idx, 1)
    setNotes(copyNote)
  }
  return (
    <>
      {notes.map((note, idx) => (
        <div
          key={idx}
          className='group relative w-60 h-70 rounded-[20px] bg-zinc-900/85 text-white flex flex-col overflow-hidden'
        >
          <div className='flex items-center gap-2 p-5 bg-zinc-900'>
            <FileText strokeWidth={1.7} size={18} />
            <h3 className='text-xl tracking-tighter lowercase'>{note.title}</h3>
          </div>
          <div className='p-5 overflow-y-scroll scrollbar-none'>
            <p className='text-sm leading-tight'>{note.details}</p>
          </div>
          <button
            onClick={() => {
              handleDelete(idx)
            }}
            className='absolute bottom-0 left-0 w-full h-10 flex items-center justify-center gap-2 bg-red-600 text-white font-bold
        opacity-0 transition-opacity duration-200 group-hover:opacity-100'
          >
            <Trash strokeWidth={2} color='#fff' size={18} />
          </button>
        </div>
      ))}
    </>
  )
}

export default Card
