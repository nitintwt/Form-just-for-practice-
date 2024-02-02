import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Home from './Home'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Layout
