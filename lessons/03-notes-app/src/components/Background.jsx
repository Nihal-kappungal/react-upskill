import React from 'react'

const Background = () => {
  return (
    <>
      <div className='fixed top-0 left-0 z-1'></div>
      <div className='absolute w-full py-10 flex justify-center text-xl tracking-tighter text-zinc-400 selection:text-orange-400'>
        <h3>notepad.</h3>
      </div>
      <h1 className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[12vw] leading-none tracking-tighter font-bold text-zinc-900 select-none'>
        notes.
      </h1>
    </>
  )
}

export default Background
