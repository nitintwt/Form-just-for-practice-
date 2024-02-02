import React from 'react'

function Form() {
  return (
    <div class="max-w-md mx-auto p-6 bg-gray-100 shadow-md rounded-md">
      <div class="text-center text-2xl font-bold mb-6">Fill the Form</div>

        <div class="space-y-4">
        <div>
        <label class="block text-sm font-semibold mb-1">Name</label>
        <input type="text" class="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-1">Mail</label>
          <input type="text" class="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div>
        <label class="block text-sm font-semibold mb-1">Password</label>
        <input type="password" class="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div class="text-center">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
        </div>
      </div>
    </div>
  )
}
export default Form
