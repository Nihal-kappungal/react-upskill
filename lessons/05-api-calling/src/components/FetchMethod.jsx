import React from 'react'

const FetchMethod = () => {

    const handleData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // need to covert from object to json
        const data = await response.json()

        console.log(response);
        console.log(data);
        
        
    }

  return (
    <div className='h-dvh w-full bg-black text-white p-20 flex items-center justify-center'>
      <button 
      onClick={handleData}
      className='px-5 py-3 bg-white text-black text-[16px] font-bold active:bg-amber-200'
      >
        Get Data
      </button>
    </div>
  )
}

export default FetchMethod