import React from 'react'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import DonarRegister from './components/DonarRegister/DonarRegister'
import Header from './components/Home/Header'
import Blogs from './components/Blogs/Blogs'
import Error from './components/Error/Error'
import AdminLogin from './components/Admin/AdminLogin/AdminLogin'
import Banner from './components/Home/Banner'
import BlogDetails from './components/BlogDetails/BlogDetails'
import Footer from './components/Footer/footer' 
import GetBlogs from './components/Admin/Admin/GetBlogs'
import Add_Volunteer from './components/Admin/Admin/Add_Volunteer'
import Manage_volunteer from './components/Admin/Admin/Manage_volunteer'  
import Donars from './components/Donars/Donars'
import Dashboard from './components/Admin/Admin/Dashboard/Dashboard'
import Manage_content from './components/Admin/Admin/ManageContent/Manage_content'
import DonarLogin from './components/Users/DonarLogin'
import DonarProtected from './ProtectedRoute/DonarProtected'
import DonarProfile from './Profiles/DonarProfile'
import UsersLogin from './components/Users/UsersLogin'
import DonarDetails from './components/Donars/DonarDetails'
import AddBlog from './components/utils/AddBlog'
import UserProfile from './Profiles/UserProfile'
import Appoinment from './components/Home/Appoinment'
import UsersDetails from './components/Donars/UsersDetals'
import AdminProtected from './ProtectedRoute/AdminProtected'
import AddBLog from './components/Admin/Admin/AddBLog'
import Users from './components/Donars/Users' 
import Manage_users from './components/Admin/Admin/ManageContent/Manage_users'

function App() {
  return (
    <div className='relative'>
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donars" element={<Donars />} />
        <Route path="/users" element={<Users />} />
        <Route path="/donars-details" element={<DonarDetails />} />
        <Route path="/users-details" element={<UsersDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/donar-auth" element={<DonarLogin />} />
        <Route path="/user-auth" element={<UsersLogin />} />


        <Route element={<DonarProtected />}>
          <Route path='/donar-profile' element={<DonarProfile />} />
          <Route path='/donar-register' element={<DonarRegister />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path='/appoinment' element={<Appoinment />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Route>

        {/*  admin routes */}

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route element={<AdminProtected />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin-add-blog" element={<AddBLog />} />
          <Route path="/admin-get-blog" element={<GetBlogs />} />
          <Route path="/admin-add-volunteer" element={<Add_Volunteer />} />
          <Route path="/admin-manage-volunteer" element={<Manage_volunteer />} />  
          <Route path="/admin-manage-content" element={<Manage_content />} /> 
          <Route path="/admin-manage-users" element={<Manage_users />} /> 

        </Route>

        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App