import React from 'react'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import DonarRegister from './components/DonarRegister/DonarRegister'
import Header from './components/Home/Header'

function App() {
  return (
    <div className='relative'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donar-register" element={<DonarRegister />} />
      </Routes>
    </div>
  )
}

export default App