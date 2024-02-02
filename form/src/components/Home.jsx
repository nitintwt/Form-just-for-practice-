import React, { useContext } from 'react'
import Header from './Header'
import UserContext from './context/userContext'



function Home() {
  const{user}= useContext(UserContext)
  return (
    <div className="container mx-auto p-4">
  
    {user && (
    <div className="bg-blue-500 text-white p-2 rounded">
      Welcome {user.name}
    </div>
  )}
</div>

    
  )
}

export default Home
