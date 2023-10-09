import React from 'react'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import DonarRegister from './components/DonarRegister/DonarRegister'

function App() {
  return (
    <div className='relative'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/donar-register" element={<DonarRegister />} /> 
      </Routes>
    </div>
  )
}

export default App