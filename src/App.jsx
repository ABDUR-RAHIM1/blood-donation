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
import GetBlogs from './components/Admin/Admin/GetBlogs'
import Add_Volunteer from './components/Admin/Admin/Add_Volunteer'
import Manage_volunteer from './components/Admin/Admin/Manage_volunteer'
import Get_request from './components/Admin/Admin/Get_request'
import Add_slider from './components/Admin/Admin/Add_slider' 
import Donars from './components/Donars/Donars'
import Dashboard from './components/Admin/Admin/Dashboard/Dashboard'
import Manage_content from './components/Admin/Admin/ManageContent/Manage_content' 

function App() {
  return (
    <div className='relative'>
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donars" element={<Donars />} />
        <Route path="/blogs" element={<Blogs />} /> 
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/donar-auth" element={<DonarLogin />} />
        <Route path="/donar-register" element={<DonarPrivetRoute>
          <DonarRegister />
        </DonarPrivetRoute>} />
        <Route path="/admin" element={<ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/admin-add-blog" element={<AddBLog />} />
        <Route path="/admin-get-blog" element={<GetBlogs />} />
        <Route path="/admin-add-volunteer" element={<Add_Volunteer />} />
        <Route path="/admin-manage-volunteer" element={<Manage_volunteer />} />
        <Route path="/admin-get-request" element={<Get_request />} />
        <Route path="/admin-add-slider" element={<Add_slider />} /> 
        <Route path="/admin-manage-content" element={<Manage_content />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App