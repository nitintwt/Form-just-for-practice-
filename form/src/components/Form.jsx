import React, { useContext, useState } from 'react'
import UserContext from './context/userContext'

function Form() {
  const [name , setName]= useState()
  const [password, setPassword]= useState()
  const [mail , setMail]= useState()

  const {setUser}= useContext(UserContext)

  const submit =()=>{
    setUser({
      name , password, mail
    })
    setName("")
    setMail("")
    setPassword("")
  }
  return (
    <div class="max-w-md mx-auto p-6 bg-gray-100 shadow-md rounded-md mt-10">
      <div class="text-center text-2xl font-bold mb-6">Fill the Form</div>

        <div class="space-y-4">
        <div>
        <label class="block text-sm font-semibold mb-1">Name</label>
        <input type="text" class="w-full p-2 border border-gray-300 rounded-md" value={name} onChange={(e)=> setName(e.target.value)} />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-1">Mail</label>
          <input type="text" class="w-full p-2 border border-gray-300 rounded-md" value={mail} onChange={(e)=>setMail(e.target.value)} />
        </div>

        <div>
        <label class="block text-sm font-semibold mb-1">Password</label>
        <input type="password" class="w-full p-2 border border-gray-300 rounded-md" value={password} onChange={(e)=>setPassword} />
        </div>

        <div class="text-center">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300" onClick={submit}>Submit</button>
        </div>
      </div>
    </div>
  )
}
export default Form
