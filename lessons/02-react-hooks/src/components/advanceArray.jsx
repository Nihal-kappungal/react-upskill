import React from 'react'

const advanceArray = () => {

    const [num, setNum] = useState([10,45,30]);
    const [count, setCount] = useState(10);
    
    const addItem = () => {
    
      const newNum = [...num]
      newNum.push(137)
      console.log(newNum);
        
      setNum(newNum)
      }

    const addCount = () => {
    setCount(prev=>(prev + 1))
    setCount(prev=>(prev + 1))
    setCount(prev=>(prev + 1))

  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={addItem}>change</button>
       <hr />
       <div>
        <h1>{count}</h1>
        <button onClick={addCount}>count</button>
      </div>
    </div>
  )
}

export default advanceArray