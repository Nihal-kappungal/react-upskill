import React, { useEffect, useState } from 'react'

const ExampleTwo = () => {

    const [a, setA] = useState(0);
    const [b,setB] = useState(0);

    const ChangeA = () => {
        console.log("A")
    }

    const ChangeB = () => {
        console.log("B")
    }

    useEffect(function(){
        ChangeA()
    },[a])

     useEffect(function(){
        ChangeB()
    },[b])

  return (
    <div className='flex justify-between items-start'>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1>A : {a}</h1>
            <button
            className='py-2.5 px-7 border rounded bg-blue-500' 
            onClick={()=> {setA(a + 1)}}
            >
                A
            </button>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>          
            <h1>B : {b}</h1>
            <button
            className='py-2.5 px-7 border rounded bg-green-500' 
            onClick={()=> {setB(b+ 1)}}
            >
                B
            </button>
        </div>
    </div>
  )
}

export default ExampleTwo