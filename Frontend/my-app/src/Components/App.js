import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from './Header/Header'

export default function App() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    </>
  )
}
