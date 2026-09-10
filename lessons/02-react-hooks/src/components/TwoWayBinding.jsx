import React, { useState } from 'react'

const TwoWayBinding = () => {

    const [title, setTitle] = useState('');

    const formHandler = (e) => {
        e.preventDefault();
        console.log("Form submitted :", title);
        setTitle('')
        
    }
    
  return (
    <div>
        <form onSubmit={(e)=>{
            formHandler(e);
        }}>
            <input 
            type="text" 
            placeholder='Enter your name'
            value={title}
            onChange={(e) => {
                setTitle(e.target.value)
            }}
            />
            <button>submitt</button>
        </form>
    </div>
  )
}

export default TwoWayBinding