import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './components/Layout.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './components/Home.jsx'
import Form from './components/Form.jsx'
import UserContextProvider from './components/context/UserContextProvider.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/form',
        element:<Form/>
      },
      {
        path:'',
        element:<Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <RouterProvider router={router}/>
    </UserContextProvider>
  </React.StrictMode>,
)
