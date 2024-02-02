import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
  <div class="bg-black p-4 flex justify-between items-center">
    <div class="flex gap-4">
      <Link to={""} class="text-white hover:text-gray-300 transition duration-300">Fill Form</Link>
    </div>
     <Link to={"/form"} class="text-white hover:text-gray-300 transition duration-300 mr-8">Form</Link>
  </div>


  )
}

export default Header
