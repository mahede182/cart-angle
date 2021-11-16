import React from 'react'
import { useGlobalContext } from './context'

import classes from './styles/navbar.module.css'
// components
import Navbar from './component/Navbar'
import CartContainer from './component/CartContainer'
// items

function App() {
  const {loading} = useGlobalContext()

  if (loading) {
    return (
      <div className={classes.loading}>
        <h1>Are you ready...</h1>
      </div>
    )
  }
  return (
      <main>
        <Navbar />
        <CartContainer />
      </main>
  )
}

export default App
