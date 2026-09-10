import axios from 'axios'
import React, { useState } from 'react'

const AxiosMethod = () => {

    const [user, setUser] = useState([])

    const handleData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data); 

        setUser(response.data)


        // direct destructing
        // const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        // console.log(data);
               
    }


  return (
    <div className='h-dvh w-full bg-black text-white p-20 flex items-center justify-between'>
      <button 
      onClick={handleData}
      className='px-5 py-3 bg-white text-black text-[16px] font-bold active:bg-amber-200'
      >
        Get Data
      </button>
      <div>
        {user.map(function(item,idx){
            return <h3 key={idx}>{item.name}</h3>
        })}
      </div>
    </div>
  )
}

export default AxiosMethod