import React from 'react'

const FormHandling = () => {

    const submittHandler = (e) => {
        e.preventDefault();
        console.log("form submitted");
        
    }
  return (
    <div>
        <form onSubmit={(e) => {
            submittHandler(e)
        }}>
            <input type="text" placeholder='enter your name'/>
            <button>submitt</button>
        </form>
    </div>
  )
}

export default FormHandling