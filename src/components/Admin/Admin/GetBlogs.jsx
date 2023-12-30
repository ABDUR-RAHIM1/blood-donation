import React from 'react'
import Blog from './Blog'
import AdminDashboard from '../Dashboard/AdminDashboard'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { GlobalState } from '../../../State/State'
import { useEffect } from 'react'
function GetBlogs() {
  const { getOneBlogAdmin, oneBlog, isDelete } = useContext(GlobalState);

  useEffect(() => {
    getOneBlogAdmin()
  }, [isDelete]);



  return (
    <AdminDashboard>
      <div className="title">Manage Your Blogs</div>
      <hr />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: '2'
        }}
        className='flex-b flex-wrap my-10' >
        {
          oneBlog && oneBlog.map(bl => (
            <Blog key={bl._id}
              blog={bl}
            />
          ))
        }
      </motion.div>

    </AdminDashboard>
  )
}

export default GetBlogs