import React from 'react'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import DonarRegister from './components/DonarRegister/DonarRegister'
import Header from './components/Home/Header'
import Blogs from './components/Blogs/Blogs'
import Error from './components/Error/Error' 
import AdminLogin, { ProtectedRoute } from './components/Admin/AdminLogin/AdminLogin'
import DonarLogin, { DonarPrivetRoute } from './components/Users/DonarLogin'
import Banner from './components/Home/Banner'
import BlogDetails from './components/BlogDetails/BlogDetails'
import Footer from './components/Footer/footer'
import AdminDashboard from './components/Admin/Dashboard/AdminDashboard'
import AddBLog from './components/Admin/Admin/AddBLog'

function App() {
  return (
    <div className='relative'>
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/add-blog" element={<AddBLog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/donar-auth" element={<DonarLogin />} />
        <Route path="/donar-register" element={<DonarPrivetRoute>
          <DonarRegister />
        </DonarPrivetRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App