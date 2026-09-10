import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(100)

    useEffect(function(){
    
        console.log("useEffect is running......");
        
    },[num2])

  return (
    <div className='flex items-center justify-center gap-5'>
        <h1 className='text-4xl'>James : {num}</h1>
        <h1 className='text-4xl'>Clara : {num2}</h1>
        <button 
        className='px-4 py-2 border rounded'
        onMouseLeave={()=>{
          setNum2(num2 - 10)
        }

        }
        onClick={() =>{
          setNum(num + 1)
        }}>Add</button>
    </div>
  )
}

export default UseEffectHook