import React from 'react'

const App = () => {

  const userDetails = [{
    name : "James",
    age : 23,
    gender : "Male",
    city : "LA"
  },
  {
    name : "Ash",
    age : 22,
    gender : "Male",
    city : "Texas"
  },
]
  
  localStorage.setItem("user",JSON.stringify(userDetails))

  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user);

  // localStorage.clear()
  // localStorage.removeItem('user')
  
  
  
  

  return (
    <div className='h-dvh w-full bg-gray-800 p-10'>
      <div className='w-10 h-10 bg-red-300'></div>
    </div>
  )
}

export default App