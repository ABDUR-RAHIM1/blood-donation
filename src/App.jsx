import React from 'react'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import DonarRegister from './components/DonarRegister/DonarRegister'
import Header from './components/Home/Header'
import Blogs from './components/Blogs/Blogs'

function App() {
  return (
    <div className='relative'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/donar-register" element={<DonarRegister />} />
      </Routes>
    </div>
  )
}

export default App