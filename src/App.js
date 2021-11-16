import React from 'react'
import { useGlobalContext } from './context'
import { BrowserRouter as Router } from 'react-router-dom'
// components
import Navbar from './component/Navbar'
import CartContainer from './component/CartContainer'
// items

function App() {
  const {loading} = useGlobalContext()

  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <Router>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </Router>
    
  )
}

export default App
