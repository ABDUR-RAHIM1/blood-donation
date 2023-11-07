import React from 'react'
import BlogsData from '../../../Data/Blogs'
import Blog from './Blog'
import AdminDashboard from '../Dashboard/AdminDashboard'
import { motion } from 'framer-motion'
function GetBlogs() {

  return (
    <AdminDashboard>
      <div className="title">Manage All Blogs</div>
      <hr />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: '2'
        }}
        className='flex-b flex-wrap my-10' >
        {
          BlogsData && BlogsData.map(bl => (
            <Blog key={bl.id}
              blog={bl}
            />
          ))
        }
      </motion.div>

    </AdminDashboard>
  )
}

export default GetBlogs