import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import Blank from "./components/Blank"
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<Blank/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
