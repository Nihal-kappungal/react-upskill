import React, { useState } from 'react'

const Counter = () => {

    const [num,setNum] = useState(0);

    function addCount() {
        setNum(num + 1)
    }

    function subCount(){
        if(num > 0){
            setNum(num - 1)
        }
    }
    function resetCount(){
        setNum(0)
    }

  return (
    <div>
        <h1>{num}</h1>
        <div className="button">
            <button onClick={addCount}>+</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={subCount}>-</button>
        </div>
    </div>
  )
}

export default Counter